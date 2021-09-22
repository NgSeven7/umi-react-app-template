import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  title: 'Umi-React-App-Template',
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: true,
  },
});
