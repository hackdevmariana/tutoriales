# Primer "Hola, mundo" en Nuxt

`Nuxt.js` es un framework basado en `Vue.js` que permite crear aplicaciones web modernas y optimizadas.

Para hacer nuestro primer "Hola, mundo" con `Nuxt.js`, podemos seguir estos pasos:

## 1. Instalación de Nuxt

Instalamos `Nuxt.js` globalmente en un sistema usando el comando:

``` sh
npm install -g nuxt
```

Si tuviéramos, algún tipo de problema con los permisos, usaremos `sudo`:

``` sh
sudo npm install -g nuxt
```

Para ello, es necesitario tener `Node.js` y `npm` instalados previamente.

## 2. Creación de proyecto

Creamos un nuevo proyecto usando el comando:

``` sh
npx create-nuxt-app hola-mundo
```

Esto pedirá algunas opciones, como el nombre del proyecto, el gestor de paquetes, el framework de UI, etc.

## 3. Personalizar el proyecto

Entra en la carpeta del proyecto:

``` sh
cd hola-mundo
```

Abre tu editor de código favorito y edita el archivo `pages/index.vue`, que es la página principal de tu aplicación.

Por defecto, el código de esta vista es:

``` vue
<template>
  <Tutorial/>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
```

Cambiamos el contenido del elemento `<Tutorial/>` por "Hola, mundo", o el texto que queramos y guardamos los cambios.

## 4. Ejecutar servidor de desarrollo

Ejecuta el comando:

``` sh
npm run dev
```

para iniciar el servidor de desarrollo. Esto te mostrará la URL donde puedes ver tu aplicación, que por defecto es [http://localhost:3000](http://localhost:3000).

El servidor de Nuxt actualiza los cambios sin tener que renderizar de nuevo, por lo que cualquier cambio en la página `pages/index.vue` se podrá ver sin tener que reiniciar el servidor.

## 5. Testing

Para ejecutar las pruebas de tu aplicación, puedes usar el comando `npm run test`, que usará `Jest` como framework de pruebas. Por defecto, el proyecto viene con una prueba de ejemplo que verifica que el componente Logo se renderiza correctamente, pero puedes añadir más pruebas en la carpeta `test`.

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

En caso de que no tengamos gh-pages o nuxt, instalaremos los paquetes con:

``` sh
npm install --save-dev gh-pages nuxt
```

Para hacer un deploy correctamente, primero debemos compilar el proyecto en el directorio dist y luego subirlo. Una forma de hacerlo es con un predeploy y un deploy:

``` js
{
  "scripts": {
    "predeploy": "nuxt generate",
    "deploy": "gh-pages -d dist"
  }
}
```

Esto hará que tu aplicación sea accesible en la URL `https://<tu-usuario>.github.io/hola-mundo`.
