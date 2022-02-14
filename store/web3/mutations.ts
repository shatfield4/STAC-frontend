import { MutationTree } from 'vuex'
import { StateInterface } from './state.types'

const Mutations: MutationTree<StateInterface> = {
  SET_AUTH_TOKEN(state, data: string) {
    state.authToken = data
  },
  SET_WALLET_ADDRESS(state, data: string) {
    state.walletAddress = data
  },
}

export default Mutations
