import Row from './row'
import Col from './col'

Row.install = Vue => {
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
}
export default Row
