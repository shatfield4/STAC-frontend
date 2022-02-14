import { MutationTree } from 'vuex'
import { StateInterface } from './state.types'

const Mutations: MutationTree<StateInterface> = {
  SET_STAKED_LIST_LAST_TIMESTAMP(state, data: number) {
    state.stakedListLastTimestamp = data
  },
  SET_UNSTAKED_LIST_LAST_TIMESTAMP(state, data: number) {
    state.unstakedListLastTimestamp = data
  },
}

export default Mutations
