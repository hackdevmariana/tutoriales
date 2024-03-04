# Cómo mostrar una imagen en Nuxt

Para mostrar una imagen en Nuxt, hay varias opciones, dependiendo de dónde esté almacenada la imagen y cómo queramos mostrarla.

## Imagen en el directorio static

Si la imagen está en la directorio static del proyecto, podemos usar la etiqueta `<img>` con el atributo src que apunte a la ruta relativa de la imagen. Por ejemplo, si tenemos una imagen llamada logo.png en la carpeta `static/img`, podemos usar `<img src="/img/logo.png">` para mostrarla. Esta opción es la más sencilla, pero no te permite optimizar ni transformar la imagen.

## Imagen en URL externa

Si la imagen está en una URL externa, podemos usar la etiqueta `<img>` con el atributo src que apunte a la URL de la imagen.

Por ejemplo, si tenemos una imagen en https://example.com/logo.png, podemos usar `<img src="https://example.com/logo.png">` para mostrarla.

Esta opción es la más simple, pero no permite optimizar ni transformar la imagen. También podemos usar el componente `<nuxt-img>` con el atributo provider que indique el proveedor que queremos usar para optimizar y transformar la imagen. Por ejemplo, si queremos usar Cloudinary, podemos usar para mostrar la imagen:

``` html
<nuxt-img provider="cloudinary" src="https://example.com/logo.png">
```

## Imagen en el directorio assets

Si la imagen está en la carpeta `assets` del proyecto, podemos usar el componente `<nuxt-img>` que ofrece el módulo `@nuxt/image` con:

``` html
<nuxt-img src="~/assets/logo.png">
```

para mostrar la imagen. Podemos personalizar el tamaño, el formato, la calidad y otros aspectos de la imagen usando las propiedades del componente.

## Ventajas de nuxt-img

El componente `<nuxt-img>` es un reemplazo del elemento `<img>` nativo, pero con muchas ventajas. Algunas de ellas son:

- podemos usar diferentes proveedores para optimizar y transformar tus imágenes, como IPX, Cloudinary, Imgix, etc. Cada proveedor tiene sus propias características y opciones para personalizar la imagen. Por ejemplo, con Cloudinary podemos aplicar filtros, efectos, recortes, rotaciones, etc...

- podemos generar tamaños responsivos para tus imágenes, de forma que se adapten al tamaño de la pantalla del usuario. Sólo tenemos que indicar las medidas que queremos usar con la propiedad sizes del componente. Por ejemplo, podemos usar:

``` html
<nuxt-img src="~/assets/logo.png" sizes="sm:100px md:200px lg:300px">
```

para que la imagen tenga un ancho de 100px en pantallas pequeñas, 200px en medianas y 300px en grandes.

- podemos usar formatos modernos y eficientes para tus imágenes, como webp y avif, que reducen el tamaño de las imágenes sin perder calidad.

El componente `<nuxt-img>` detecta automáticamente el formato que soporta el navegador del usuario y le sirve la imagen más adecuada. Sólo tenemos que indicar el formato que queremos usar con la propiedad `format` del componente.

## Instalación de nuxt-image

Para instalar el módulo `@nuxt/image`, podemos seguir estos pasos:

1. Ejecutar el comando:

``` sh
npm install @nuxt/image
```

o:

``` sh
yarn add @nuxt/image
```

y agregarlo a la sección de `buildModules` del fichero `nuxt.config.js`:

``` js
export default {
  buildModules: [
    '@nuxt/image',
  ],
}
```

Opcionalmente, podemos configurar el módulo con las opciones que queramos en la sección de `image` del fichero `nuxt.config.js`.

Por ejemplo, podemos elegir el proveedor que queremos usar para optimizar y transformar tus imágenes, como IPX, Cloudinary, Imgix, etc.

``` js
export default {
  image: {
    // Opciones
  },
}
```

Ya podemos empezar a usar los componentes `<nuxt-img>` y `<nuxt-picture>` en la aplicación.


## Ejemplo en un componente

``` html
<template>
  <div class="card">
    <div class="card-image">
      <!-- Usamos nuxt-img para mostrar la imagen del artículo -->
      <nuxt-img :src="article.image" alt="Article image" />
    </div>
    <div class="card-content">
      <!-- Usamos los datos del artículo para mostrar el título y la descripción -->
      <h3 class="card-title">{{ article.title }}</h3>
      <p class="card-description">{{ article.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Recibimos el artículo como una propiedad del componente
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
/* Estilos para la tarjeta */
.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.card-image {
  height: 200px;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.card-description {
  font-size: 16px;
  margin: 10px 0;
}
</style>
```

## Personalizar el tamaño de la imagen

Para personalizar el tamaño de la imagen con `nuxt-image`, podemos usar las propiedades width y height del componente `<nuxt-img>` o `<nuxt-picture>`. Estas propiedades te permiten especificar el ancho y el alto de la imagen en píxeles o en unidades relativas.

Para establecer el ancho y el alto de la imagen en píxeles:

``` html
<nuxt-img src="~/assets/logo.png" width="200" height="100" />
```

Para establecer el ancho y el alto de la imagen en unidades relativas:

``` html
<nuxt-img src="~/assets/logo.png" width="50vw" height="25vh" />
```

También podemos usar la propiedad `sizes` del componente `<nuxt-img>` o `<nuxt-picture>` para generar tamaños responsivos para las imágenes, de forma que se adapten al tamaño de la pantalla del usuario.

Esta propiedad permite indicar una lista separada por espacios de pares de tamaño de pantalla/ancho de imagen.

Podemos ver una lista de los tamaños de pantalla predefinidos en [https://image.nuxt.com/get-started/configuration](https://image.nuxt.com/get-started/configuration).

Por defecto, Nuxt genera un tamaño responsivo basado en el primer tamaño. Si omitimos un prefijo de tamaño de pantalla (como `sm:`), entonces ese tamaño es el tamaño por defecto de la imagen. De lo contrario, Nuxt elegirá el tamaño más pequeño como el tamaño por defecto de la imagen. Este tamaño por defecto se usará hasta el siguiente ancho de pantalla especificado, y así sucesivamente. Cada par de tamaño especificado se aplica hacia arriba, así que `md:400px` significa que la imagen tendrá un ancho de 400px en pantallas md y superiores.

Por ejemplo:

``` html
<nuxt-img src="~/assets/logo.png" sizes="100vw sm:50vw md:400px" />
```

## Diferencias entre nuxt-image y nuxt picture

La principal diferencia entre los componentes `<nuxt-img>` y `<nuxt-picture>` es que el primero genera una etiqueta `<img>` nativa, mientras que el segundo genera una etiqueta `<picture>` con varias fuentes de imagen. Esto permite usar diferentes formatos y tamaños de imagen para diferentes dispositivos y navegadores, ofreciendo una mejor experiencia de usuario y rendimiento.

Por ejemplo, si queremos usar el formato webp para los navegadores que lo soportan, y el formato jpg para los que no, podemos usar el componente `<nuxt-picture>` de esta forma:

``` html
<nuxt-picture src="~/assets/logo.png">
  <source type="image/webp" />
  <source type="image/jpeg" />
</nuxt-picture>
```

Esto generará el siguiente código HTML:

``` html
<picture>
  <source srcset="/_ipx/f_auto/format(webp)/logo.png" type="image/webp" />
  <source srcset="/_ipx/f_auto/format(jpeg)/logo.png" type="image/jpeg" />
  <img src="/_ipx/f_auto/format(jpeg)/logo.png" />
</picture>
```

Como podemos ver, el componente `<nuxt-picture>` usa el módulo `@nuxt/image` para optimizar y transformar las imágenes usando el proveedor por defecto, que es IPX. Podemos personalizar el proveedor y otras opciones del componente usando las mismas propiedades que el componente `<nuxt-img>`.

## Personalizar las fuentes de imagen

Para personalizar las fuentes de imagen con `nuxt-picture`, podemos usar la propiedad format del componente, que permite indicar una lista separada por comas de los formatos que queremos usar para tus imágenes. El componente generará automáticamente una etiqueta `<source>` por cada formato, y usará el formato más adecuado según el navegador del usuario. Por ejemplo, si queremos usar los formatos avif, webp y png, podemos usar el siguiente código:

``` html
<nuxt-picture src="~/assets/logo.png" format="avif,webp,png" />
```

Esto generará el siguiente código HTML:

``` html
<picture>
  <source srcset="/_ipx/f_auto/format(avif)/logo.png" type="image/avif" />
  <source srcset="/_ipx/f_auto/format(webp)/logo.png" type="image/webp" />
  <source srcset="/_ipx/f_auto/format(png)/logo.png" type="image/png" />
  <img src="/_ipx/f_auto/format(png)/logo.png" />
</picture>
```

Como podemos ver, el componente usa el módulo `@nuxt/image` para optimizar y transformar las imágenes usando el proveedor por defecto, que es IPX. Podemos personalizar el proveedor y otras opciones del componente usando las mismas propiedades que el componente `<nuxt-img>`.

Los formatos disponibles son webp, avif, jpeg, jpg, png y gif. Si no especificas el formato, se usará el formato por defecto de la imagen. También podemos especificar el formato de reserva con la propiedad `legacyFormat`, que se usará en caso de que el navegador no soporte ninguno de los formatos indicados.

## IPX

IPX es el optimizador de imágenes integrado y autoalojado para `Nuxt Image`. IPX es uno de los proveedores disponibles, y el que se usa por defecto si no se especifica otro.

IPX es un proyecto de código abierto basado en sharp, una biblioteca de procesamiento de imágenes de alto rendimiento. IPX te permite aplicar diferentes modificadores a las imágenes, como el tamaño, el formato, la calidad, el filtro, el tinte, el recorte, la rotación, etc. podemos usar el componente `<nuxt-img>` o `<nuxt-picture>` para mostrar las imágenes optimizadas y transformadas por IPX.

## Uso de filtros y efectos

Se pueden aplicar filtros y efectos a una imagen con `nuxt-picture`, siempre que usemos un proveedor que los soporte. Por ejemplo, el proveedor Cloudinary permite aplicar filtros y efectos como sepia, pixelado, desenfoque, brillo, contraste, etc. Para usar este proveedor, debemos configurarlo en la sección `image` del fichero `nuxt.config.js` y usar la propiedad `provider="cloudinary"` en el componente `<nuxt-picture>`. Luego, podemos usar la propiedad transformations del componente para indicar los filtros y efectos que queremos aplicar a la imagen. Por ejemplo, si queremos aplicar un filtro sepia y un efecto pixelado a una imagen, podemos usar el siguiente código:

``` html
<nuxt-picture src="~/assets/logo.png" provider="cloudinary" transformations="e_sepia,e_pixelate:10" />
```

Esto generará el siguiente código HTML:

``` html
<picture>
<source srcset="https://res.cloudinary.com/demo/image/upload/e_sepia,e_pixelate:10/logo.png" type="image/png" />
<img src="https://res.cloudinary.com/demo/image/upload/e_sepia,e_pixelate:10/logo.png" />
</picture>
```

Otros proveedores pueden tener sus propias opciones y sintaxis para aplicar filtros y efectos a las imágenes.

## Uso de Cloudinary con Nuxt Image

Para usar Cloudinary con Nuxt Image, debemos seguir estos pasos:

1. Instalar el módulo `@nuxt/image` en el proyecto con el comando `npm install @nuxt/image` o `yarn add @nuxt/image`.

2. Añadir `@nuxt/image` a la sección de `buildModules` del fichero `nuxt.config.js`:

``` js
export default {
  buildModules: [
    '@nuxt/image',
  ],
}
```

3. Configurar el proveedor de Cloudinary en la sección de image del fichero `nuxt.config.js`. Debemos indicar el nombre de la nube de Cloudinary y la clave de API y el apiSecret si queremos usar el modo de carga.

``` js
export default {
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/<your-cloud-name>/image/upload/',
      apiKey: '<your-api-key>',
      apiSecret: '<your-api-secret>'
    },
  },
}
```

4. Usar el componente `<nuxt-img>` o `<nuxt-picture>` para mostrar las imágenes de Cloudinary en la aplicación. Debemos indicar el proveedor como cloudinary y el src como la ruta relativa de la imagen en Cloudinary. También podemos usar las propiedades del componente para personalizar el tamaño, el formato, la calidad y otras opciones de la imagen.

``` html
<nuxt-img provider="cloudinary" src="logo.png" width="300" height="200" />
```

## Uso de varios proveedores en una misma aplicación Nuxt

Se pueden usar distintos proveedores de imágenes para una misma aplicación Nuxt, siempre que los configures correctamente en el fichero `nuxt.config.js`. Podemos usar la propiedad `provider` en el componente `<nuxt-img>` o `<nuxt-picture>` para indicar el proveedor que queremos usar para cada imagen. Por ejemplo, si queremos usar Cloudinary para una imagen y Imgix para otra, podemos hacer lo siguiente:

Usamos Cloudinary para esta imagen:

``` html
<nuxt-img provider="cloudinary" src="logo.png" />
```

Usamos Imgix para esta imagen:

``` html
<nuxt-img provider="imgix" src="banner.png" />
```

Esto generará el siguiente código HTML:

``` html
<img src="https://res.cloudinary.com/<your-cloud-name>/image/upload/logo.png" />

<img src="https://<your-domain>.imgix.net/banner.png" />
```

## Configurar nuxt.config.js para usar distintos proveedores de imágenes

Para usar distintos proveedores de imágenes para una misma aplicación Nuxt, debemos seguir estos pasos:

1. Instalar el módulo `@nuxt/image` en el proyecto.

2. Añadir `@nuxt/image` a la sección de `buildModules` del fichero `nuxt.config.js`.

3. Configurar los proveedores que queramos usar en la sección de `image` del fichero `nuxt.config.js`. Debemos indicar las opciones específicas de cada proveedor, como el nombre de la nube, la clave de API, el apiSecret, el dominio, etc. Por ejemplo, si queremos usar Cloudinary y Imgix, podemos hacer lo siguiente:

``` js
export default defineNuxtConfig({
  image: {
    cloudinary: {
      // Opciones de Cloudinary
    },
    imgix: {
      // Opciones de Imgix
    },
  },
})
```  

4. Usar el componente `<nuxt-img>` o `<nuxt-picture>` para mostrar las imágenes en la aplicación. Debemos indicar el proveedor que queremos usar para cada imagen con la propiedad `provider`. También podemos indicar el src y otras propiedades para personalizar el tamaño, el formato, la calidad y otras opciones de la imagen.
