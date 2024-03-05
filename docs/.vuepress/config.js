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
				{ text: 'Git', link: '/git/' },
			 ],
			},
			{ text: 'Lenguajes',
			children: [
        { text: 'CSS', link: '/css/' },
        { text: 'JavaScript', link: '/javascript/' },
        { text: 'Python', link: '/python/' },
        { text: 'R', link: '/r/' },
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
          '/javascript/': [
            {
              text: 'JavaScript',
              children: [
                { text: 'Introducción', link: '/javascript/' },
                { text: 'Ciclos for', link: '/javascript/for' },
                { text: 'Ciclos while y do-while', link: '/javascript/while' },
                { text: 'Estructuras if', link: '/javascript/if' },
              ],
            },
          ],
          '/r/': [
            {
              text: 'R',
              children: [
                { text: 'Introducción', link: '/r/' },
                { text: 'Operaciones matemáticas', link: '/r/operaciones-matematicas' },
                { text: 'Partes del discurso (PLN)', link: '/r/pos' },
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
                { text: 'Crear repositorio en GitHub', link: '/git/repositorio' },
              ],
            },
          ],
          '/css/': [
            {
              text: 'CSS',
              children: [
                { text: 'Introducción', link: '/css/' },
                { text: 'Centrar imágenes', link: '/css/centar-imagen' },
                { text: 'Imágenes circulares', link: '/css/imagenes-circulares' },
                { text: 'Propiedades para letras', link: '/css/textos' },
                { text: 'Propiedad scroll-behavior', link: '/css/scroll-behavior' },
              ],
            },
          ],
          '/bootstrap/': [
            {
              text: 'Bootstrap',
              children: [
                { text: 'Introducción', link: '/bootstrap/' },
                { text: 'Lista sin puntos', link: '/bootstrap/lista-sin-puntos' },
              ],
            },
          ],
          '/linux/': [
            {
              text: 'Bash y GNU/Linux',
              children: [
                { text: 'Introducción', link: '/linux/' },
                { text: 'Formatear USB', link: '/linux/formatear-usb' },
              ]
            }
          ],
          '/python/': [
            {
              text: 'Python',
              children: [
                { text: 'Introducción', link: '/python/' },
                { text: 'Subir proyecto a GitHub', link: '/python/github' },
                { text: 'Subir proyecto a PyPI', link: '/python/pypi' },
                { text: 'Documentar código', link: '/python/documentacion' },
                { text: 'Documentar código con Sphinx', link: '/python/sphinx' },
                { text: 'Cadenas', link: '/python/cadenas' },
                { text: 'Ciclos for', link: '/python/for' },
                { text: 'Cómo saber en Python si un fichero o un directorio existe', link: '/python/existe-fichero.md' },
                { text: 'Módulo pathlib', link: '/python/pathlib' },
                { text: 'CLI con click', link: '/python/click' },
                { text: 'Dar color a las salidas de texto con colorama', link: '/python/colorama' },
                { text: 'Trabajar con imágenes con PILLOW', link: '/python/pillow' },
              ],
            },
          ],
          '/php/': [
            {
              text: 'PHP',
              children: [
                { text: 'Introducción', link: '/php/' },
                { text: 'Redireccionar una página', link: '/php/redireccion' },
              ],
            },
          ],
          '/vue/': [
            {
              text: 'Vue',
              children: [
                { text: 'Introducción', link: '/vue/' },
                { text: 'Multiples Servidores', link: '/vue/multiples-servidores' },
                { text: 'Ejecutar función al hacer clic', link: '/vue/clic' },
                { text: 'Composition API con parámetros', link: '/vue/composition-api-con-parametros' },
                { text: 'Composition API con script', link: '/vue/composition-api-con-script' },
                { text: 'Composition API con script setup', link: '/vue/composition-api-con-script-setup' },
                { text: 'Recepción de parámetros', link: '/vue/recepcion-parametros' },
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
                { text: 'Personalizar el error 404', link: '/nuxt/404' },
                { text: 'Uso de las rutas de Nuxt', link: '/nuxt/rutas' },
                { text: 'Mostrar imagen en Nuxt', link: '/nuxt/mostrar-imagen' },
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
