<template>
  <div>
    <div class="mt-5">
      <h1
        class="text-capitalize font-weight-medium text-center"
        :class="$vuetify.breakpoint.mdOnly ? 'headline' : 'display-1'"
      >
        STAKED
      </h1>
      <div>
        <h2 class="title mt-1">Stoned Apes</h2>
        <v-card
          flat
          tile
          height="120"
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-row no-gutters class="fill-height">
            <div class="d-flex">
              <div>
                <div :class="$vuetify.breakpoint.xsOnly ? 'py-2 pl-2' : 'pa-2'">
                  <h1 class="font-size--8 mt-n1">TOKEN ID</h1>
                  <div class="text-left mt-16 pt-3">
                    <h1 class="font-size--8">EARNED</h1>
                    <h1 class="font-size--8">$TOKE</h1>
                  </div>
                </div>
              </div>
              <div>
                <v-row
                  v-model="panPage"
                  no-gutters
                  :class="$vuetify.breakpoint.xsOnly ? '' : ''"
                >
                  <div
                    v-for="(item, i) in panNFTListItems"
                    :key="i"
                    class="mr-2"
                  >
                    <v-card
                      flat
                      color="transparent"
                      class="mt-1"
                      :class="
                        checkIfTokenIsSelected(item.tokenId)
                          ? 'nft--container'
                          : ''
                      "
                      @click="addTokenToClaimList(item.tokenId)"
                    >
                      <h1 class="text-center font-size--8">
                        #{{ item.tokenId }}
                      </h1>
                      <div class="mt-1">
                        <v-img
                          :src="item.image"
                          class="mx-auto"
                          width="70"
                          height="75"
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
                      <h1
                        class="text-center caption mt-1 mb-n1 font-weight-bold"
                      >
                        {{ $utils.abbreviateNumber(item.earnedGrease) }}
                      </h1>
                    </v-card>
                  </div>
                  <v-pagination
                    v-model="panPage"
                    :length="
                      Math.ceil(this.stakedPanNFTs.length / this.nftPerPage)
                    "
                    :total-visible="nftPerPage"
                    :value="panPage"
                    class="pagination--container panAndSquad__pagination--container"
                  >
                  </v-pagination>
                </v-row>
              </div>
            </div>
          </v-row>
        </v-card>
      </div>
      <div :class="$vuetify.breakpoint.mdOnly ? 'mt-2' : 'mt-2'">
        <h2 class="title">The Feds</h2>
        <v-card
          flat
          tile
          height="120"
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-row no-gutters class="fill-height">
            <div class="d-flex">
              <div>
                <div :class="$vuetify.breakpoint.xsOnly ? 'py-2 pl-2' : 'pa-2'">
                  <h1 class="font-size--8 mt-n1">TOKEN ID</h1>
                  <div class="text-left mt-16 pt-3">
                    <h1 class="font-size--8">EARNED</h1>
                    <h1 class="font-size--8">$TOKE</h1>
                  </div>
                </div>
              </div>
              <div>
                <v-row
                  v-model="squadPage"
                  no-gutters
                  :class="$vuetify.breakpoint.xsOnly ? '' : ''"
                >
                  <div
                    v-for="(item, i) in squadNFTListItems"
                    :key="i"
                    class="mr-2"
                  >
                    <v-card
                      flat
                      color="transparent"
                      class="mt-1"
                      :class="
                        checkIfTokenIsSelected(item.tokenId)
                          ? 'nft--container'
                          : ''
                      "
                      @click="addTokenToClaimList(item.tokenId)"
                    >
                      <h1 class="text-center font-size--8">
                        #{{ item.tokenId }}
                      </h1>
                      <div class="mt-1">
                        <v-img
                          :src="item.image"
                          class="mx-auto"
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
                      <h1
                        class="text-center caption mt-1 mb-n1 font-weight-bold"
                      >
                        {{ $utils.abbreviateNumber(item.earnedGrease) }}
                      </h1>
                    </v-card>
                  </div>
                  <v-pagination
                    v-model="squadPage"
                    :length="
                      Math.ceil(this.stakedSquadNFTs.length / this.nftPerPage)
                    "
                    :total-visible="nftPerPage"
                    :value="squadPage"
                    class="pagination--container panAndSquad__pagination--container"
                  >
                  </v-pagination>
                </v-row>
              </div>
            </div>
          </v-row>
        </v-card>
      </div>
    </div>
    <!-- Actions (buttons) -->
    <div
      class="d-flex justify-space-between"
      :class="$vuetify.breakpoint.mdAndDown ? 'flex-column mt-4' : 'mt-5'"
    >
      <!-- <v-btn
        outlined
        tile
        depressed
        :block="$vuetify.breakpoint.mdAndDown"
        width="200"
        height="40"
        color="primary"
        disabled
        @click="leaveGangModal = true"
      >
        LEAVE GANG
      </v-btn> -->
      <v-btn
        tile
        depressed
        :block="$vuetify.breakpoint.mdAndDown"
        :width="$vuetify.breakpoint.xsOnly ? '' : 320"
        height="40"
        color="primary"
        :class="$vuetify.breakpoint.mdAndDown ? 'mt-3' : ''"
        :loading="isUnstaking"
        @click="confirmUnstakeModal = true"
      >
        UNSTAKE
      </v-btn>
      <v-btn
        tile
        depressed
        :block="$vuetify.breakpoint.mdAndDown"
        :width="$vuetify.breakpoint.xsOnly ? '' : 320"
        height="40"
        color="primary"
        :class="$vuetify.breakpoint.mdAndDown ? 'mt-3' : ''"
        :loading="isClaiming"
        @click="confirmCashoutModal = true"
      >
        CASH OUT
      </v-btn>
    </div>

    <!--claim/cashout modal-->
    <v-dialog
      v-model="confirmCashoutModal"
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
            <span class="primary--text font-weight-bold">CASH OUT</span> the
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
              @click="confirmCashoutModal = false"
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
              :loading="isClaiming"
              @click="claim()"
            >
              CASH OUT
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>

    <!--unstake modal-->
    <v-dialog
      v-model="confirmUnstakeModal"
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
            <span class="primary--text font-weight-bold">UNSTAKE</span> the
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
              @click="confirmUnstakeModal = false"
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
              :loading="isUnstaking"
              @click="claim(true)"
            >
              UNSTAKE
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>

    <!--Claiming modal-->
    <div>
      <v-dialog
        v-model="claimingDialog"
        class="rounded-0"
        width="400"
        persistent
      >
        <!-- Claiming -->
        <v-card
          v-if="isClaiming && !isClaimed"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">CASHING OUT...</h1>
          </div>
          <div>
            <img
              src="/images/bacon-sample.jpg"
              :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
            />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">
              Bribing the <span class="primary--text">Feds</span>!
            </h2>
          </div>
        </v-card>
        <!-- Claim success -->
        <v-card
          v-if="isClaimed"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">FEDS BRIBED!</h1>
          </div>
          <div>
            <img
              src="/images/claim-get-tax.gif"
              :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
            />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">
              You gave the Feds 20% of your
              <span class="primary--text">$TOKE</span> and kept the rest.
            </h2>
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
              @click=";(claimingDialog = false), emptySelectedNFT"
            >
              OKAY
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </div>
    <!--Unstaking modal-->
    <div>
      <v-dialog
        v-model="unstakingDialog"
        class="rounded-0"
        width="400"
        persistent
      >
        <v-card
          v-if="isUnstaking && !isUnstaked"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">UNSTAKING...</h1>
          </div>
          <div>
            <img
              src="/images/bacon-sample.jpg"
              :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
            />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">
              Running from the <span class="primary--text">Feds</span>!
            </h2>
          </div>
        </v-card>
      </v-dialog>
    </div>
    <!--Unstaked modal-->
    <div>
      <v-dialog v-model="isUnstaked" class="rounded-0" width="400" persistent>
        <v-card
          v-for="(item, i) in getUnstakedNFTs"
          :key="i"
          color="dark_gray"
          tile
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div v-if="item.isGreaseStolen">
            <div>
              <h1 class="headline primary--text mb-1">
                AND HERE'S WHAT HAPPENED...
              </h1>
            </div>
            <v-row v-model="stakedPage" no-gutters justify="center">
              <v-card tile color="dark_gray" class="text-center">
                <div>
                  <img
                    :src="getNFTImage(item.tokenId)"
                    :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
                  />
                </div>
                <div>
                  <h2 class="body-2 lite_gray--text">
                    The Feds confiscated your
                    <span class="primary--text">$TOKE</span> for Ape
                    <span class="primary--text body-2">
                      #{{ item.tokenId }}
                    </span>
                  </h2>
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
                    @click="
                      ;(unstakingDialog = false),
                        (isUnstaked = false),
                        emptySelectedNFT
                    "
                  >
                    OKAY
                  </v-btn>
                </div>
              </v-card>
            </v-row>
          </div>
          <!-- Unstaked without grease stolen -->
          <div v-else>
            <div>
              <h1 class="headline primary--text mb-1">
                AND HERE'S WHAT HAPPENED...
              </h1>
            </div>
            <v-row v-model="stakedPage" no-gutters justify="center">
              <v-card flat tile color="dark_gray" class="text-center">
                <div>
                  <img
                    :src="getNFTImage(item.tokenId)"
                    :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
                  />
                </div>
                <div>
                  <h2 class="body-2 lite_gray--text">
                    <span class="primary--text">Success!</span> Ape
                    <span class="primary--text body-2">
                      #{{ item.tokenId }}
                    </span>
                    smuggled all the $TOKE out without getting caught.
                  </h2>
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
                    @click="
                      ;(unstakingDialog = false),
                        (isUnstaked = false),
                        emptySelectedNFT
                    "
                  >
                    OKAY
                  </v-btn>
                </div>
              </v-card>
            </v-row>
          </div>
          <v-pagination
            v-model="stakedPage"
            :length="getPageLength()"
            :total-visible="stakedPerPage"
            :value="stakedPage"
            class="pagination--container minted__nfts--container"
          >
          </v-pagination>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { ethers } from 'ethers'
import { Component, Vue, Watch, Prop, namespace } from 'nuxt-property-decorator'
import { ErrorAPIResponseInterface } from '~/api/repository.types'

const GLOBAL_STORE = namespace('global')

interface NFTItemInterface {
  tokenId: number
  image: string
  earnedGrease: number
}

interface UnstakedNFTsInterface {
  tokenId: number
  type: string
  isGreaseStolen: boolean
}

@Component
export default class Staked extends Vue {
  @GLOBAL_STORE.State('stakedListLastTimestamp')
  global_staked_list_last_timestamp!: number

  @GLOBAL_STORE.Action('setUnstakedListLastTimestamp')
  global_set_unstaked_list_last_timestamp!: (payload: number) => void

  @Prop({ default: '' }) walletAddress!: string

  panPage: number = 1
  stakedPage: number = 1
  stakedPerPage: number = 1
  squadPage: number = 1
  selectedNFTs: number[] = []
  stakedPanNFTs: NFTItemInterface[] = []
  stakedSquadNFTs: NFTItemInterface[] = []
  unstakedNFTs: UnstakedNFTsInterface[] = []

  checkTransactionInterval: NodeJS.Timeout | null = null
  confirmUnstakeModal: boolean = false
  confirmCashoutModal: boolean = false
  claimingDialog: boolean = false
  isClaiming: boolean = false
  isClaimed: boolean = false
  isUnstaking: boolean = false
  isUnstaked: boolean = false
  leaveGangModal: boolean = false
  unstakingDialog: boolean = false

  @Watch('global_staked_list_last_timestamp')
  onStakedListLastTimestampChange(val: number): void {
    if (val > 0) {
      this.getStakedTokens()
    }
  }

  @Watch('walletAddress')
  onWalletAddressChange(val: string): void {
    if (val.length > 0) {
      this.getStakedTokens()
      this.unstakeEventListener()
    } else {
      this.stakedPanNFTs = []
      this.stakedSquadNFTs = []
    }
  }

  get getUnstakedNFTs(): UnstakedNFTsInterface[] {
    return this.unstakedNFTs.slice(
      (this.stakedPage - 1) * this.stakedPerPage,
      this.stakedPage * this.stakedPerPage
    )
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

  get panNFTListItems(): NFTItemInterface[] {
    return this.stakedPanNFTs.slice(
      (this.panPage - 1) * this.nftPerPage,
      this.panPage * this.nftPerPage
    )
  }

  get squadNFTListItems(): NFTItemInterface[] {
    return this.stakedSquadNFTs.slice(
      (this.squadPage - 1) * this.nftPerPage,
      this.squadPage * this.nftPerPage
    )
  }

  /**
   * Check transaction status
   *
   * @param   {string<void>}   txHash
   *
   * @return  {Promise<void>}
   */
  async checkTransactionStatus(
    txHash: string,
    unstake: boolean
  ): Promise<void> {
    const tx = await this.$web3.getWeb3Provider().getTransaction(txHash)
    if (tx && tx.blockNumber && this.clearCheckTransactionInterval !== null) {
      if (unstake) {
        if (this.unstakedNFTs.length !== this.selectedNFTs.length) {
          return
        }

        this.unstakedNFTs.sort((a, b) => a.tokenId - b.tokenId)
        this.confirmUnstakeModal = false
        this.isUnstaking = false
        this.isUnstaked = true
      } else {
        this.confirmCashoutModal = false
        this.isClaiming = false
        this.isClaimed = true
      }

      console.log('unstake tx: ', tx)
      this.clearCheckTransactionInterval()

      this.getStakedTokens()
      this.selectedNFTs = []

      // update unstaked list
      this.global_set_unstaked_list_last_timestamp(
        Math.round(Date.now() / 1000)
      )
    }
  }

  /**
   * Claim and optionally unstake nfts
   *
   * @return  {<Promise><void>}
   */
  async claim(unstake = false): Promise<void> {
    let messageSmall = 'claim'
    let messagePascal = 'Claim'

    if (unstake) {
      messageSmall = 'unstake'
      messagePascal = 'Unstake'
    }

    if (this.walletAddress.length === 0) {
      this.$toast.error('Please connect your wallet.')
      return
    }

    if (this.selectedNFTs.length === 0) {
      this.$toast.error(`Please select at least 1 token to ${messageSmall}.`)
      return
    }

    if (unstake) {
      this.confirmUnstakeModal = false
      this.isUnstaking = true
    } else {
      this.confirmCashoutModal = false
      this.isClaiming = true
      this.isClaimed = false
    }

    try {
      const tx = await this.$web3
        .getTheFryingPanContract()
        .functions.claim(this.selectedNFTs, unstake)

      if (tx.hash.length > 0) {
        this.$toast.info(
          `${messagePascal} transaction successfully submitted.\nTx hash: ${tx.hash}`
        )

        if (unstake) {
          this.unstakingDialog = true
        } else {
          this.claimingDialog = true
        }

        this.checkTransactionInterval = setInterval(async () => {
          console.log('checking transaction status')
          await this.checkTransactionStatus(tx.hash, unstake)
        }, 4000)
      }
    } catch (error) {
      const { message } = error as Error

      if (message.includes('denied')) {
        this.$toast.error('You cancelled the transaction.')
      } else if(message.includes('stake.value < MINIMUM_TO_EXIT')) {
        this.$toast.error('[Error] You must have at least 2 days worth of $TOKE to unstake')
      } else {
        this.$toast.error(
          '[Error] Something went wrong while processing request'
        )

        if (unstake) {
          this.unstakingDialog = false
        } else {
          this.claimingDialog = false
        }
      }

      if (unstake) {
        this.confirmUnstakeModal = false
        this.isUnstaking = false
        this.isUnstaked = false
        this.unstakingDialog = false
      } else {
        this.confirmCashoutModal = false
        this.isClaiming = false
        this.isClaimed = false
        this.claimingDialog = false
      }
    }
  }

  /**
   * Get staked tokens by wallet address
   *
   * @return  {Promise<void>}
   */
  async getStakedTokens(): Promise<void> {
    try {
      // get owned staked tokens
      const { data } = await this.$nftRepository.GetStakedTokens(
        this.walletAddress
      )

      this.stakedPanNFTs = []
      this.stakedSquadNFTs = []

      await Promise.all(
        data.map(
          async (token): Promise<void> => {
            // for pan
            if (token.mintType === 'bacon') {
              const tokenId = token.tokenId
              const image = `${this.$config.apiUrl}/${tokenId}.png`

              // get earned grease
              const tokenEarnedGREASE: ethers.BigNumber = await this.$web3
                .getTheFryingPanContract(true)
                .getOwedToke(tokenId)
              const earnedGrease = +ethers.utils.formatEther(tokenEarnedGREASE)

              this.stakedPanNFTs.push({
                tokenId,
                image,
                earnedGrease,
              })
            }

            // for squad
            if (token.mintType === 'cop') {
              const tokenId = token.tokenId
              const image = `${this.$config.apiUrl}/${tokenId}.png`

              // get earned grease
              const tokenEarnedGREASE: ethers.BigNumber = await this.$web3
                .getTheFryingPanContract(true)
                .getOwedToke(tokenId)
              const earnedGrease = +ethers.utils.formatEther(tokenEarnedGREASE)

              this.stakedSquadNFTs.push({
                tokenId,
                image,
                earnedGrease,
              })
            }
          }
        )
      )

      // sort ascending token id
      this.stakedPanNFTs.sort((a, b) => a.tokenId - b.tokenId)
      this.stakedSquadNFTs.sort((a, b) => a.tokenId - b.tokenId)
    } catch (e) {
      const error = e as ErrorAPIResponseInterface
      console.error(`${error.message} [${error.errorCode}]`)

      this.stakedPanNFTs = []
      this.stakedSquadNFTs = []
    }
  }

  /**
   * Add token to unstake list
   *
   * @param   {nbumber}  tokenId
   *
   * @return  {void}
   */
  addTokenToClaimList(tokenId: number): void {
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
   * Check if token is in unstake list
   *
   * @param   {number}   tokenId
   *
   * @return  {boolean}
   */
  checkIfTokenIsSelected(tokenId: number): boolean {
    return this.selectedNFTs.includes(tokenId)
  }

  /**
   * Empty the selected nft
   *
   * @return  {void}
   */
  emptySelectedNFT(): void {
    this.selectedNFTs = []
  }

  /**
   * Get page length
   *
   * @return  {number}
   */
  getPageLength(): number {
    return Math.ceil(this.unstakedNFTs.length / this.stakedPerPage)
  }

  /**
   * Get nft image using url
   *
   * @param   {number}  val
   *
   * @return  {string}
   */
  getNFTImage(val: number): string {
    return `${this.$config.apiUrl}/${val}.png`
  }

  /**
   * On unstaked event listener
   *
   * @return  {void}
   */
  unstakeEventListener(): void {
    // for bacon unstake
    this.$web3
      .getTheFryingPanContract()
      .on('StonedApeClaimed', (tokenId, earnedGrease, unstake) => {
        if (unstake) {
          // check if earned grease is stoken
          const isGreaseStolen = +ethers.utils.formatEther(earnedGrease) === 0

          this.unstakedNFTs.push({
            tokenId: tokenId.toNumber(),
            type: 'bacon',
            isGreaseStolen,
          })
        }
      })

    // for cop unstake
    this.$web3
      .getTheFryingPanContract()
      .on('FedApeClaimed', (tokenId, earnedGrease, unstake) => {
        if (unstake) {
          // check if earned grease is stoken
          const isGreaseStolen = +ethers.utils.formatEther(earnedGrease) === 0

          this.unstakedNFTs.push({
            tokenId: tokenId.toNumber(),
            type: 'cop',
            isGreaseStolen,
          })
        }
      })
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
.panAndSquad__pagination--container ul li:first-child {
  position: absolute;
  left: 0;
  top: 30% !important;
}
.panAndSquad__pagination--container ul li:last-child {
  position: absolute;
  right: 0;
  top: 30% !important;
}
</style>
