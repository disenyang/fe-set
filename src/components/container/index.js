import Container from './container'
import Aside from './aside'
import Header from './header'
import Footer from './footer'
import Main from './main'

Container.install = Vue => {
  Vue.component(Container.name, Container)
  Vue.component(Aside.name, Aside)
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Main.name, Main)
}

export default Container
