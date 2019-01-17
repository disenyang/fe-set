import JyHighlight from './highlight'

JyHighlight.install = Vue => {
  Vue.component(JyHighlight.name, JyHighlight)
}

export default JyHighlight
