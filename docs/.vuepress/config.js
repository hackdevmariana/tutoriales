import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  title: 'Programación en español',
  description: 'Linux, JavaScript, Vue, Python, Django y más.',
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/assets/hackertux.png',
    themeConfig: {
      search: true,
      searchMaxSuggestions: 10, // Ajusta según tus necesidades
      // ... otras configuraciones del tema
    },

    navbar: [
      { text: 'Tecnologías',
        children: [
          { text: 'Markdown', link: '/markdown/' },
          { text: 'Ficheros y directorios', link: '/ficheros-y-directorios/' },
        ],
      },
      { text: 'Lenguajes de programación',
        children: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
          { text: 'Bootstrap', link: '/bootstrap/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: 'Vue', link: '/vue/' },
          { text: 'VuePress', link: '/vuepress/' },
          { text: 'Python', link: '/python/' },
          { text: 'Django', link: '/django/' },
          { text: 'Django - Vue', link: '/django-vue/' },
        ],
      },
    ],
    sidebar: {
          icon: '/assets/hackertux.png',
      '/bootstrap/': [
        '',
        'botones',
      ],
    },
  }),
  base: '/tutoriales/',
  bundlerConfig: {
    viteOptions: {
      build: {
        assetsDir: 'assets',
      },
    },
  },
  plugins: ['@vuepress/plugin-search'],
});

