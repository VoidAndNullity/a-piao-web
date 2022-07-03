// element ui 按需引入
import {
  Tooltip, 
  Row,
  Col,
  Card,
  Divider,
  Avatar
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Tooltip);
    Vue.use(Row);
    Vue.use(Col);
    // Vue.use(Card);
    Vue.use(Divider);
    Vue.use(Avatar);
  }
}
export default element