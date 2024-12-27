import { App } from 'vue';
import permission from './permission';
import hasPermi from './hasPermi';
import numberOnly from './numberOnly';

export default {
  install(Vue: App) {
    Vue.directive('permission', permission);
    Vue.directive('hasPermi', hasPermi);
    Vue.directive('number-only', numberOnly);
  },
};
