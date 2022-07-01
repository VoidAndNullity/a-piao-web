// element ui 按需引入
import { Button, Select } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Select)
  }
}
export default element