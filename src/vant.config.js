// Vant组件配置入口
import Vue from 'vue';

import { Swipe, SwipeItem, Grid, GridItem, Icon, Form, Field, Popup, Picker, DatetimePicker, Button, List, PullRefresh, cell, Image as VanImage, Switch, CellGroup } from 'vant';

const components = [Swipe, SwipeItem, Grid, GridItem, Icon, Form, Field, Popup, Picker, DatetimePicker, Button, List, PullRefresh, cell, VanImage, Switch, CellGroup];

components.forEach(component => Vue.use(component));
