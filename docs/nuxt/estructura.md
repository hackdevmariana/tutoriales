# Estructura básica de un proyecto Nuxt

Por defecto, cuando creamos un proyecto Nuxt nos genera una estructura de fichero y directorios que contiene:

- **components**: Este directorio es donde se almacenan los componentes de Vue.js reutilizables. Los componentes son bloques de construcción de tu interfaz de usuario y se pueden reutilizar en múltiples partes de tu aplicación.

- **dist**: Este directorio contiene los archivos generados después de compilar tu aplicación Nuxt. Incluye archivos estáticos, HTML, JavaScript y CSS optimizados para producción.

- **jest.config.js**: Este archivo es la configuración para Jest, un marco de prueba de JavaScript. Jest se utiliza comúnmente para realizar pruebas unitarias y de integración en aplicaciones Nuxt.

- **node_modules**: Este directorio contiene todas las dependencias de tu proyecto Nuxt, incluidos los paquetes de npm que has instalado. No es necesario versionar este directorio, ya que npm o Yarn pueden reinstalar las dependencias según sea necesario.

- **nuxt.config.js**: Este archivo es la configuración principal de tu aplicación Nuxt. Aquí puedes definir opciones de configuración globales, como la configuración del servidor, los complementos, los módulos, las rutas, etc.

- **package.json**: Este archivo es un archivo de configuración de npm que describe la información del proyecto y las dependencias del mismo. Incluye información sobre el nombre del proyecto, la versión, los scripts de inicio, las dependencias y más.

- **package-lock.json**: Este archivo se genera automáticamente por npm y se utiliza para mantener un registro de las versiones exactas de todas las dependencias instaladas. Ayuda a garantizar que las mismas versiones de las dependencias se instalen en diferentes entornos.

- **pages**: En este directorio, defines las rutas y las páginas de tu aplicación Nuxt. Cada archivo .vue en este directorio representa una página de tu aplicación y automáticamente se convierte en una ruta accesible.

- **README.md**: Este archivo es un archivo de texto que generalmente contiene información sobre el proyecto, cómo configurarlo, ejecutarlo, y otros detalles importantes.

- **static**: Este directorio es donde se almacenan los archivos estáticos que no necesitan procesamiento por parte de Webpack. Los archivos aquí se copian directamente al directorio de salida y están disponibles con URL relativas a la raíz del dominio.

- **store**: En este directorio, defines los módulos Vuex para el manejo del estado global de tu aplicación Nuxt. Vuex es un patrón de gestión del estado y una biblioteca para aplicaciones Vue.js.

- **test**: Este directorio es donde generalmente colocas tus archivos de prueba unitaria y de integración. Puedes usar frameworks como Jest o Mocha para escribir y ejecutar pruebas en tus componentes y funcionalidades.
