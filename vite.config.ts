import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

// https://vitejs.dev/config/

export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: getViteEnv(mode, 'VITE_APP_TITLE'),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'), // @代替src
        '#': resolve(__dirname, './types'), // #代替types
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
  });
