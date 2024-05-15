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
				{ text: 'MySQL', link: '/mysql/' },
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
          '/mysql/': [
            {
              text: 'MySQL',
              children: [
                { text: 'Introducción', link: '/mysql/' },
                { text: 'Listar bases de datos', link: '/mysql/listar-bases-de-datos' },
                { text: 'Listar tablas de una base de datos', link: '/mysql/listar-tablas' },
                { text: 'Borrar base de datos', link: '/mysql/borrar-base-de-datos' },
              ],
            },
          ],
          '/laravel/': [
            {
              text: 'Laravel',
              children: [
                { text: 'Instalación', link: '/laravel/' },
                { text: 'Servidor de desarrollo', link: '/laravel/server' },
                { text: 'Cambiar puerto del servidor de desarrollo', link: '/laravel/cambiar-puerto' },
                { text: 'Principales ficheros y directorios de un proyecto Laravel', link: '/laravel/ficheros-y-directorios' },
                { text: 'Personalizar error 404 en un proyecto Laravel', link: '/laravel/404' },
                { text: 'El fichero .env en Laravel', link: '/laravel/fichero-env' },
                { text: 'Listar las rutas con artisan', link: '/laravel/listar-rutas' },
                { text: 'Limpiar la caché de rutas', link: '/laravel/limpiar-cache-rutas' },
                { text: 'Cambiar la ruta por defecto', link: '/laravel/ruta-por-defecto' },
                { text: 'Cambiar el nombre de una tabla en Laravel', link: '/laravel/cambiar-nombre-de-tabla' },
                { text: 'Modelos en Laravel', link: '/laravel/modelos' },
                { text: 'Crear modelo en Laravel', link: '/laravel/crear-modelo' },
                { text: 'Programar modelo en Laravel', link: '/laravel/programar-modelo' },
                { text: 'Migraciones en Laravel', link: '/laravel/migraciones' },
                { text: 'Tablas pivot en Laravel', link: '/laravel/tabla-pivot' },
                { text: 'Valores obligatorios o no en las migraciones en Laravel', link: '/laravel/required-nullable' },
                { text: 'Campos de texto en las migraciones en Laravel', link: '/laravel/campos-texto' },
                { text: 'Migraciones en Laravel con datos predeterminados', link: '/laravel/migracion-con-datos' },
                { text: 'Migraciones en Laravel con datos en varias tablas', link: '/laravel/migracion-con-datos-en-varias-tablas' },
                { text: 'Crear relaciones entre modelos en Laravel', link: '/laravel/relaciones-laravel' },
                { text: 'Acceso a datos en Laravel', link: '/laravel/acceso-a-datos' },
                { text: 'Registrar accesos a una API con Laravel', link: '/laravel/accesos-api' },
                { text: 'Integrar una API con Laravel con Meilisearch', link: '/laravel/meilisearch-api' },
                { text: 'Crear comando artisan', link: '/laravel/crear-comando' },
                { text: 'Controladores en Laravel', link: '/laravel/controladores' },
                { text: 'Crear una API con Laravel y panel de control con FilamentPHP', link: '/laravel/crear-api' },
                { text: 'Personalizar el panel de control de FilamentPHP', link: '/laravel/personalizar-filament' },
                { text: 'Crear panel de FilamentPHP para usuarios', link: '/laravel/panel-usuario-filament' },
                { text: 'Switch entre paneles de FilamentPHP', link: '/laravel/switch-paneles-filament' },
                { text: 'Usuarios y roles en FilamentPHP', link: '/laravel/filament-shield' },
                { text: 'Recursos (resources) en FilamentPHP', link: '/laravel/recursos-filament' },
                { text: 'Cambiar el texto de un resource en FilamentPHP', link: '/laravel/resource-label-filament' },
                { text: 'Mostrar el número de elementos en el menú de un resource en FilamentPHP', link: '/laravel/resource-badge-filament' },
                { text: 'Cierres (closures) en FilamentPHP', link: '/laravel/closures-filament' },
                { text: 'Crear widgets en FilamentPHP', link: '/laravel/widgets-filament' },
                { text: 'Crear botones y acciones en FilamentPHP', link: '/laravel/header-actions-filament' },
                { text: 'Añadir enlaces al menú de FilamentPHP', link: '/laravel/items-menu-filament' },
                { text: 'Pasar el menú de FilamentPHP la parte superior del panel', link: '/laravel/menu-navigationtop-filament' },
                { text: 'Cambiar Log out por Salir en el menú de FilamentPHP', link: '/laravel/salir-menu-filament' },
                { text: 'Filtrar datos en FilamentPHP', link: '/laravel/filtrar-datos-en-filament' },
                { text: 'Añadir componente de perfil al panel de control de FilamentPHP', link: '/laravel/profile-filament' },
                { text: 'Usar atajos de teclado en FilamentPHP', link: '/laravel/keybindings-filament' },
                { text: 'Mostrar notificaciones en FilamentPHP', link: '/laravel/notificaciones-filament' },
                { text: 'Envío de correos en FilamentPHP', link: '/laravel/correos-filament' },
                { text: 'Añadir plugin de roles y permisos al panel de control de FilamentPHP', link: '/laravel/roles-filament' },
                { text: 'Añadir usuarios al panel de control de FilamentPHP', link: '/laravel/usuarios-filament' },
                // { text: 'Simplificar los CRUDs en Laravel con Craftable', link: '/laravel/craftable' },


              ],
            },
          ],
          '/r/': [
            {
              text: 'R',
              children: [
                { text: 'Introducción', link: '/r/' },
                { text: 'Programar scripts', link: '/r/programar-scripts' },
                { text: 'Ejecutar scripts desde la shell', link: '/r/ejecutar-scripts' },
                { text: 'Tipos de datos', link: '/r/tipos-de-datos' },
                { text: 'Operaciones matemáticas', link: '/r/operaciones-matematicas' },
                { text: 'Estructuras de datos', link: '/r/estructuras-de-datos' },
                { text: 'Definición de estructuras de datos', link: '/r/defincion-de-estructuras' },
                { text: 'Operar con estructuras', link: '/r/operar-de-estructuras' },
                { text: 'Vectores', link: '/r/vectores' },
                { text: 'Matrices', link: '/r/matrices' },
                { text: 'Dataframes', link: '/r/dataframes' },
                { text: 'Función seq()', link: '/r/seq' },
                { text: 'Bucles for', link: '/r/for' },
                { text: 'Crear funciones', link: '/r/crear-funciones' },
                { text: 'Crear paquetes', link: '/r/crear-paquetes' },
                { text: 'Aplicar funciones en vectores', link: '/r/aplicar-funciones' },
                { text: 'Aplicar funciones en dataframes', link: '/r/aplicar-funciones-dataframes' },
                { text: 'Leer de una API', link: '/r/leer-api' },
                { text: 'Interacciones con una API', link: '/r/interacciones-api' },
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
                { text: 'Extraer cadenas de textos', link: '/linux/extraer-cadenas' },
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
