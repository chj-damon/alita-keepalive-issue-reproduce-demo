import { defineConfig } from '@umijs/max';

export default defineConfig({
  plugins: [
    require.resolve('@alita/plugins/dist/keepalive'),
    require.resolve('@alita/plugins/dist/tabs-layout'),
  ],
  keepalive: [/./], // 所有的页面都会被状态保持
  tabsLayout: {},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
