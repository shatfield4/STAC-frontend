<template>
  <div
    class="main--container pb-16"
    :class="$vuetify.breakpoint.smAndDown ? 'pt-12' : ''"
  >
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
        <v-card
          flat
          tile
          :max-width="$vuetify.breakpoint.mdAndDown ? '100%' : '561'"
          height="350"
          color="dark_gray"
          class="pa-7"
          :class="$vuetify.breakpoint.mdOnly ? 'mx-auto' : ''"
        >
        <h1 class="display-1 text-capitalize font-weight-medium text-center">
        $TOKE BURN
          </h1>
          <!-- <v-row class="fill-height ma-0" align="center" justify="center">
            <div class="d-flex flex-column text-center">
              <div class="mx-auto">
                <v-img src="/icon/locked-icon.png" max-width="69" height="86">
                </v-img>
              </div>
              <div>
                <h1 class="title montserrat--font font-weight-bold">LOCKED</h1>
              </div>
              <div>
                <h2 class="body-1 font-weight-light">
                  Community Selected Feature
                  <span class="primary--text"> #1 </span>
                </h2>
              </div>
            </div>
          </v-row> -->
          
         
      <div class="d-flex flex-row justify-center align-center mt-5">
        <h1 class="body-2 lite_gray--text">AMOUNT: </h1>
        <div class="d-flex align-center">
          <v-btn
            text
            fab
            x-small
            :ripple="false"
            class="arrow__down--button"
            @click="decrementBurn"
          >
            <img src="/icon/arrow-down.svg" width="14" />
          </v-btn>
          <v-card flat tile color="transparent" width="90">
            <h1 class="font-size--10 text-center">{{ burnAmountString }}</h1>
          </v-card>
          <v-btn
            text
            fab
            x-small
            :ripple="false"
            class="arrow__up--button"
            @click="incrementBurn"
          >
            <img src="/icon/arrow-up.svg" width="14" />
          </v-btn>
        </div>
        
      </div>
      <!-- <div
        class="d-flex justify-space-between mt-10"
        :class="$vuetify.breakpoint.mdAndDown ? 'flex-column' : ''"
      > -->
      <center><input v-model="message" id="note-input" class="display-1 text-center white--text" placeholder="***Click to add note***"></center>
      <!-- </div> -->
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
          @click="burn"
        >
          BURN
        </v-btn>
      </div>
      
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
        <v-card
          flat
          tile
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : 'auto'"
          height="350"
          color="dark_gray"
          class="pa-7"
          :class="$vuetify.breakpoint.mdAndDown ? 'mt-10' : 'ml-10'"
        >
          <v-row class="fill-height ma-0" align="center" justify="center">
            <div class="d-flex flex-column text-center">
              <div class="mx-auto">
                <v-img src="/icon/locked-icon.png" max-width="69" height="86">
                </v-img>
              </div>
              <div>
                <h1 class="title montserrat--font font-weight-bold">LOCKED</h1>
              </div>
              <div>
                <h2 class="body-1 font-weight-light">
                  Community Selected Feature
                  <span class="primary--text"> #2 </span>
                </h2>
              </div>
            </div>
          </v-row>
          
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { ethers, providers } from 'ethers'
import { Component, Prop, Vue, Watch, namespace } from 'nuxt-property-decorator'
// const GLOBAL_STORE = namespace('global')
const WEB3_STORE = namespace('web3')


@Component
export default class CommunityFeature extends Vue {
  // @Prop({ default: '' }) walletAddress!: string
  // @GLOBAL_STORE.Action('setUnstakedListLastTimestamp')
  // @GLOBAL_STORE.State('stakedListLastTimestamp')
  @WEB3_STORE.State('walletAddress') walletAddressWeb3!: string

  global_staked_list_last_timestamp!: number
  // @GLOBAL_STORE.Action('setUnstakedListLastTimestamp')
  global_set_unstaked_list_last_timestamp!: (payload: number) => void
  checkTransactionInterval: NodeJS.Timeout | null = null
  statusInfoInterval: NodeJS.Timeout | null = null
  burnAmount: number = 250
  burnAmountString: string = "250K"
  highestBurner: string = "-"
  amountStonedApeTickets: string = '-';
  amountFedApeTickets: string = '-';
  note: string = ""
  
  // @Watch('message')
  // onMessageChanged(val:string) {
  //   this.note = val
  //   console.log('name': val)
  // }

  @Watch('walletAddressWeb3')
  async onWalletAddressChange(val: string): Promise<void> {
    if (val.length > 0) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      this.getInfo()
      this.statusInfoInterval = setInterval(this.getInfo, 15000)
    } else {
      this.getInfo()
    }
  }
  async mounted() {
    // let sleep = () => new Promise(resolve => setTimeout(resolve, 3)).then(() => {

    // });
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.getInfo()

  }

  // @Watch('global_staked_list_last_timestamp')
  // onStakedListLastTimestampChange(val: number): void {
  //   if (val > 0) {
  //     this.getInfo().then(() => {
  //       console.log("Fetched highest burner")
  //     })
  //   }
  // }


  incrementBurn(): void {
    if(this.burnAmount < 1000) {
      this.burnAmount += 50
    } else {
      this.burnAmount = 1000
    }
    this.getBurnString()

  }

  decrementBurn(): void {
    if(this.burnAmount > 50) {
    this.burnAmount -= 50
  } else {
    this.burnAmount = 50
  }

  this.getBurnString()
}

  getBurnString(): void {
    if(this.burnAmount < 1000) {
      this.burnAmountString = this.burnAmount.toString() + "K"
    } else {
      this.burnAmountString = this.burnAmount.toString() + "M"
    }
  }

async checkTransactionStatus(txHash: string): Promise<void> {
  const tx = await this.$web3.getWeb3Provider().getTransaction(txHash)
  if (
    tx &&
    tx.blockNumber &&
    this.clearCheckTransactionInterval !== null
  ) {
    console.log('mint tx: ', tx)
    this.$toast.info('Successfully burned')
    this.clearCheckTransactionInterval()

    // update unstaked list
    this.global_set_unstaked_list_last_timestamp(
      Math.round(Date.now() / 1000)
    )
  }
}

clearCheckTransactionInterval(): void {
  if (this.checkTransactionInterval !== null) {
    clearInterval(this.checkTransactionInterval)
    this.checkTransactionInterval = null
  }
}
async burn(): Promise<void> {
  if (this.walletAddressWeb3.length === 0) {
  this.$toast.error('Please connect your wallet.')
  return
  }
  // console.log("Wallet: " + this.walletAddressWeb3)
  // let note = 
  let note = (<HTMLInputElement>document.getElementById("note-input")).value;
  console.log(note)
  this.getInfo()
  try {
    const tx = await this.$web3
      .getBurnGameContract()
      .functions.burn(ethers.utils.parseEther((this.burnAmount*1000).toString()), note)
      if (tx.hash.length > 0) {
        this.$toast.info(
          `Burn successfully submitted.\nTx hash: ${tx.hash}`
        )

        this.checkTransactionInterval = setInterval(async () => {
          console.log('checking transaction status')
          await this.checkTransactionStatus(tx.hash)
        }, 4000)
      }


  } catch (error) {
    const { message } = error as Error

    if (message.includes('denied')) {
      this.$toast.error('You cancelled the transaction.')
    } else if (message.includes('exceeds balance')){
      this.$toast.error('[Error] Insufficient balance')
    } else {
      this.$toast.error(
        '[Error] Something went wrong while processing request'
      )
    }
  }
}

async getInfo(): Promise<void> {
  const fedApeTicketAmountsFetch: string = await this.$web3.
    getBurnGameContract(true).
    fedApeTicketAmounts(this.walletAddressWeb3)
    this.amountFedApeTickets = fedApeTicketAmountsFetch
    // console.log("Fed tickets: " + this.amountFedApeTickets)

  const stonedApeTicketAmountsFetch: string = await this.$web3.
    getBurnGameContract(true).
    stonedApeTicketAmounts(this.walletAddressWeb3)
    this.amountStonedApeTickets = stonedApeTicketAmountsFetch
    // console.log("Stoned Ape Tickets: " + this.amountStonedApeTickets)
  }



  beforeDestroy(): void {
    if (this.statusInfoInterval !== null) {
      clearInterval(this.statusInfoInterval)
      this.statusInfoInterval = null
    }
  }

}
</script>

<style>
.wallet-font {
  font-size: 15px;
  padding: 10px;
}
.text-white input{
  color: white !important;
}
</style>
