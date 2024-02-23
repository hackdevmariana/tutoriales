# Uso de Bootstrap en proyectos Nuxt

Instalación:

``` sh
npm i bootstrap
```

En caso de que fallara la instalación, podemos forzarla con:

``` sh
npm install bootstrap --legacy-peer-deps
```

Lo que añadirá automáticamente al fichero `package.json` algo así:

``` json
{
  "dependencies": {
    "bootstrap": "^5.3.3",
  }
}
```

Para poder usar bootstrap en nuestro proyecto Nuxt, debemos añadir las siguientes líneas al fichero nuxt.config.js:

``` js
css: [
    "bootstrap/dist/css/bootstrap.min.css"
  ],
scripts: [
  { src: "bootstrap/dist/js/bootstrap.min.js", body: true },
],
```

Para comprobar que todo ha funcionado bien, podemos escribir en `pages/index.vue`:

``` html
<template>
  <div class="container">
    <h1 class="h1">Hola, mundo</h1>
  </div>
</template>
```

Y lanzar el servidor de desarrollo:

``` sh
npm run dev
```
