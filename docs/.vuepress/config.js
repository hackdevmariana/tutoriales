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
        { text: 'GNU/Linux', link: '/linux/' },
        { text: 'Markdown', link: '/markdown/' },
        { text: 'Git', link: '/git/' },
        { text: 'YAML', link: '/yaml/' },
				{ text: 'Vi', link: '/vi/' },
			 ],
			},
			{ text: 'Lenguajes',
			children: [
        { text: 'HTML', link: '/html/' },
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
        { text: 'Laravel', link: '/laravel/' },
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
                { text: 'Vi', link: '/tecnologias/vi' },
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
          '/laravel/': [
            {
              text: 'Laravel',
              children: [
                { text: 'Instalación', link: '/laravel/' },
              ],
            },
          ],
          '/r/': [
            {
              text: 'R',
              children: [
                { text: 'Introducción', link: '/r/' },
                { text: 'Tipos de datos', link: '/r/tipos-de-datos' },
                { text: 'Operaciones matemáticas', link: '/r/operaciones-matematicas' },
                { text: 'Estructuras de datos', link: '/r/estructuras-de-datos' },
                { text: 'Definición de estructuras de datos', link: '/r/defincion-de-estructuras' },
                { text: 'Operar con estructuras', link: '/r/operar-de-estructuras' },
                { text: 'Vectores', link: '/r/vectores' },
                { text: 'Matrices', link: '/r/matrices' },
                { text: 'Dataframes', link: '/r/dataframes' },
                { text: 'Función seq()', link: '/r/seq' },
                { text: 'Partes del discurso (PLN)', link: '/r/pos' },
                { text: 'Gráficos', link: '/r/graficos' },
                { text: 'Paquete ggplot2', link: '/r/ggplot2' },
                { text: 'Gráficos con ggplot2', link: '/r/graficos-con-ggplot2' },
              ],
            },
          ],
          '/git/': [
            {
              text: 'Git',
              children: [
                { text: 'Introducción', link: '/git/' },
                { text: 'Deshacer y rehacer commits', link: '/git/deshacer-y-rehacer-cambios' },
                { text: 'Crear access tokens', link: '/git/access-token' },
                { text: 'Crear páginas en GitHub Pages', link: '/git/github-pages' },
                { text: 'Crear repositorio en GitHub', link: '/git/repositorio' },
              ],
            },
          ],
          '/vi/': [
            {
              text: 'Vi',
              children: [
                { text: 'Introducción', link: '/vi/' },
                { text: 'Autocompletado', link: '/vi/autocompletado' },
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
          '/html/': [
            {
              text: 'HTML',
              children: [
                { text: 'Introducción', link: '/html/' },
                { text: 'Botones', link: '/html/button' },
                { text: 'Label', link: '/html/label' },
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
                { text: 'Ver los sistemas de ficheros', link: '/linux/sistemas-de-ficheros' },
                { text: 'Comprimir y descomprimir ficheros zip', link: '/linux/zip' },
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
                { text: 'Cadenas pseudoaleatorias', link: '/python/caracteres-aleatorios' },
                { text: 'Ciclos for', link: '/python/for' },
                { text: 'Ciclos con enumerate', link: '/python/enumerate' },
                { text: 'Parámetros en funciones', link: '/python/parametros' },
                { text: 'Generadores', link: '/python/yield' },
                { text: 'Expresiones generadoras', link: '/python/expresiones-generadoras' },
                { text: 'Decoradores', link: '/python/decoradores' },
                { text: 'Double underscore', link: '/python/dunder' },
                { text: 'Cómo saber en Python si un fichero o un directorio existe', link: '/python/existe-fichero.md' },
                { text: 'Extraer nombre de fichero y extensión', link: '/python/nombres-de-ficheros.md' },
                { text: 'Módulo pathlib', link: '/python/pathlib' },
                { text: 'CLI con click', link: '/python/click' },
                { text: 'Dar color a las salidas de texto con colorama', link: '/python/colorama' },
                { text: 'Trabajar con imágenes con PILLOW', link: '/python/pillow' },
                { text: 'Convertir a vectorial', link: '/python/convertir-a-vectorial' },
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
                { text: 'Cambiar el puerto del servidor', link: '/nuxt/puerto-servidor' },
                { text: 'Función definePageMeta', link: '/nuxt/definepagemeta' },
                { text: 'Configuración del proyecto', link: '/nuxt/config' },
                { text: 'Estructura de un proyecto', link: '/nuxt/estructura' },
                { text: 'Personalizar el error 404', link: '/nuxt/404' },
                { text: 'Uso de las rutas de Nuxt', link: '/nuxt/rutas' },
                { text: 'Uso de NuxtLink', link: '/nuxt/nuxtlink' },
                { text: 'Mostrar imagen en Nuxt', link: '/nuxt/mostrar-imagen' },
                { text: 'Layout', link: '/nuxt/layout' },
                { text: 'Uso de Bootstrap en Nuxt', link: '/nuxt/bootstrap' },
                { text: 'CSS personalizados en Nuxt', link: '/nuxt/css' },
                { text: 'Uso de Nuxt Content', link: '/nuxt/content' },
                { text: 'Uso de Nuxt Content y, si no existiese un fichero, acceso a una API', link: '/nuxt/content-o-api' },
                { text: 'Uso de Nuxt UI', link: '/nuxt/nuxt-ui' },
                { text: 'Modo noche en Nuxt', link: '/nuxt/modo-noche' },
                { text: 'Subir proyecto a GitHub Pages', link: '/nuxt/github-pages' },
                { text: 'Uso de git con Nuxt', link: '/nuxt/git' },
                { text: 'Leer y escribir YAML en Nuxt', link: '/nuxt/yaml' },

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
