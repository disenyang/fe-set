import * as types from '../mutation-types'

const state = {
  count: 1,
  contentTabs: [],
  refreshFixTab: '',
  cachedTabs: [],
  viewNames: {
    follow: 'follow'
  }
}

const actions = {
  setCount ({
    commit
  }) {
    commit(types.SET_COUNT)
  },
  setContentTabs ({
    commit
  }, contentTabs) {
    commit(types.SET_CONTENT_TABS, contentTabs)
  },
  setRefreshFixTab ({
    commit
  }, path) {
    commit(types.SET_REFRESH_FIX_TAB, path)
  },
  setCachedTabs ({
    commit
  }, tab) {
    commit(types.SET_CACHED_TABS, tab)
  },
  setTabViewName ({
    commit
  }, [bizName, viewName]) {
    commit(types.SET_TAB_VIEW_NAME, [bizName, viewName])
  }
}

const mutations = {
  [types.SET_COUNT] (state) {
    state.count++
  },
  [types.SET_CONTENT_TABS] (state, contentTabs) {
    state.contentTabs = contentTabs
  },
  [types.SET_REFRESH_FIX_TAB] (state, path) {
    state.refreshFixTab = path
  },
  [types.SET_CACHED_TABS] (state, tab) {
    let t = state.cachedTabs.find((tempTab) => {
      return tempTab.name === tab.name
    })
    if (!t) {
      state.cachedTabs.push(tab)
    }
  },
  [types.SET_TAB_VIEW_NAME] (state, [bizName, viewName]) {
    state.viewNames[bizName] = viewName
  }
}

export default {
  state,
  actions,
  mutations
}
