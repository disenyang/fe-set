import objectRemoveNull from './objectRemoveNull'
import emitter from './emitter'
import uuid from './uuid'
import zindex from './zindex'
import popper from './casion-popper'
import mixins from './mixins'

let memory = {
  zIndex: 2000
}
function nextZIndex () {
  return memory.zIndex++
}
export {
  nextZIndex,
  objectRemoveNull,
  emitter,
  uuid,
  zindex,
  popper,
  mixins
}
export default {
  nextZIndex,
  objectRemoveNull,
  emitter,
  uuid,
  zindex,
  popper,
  mixins
}
