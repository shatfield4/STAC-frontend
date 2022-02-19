<template>
  <div>
    <v-card
      flat
      tile
      :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '566'"
      :height="cardContainerHeight"
      color="dark_gray"
      class="pa-7"
      :class="$vuetify.breakpoint.mdOnly ? 'mx-auto' : ''"
    >
      <h1 class="display-1 text-capitalize font-weight-medium text-center">
        MINTING
      </h1>
      <div class="mt-5">
        <v-progress-linear
          background-color="transparent"
          color="primary"
          class="minting__progress-bar p-relative"
          height="33"
          :value="mintedBarPercentage"
        >
          <div v-if="$vuetify.breakpoint.smAndUp">
            <h1 class="font-size--9 progress-bar--1 pt-2 pl-2">
              {{ firstETHSaleAmount }} ETH
            </h1>
            <h1 class="font-size--9 progress-bar--2 pt-2">
              {{ secondGREASESaleAmount }} $TOKE
            </h1>
            <h1 class="font-size--9 progress-bar--3 pt-2 pl-2">
              {{ thirdGREASESaleAmount }} $TOKE
            </h1>
            <h1 class="font-size--9 progress-bar--4 pt-2">
              {{ fourthGREASESaleAmount }} $TOKE
            </h1>
          </div>
        </v-progress-linear>

        <h1 class="caption lite_gray--text text-right mt-2">
          {{ baconTotalSupply.toLocaleString() }}/{{
            maxBaconSupply.toLocaleString()
          }}
          MINTED
        </h1>
      </div>
      <div class="d-flex flex-row justify-center align-center mt-5">
        <h1 class="body-2 lite_gray--text">AMOUNT</h1>
        <div class="d-flex align-center">
          <v-btn
            text
            fab
            x-small
            :ripple="false"
            class="arrow__down--button"
            @click="decrementMint"
          >
            <img src="/icon/arrow-down.svg" width="14" />
          </v-btn>
          <v-card flat tile color="transparent" width="40">
            <h1 class="text-center">{{ mintQuantity }}</h1>
          </v-card>
          <v-btn
            text
            fab
            x-small
            :ripple="false"
            class="arrow__up--button"
            @click="incrementMint"
          >
            <img src="/icon/arrow-up.svg" width="14" />
          </v-btn>
        </div>
      </div>
      <div class="d-flex flex-row justify-center align-center">
        <h1 class="body-2 lite_gray--text mr-2">COST:</h1>
        <h1 class="body-2">
          {{ totalCalculatedMintPrice.toFixed(2) + ' ' + mintUnit }}
        </h1>
      </div>
      <div
        class="d-flex justify-space-between mt-10"
        :class="$vuetify.breakpoint.mdAndDown ? 'flex-column' : ''"
      >
        <v-btn
          tile
          depressed
          :block="$vuetify.breakpoint.mdAndDown"
          :width="$vuetify.breakpoint.xsOnly ? '' : 484"
          height="40"
          color="primary"
          :loading="isMinting"
          @click="mint"
        >
          MINT
        </v-btn>
      </div>
    </v-card>

    <!--Minting modal-->
    <div>
      <v-dialog v-model="mintDialog" class="rounded-0" width="400" persistent>
        <v-card
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div>
            <h1 class="headline primary--text">MINTING...</h1>
          </div>
          <div>
            <img
              src="/images/bacon-sample.jpg"
              :width="$vuetify.breakpoint.xsOnly ? 200 : 250"
            />
          </div>
          <div>
            <h2 class="body-2 lite_gray--text">Creating your apes…</h2>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <!--Minted modal-->
    <div>
      <v-dialog v-model="mintedDialog" class="rounded-0" width="400" persistent>
        <v-card
          v-for="(item, i) in getMintedNFTs"
          :key="i"
          tile
          color="dark_gray"
          class="text-center"
          :class="$vuetify.breakpoint.xsOnly ? 'pa-5' : 'pa-12'"
        >
          <div v-if="isGREASESale">
            <div v-if="!item.isStolen">
              <div class="mb-2">
                <h1 class="headline primary--text">HERE'S THE LOOT...</h1>
              </div>
              <v-row v-model="mintPage" no-gutters justify="center">
                <div>
                  <v-card flat width="200" color="transparent">
                    <div>
                      <v-img
                        :src="getNFTImage(item.tokenId)"
                        class="mx-auto"
                        width="200"
                        height="200"
                      ></v-img>
                    </div>
                    <div class="mt-2">
                      <h2 class="body-2 lite_gray--text">
                        You minted {{ item.type }}
                        <span class="primary--text body-2 font-weight-bold">
                          #{{ item.tokenId }}
                        </span>
                      </h2>
                    </div>
                    <div class="mt-2">
                      <h2 class="body-2 lite_gray--text">
                        And your
                        <span class="primary--text text-capitalize">{{
                          item.type
                        }}</span>
                        arrived safely in your wallet. Nice!
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
                        @click="mintedDialog = false"
                      >
                        OKAY
                      </v-btn>
                    </div>
                  </v-card>
                </div>
              </v-row>
            </div>
            <div v-else>
              <div class="mb-2">
                <h1 class="headline primary--text">
                  AND HERE'S WHAT HAPPENED...
                </h1>
              </div>
              <v-row v-model="mintPage" no-gutters justify="center">
                <div>
                  <v-card flat width="200" color="transparent">
                    <div>
                      <v-img
                        :src="getNFTImage(item.tokenId)"
                        class="mx-auto"
                        width="200"
                        height="200"
                      ></v-img>
                    </div>
                    <div class="mt-2">
                      <h2 class="body-2 lite_gray--text">
                        Ooof! Your
                        <span class="primary--text text-capitalize">
                          {{ `${item.type} #${item.tokenId}` }}
                        </span>
                        was stolen by another
                        <span class="primary--text text-capitalize"> cop</span>.
                        Bad luck!
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
                        @click="mintedDialog = false"
                      >
                        OKAY
                      </v-btn>
                    </div>
                  </v-card>
                </div>
              </v-row>
            </div>
          </div>
          <div v-else>
            <div class="mb-2">
              <h1 class="headline primary--text">HERE'S THE LOOT...</h1>
            </div>
            <v-row v-model="mintPage" no-gutters justify="center">
              <div>
                <v-card flat width="200" color="transparent">
                  <div>
                    <v-img
                      :src="getNFTImage(item.tokenId)"
                      class="mx-auto"
                      width="200"
                      height="200"
                    ></v-img>
                  </div>
                  <div class="mt-2">
                    <h2 class="body-2 lite_gray--text">
                      You minted {{ item.type }}
                      <span class="primary--text body-2 font-weight-bold">
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
                      @click="mintedDialog = false"
                    >
                      OKAY
                    </v-btn>
                  </div>
                </v-card>
              </div>
            </v-row>
          </div>

          <v-pagination
            v-model="mintPage"
            :length="getPageLength()"
            :total-visible="perPage"
            :value="mintPage"
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
import { Component, Vue, Prop, Watch, namespace } from 'nuxt-property-decorator'
var whitelist = require("./whitelist.json")

const GLOBAL_STORE = namespace('global')

interface MintedNFTsInterface {
  tokenId: number
  type: string
  isStolen: boolean
}

interface MetamaskErrorInterface {
  code: number
  data: {
    [key: string]: string
  }
  message: string
}

@Component
export default class Minting extends Vue {
  @GLOBAL_STORE.Action('setUnstakedListLastTimestamp')
  global_set_unstaked_list_last_timestamp!: (payload: number) => void

  @Prop({ default: 0 }) baconTotalSupply!: number
  @Prop({ default: '' }) walletAddress!: string

  isWLOnly: boolean = false; // CHANGE TO ENABLE PUBLIC

  firstETHSaleAmount: number = this.isWLOnly ? 0.08 : 0.08
  secondGREASESaleAmount: number = this.$config.debug ? 200 : 20000
  thirdGREASESaleAmount: number = this.$config.debug ? 400 : 40000
  fourthGREASESaleAmount: number = this.$config.debug ? 800 : 80000

  buttonClicked: string = ''
  checkTransactionInterval: NodeJS.Timeout | null = null
  mintQuantity: number = 1
  mintedNFTs: MintedNFTsInterface[] = []
  maxBaconSupply: number = 0
  mintPage: number = 1
  perPage: number = 1
  paidTokens: number = 0 // no risk when claiming

  
  isMinting: boolean = false
  mintDialog: boolean = false
  mintedDialog: boolean = false

  @Watch('walletAddress')
  onWalletAddressChange(val: string): void {
    if (val.length > 0) {
      this.getTokenInfo()
      this.mintEventListener()
    }
  }

  get cardContainerHeight(): string {
    let size = '354'

    if (this.$vuetify.breakpoint.mdOnly) {
      size = '400'
    } else if (this.$vuetify.breakpoint.smAndDown) {
      size = '100%'
    }
    return size
  }

  get getMintedNFTs(): MintedNFTsInterface[] {
    return this.mintedNFTs.slice(
      (this.mintPage - 1) * this.perPage,
      this.mintPage * this.perPage
    )
  }

  get isGREASESale(): boolean {
    console.log(this.baconTotalSupply >= this.paidTokens)
    return this.baconTotalSupply >= this.paidTokens
  }

  get mintedBarPercentage(): number {
    return (this.baconTotalSupply / this.maxBaconSupply) * 100
  }

  get mintUnit(): string {
    if (this.isWLOnly)
    {
      return 'ETH WHITELIST ONLY'
    }
    return this.baconTotalSupply >= this.paidTokens ? 'TOKE' : 'ETH'
  }

  get totalCalculatedMintPrice(): number {
    let amount: number = 0

    // for eth
    if (this.baconTotalSupply < this.paidTokens) {
      amount = this.firstETHSaleAmount
    } else if (this.$config.debug) {
      if (this.baconTotalSupply >= 100 && this.baconTotalSupply <= 200) {
        amount = this.secondGREASESaleAmount
      } else if (this.baconTotalSupply >= 201 && this.baconTotalSupply <= 400) {
        amount = this.thirdGREASESaleAmount
      } else if (this.baconTotalSupply >= 401 && this.baconTotalSupply <= 500) {
        amount = this.fourthGREASESaleAmount
      }
    } else if (
      this.baconTotalSupply >= 10001 &&
      this.baconTotalSupply <= 20000
      // this.baconTotalSupply >= 5 &&
      // this.baconTotalSupply <= 20000
    ) {
      amount = this.secondGREASESaleAmount
    } else if (
      this.baconTotalSupply >= 20001 &&
      this.baconTotalSupply <= 40000
    ) {
      amount = this.thirdGREASESaleAmount
    } else if (
      this.baconTotalSupply >= 40001 &&
      this.baconTotalSupply <= 50000
    ) {
      amount = this.fourthGREASESaleAmount
    }
    console.log('Total mint price: ' + amount * this.mintQuantity)
    return amount * this.mintQuantity
  }

  /**
   * Check transaction hash status
   *
   * @param   {string<void>}   txHash
   *
   * @return  {Promise<void>}
   */
  async checkTransactionStatus(txHash: string): Promise<void> {
    const tx = await this.$web3.getWeb3Provider().getTransaction(txHash)
    if (
      tx &&
      tx.blockNumber &&
      this.clearCheckTransactionInterval !== null &&
      this.mintedNFTs.length === this.mintQuantity
    ) {
      console.log('mint tx: ', tx)
      this.clearCheckTransactionInterval()

      this.mintedNFTs.sort((a, b) => a.tokenId - b.tokenId)
      this.isMinting = false
      this.mintDialog = false
      this.mintedDialog = true

      // update unstaked list
      this.global_set_unstaked_list_last_timestamp(
        Math.round(Date.now() / 1000)
      )
    }
  }

  /**
   * Get token info
   *
   * @return  {Promise<void>}
   */
  async getTokenInfo(): Promise<void> {
    const maxTokens: ethers.BigNumber = await this.$web3
      .getBaconContract(true)
      .MAX_TOKENS()
    this.maxBaconSupply = maxTokens.toNumber()

    const paidTokens: ethers.BigNumber = await this.$web3
      .getBaconContract(true)
      .PAID_TOKENS()
    this.paidTokens = paidTokens.toNumber()
    console.log("PAID TOKENS: " + this.paidTokens) //works and returns correct amount
    // const wlBlock: ethers.BigNumber = await this.$web3
    //   .getBaconContract(true)
    //   .whitelistStartTime()

    // const currentBlock: ethers.BigNumber = await this.$web3
    //   .getBlockNumber()

    
    // console.log("WL BLOCK: " + wlBlock.toString())
  }

  /**
   * Mint a token
   *
   * @return  {Promise<void>}
   */
  async mint(): Promise<void> {
    if (this.walletAddress.length === 0) {
      this.$toast.error('Please connect your wallet.')
      return
    }
    
    console.log('Mint clicked!')
    this.isMinting = true

    try {
      const seed = Math.round(Date.now() / 1000)
      // console.log($web3.utils.toChecksumAddress(this.walletAddress))

      // let gas = this.$web3.getBaconContract().estimateGas.mint(this.mintQuantity, seed, {
      //     value: ethers.utils.parseEther(
      //      this.isGREASESale ? '0' : this.totalCalculatedMintPrice.toString()
      //     ),
      //   }).then((value) => {
      //     console.log(value)
      //   })

      // let gasPrice = await ethers.getDefaultProvider().getGasPrice().then((gas) => {
      //   ethers.utils.formatUnits(gas, "gwei")
      //   console.log(gas)
      // })
      // { BigNumber: "180336311245" }

      // ...often this gas price is easier to understand or
      // display to the user in gwei
      


      // ENABLE FOR PUBLIC
      const tx = await this.$web3
        .getBaconContract()
        .functions.mint(this.mintQuantity, seed, {
          value: ethers.utils.parseEther(
           this.isGREASESale ? '0' : this.totalCalculatedMintPrice.toString(),
          ),
          // gasLimit: "300000",
          // maxFeePerGas: "100000000000",
          // maxPriorityFeePerGas: "25000000000",
        })


      // let proof = ["0xdf0d8b66a8ce732b18db4cf91223997e56370b5aac17c642089d3f02f1bd0a5d","0x9c67036adb863d11db69e6367bdc1d7e6c872bd7af4d68aed7204ea89accdf3e","0x7d2322e7c9c6609210a7745e172029bff36d03f8a1f66c687433dd773835586e","0x5d339667464af1e71219aa22dd709365cf8a1641f8ae6e8b5b9d395a1ba0a535"]
      // console.log(this.walletAddress)
      // let foundWallet = false

      // // whitelist
      // for(let i = 0; i <= 1128; i++) {
      //   // console.log(whitelist[i].Address)
      //   if(this.walletAddress === whitelist[i].Address)
      //   {
      //     proof = whitelist[i].Proof
      //     foundWallet = true
      //   }
      // }

      // if (!foundWallet) {
      //   this.$toast.error('You are not whitelisted.')
      // }
      // // console.log(this.totalCalculatedMintPrice.toString())

      // const tx = await this.$web3
      //   .getBaconContract()
      //   .functions.whitelistMint(this.mintQuantity, 1, seed, proof, {
      //     value: ethers.utils.parseEther(
      //      this.isGREASESale ? '0' : this.totalCalculatedMintPrice.toString()
      //     ),
      //   })


      if (tx.hash.length > 0) {
        this.$toast.info(
          `Mint transaction successfully submitted.\nTx hash: ${tx.hash}`
        )

        this.mintDialog = true
        this.mintedNFTs = []
        this.checkTransactionInterval = setInterval(async () => {
          console.log('checking transaction status')
          await this.checkTransactionStatus(tx.hash)
        }, 4000)
      }
    } catch (error) {
      const { message } = error as Error

      if (message.includes('denied')) {
        this.$toast.error('You cancelled the transaction.')
      } else if (message.includes('insufficient')){
        this.$toast.error('[Error] Insufficient balance')
      } else if (
        (error as MetamaskErrorInterface).data.message.includes(
          'burn amount exceeds balance'
        )
      ) {
        this.$toast.error('[Error] Insufficient balance')
      } else {
        this.$toast.error(
          '[Error] Something went wrong while processing request'
        )
      }

      this.isMinting = false
      this.mintDialog = false
      this.mintedDialog = false
    }
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
   * Decrement mint quantity
   *
   * @return  {void}
   */
  decrementMint(): void {
    this.mintQuantity--
    if (this.mintQuantity < 1) {
      this.mintQuantity = 1
    }
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
   * Get page length
   *
   * @return  {number}
   */
  getPageLength(): number {
    return Math.ceil(this.mintedNFTs.length / this.perPage)
  }

  /**
   * Increment mint quantity
   *
   * @return  {void}
   */
  incrementMint(): void {
    this.mintQuantity++
    if (this.mintQuantity > 20) {
      this.mintQuantity = 20
    }
  }

  /**
   * On minted event listener
   *
   * @return  {void}
   */
  mintEventListener(): void {
    // for bacon minted event
    this.$web3
      .getBaconContract()
      .on('StonedApeMinted', (tokenId, minter, owner) => {
        // if stolen, minter != owner
        const isStolen = minter !== owner

        this.mintedNFTs.push({
          tokenId: tokenId.toNumber(),
          type: 'Stoned Ape',
          isStolen,
        })
      })

    // for cop minted
    this.$web3.getBaconContract().on('FedApeMinted', (tokenId, minter, owner) => {
      // if stolen, minter != owner
      const isStolen = minter !== owner

      this.mintedNFTs.push({
        tokenId: tokenId.toNumber(),
        type: 'Fed Ape',
        isStolen,
      })
    })
  }

  beforeDestroy(): void {
    this.clearCheckTransactionInterval()
  }
}
</script>

<style scoped>
.arrow__down--button::before,
.arrow__up--button::before {
  background-color: transparent;
}
.minting__progress-bar {
  border: 1px #999999 solid;
}
.progress-bar--1 {
  position: absolute;
  height: 33px;
  width: 77px;
  top: 0.5px;
  left: 20px;
  border-right: 1px solid #999999;
}
.progress-bar--2 {
  position: absolute;
  height: 33px;
  width: 86px;
  top: 0px;
  left: 107px;
  border-right: 1px solid #999999;
}
.progress-bar--3 {
  position: absolute;
  height: 33px;
  width: 146px;
  top: 0.5px;
  left: 240px;
  border-right: 1px solid #999999;
}
.progress-bar--4 {
  position: absolute;
  height: 33px;
  width: 86px;
  top: 0px;
  right: 1px;
}
</style>
<style>
.minted__nfts--container ul li:first-child {
  position: absolute;
  left: 0;
  top: 40% !important;
}
.minted__nfts--container ul li:last-child {
  position: absolute;
  right: 0;
  top: 40% !important;
}
/* .hide--arrow ul li {
  display: none !important;
} */
.v-pagination__navigation--disabled {
  display: none;
}
</style>
