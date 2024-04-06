# Uso de Nuxt Content

Ejemplo de uso:

``` html
<template>
  <article>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch();
      return { post };
    }
  }
</script>
```

Explicación del código:

`<h1>{{ post.title }}</h1>`: muestra el título del post utilizando la propiedad 'title' del objeto 'post'.

`<nuxt-content :document="post" />`: El componente 'nuxt-content' renderiza el contenido del post.

La función `asyncData` se ejecuta antes de cargar el componente.

`const post = await $content('posts', params.slug).fetch();`: Utiliza el módulo Nuxt Content para obtener el post basado en el 'slug' de la URL

`return { post };`: Devuelve el objeto 'post' para que esté disponible en el componente

## Leer de un fichero YAML

Para leer datos de un fichero YAML en Nuxt Content, debemos:

1. Colocar el archivo YAML en el directorio `content/` del proyecto Nuxt.

2. Utilizar la función `$content` para acceder al archivo YAML.

Si el archivo se llama `miarchivo.yml`:

``` js
async asyncData({ $content }) {
  const miArchivo = await $content('miarchivo').fetch();
  return { miArchivo };
}
```

Este código accede a los datos en el componente o página con `{{ miArchivo.propiedad }}`, donde propiedad es una clave definida en el archivo YAML.

Si el documento raíz del archivo YAML está basado en pares clave-valor, el resultado contendrá todas las propiedades del documento en su raíz. Si el documento raíz es una lista, el resultado contendrá todas las propiedades del documento en una propiedad body.

Un ejemplo de cómo podría ser el archivo YAML:

``` YML
titulo: 'Mi Primer Post'
descripcion: 'Este es un breve resumen de mi primer post.'
```

Y así es como accederíamos a estas propiedades en el componente:

``` html
<template>
  <div>
    <h1>{{ miArchivo.titulo }}</h1>
    <p>{{ miArchivo.descripcion }}</p>
  </div>
</template>
```

Recordemos que si el archivo YAML comienza con `---`, que es estándar para múltiples documentos dentro de un solo flujo en archivos YAML, Nuxt Content podría no interpretarlo correctamente.

En ese caso, deberíamos eliminar los guiones para que Nuxt Content pueda leer el contenido correctamente

## Sobre Nuxt Content

Nuxt Content es un módulo de Nuxt que facilita a los desarrolladores de Vue la creación y consulta de contenido. Permite escribir contenido en Markdown, YML, CSV o JSON y consultarlo en componentes Vue.

Además, permite usar componentes Vue en archivos Markdown con la sintaxis MDC.

Algunas características destacadas de Nuxt Content incluyen:

- CMS basado en archivos: Permite escribir contenido en Markdown, YML, CSV o JSON.

- Constructor de consultas: Consulta el contenido con una API similar a MongoDB.

- Base de datos flexible: Agrega campos personalizados al contenido.

- Markdown con componentes: Usa componentes Vue en archivos Markdown.

- Resaltado de código: Muestra bloques de código con integración Shiki, soportando temas de VS Code.

- Despliegue en cualquier lugar: Compatible con generación estática, hosting Node.js y entornos de Workers.

Nuxt Content es ideal para desarrolladores que buscan un CMS headless basado en Git para proyectos Vue.js.

## Configuración

Para configurar Nuxt Content, debemos modificar el archivo `nuxt.config` del proyecto.

Un ejemplo básico de cómo se podría ver la configuración:

``` js
export default defineNuxtConfig({
  content: {
    // Configuración personalizada
  }
})
```

Dentro del objeto `content`, podemos establecer diversas propiedades para personalizar el comportamiento del módulo.

Por ejemplo, podemos cambiar la URL base de las APIs de contenido, habilitar la característica de `contentHead`, definir un locale predeterminado, entre otros.

Algunas opciones de configuración:

- api: Cambia el comportamiento predeterminado de las APIs de contenido.

- contentHead: Habilita la característica de content head.

- defaultLocale: Define el locale predeterminado para los contenidos.

- documentDriven: Activa o desactiva el modo document-driven.

- markdown: Controla la generación de enlaces de anclaje y otras opciones de Markdown.

## contentHead

La característica de `content head` en Nuxt Content es una funcionalidad que permite vincular automáticamente los metadatos de un contenido con las etiquetas OpenGraph, lo que facilita la implementación de SEO efectivo sin necesidad de configuración adicional.

Si está habilitada, el módulo usará el composable `useContentHead` para inyectar los datos del `head` del contenido en la página.

Por ejemplo, podemos especificar metadatos como el título, la descripción y la imagen en la sección `Front-Matter` de las páginas de contenido, y `useContentHead` se encargará de generar las etiquetas correspondientes en el `head` de tu documento HTML.

Esto es especialmente útil para mejorar la visibilidad y el compartir de las páginas en redes sociales y motores de búsqueda.

Para desactivar esta automatización, podemos configurar la opción `contentHead` como false en el archivo `nuxt.config`:

``` js
export default defineNuxtConfig({
  content: {
    contentHead: false
  }
})
```

Esta característica es parte de lo que hace a Nuxt Content una herramienta poderosa para desarrolladores que buscan optimizar su contenido para SEO de manera sencilla y eficiente.

## Front-Matter

En el `Front-Matter` de `Nuxt Content`, podemos especificar una variedad de metadatos para mejorar la gestión y presentación de tu contenido.

Algunos de los metadatos que podemos incluir son:

- title: El título de la página, que también se inyectará en las metas.

- description: Descripción de la página, que se mostrará debajo del título y se inyectará en las metas.

- draft: Marca la página como borrador (y solo se muestra en modo de desarrollo).

- navigation: Define si la página se incluye en el valor de retorno de fetchContentNavigation.

- head: Acceso fácil a useContentHead para establecer los metadatos de la página.

Además, podemos extraer un resumen o extracto del contenido utilizando `<!--more-->` como divisor.

Por ejemplo:

``` yml
---
title: 'Introducción'
description: 'Descripción breve de la página'
---

Aprende a usar @nuxt/content. <!--more--> Aquí continúa el contenido completo.

```

En este caso, todo lo que esté antes del `<!--more-->` se usará como extracto. Podemos acceder a este extracto en los componentes de Vue utilizando la propiedad `excerpt` que proporciona `Nuxt Content` al consultar los archivos.

En este caso, la propiedad `description` contendrá el contenido del extracto a menos que se defina dentro del `Front-Matter`.

Si no hay un divisor `<!--more-->` en el texto, entonces el extracto no se define.

Estos metadatos son accesibles al renderizar el contenido y pueden contener cualquier información que necesitemos.

Si no definimos un divisor `<!--more-->` en el contenido de `Nuxt Content`, el módulo no generará automáticamente un extracto para los artículos. En su lugar, todo el contenido del archivo Markdown se considerará como el cuerpo completo del artículo, y no habrá una sección específica que actúe como un resumen o vista previa.

Esto significa que cuando listemos los artículos, por ejemplo, en una página de inicio o en una página de categoría, tendremos que decidir otra forma de mostrar un resumen o introducción para cada artículo. Podríamos optar por usar las primeras líneas o párrafos del contenido o implementar una lógica personalizada para generar extractos.

La ausencia del divisor `<!--more-->` no afecta la funcionalidad principal de `Nuxt Content`, pero puede requerir que adaptemos el diseño o lógica de presentación para manejar la visualización de extractos de manera diferente.

## Leer variables de un fichero yaml

Podemos almacenar conjuntos de datos en un fichero YAML:

``` YML
datos:
  - titulo: "Conjunto de datos 1"
    descripcion: "Este es el primer conjunto de datos."
    enlace: "https://ejemplo.com/1"
    imagen: "imagen1.jpg"

  - titulo: "Conjunto de datos 2"
    descripcion: "Este es el segundo conjunto de datos."
    enlace: "https://ejemplo.com/2"
    imagen: "imagen2.jpg"

  - titulo: "Conjunto de datos 3"
    descripcion: "Este es el tercer conjunto de datos."
    enlace: "https://ejemplo.com/3"
    imagen: "imagen3.jpg"
```

Y leerlos desde un componente:

``` HTML
<template>
  <div>
    <div v-for="(dato, index) in datos" :key="index">
      <h2>{{ dato.titulo }}</h2>
      <p>{{ dato.descripcion }}</p>
      <a :href="dato.enlace">{{ dato.enlace }}</a>
      <img :src="dato.imagen" alt="Imagen">
    </div>
  </div>
</template>

<script>
import yaml from 'js-yaml';
import fs from 'fs';

export default {
  data() {
    return {
      datos: []
    };
  },
  mounted() {
    const datosYAML = fs.readFileSync('datos.yaml', 'utf8');

    this.datos = yaml.load(datosYAML);
  }
};
</script>
```
