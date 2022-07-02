// element ui 按需引入
import { Tooltip } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Tooltip);
  }
}
export default element