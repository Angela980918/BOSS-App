import { createApp } from "vue";
import "vant/lib/index.css";
import "./assets/css/style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { directives } from "./utils/common";
import {
  Search,
  Button,
  Toast,
  NavBar,
  Tabbar,
  TabbarItem,
  Checkbox,
  Icon,
  Popup,
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  ActionBarIcon,
  Tab,
  Tabs,
  Loading,
  Field,
  SwipeCell,
  Uploader,
  Form,
  ActionSheet,
  DatePicker,
  Area,
  Picker,
  CheckboxGroup,
} from "vant";
import "./utils/rem";

const app = createApp(App);
directives(app);
app.use(Search);
app.use(SwipeCell);
app.use(Field);
app.use(Button);
app.use(Toast);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Checkbox);
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(List);
app.use(PullRefresh);
app.use(ActionBarIcon);
app.use(Tab);
app.use(Tabs);
app.use(Loading);
app.use(Popup);
app.use(Uploader);
app.use(Form);
app.use(ActionSheet);
app.use(DatePicker);
app.use(Area);
app.use(Picker);
app.use(CheckboxGroup);
app.use(store);
app.use(router);
app.mount("#app");
