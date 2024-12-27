import { App } from 'vue';

export default {
  install: (app: App) => {
    app.config.globalProperties.$globalFunction = () => {
      console.log('This is a global function');
    };
  }
};