<template>
  <div class="main--container my-8">
    <v-row no-gutters class="row--container">
      <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
        <v-row no-gutters>
          <v-col cols="12">
            <Minting
              :wallet-address="web3_wallet_address"
              :bacon-total-supply="baconTotalSupply"
            />
          </v-col>
          <v-col cols="12">
            <GameStatus :wallet-address="web3_wallet_address" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
        <v-card
          flat
          tile
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'"
          :height="cardContainerHeight"
          color="dark_gray"
          class="pa-7"
          :class="$vuetify.breakpoint.mdAndDown ? 'mt-10' : 'ml-10'"
        >
          <div class="d-flex justify-end">
            <h1 class="body-2 lite_gray--text">
              BALANCE:
              {{
                userGREASEBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }}
              $TOKE
            </h1>
          </div>
          <!-- Unstaked -->
          <Unstaked :wallet-address="web3_wallet_address" />
          <!-- Staked -->
          <Staked :wallet-address="web3_wallet_address" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ethers } from 'ethers'
import { Component, Vue, Watch, namespace } from 'nuxt-property-decorator'
import { GameStatus, Minting, Staked, Unstaked } from '~/components/mainS2'
import { CommunityFeatureS2 } from '~/components/home'
import { CommunityFeature } from '~/components/home'

const WEB3_STORE = namespace('web3')

interface carouselSettingsInterface {
  dots: boolean
  infinite: boolean
  initialSlide: number
  speed: number
  slidesToShow: number
  slidesToScroll: number
  swipeToSlide: boolean
  responsive: [{ breakpoint: number; settings: { slidesToShow: number } }]
}

@Component({
  components: {
    GameStatus,
    Minting,
    Staked,
    Unstaked,
    CommunityFeatureS2,
    CommunityFeature
  },
})
export default class MintStakeAndUnstakeS2 extends Vue {
  @WEB3_STORE.State('walletAddress') web3_wallet_address!: string

  $refs!: {
    carousel: HTMLFormElement
  }

  carouselSettings: carouselSettingsInterface = {
    dots: false,
    infinite: false,
    initialSlide: 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  baconTotalSupply: number = 0
  onChainInfoInterval: NodeJS.Timeout | null = null
  signerAddress: string = ''
  userGREASEBalance: number = 0
  unstakedCarousel: number = 0

  @Watch('web3_wallet_address')
  onWalletAddressChange(val: string): void {
    setTimeout(() => {
      if (val.length > 0) {
        if (this.onChainInfoInterval === null) {
          this.runOnChainInfoInterval()
        }
      } else {
        this.signerAddress = ''
        this.baconTotalSupply = 0
        this.userGREASEBalance = 0

        this.clearOnChainInfoInterval()
      }
    }, 1200)
  }

  get cardContainerHeight(): string {
    let size = '747'

    if (this.$vuetify.breakpoint.mdOnly) {
      size = '795'
    } else if (this.$vuetify.breakpoint.smAndDown) {
      size = '100%'
    }
    return size
  }

  async onChainInfoInfo(): Promise<void> {
    /// get signer
    const signer = this.$web3.getWeb3Provider().getSigner()
    this.signerAddress = await signer.getAddress()

    /// get grease balance
    const userBalance: ethers.BigNumber = await this.$web3
      .getGreaseContract(true)
      .balanceOf(this.signerAddress)
    this.userGREASEBalance = +ethers.utils.formatEther(userBalance)

    /// get bacon info
    // get total balance (minted tokens)
    const baconTotalSupply: ethers.BigNumber = await this.$web3
      .getBaconContract(true)
      .totalSupply()
    this.baconTotalSupply = baconTotalSupply.toNumber()
  }

  clearOnChainInfoInterval(): void {
    if (this.onChainInfoInterval !== null) {
      clearInterval(this.onChainInfoInterval)
      this.onChainInfoInterval = null
    }
  }

  runOnChainInfoInterval(): void {
    this.onChainInfoInfo()
    this.onChainInfoInterval = setInterval(this.onChainInfoInfo, 5000)
  }

  mounted(): void {
    setTimeout(() => {
      if (this.web3_wallet_address && this.onChainInfoInterval === null) {
        this.runOnChainInfoInterval()
      }
    }, 1200)
  }

  beforeDestroy(): void {
    this.clearOnChainInfoInterval()
  }
}
</script>

<style>
@media (min-device-width: 1264px) {
  .row--container {
    height: 750px;
  }
}
</style>
