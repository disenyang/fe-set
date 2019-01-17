import * as types from '../mutation-types'

const onresize = () => {
  return {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight
  }
}

const state = {
  leftBarWidth: 93,
  headerBarHeight: 65,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight
}

const actions = {
  setResize ({
    commit
  }, padding) {
    let clientSize = onresize()
    if (padding) clientSize.padding = padding
    commit(types.SET_ONRESIZE, clientSize)
  }
}

const mutations = {
  [types.SET_ONRESIZE] (state, clientSize) {
    state.clientWidth = clientSize.clientWidth - state.leftBarWidth
    state.clientHeight = clientSize.clientHeight - (!clientSize.padding ? state.headerBarHeight : clientSize.padding)
  }
}

export default {
  state,
  actions,
  mutations
}
