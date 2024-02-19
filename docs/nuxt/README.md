# Primer "Hola, mundo" en Nuxt

`Nuxt.js` es un framework basado en `Vue.js` que permite crear aplicaciones web modernas y optimizadas.

Para hacer tu primer "Hola, mundo" con `Nuxt.js`, puedes seguir estos pasos:

## 1. Instalación de Nuxt
Instala `Nuxt.js` globalmente en tu computadora usando el comando:

``` sh
npm install -g nuxt
```

Para ello, es necesitario tener `Node.js` y `npm` instalados previamente.

## 2. Creación de proyecto

Crea un nuevo proyecto usando el comando:

``` sh
npx create-nuxt-app hola-mundo
```

Esto te pedirá algunas opciones, como el nombre del proyecto, el gestor de paquetes, el framework de UI, etc. Puedes elegir las que prefieras o dejar las predeterminadas.

## 3. Personalizar el proyecto

Entra en la carpeta del proyecto:

``` sh
cd hola-mundo
```

Abre tu editor de código favorito y edita el archivo `pages/index.vue`, que es la página principal de tu aplicación. Cambia el contenido del elemento `<h1>` por "Hola, mundo" y guarda los cambios.

## 4. Ejecutar servidor de desarrollo

Ejecuta el comando:

``` sh
npm run dev
```

para iniciar el servidor de desarrollo. Esto te mostrará la URL donde puedes ver tu aplicación, que por defecto es [http://localhost:3000](http://localhost:3000).

El servidor de Nuxt actualiza los cambios sin tener que renderizar de nuevo, por lo que cualquier cambio en la página `pages/index.vue` se podrá ver sin tener que reiniciar el servidor.

## 5. Testing

Para ejecutar las pruebas de tu aplicación, puedes usar el comando npm run test, que usará Jest como framework de pruebas. Por defecto, el proyecto viene con una prueba de ejemplo que verifica que el componente Logo se renderiza correctamente, pero puedes añadir más pruebas en la carpeta `test`.

## 6. Despegar el proyecto en GitHub Pages

Para subir tu aplicación a GitHub Pages, primero necesitas crear un repositorio en GitHub y vincularlo con tu proyecto local.

Luego, puedes usar el comando:

``` sh
npm run generate
```

para crear una versión estática de tu aplicación en la carpeta `dist`. Finalmente, puedes usar el comando:

``` sh
npm run deploy
```

para subir la carpeta `dist` a la rama `gh-pages` de tu repositorio.

Esto hará que tu aplicación sea accesible en la URL `https://<tu-usuario>.github.io/hola-mundo`.
