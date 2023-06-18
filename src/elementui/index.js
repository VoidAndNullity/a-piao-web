// element ui 按需引入
import {
  Tooltip, 
  Row,
  Col,
  Card,
  Divider,
  Avatar,
  Skeleton,
  SkeletonItem,
  Drawer,
  Popover
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Tooltip);
    Vue.use(Row);
    Vue.use(Col);
    // Vue.use(Card);
    Vue.use(Divider);
    Vue.use(Avatar);
    Vue.use(Skeleton);
    Vue.use(SkeletonItem);
    Vue.use(Drawer);
    Vue.use(Popover);
  }
}
export default element