// museui 按需引入
import {
    Button,
    Menu,
    List,
    AppBar,
} from 'muse-ui';

const muse = {
    install: function (Vue) {
        Vue.use(Button);
        Vue.use(Menu);
        Vue.use(List);
        Vue.use(AppBar);
    }
}
export default muse