import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
      sass: {
        implementation: require('node-sass'),
        sassOptions: {
            data: `$classPre: cpocar-fishing-ee;`,
        }
    },
    define: {
        classPre: 'cpocar-fishing-ee'
    }
});
