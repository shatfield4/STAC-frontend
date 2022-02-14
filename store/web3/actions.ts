import { ActionTree } from 'vuex'
import { StateInterface } from './state.types'

const Actions: ActionTree<StateInterface, () => void> = {
  setAuthToken(context, payload: string) {
    context.commit('SET_AUTH_TOKEN', payload)
  },
  setWalletAddress(context, payload: string) {
    context.commit('SET_WALLET_ADDRESS', payload)
  },
}

export default Actions
