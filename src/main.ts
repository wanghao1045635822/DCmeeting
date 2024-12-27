import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import GlobalFunctions from './plugins/globalFunctions';
import VConsole from 'vconsole';
import './mock';
import App from './App.vue';
import './utils/rem.js'
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '@/assets/style/global.less';
import '@/api/interceptor';

import eruda from 'eruda';
eruda.init();


const app = createApp(App);


app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(i18n);
app.use(globalComponents);

app.use(directive);
// 封装全局函数
app.use(GlobalFunctions);
// 初始化 VConsole
// const vconsole = new VConsole();
// app.use(vconsole);

app.mount('#app');

import './utils/UEmethod'

// 主应用中添加全局方法
app.config.globalProperties.$messageSuccess = function (data) {
  this.$message.success(data)
};
app.config.globalProperties.$messageWarning = function (data) {
  this.$message.warning(data)
};
app.config.globalProperties.$messageError = function (data) {
  this.$message.error(data)
};
app.config.globalProperties.$messageInfo = function (data) {
  this.$message.info(data)
};
app.config.globalProperties.$messageNormal = function (data) {
  this.$message.normal(data)
};

