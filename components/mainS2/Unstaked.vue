<template>
  <div class="" :class="$vuetify.breakpoint.mdOnly ? 'mt-2' : 'mt-5'">
    <h1
      class="text-capitalize font-weight-medium text-center"
      :class="$vuetify.breakpoint.mdOnly ? 'headline' : 'display-1'"
    >
      UNSTAKED
    </h1>
    <v-card
      flat
      tile
      height="110"
      width="100%"
      class="mt-5 d-flex align-center justify-center"
    >
      <v-row no-gutters class="fill-height">
        <div class="d-flex">
          <div>
            <div class="px-2 pt-1">
              <h1 class="font-size--8">TOKEN ID</h1>
            </div>
          </div>
          <div>
            <v-row
              v-model="page"
              no-gutters
              :class="$vuetify.breakpoint.xsOnly ? '' : ''"
            >
              <div
                v-for="(item, i) in nftListItems"
                :key="i"
                class="nft__selected--container mr-2"
              >
                <v-card
                  flat
                  color="transparent"
                  class="mt-1"
                  :class="
                    checkIfTokenIsSelected(item.tokenId) ? 'nft--container' : ''
                  "
                  @click="addTokenToStakeList(item.tokenId)"
                >
                  <h1 class="text-center font-size--8">#{{ item.tokenId }}</h1>
                  <div class="mt-1">
                    <v-img
                      :src="item.image"
                      class="mx-auto mb-1"
                      width="70"
                      height="75"
                      eager
                    >
                      <template #placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                </v-card>
              </div>
              <v-pagination
                v-model="page"
                :length="Math.ceil(this.unstakedNFTs.length / this.nftPerPage)"
                :total-visible="nftPerPage"
                :value="page"
                class="pagination--container"
              >
              </v-pagination>
            </v-row>
          </div>
        </div>
      </v-row>
    </v-card>
    <v-btn
      block
      tile
      depressed
      height="40"
      color="primary"
      class="mt-5"
      :loading="isStaking"
      @click="confirmStakeDialog = true"
    >
      STAKE
    </v-btn>

    <!--Stake modal-->
    <v-dialog
      v-model="confirmStakeDialog"
      class="rounded-0"
      width="513"
      persistent
    >
      <v-card
        tile
        color="dark_gray"
        class="text-center"
        :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-10'"
      >
        <div>
          <h1 class="headline primary--text">CONFIRMATION</h1>
          <h2 class="body-2 lite_gray--text">
            Are you sure you want to
            <span class="primary--text font-weight-bold">STAKE</span> the
            selected NFTs?
          </h2>
          <div
            class="justify-center mt-7"
            :class="
              $vuetify.breakpoint.xsOnly ? 'd-flex flex-column-reverse' : ''
            "
          >
            <v-btn
              tile
              depressed
              outlined
              :block="$vuetify.breakpoint.xsOnly"
              height="40"
              width="185"
              :ripple="false"
              color="primary"
              class="text-none font-weight-bold"
              :class="$vuetify.breakpoint.xsOnly ? 'mt-2' : ''"
              @click="confirmStakeDialog = false"
            >
              CANCEL
            </v-btn>
            <v-btn
              tile
              depressed
              :block="$vuetify.breakpoint.xsOnly"
              height="40"
              width="185"
              :ripple="false"
              color="primary"
              class="text-none"
              :loading="isStaking"
              @click="stake"
            >
              STAKE
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>

    <!--Staking modal-->
    <div>
      <v-dialog
        v-model="stakingDialog"
        class="rounded-0"
        width="400"
        persistent
      >
        <v-card
          v-if="isStaking && !isStaked"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">STAKING...</h1>
          </div>
          <div>
            <img
              src="/images/bacon-sample.jpg"
              :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
            />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">
              Lighting up a <span class="primary--text">Blunt</span>!
            </h2>
          </div>
        </v-card>

        <v-card
          v-if="isStaked"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">SUCCESS!</h1>
          </div>
          <div>
            <img src="/images/staked.gif" width="250" />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">Your apes have been staked.</h2>
          </div>
          <div class="mt-3">
            <v-btn
              tile
              depressed
              :block="$vuetify.breakpoint.mdAndDown"
              width="200"
              height="40"
              color="primary"
              :class="$vuetify.breakpoint.mdAndDown ? 'mt-3' : ''"
              @click="stakingDialog = false"
            >
              OKAY
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { ethers } from 'ethers'
import { Component, Vue, Watch, Prop, namespace } from 'nuxt-property-decorator'

const GLOBAL_STORE = namespace('global')

interface NFTItemInterface {
  tokenId: number
  image: string
}

@Component
export default class Unstaked extends Vue {
  @GLOBAL_STORE.State('unstakedListLastTimestamp')
  global_unstaked_list_last_timestamp!: number

  @GLOBAL_STORE.Action('setStakedListLastTimestamp')
  global_set_staked_list_last_timestamp!: (payload: number) => void

  @Prop({ default: '' }) walletAddress!: string

  checkTransactionInterval: NodeJS.Timeout | null = null
  page: number = 1
  selectedNFTs: number[] = []
  unstakedNFTs: NFTItemInterface[] = []
  signerAddress: string = ''

  isStaking: boolean = false
  confirmStakeDialog: boolean = false
  stakingDialog: boolean = false
  isStaked: boolean = false

  @Watch('global_unstaked_list_last_timestamp')
  onUnstakedListLastTimestampChange(val: number): void {
    if (val > 0) {
      this.getUnstakedTokens()
    }
  }

  @Watch('walletAddress')
  onWalletAddressChange(val: string): void {
    if (val.length > 0) {
      this.getUnstakedTokens()
    } else {
      this.unstakedNFTs = []
    }
  }

  get nftPerPage(): number {
    let pageNumber = 7

    if (this.$vuetify.breakpoint.mdOnly) {
      pageNumber = 9
    } else if (this.$vuetify.breakpoint.smOnly) {
      pageNumber = 6
    } else if (this.$vuetify.breakpoint.xsOnly) {
      pageNumber = 2
    }

    return pageNumber
  }

  get nftListItems(): NFTItemInterface[] {
    return this.unstakedNFTs.slice(
      (this.page - 1) * this.nftPerPage,
      this.page * this.nftPerPage
    )
  }

  /**
   * Check transaction status
   *
   * @param   {string<void>}   txHash
   *
   * @return  {Promise<void>}
   */
  async checkTransactionStatus(txHash: string): Promise<void> {
    const tx = await this.$web3.getWeb3Provider().getTransaction(txHash)
    if (tx && tx.blockNumber && this.clearCheckTransactionInterval !== null) {
      console.log('stake tx: ', tx)
      this.clearCheckTransactionInterval()

      this.getUnstakedTokens()
      this.selectedNFTs = []
      this.confirmStakeDialog = false
      this.isStaking = false
      this.isStaked = true

      // update staked list
      this.global_set_staked_list_last_timestamp(Math.round(Date.now() / 1000))
    }
  }

  /**
   * Get owned unstaked tokens
   *
   * @return  {Promise<void>}
   */
  async getUnstakedTokens(): Promise<void> {
    /// get signer
    const signer = this.$web3.getWeb3Provider().getSigner()
    this.signerAddress = await signer.getAddress()

    // get owned unstaked tokens
    const unstakedTokens: ethers.BigNumber[] = await this.$web3
      .getBaconContract(true)
      .tokensOfOwner(this.signerAddress)

    this.unstakedNFTs = []

    unstakedTokens.forEach((token) => {
      const tokenId = token.toNumber()
      const image = `${this.$config.apiUrl}/${tokenId}.png`

      this.unstakedNFTs.push({
        tokenId,
        image,
      })
    })

    // sort ascending token id
    this.unstakedNFTs.sort((a, b) => a.tokenId - b.tokenId)
  }

  /**
   * Stake tokens
   *
   * @return  {<Promise><void>}
   */
  async stake(): Promise<void> {
    if (this.walletAddress.length === 0) {
      this.$toast.error('Please connect your wallet.')
      return
    }

    if (this.selectedNFTs.length === 0) {
      this.$toast.error('Please select at least 1 token to stake.')
      return
    }

    this.confirmStakeDialog = false
    this.isStaking = true
    this.isStaked = false

    try {
      const tx = await this.$web3
        .getTheFryingPanContractV2()
        .functions.stake(this.selectedNFTs)

      if (tx.hash.length > 0) {
        this.$toast.info(
          `Stake transaction successfully submitted.\nTx hash: ${tx.hash}`
        )

        this.stakingDialog = true
        this.checkTransactionInterval = setInterval(async () => {
          console.log('checking transaction status')
          await this.checkTransactionStatus(tx.hash)
        }, 4000)
      }
    } catch (error) {
      const { message } = error as Error

      if (message.includes('denied')) {
        this.$toast.error('You cancelled the transaction.')
      } else {
        this.$toast.error(
          '[Error] Something went wrong while processing request'
        )
      }

      this.isStaking = false
    }
  }

  /**
   * Add token to stake list
   *
   * @param   {nbumber}  tokenId
   *
   * @return  {void}
   */
  addTokenToStakeList(tokenId: number): void {
    if (this.selectedNFTs.includes(tokenId)) {
      this.selectedNFTs.splice(this.selectedNFTs.indexOf(tokenId), 1)
      return
    }
    this.selectedNFTs.push(tokenId)
  }

  /**
   * Clear transaction interval
   *
   * @return  {<void>}
   */
  clearCheckTransactionInterval(): void {
    if (this.checkTransactionInterval !== null) {
      clearInterval(this.checkTransactionInterval)
      this.checkTransactionInterval = null
    }
  }

  /**
   * Check if token is in stake list
   *
   * @param   {number}   tokenId
   *
   * @return  {boolean}
   */
  checkIfTokenIsSelected(tokenId: number): boolean {
    return this.selectedNFTs.includes(tokenId)
  }

  beforeDestroy(): void {
    this.clearCheckTransactionInterval()
  }
}
</script>

<style scoped>
.nft--container {
  border: #eb2024 solid 1px !important;
  border-radius: 0;
}
</style>
<style>
.pagination--container .v-pagination__item {
  display: none;
}
.pagination--container .theme--dark.v-pagination .v-pagination__navigation {
  background-color: transparent !important;
  box-shadow: none;
}
.pagination--container ul li:first-child {
  position: absolute;
  left: 0;
  top: 30%;
}
.pagination--container ul li:last-child {
  position: absolute;
  right: 0;
  top: 30%;
}
.pagination--container .v-pagination__more {
  display: none !important;
}
</style>
