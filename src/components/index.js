import Highlight from './highlight/index.js'

let Components = {
  Highlight
}

let install = Vue => {
  console.log(Components)
  if (install.installed) return
  Object.keys(Components).forEach(key => Components[key].install(Vue))
  install.installed = true
}

export default {
  install,
  ...Components
}
