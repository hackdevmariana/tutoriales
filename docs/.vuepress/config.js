import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  base: "/tutoriales/",  
  bundlerConfig: {
    viteOptions: {
      build: {
        assetsDir: "assets", 
      },
    },
  },
});
plugins: [
'vuepress-plugin-code-copy'
];

