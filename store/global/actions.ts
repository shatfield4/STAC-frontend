import { ActionTree } from 'vuex'
import { StateInterface } from './state.types'

const Actions: ActionTree<StateInterface, () => void> = {
  setStakedListLastTimestamp(context, payload: number) {
    context.commit('SET_STAKED_LIST_LAST_TIMESTAMP', payload)
  },
  setUnstakedListLastTimestamp(context, payload: number) {
    context.commit('SET_UNSTAKED_LIST_LAST_TIMESTAMP', payload)
  },
}

export default Actions
