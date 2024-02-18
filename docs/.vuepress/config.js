import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';
import { fullTextSearchPlugin } from "vuepress-plugin-full-text-search2";


export default defineUserConfig({
  title: 'Programación en español',
  description: 'Linux, JavaScript, Vue, Python, Django y más.',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
			{ text: 'Tecnologías',
			  // link: '/comandos/',
			children: [
				{ text: 'Markdown', link: '/markdown/' },
			 ],
			},
			{ text: 'Lenguajes',
			children: [
				{ text: 'Python', link: '/python/' },
			 ],
		  },
    ],

    sidebar: {
      '/tecnologias/': [
        '',
        'markdown',
      ],
      '/python/': [
        '',
        'cadenas',
      ],
      '/vue/': [
        '',
        'multiples-servidores',
      ],
      '/vuepress/': [
        '',
        'imagenes',
      ],
    },
  }),
  base: '/tutoriales/',
  // plugins: [
  //   [fullTextSearchPlugin],
  // ],
});
