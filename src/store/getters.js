const getters = {
  // common
  count: state => state.common.count,
  contentTabs: state => state.common.contentTabs,
  refreshFixTab: state => state.common.refreshFixTab,
  cachedTabs: state => state.common.cachedTabs,
  followViewName: state => state.common.viewNames.follow,

  // page resize
  clientWidth: state => state.onresize.clientWidth,
  clientHeight: state => state.onresize.clientHeight
}

export default getters
