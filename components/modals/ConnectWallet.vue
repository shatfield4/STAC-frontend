<template>
  <v-dialog v-model="walletDialog" width="450">
    <template #activator="{ on, attrs }">
      <!--disconnected-->
      <v-btn
        v-if="!web3_wallet_address"
        dark
        :outlined="outlined"
        :text="text"
        :tile="tile"
        :block="block"
        :ripple="ripple"
        :color="color"
        :height="height"
        :width="width"
        :class="css"
        v-bind="attrs"
        v-on="on"
        @change="walletDialog = true"
        >Connect Wallet
      </v-btn>
      <!--connected-->
      <v-btn
        v-else
        dark
        :outlined="outlined"
        :text="text"
        :tile="tile"
        :block="block"
        :ripple="ripple"
        :color="color"
        :height="height"
        :width="width"
        :class="css"
        v-bind="attrs"
        @click="disconnectWallet"
      >
        {{ walletAddress }}
      </v-btn>
    </template>

    <v-card tile color="dark_gray" class="text-center px-10 py-5">
      <!-- <v-btn icon class="close--btn float-right">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn> -->
      <div class="">
        <h1
          class="montserrat--font headline white--text font-weight-bold text-center pt-5"
        >
          CONNECT YOUR WALLET.
        </h1>

        <h4
          class="body-2 width-70 mx-auto lite_gray--text mb-5 text-center pt-1 pb-5 px-2"
        >
          Connect with one of available wallet providers or create a new wallet
        </h4>
        <div v-for="(item, i) in wallets" :key="i" class="my-3 mx-3">
          <v-card
            link
            max-width="351"
            height="50"
            class="mx-auto d-flex align-center px-4 white--text"
            :class="item.css"
            @click="connectToWallet(item)"
          >
            <h4 class="body-2 font-weight-regular">{{ item.name }}</h4>
            <v-spacer />
            <v-img :src="item.logo" max-width="38px"></v-img>
          </v-card>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'

const WEB3_STORE = namespace('web3')

interface WalletInterface {
  name?: string
  logo?: string
  provider: string
  css: string
}

@Component
export default class ConnectWallet extends Vue {
  @WEB3_STORE.State('authToken') web3_auth_token!: string
  @WEB3_STORE.State('walletAddress') web3_wallet_address!: string
  @WEB3_STORE.Action('setAuthToken') web3_set_auth_token!: (
    payload: string
  ) => void

  @WEB3_STORE.Action('setWalletAddress') web3_set_wallet_address!: (
    payload: string
  ) => void

  @WEB3_STORE.Action('setProvider') web3_set_provider!: (
    payload: string
  ) => void

  @Prop({ default: '' }) component!: string
  @Prop({ default: '' }) height!: string
  @Prop({ default: '' }) width!: string
  @Prop({ default: '' }) color!: string
  @Prop({ default: '' }) css!: string
  @Prop({ default: false }) outlined!: boolean
  @Prop({ default: false }) tile!: boolean
  @Prop({ default: false }) text!: boolean
  @Prop({ default: false }) block!: boolean
  @Prop({ default: false }) ripple!: boolean

  walletDialog: boolean = false

  smartChainBSChainId: number = 56

  wallets: WalletInterface[] = [
    {
      name: 'MetaMask',
      logo: '/logo/wallets/meta-mask.svg',
      provider: 'metamask',
      css: 'metamask--container',
    },
    // {
    //   name: 'WalletConnect',
    //   logo: '/logo/wallets/wallet-connect.svg',
    //   provider: 'walletconnect',
    //   css: 'connectwallet--container',
    // },
    // {
    //   name: 'Fortmatic',
    //   logo: '/logo/wallets/fortmatic.png',
    // },
    // {
    //   name: 'Coinbase Wallet',
    //   logo: '/logo/wallets/coinbase-wallet.png',
    // },
    // {
    //   name: 'MyEtherWallet',
    //   logo: '/logo/wallets/my-ether-wallet.png',
    // },
  ]

  get walletAddress(): string {
    return `${this.web3_wallet_address.substring(
      0,
      5
    )}...${this.web3_wallet_address.substring(
      this.web3_wallet_address.length - 4
    )}`
  }

  /**
   * Connect to wallet
   *
   * @param   {WalletInterface<void>}  wallet
   *
   * @return  {Promise<void>}
   */
  async connectToWallet(wallet: WalletInterface): Promise<void> {
    switch (wallet.provider) {
      case 'metamask':
        try {
          const accounts: string[] = await (window as any).ethereum.request({
            method: 'eth_requestAccounts',
          })

          // init global web3
          this.$web3.initWeb3Provider((window as any).ethereum)
          this.$web3.initJsonRPCProvider(this.$config.web3JsonRPC)

          // check and switch network
          this.switchMetamaskNetwork()

          // get wallet address
          const [account] = accounts
          this.web3_set_wallet_address(account)

          // save web3 flags
          this.saveWeb3TrackingFlags(wallet.provider)
          this.walletDialog = false
        } catch (error) {
          const { message } = error as Error

          if (
            message.includes('denied') ||
            message.includes('User rejected the request')
          ) {
            this.$toast.error('You cancelled the transaction')
          } else {
            this.$toast.error(message)
          }

          this.clearWeb3TrackingFlags()
          return
        }

        // subscribe to accounts change
        ;(window as any).ethereum.on(
          'accountsChanged',
          (accounts: string[]) => {
            if (accounts.length === 0) {
              this.clearWeb3TrackingFlags()

              alert('Wallet successfully disconnected')
              return
            }

            this.clearWeb3TrackingFlags()
            alert('Please connect your wallet again.')
            location.reload()
          }
        )

        // subscribe to chainId change
        ;(window as any).ethereum.on('chainChanged', (chainId: number) => {
          console.log('chainId', chainId)
          location.reload()
        })

        // subscribe to session disconnection
        ;(window as any).ethereum.on(
          'disconnect',
          (code: number, reason: string) => {
            console.log('disconnect', code, reason)
          }
        )
        break

      default:
        this.$toast.error('Cannot connect to wallet')
    }

    // get signer
    const signer = this.$web3.getWeb3Provider().getSigner()
    const jsonRPCsigner = this.$web3
      .getJsonRPCProvider()
      .getSigner(this.web3_wallet_address)

    // initialize contracts
    this.$web3.initBaconContract(
      this.$config.baconContractAddress,
      this.$config.baconContractABI,
      signer,
      jsonRPCsigner
    )
    this.$web3.initGreaseContract(
      this.$config.greaseContractAddress,
      this.$config.greaseContractABI,
      signer,
      jsonRPCsigner
    )
    this.$web3.initTheFryingPanContract(
      this.$config.theFryingPanContractAddress,
      this.$config.theFryingPanContractABI,
      signer,
      jsonRPCsigner
    )
  }

  // TODO: enable when protected API calls are needed
  /**
   * Verify signature
   *
   * @param   {VerifySignatureRequest<void>}  data
   *
   * @return  {Promise<void>}
   */
  // async verifySignature(data: VerifySignatureRequest): Promise<void> {
  //   try {
  //     const response = await this.$authRepository.VerifySignature(data)

  //     // force logout email logged in
  //     this.forceLogoutEmail()

  //     this.setAuthToken(response.data.accessToken)
  //   } catch (e) {
  //     const error = e as ErrorAPIResponseInterface

  //     alert(`${error.message} [${error.errorCode}]`)
  //   }
  // }

  /**
   * Clear web3 tracking flags when locked
   *
   * @return  {void}
   */
  clearWeb3TrackingFlags(): void {
    // clear tracking flags
    localStorage.removeItem('web3_connect_cached_provider')
    localStorage.removeItem('wallet_provider')

    // clear state
    this.web3_set_wallet_address('')

    // clear auth token
    // TODO: enable when protected API calls are needed
    // this.web3_set_auth_token('')
    // localStorage.removeItem('auth._local')
  }

  /**
   * Disconnect wallet
   *
   * @return  {<void>}
   */
  disconnectWallet(): void {
    if (confirm('Are you sure you want to disconnect this wallet?')) {
      this.clearWeb3TrackingFlags()
      this.walletDialog = true
    } else {
      this.walletDialog = false
    }
  }

  // TODO: enable when protected API calls are needed
  /**
   * Get auth access token
   *
   * @return  {string}
   */
  // getAuthToken(): string | null {
  //   return localStorage.getItem('auth._local')
  // }

  // TODO: enable when protected API calls are needed
  /**
   * Set auth access token
   *
   * @param   {string}  accessToken
   *
   * @return  {void}
   */
  // setAuthToken(accessToken: string): void {
  //   this.web3_set_auth_token(accessToken)
  //   localStorage.setItem('auth._local', `Bearer ${accessToken}`)
  // }

  /**
   * Save web3 tracking flags from localstorage
   *
   * @param   {string}  provider
   *
   * @return  }
   */
  saveWeb3TrackingFlags(provider: string) {
    localStorage.setItem('web3_connect_cached_provider', 'injected')
    localStorage.setItem('wallet_provider', provider)
  }

  async switchMetamaskNetwork(): Promise<void> {
    if (this.$config.debug) {
      try {
        // switch to testnet bsc
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }], // write the chainId here
        })
      } catch (error) {
        // add network to metamask (remove if metamask default networks)
        // await (window as any).ethereum.request({
        //   method: 'wallet_addEthereumChain',
        //   params: [
        //     {
        //       chainId: '0x61',
        //       chainName: 'BSC Testnet',
        //       nativeCurrency: {
        //         symbol: 'BNB',
        //         decimals: 18,
        //       },
        //       rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        //       blockExplorerUrls: ['https://testnet.bscscan.com'],
        //     },
        //   ],
        // })
      }
    } else {
      try {
        // switch to mainnet ethereum
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }], // write the chainId here
        })
      } catch (error) {
        const { message } = error as Error

        if (
          message.includes('denied') ||
          message.includes('User rejected the request')
        ) {
          this.$toast.error('You cancelled the transaction')
        } else {
          this.$toast.error(message)
        }

        this.clearWeb3TrackingFlags()
      }
    }
  }

  mounted(): void {
    // check if account already exposed
    const web3ConnectCache = localStorage.getItem(
      'web3_connect_cached_provider'
    )
    const walletProvider = localStorage.getItem('wallet_provider')

    // only mount for header or drawer
    if (
      (this.component === 'header' || this.component === 'drawer') &&
      web3ConnectCache !== null &&
      web3ConnectCache === 'injected' &&
      walletProvider !== null
    ) {
      if (walletProvider === 'metamask')
        this.connectToWallet({
          provider: walletProvider,
          css: 'metamask--container',
        })
    }
  }
}
</script>

<style>
.metamask--container {
  background: linear-gradient(
    90deg,
    #f5841f 0%,
    #ff5c00 0.01%,
    #ffdc24 100%
  ) !important;
}
.connectwallet--container {
  background: linear-gradient(90deg, #8d00ff 0%, #392ef7 100%) !important;
}
</style>
