import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import list from '../../packages/list.json'
// const routes = [{
//   title: '按钮',
//   name: 'Button',
//   path: '/components/Button',
//   component: () => import(`packages/Button/docs/README.md`),
// }];


const routes = list.map(i => {
  return {
    title: i.compZhName,
    name:i.compName,
    path:`/components/${i.compName}`,
    component:() => import(/* @vite-ignore */`../../packages/${i.compName}/docs/README.md`),
  }
})
const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;