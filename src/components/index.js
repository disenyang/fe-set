import Highlight from './highlight/index.js'
import Nav from './nav/index.js'
import Button from './button/index.js'
import Icon from './icon/index.js'
import Sidebar from './sidebar/index.js'
import Container from './container/index.js'
import Row from './row/index.js'
import Input from './input/index.js'

import '../css/index.css'
let Components = {
  Highlight,
  Nav,
  Sidebar,
  Button,
  Icon,
  Container,
  Row,
  Input
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
