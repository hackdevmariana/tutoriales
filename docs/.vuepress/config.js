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
      { text: 'Frameworks',
      children: [
        { text: 'Vue', link: '/vue/' },
        { text: 'Nuxt', link: '/nuxt/' },
        { text: 'VuePress', link: '/vuepress/' },
       ],
      },
    ],
    sidebar: {
          '/tecnologias/': [
            {
              text: 'Tecnologías',
              children: [
                { text: 'Introducción', link: '/tecnologias/' },
                { text: 'Markdown', link: '/tecnologias/markdown' },
              ],
            },
          ],
          '/python/': [
            {
              text: 'Python',
              children: [
                { text: 'Introducción', link: '/python/' },
                { text: 'Cadenas', link: '/python/cadenas' },
              ],
            },
          ],
          '/vue/': [
            {
              text: 'Vue',
              children: [
                { text: 'Introducción', link: '/vue/' },
                { text: 'Multiples Servidores', link: '/vue/multiples-servidores' },
              ],
            },
          ],
          '/vuepress/': [
            {
              text: 'VuePress',
              children: [
                { text: 'Introducción', link: '/vuepress/' },
                { text: 'Configuración', link: '/vuepress/config' },
                { text: 'Imágenes', link: '/vuepress/imagenes' },
                { text: 'Copy Code', link: '/vuepress/copy-code' },
              ],
            },
          ],
          '/nuxt/': [
            {
              text: 'Nuxt',
              children: [
                { text: 'El primer hola mundo', link: '/nuxt/' },
                // { text: 'Multiples Servidores', link: '/vue/multiples-servidores' },
              ],
            },
          ],
        },
  }),
  base: '/tutoriales/',
  // plugins: [
  //   [fullTextSearchPlugin],
  // ],
});
