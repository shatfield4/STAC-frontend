import {
  StagingBaconContractAddress,
  StagingGREASEContractAddress,
  StagingTheFryingPanContractAddress,
  StagingTheFryingPanContractV2Address,
  StagingBaconContractABI,
  StagingGREASEContractABI,
  StagingTheFryingPanContractABI,
  StagingBurnGameContractAddress,
  StagingTheFryingPanContractV2ABI,
  StagingBurnGameContractABI
} from './contracts/staging'

const DEBUG = process.env.NODE_ENV !== 'production'
const PROD = false
const APP_NAME = 'Stoned Apes vs Fed Apes | STAC'
const APP_DESCRIPTION =
  'Stoned Apes vs Fed Apes game is based on the popular wolf.game with unique mechanics.'
const APP_URL = 'https://stonedapeclub.com'
const API_URL = 'https://api.stonedapeclub.com'
const API_V2_URL = 'https://apiv2.stonedapeclub.com'

export default {
  ssr: false,
  target: 'static',
  generate: {
    fallback: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | STAC',
    title: 'Stoned Apes vs Fed Apes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: APP_DESCRIPTION || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'stoned apes, fed apes, stoned apes vs fed apes game, stoned apes vs fed apes nft, nft, game, ape, bored ape yacht club',
      },
      // OG Tag setup
      // https://vue-meta.nuxtjs.org/api/#meta
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type',
      },
      {
        property: 'og:title',
        content: APP_NAME,
        vmid: 'og:title',
      },
      {
        property: 'og:description',
        content: APP_DESCRIPTION,
        vmid: 'og:description',
      },
      {
        property: 'og:site_name',
        content: APP_URL,
        vmid: 'og:site_name',
      },
      {
        property: 'og:url',
        content: APP_URL,
        vmid: 'og:url',
      },
      {
        property: 'og:image',
        content: APP_URL + '/icon.png',
        vmid: 'og:image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/repository' },
    { src: '~/plugins/components/vue-slick-carousel' },
    { src: '~/plugins/components/icons' },
    { src: '~/plugins/utils' },
    { src: '~/plugins/web3' },
    // {src: '~/plugins/apiv2'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'vue-toastification/nuxt',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { duration: 1000 }],
  ],
  /**
   * Public runtime configs
   */
  publicRuntimeConfig: {
    appName: APP_NAME,
    apiUrl: API_URL,
    debug: PROD,
    web3JsonRPC:
      'https://mainnet.infura.io/v3/7b050d0db39f444e849f866cfac6c585',
    // contract addresses
    baconContractAddress: StagingBaconContractAddress,
    greaseContractAddress: StagingGREASEContractAddress,
    theFryingPanContractAddress: StagingTheFryingPanContractAddress,
    theFryingPanContractV2Address: StagingTheFryingPanContractV2Address,
    burnGameContractAddress: StagingBurnGameContractAddress,
    // contract ABI
    baconContractABI: StagingBaconContractABI,
    greaseContractABI: StagingGREASEContractABI,
    theFryingPanContractABI: StagingTheFryingPanContractABI,
    theFryingPanContractV2ABI: StagingTheFryingPanContractV2ABI,
    burnGameContractABI: StagingBurnGameContractABI,
  },
  /**
   * Private runtime configs
   */
  privateRuntimeConfig: {},
  /**
   *  PWA module configuration
   *  https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    meta: {
      title: APP_NAME,
    },
    manifest: {
      name: APP_NAME,
      short_name: APP_NAME,
      description: APP_DESCRIPTION,
      start_url: APP_URL,
      lang: 'en',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: API_URL,
    debug: DEBUG,
  },
  // axios2: {
  //   baseURL: API_V2_URL,
  //   debug: DEBUG,
  // },
  toast: {
    transition: 'Vue-Toastification__fade',
    maxToasts: 20,
    newestOnTop: true,
    position: 'bottom-left',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
  },
}
