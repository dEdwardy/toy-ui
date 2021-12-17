/* eslint-disable */

/** 
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

{{ importPlugins }}

const ToyUIPlugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  },
};

export default ToyUIPlugin;

{{ exportPlugins }}