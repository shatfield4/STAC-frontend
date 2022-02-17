<template>
  <div>
    <v-card
      flat
      tile
      :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '566'"
      height="354"
      color="dark_gray"
      class="mt-10 pa-7"
      :class="$vuetify.breakpoint.mdOnly ? 'mx-auto' : ''"
    >
      <h1 class="display-1 text-capitalize font-weight-medium text-center">
        GAME STATUS
      </h1>
      <v-row no-gutters class="mt-5">
        <v-col cols="6" :class="$vuetify.breakpoint.xsOnly ? '' : 'pr-5'">
          <div>
            <!-- Bacon minted -->
            <div class="d-flex align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                STONED APES MINTED:
              </h1>
              <v-spacer />
              <h1 class="font-size--18">
                {{
                  walletAddress.length > 0 ? baconsMinted.toLocaleString() : '-'
                }}
              </h1>
            </div>
            <!-- Bacon staked -->
            <div class="d-flex mt-5 align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                STONED APES STAKED:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0 ? baconsStaked.toLocaleString() : '-'
                }}
              </h2>
            </div>
            <!-- Fed Apes Minted -->
            <div class="d-flex mt-5 align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                FED APES MINTED:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0 ? copsMinted.toLocaleString() : '-'
                }}
              </h2>
            </div>
            <!-- Fed Apes staked -->
            <div class="d-flex mt-5 align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                FED APES STAKED:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0 ? copsStaked.toLocaleString() : '-'
                }}
              </h2>
            </div>
          </div>
        </v-col>
        <v-col cols="6" :class="$vuetify.breakpoint.xsOnly ? 'pl-4' : 'pl-7'">
          <div>
            <!-- Stoned Apes arrested -->
            <div class="d-flex align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                STONED APES ARRESTED:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0 ? baconsStolen.toLocaleString() : '-'
                }}
              </h2>
            </div>
            <!-- Fed Apes arrested -->
            <div class="d-flex mt-5 align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                FED APES STOLEN:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0 ? copsStolen.toLocaleString() : '-'
                }}
              </h2>
            </div>
            <!-- Toke claimed -->
            <div class="d-flex mt-6 align-center">
              <h1
                class="lite_gray--text"
                :class="$vuetify.breakpoint.xsOnly ? 'caption' : 'body-2'"
              >
                $TOKE EARNED:
              </h1>
              <v-spacer />
              <h2 class="font-size--18">
                {{
                  walletAddress.length > 0
                    ? $utils.abbreviateNumber(totalGREASEClaimed)
                    : '-'
                }}
              </h2>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import { ethers } from 'ethers'
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class GameStatus extends Vue {
  @Prop({ default: '' }) walletAddress!: string

  baconsMinted: number = 0
  baconsStaked: number = 0
  baconsStolen: number = 0
  copsMinted: number = 0
  copsStaked: number = 0
  copsStolen: number = 0
  statusInfoInterval: NodeJS.Timeout | null = null
  totalGREASEClaimed: number = 0

  @Watch('walletAddress')
  onWalletAddressChange(val: string): void {
    if (val.length > 0) {
      this.gameStatusInfo()
      this.statusInfoInterval = setInterval(this.gameStatusInfo, 15000)
    }
  }

  /**
   * Get game status info
   *
   * @return  {Promise<void>}
   */
  async gameStatusInfo(): Promise<void> {
    if (this.walletAddress.length === 0) {
      this.resetStatusInfo()
      return
    }

    try {
      // get from api
      const { data } = await this.$nftRepository.GetGameStatus()

      this.baconsMinted = data.baconsMinted
      this.baconsStaked = data.baconsStaked
      this.baconsStolen = data.baconsStolen
      this.copsMinted = data.copsMinted
      this.copsStaked = data.copsStaked
      this.copsStolen = data.copsStolen

      // get grease claimed
      const totalGREASEClaimed = await this.$web3
        .getTheFryingPanContract(true)
        .totalTOKEEarned()
      this.totalGREASEClaimed = +ethers.utils.formatEther(totalGREASEClaimed)
    } catch (error) {
      this.resetStatusInfo()
      console.error(error)
    }
  }

  /**
   * Reset game status info
   *
   * @return  {<void>}
   */
  resetStatusInfo(): void {
    this.baconsMinted = 0
    this.baconsStaked = 0
    this.baconsStolen = 0
    this.copsMinted = 0
    this.copsStaked = 0
    this.copsStolen = 0
  }

  beforeDestroy(): void {
    if (this.statusInfoInterval !== null) {
      clearInterval(this.statusInfoInterval)
      this.statusInfoInterval = null
    }
  }
}
</script>

<style></style>
