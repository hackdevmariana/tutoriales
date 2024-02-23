# Uso de ficheros CSS personalizados en proyectos Nuxt

Podemos usar ficheros CSS para nuestro proyecto Nuxt solos o en combinación con bibliotecas estándares.

Para indicar que queremos usar un fichero CSS, debemos añadir esta directiva en el fichero nuxt.config.js:

``` js {3}
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/styles.css",
});
```

Donde `~/assets/styles.css` es la ruta relativa al archivo CSS personalizado.

En el contexto de Nuxt.js, el símbolo `~` se utiliza como un atajo para referirse al directorio `src` del proyecto. En otras palabras, `~` apunta al directorio raíz del código fuente de una aplicación Nuxt.

Entonces, al usar "`~/assets/styles.css`", Nuxt buscará ese archivo en la carpeta `assets` dentro del directorio `src` del proyecto.

## El directorio src no existe

En Nuxt.js, el símbolo `~` se refiere al directorio `src` por defecto, pero si no existe ese directorio, entonces `~` se refiere simplemente al directorio raíz del proyecto, que contiene los directorios como `components`, `dist`, etc.

Por lo tanto, el uso de "`~/assets/styles.css`" en la configuración, hace que Nuxt busque ese archivo en la carpeta `assets` en el directorio raíz de tu proyecto. No es necesario crear un directorio `src` a menos que se quiera seguir la convención predeterminada de Nuxt.js.

## Ventaja

Es una convención que facilita la referencia a rutas dentro de una aplicación Nuxt sin tener que especificar rutas absolutas. Esto hace que el código sea más portable y fácil de mantener.
