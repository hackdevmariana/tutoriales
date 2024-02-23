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
        { text: 'CSS', link: '/css/' },
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
          '/git/': [
            {
              text: 'Git',
              children: [
                { text: 'Introducción', link: '/git/' },
                { text: 'Crear access tokens', link: '/git/access-token' },
                { text: 'Crear páginas en GitHub Pages', link: '/git/github-pages' },
              ],
            },
          ],
          '/css/': [
            {
              text: 'CSS',
              children: [
                { text: 'Introducción', link: '/css/' },
                { text: 'Imágenes circulares', link: '/css/imagenes-circulares' },
              ],
            },
          ],
          '/python/': [
            {
              text: 'Python',
              children: [
                { text: 'Introducción', link: '/python/' },
                { text: 'Cadenas', link: '/python/cadenas' },
                { text: 'CLI con click', link: '/python/click' },
                { text: 'Subir proyecto a GitHub', link: '/python/github' },
                { text: 'Subir proyecto a PyPI', link: '/python/pypi' },
              ],
            },
          ],
          '/vue/': [
            {
              text: 'Vue',
              children: [
                { text: 'Introducción', link: '/vue/' },
                { text: 'Multiples Servidores', link: '/vue/multiples-servidores' },
                { text: 'Composition API con parámetros', link: '/vue/composition-api-con-parametros' },
                { text: 'Composition API con parámetros', link: '/vue/composition-api-con-script' },
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
                { text: 'Función definePageMeta', link: '/nuxt/definepagemeta' },
                { text: 'Configuración del proyecto', link: '/nuxt/config' },
                { text: 'Estructura de un proyecto', link: '/nuxt/estructura' },
                { text: 'Uso de Bootstrap en Nuxt', link: '/nuxt/bootstrap' },
                { text: 'CSS personalizados en Nuxt', link: '/nuxt/css' },
                { text: 'Subir proyecto a GitHub Pages', link: '/nuxt/github-pages' },
                { text: 'Uso de git con Nuxt', link: '/nuxt/git' },

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
