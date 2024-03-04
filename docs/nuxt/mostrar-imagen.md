# Cómo mostrar una imagen en Nuxt

Para mostrar una imagen en Nuxt, hay varias opciones, dependiendo de dónde esté almacenada la imagen y cómo queramos mostrarla.

## Imagen en el directorio static

Si la imagen está en la directorio static del proyecto, puedes usar la etiqueta <img> con el atributo src que apunte a la ruta relativa de la imagen. Por ejemplo, si tienes una imagen llamada logo.png en la carpeta static/img, puedes usar <img src="/img/logo.png"> para mostrarla. Esta opción es la más sencilla, pero no te permite optimizar ni transformar la imagenhttps://es.stackoverflow.com/questions/422133/actualizar-imagen-en-componente-o-actualizar-el-componente-nuxt-vuejs-axios.

## Imagen en URL externa

•  Si la imagen está en una URL externa, puedes usar la etiqueta <img> con el atributo src que apunte a la URL de la imagen. Por ejemplo, si tienes una imagen en https://example.com/logo.png, puedes usar <img src="https://example.com/logo.png"> para mostrarla. Esta opción es la más simple, pero no te permite optimizar ni transformar la imagenhttps://es.stackoverflow.com/questions/422133/actualizar-imagen-en-componente-o-actualizar-el-componente-nuxt-vuejs-axios. También puedes usar el componente <nuxt-img> con el atributo provider que indique el proveedor que quieres usar para optimizar y transformar la imagen. Por ejemplo, si quieres usar Cloudinary, puedes usar <nuxt-img provider="cloudinary" src="https://example.com/logo.png"> para mostrar la imagen.

## Imagen en el directorio assets

•  Si la imagen está en la carpeta assets de tu proyecto, puedes usar el componente <nuxt-img> que te ofrece el módulo @nuxt/imagehttps://es.stackoverflow.com/questions/121290/como-bindear-src-de-imagenes-en-nuxt-js-y-vuetify-js. Este componente te permite optimizar y transformar la imagen usando diferentes proveedores, como IPX, Cloudinaryhttps://comoprogramar.club/como-establecer-una-imagen-de-fondo-en-nuxt/, Imgixhttps://marquez.co/es/blog/nuxt-optimized-images/, etc. Para usar este componente, debes instalar el módulo con npm install @nuxt/image o yarn add @nuxt/image y agregarlo a la sección de buildModules de tu archivo nuxt.config.js. Luego, puedes usar <nuxt-img src="~/assets/logo.png"> para mostrar la imagen. Puedes personalizar el tamaño, el formato, la calidad y otros aspectos de la imagen usando las propiedades del componentehttps://es.stackoverflow.com/questions/121290/como-bindear-src-de-imagenes-en-nuxt-js-y-vuetify-js.

El componente <nuxt-img> es un reemplazo del elemento <img> nativo, pero con muchas ventajas. Algunas de ellas son:

•  Puedes usar diferentes proveedores para optimizar y transformar tus imágenes, como IPX, Cloudinary, Imgix, etc. Cada proveedor tiene sus propias características y opciones para personalizar la imagen. Por ejemplo, con Cloudinary puedes aplicar filtros, efectos, recortes, rotaciones, etchttps://image.nuxt.com/.

•  Puedes generar tamaños responsivos para tus imágenes, de forma que se adapten al tamaño de la pantalla del usuario. Solo tienes que indicar las medidas que quieres usar con la propiedad sizes del componente. Por ejemplo, puedes usar <nuxt-img src="~/assets/logo.png" sizes="sm:100px md:200px lg:300px"> para que la imagen tenga un ancho de 100px en pantallas pequeñas, 200px en medianas y 300px en grandeshttps://nuxt.com/docs/api/components/nuxt-img.

•  Puedes usar formatos modernos y eficientes para tus imágenes, como webp y avif, que reducen el tamaño de las imágenes sin perder calidad. El componente <nuxt-img> detecta automáticamente el formato que soporta el navegador del usuario y le sirve la imagen más adecuada. Solo tienes que indicar el formato que quieres usar con la propiedad format del componente.

Para instalar el módulo @nuxt/image, puedes seguir estos pasos:

•  Ejecuta el comando npm install @nuxt/image o yarn add @nuxt/image en la terminal de tu proyecto para instalar la dependenciahttps://image.nuxt.com/get-started/installationhttps://www.npmjs.com/package/@nuxt/image.

•  Añade @nuxt/image a la sección de buildModules de tu archivo nuxt.config.jshttps://image.nuxt.com/get-started/installationhttps://www.npmjs.com/package/@nuxt/image. Por ejemplo:

export default {
buildModules: [
'@nuxt/image',
],
}

•  Opcionalmente, puedes configurar el módulo con las opciones que quieras en la sección de image de tu archivo nuxt.config.jshttps://image.nuxt.com/get-started/installation. Por ejemplo, puedes elegir el proveedor que quieres usar para optimizar y transformar tus imágenes, como IPX, Cloudinary, Imgix, etchttps://image.nuxt.com/get-started/installation.

export default {
image: {
// Opciones
},
}

•  Ya puedes empezar a usar los componentes <nuxt-img> y <nuxt-picture> en tu aplicación


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

Para personalizar el tamaño de la imagen con nuxt-image, puedes usar las propiedades width y height del componente <nuxt-img> o <nuxt-picture>. Estas propiedades te permiten especificar el ancho y el alto de la imagen en píxeles o en unidades relativashttps://image.nuxt.com/usage/nuxt-img. Por ejemplo:

<!-- Establece el ancho y el alto de la imagen en píxeles -->
<nuxt-img src="~/assets/logo.png" width="200" height="100" />

<!-- Establece el ancho y el alto de la imagen en unidades relativas -->
<nuxt-img src="~/assets/logo.png" width="50vw" height="25vh" />

También puedes usar la propiedad sizes del componente <nuxt-img> o <nuxt-picture> para generar tamaños responsivos para tus imágenes, de forma que se adapten al tamaño de la pantalla del usuario. Esta propiedad te permite indicar una lista separada por espacios de pares de tamaño de pantalla/ancho de imagen. Puedes ver una lista de los tamaños de pantalla predefinidos aquíhttps://image.nuxt.com/get-started/configuration. Por defecto, Nuxt genera un tamaño responsivo basado en el primer tamaño. Si omites un prefijo de tamaño de pantalla (como sm:), entonces ese tamaño es el tamaño por defecto de la imagen. De lo contrario, Nuxt elegirá el tamaño más pequeño como el tamaño por defecto de la imagen. Este tamaño por defecto se usará hasta el siguiente ancho de pantalla especificado, y así sucesivamente. Cada par de tamaño especificado se aplica hacia arriba, así que md:400px significa que la imagen tendrá un ancho de 400px en pantallas md y superioreshttps://image.nuxt.com/get-started/configuration. Por ejemplo:

<!-- Establece los tamaños responsivos de la imagen -->
<nuxt-img src="~/assets/logo.png" sizes="100vw sm:50vw md:400px" />

## Diferencias entre nuxt-image y nuxt picture

La principal diferencia entre los componentes <nuxt-img> y <nuxt-picture> es que el primero genera una etiqueta <img> nativa, mientras que el segundo genera una etiqueta <picture> con varias fuentes de imagenhttps://image.nuxt.com/usage/nuxt-img. Esto te permite usar diferentes formatos y tamaños de imagen para diferentes dispositivos y navegadores, ofreciendo una mejor experiencia de usuario y rendimientohttps://es.stackoverflow.com/questions/179748/para-que-sirve-el-gt-y-el-lt-en-un-native-query.

Por ejemplo, si quieres usar el formato webp para los navegadores que lo soportan, y el formato jpg para los que no, puedes usar el componente <nuxt-picture> de esta forma:

<nuxt-picture src="~/assets/logo.png">
<source type="image/webp" />
<source type="image/jpeg" />
</nuxt-picture>

Esto generará el siguiente código HTML:

<picture>
<source srcset="/_ipx/f_auto/format(webp)/logo.png" type="image/webp" />
<source srcset="/_ipx/f_auto/format(jpeg)/logo.png" type="image/jpeg" />
<img src="/_ipx/f_auto/format(jpeg)/logo.png" />
</picture>

Como puedes ver, el componente <nuxt-picture> usa el módulo @nuxt/image para optimizar y transformar las imágenes usando el proveedor por defecto, que es IPXhttps://image.nuxt.com/usage/nuxt-img. Puedes personalizar el proveedor y otras opciones del componente usando las mismas propiedades que el componente <nuxt-img>

## Personalizar las fuentes de imagen

Para personalizar las fuentes de imagen con nuxt-picture, puedes usar la propiedad format del componente, que te permite indicar una lista separada por comas de los formatos que quieres usar para tus imágenes. El componente generará automáticamente una etiqueta <source> por cada formato, y usará el formato más adecuado según el navegador del usuariohttps://image.nuxt.com/usage/nuxt-picture. Por ejemplo, si quieres usar los formatos avif, webp y png, puedes usar el siguiente código:

<nuxt-picture src="~/assets/logo.png" format="avif,webp,png" />

Esto generará el siguiente código HTML:

<picture>
<source srcset="/_ipx/f_auto/format(avif)/logo.png" type="image/avif" />
<source srcset="/_ipx/f_auto/format(webp)/logo.png" type="image/webp" />
<source srcset="/_ipx/f_auto/format(png)/logo.png" type="image/png" />
<img src="/_ipx/f_auto/format(png)/logo.png" />
</picture>

Como puedes ver, el componente usa el módulo @nuxt/image para optimizar y transformar las imágenes usando el proveedor por defecto, que es IPX. Puedes personalizar el proveedor y otras opciones del componente usando las mismas propiedades que el componente <nuxt-img>.

Los formatos disponibles son webp, avif, jpeg, jpg, png y gifhttps://image.nuxt.com/usage/nuxt-picture. Si no especificas el formato, se usará el formato por defecto de la imagen. También puedes especificar el formato de reserva con la propiedad legacyFormat, que se usará en caso de que el navegador no soporte ninguno de los formatos indicados

## IPX

IPX es el optimizador de imágenes integrado y autoalojado para Nuxt Image. Nuxt Image es un módulo de Nuxt que te permite usar diferentes proveedores para optimizar y transformar tus imágenes en tu aplicación Nuxt. IPX es uno de los proveedores disponibles, y el que se usa por defecto si no se especifica otro.

IPX es un proyecto de código abierto basado en sharp, una biblioteca de procesamiento de imágenes de alto rendimiento. IPX te permite aplicar diferentes modificadores a tus imágenes, como el tamaño, el formato, la calidad, el filtro, el tinte, el recorte, la rotación, etc. Puedes usar el componente <nuxt-img> o <nuxt-picture> para mostrar tus imágenes optimizadas y transformadas por IPX

## Uso de filtros y efectos

se pueden aplicar filtros y efectos a una imagen con nuxt-picture, siempre que uses un proveedor que los soporte. Por ejemplo, el proveedor Cloudinary te permite aplicar filtros y efectos como sepia, pixelado, desenfoque, brillo, contraste, etc. Para usar este proveedor, debes configurarlo en la sección de image de tu archivo nuxt.config.js y usar la propiedad provider="cloudinary" en el componente <nuxt-picture>https://www.fotor.com/es/features/photo-effects.html. Luego, puedes usar la propiedad transformations del componente para indicar los filtros y efectos que quieres aplicar a la imagenhttps://www.fotor.com/es/features/photo-effects.html. Por ejemplo, si quieres aplicar un filtro sepia y un efecto pixelado a una imagen, puedes usar el siguiente código:

<nuxt-picture src="~/assets/logo.png" provider="cloudinary" transformations="e_sepia,e_pixelate:10" />

Esto generará el siguiente código HTML:

<picture>
<source srcset="https://res.cloudinary.com/demo/image/upload/e_sepia,e_pixelate:10/logo.png" type="image/png" />
<img src="https://res.cloudinary.com/demo/image/upload/e_sepia,e_pixelate:10/logo.png" />
</picture>

Puedes ver una lista de los filtros y efectos disponibles para Cloudinary aquíhttps://developer.mozilla.org/es/docs/Web/CSS/filter. Otros proveedores pueden tener sus propias opciones y sintaxis para aplicar filtros y efectos a las imágenes.

## Uso de Cloudinary con Nuxt Image

Para usar Cloudinary con Nuxt Image, puedes seguir estos pasos:

•  Instala el módulo @nuxt/image en tu proyecto con el comando npm install @nuxt/image o yarn add @nuxt/imagehttps://cloudinary.com/documentation/nuxt_image_component_tutorialhttps://image.nuxt.com/providers/cloudinary.

•  Añade @nuxt/image a la sección de buildModules de tu archivo nuxt.config.jshttps://cloudinary.com/documentation/nuxt_image_component_tutorialhttps://image.nuxt.com/providers/cloudinary. Por ejemplo:

export default {
buildModules: [
'@nuxt/image',
],
}

•  Configura el proveedor de Cloudinary en la sección de image de tu archivo nuxt.config.jshttps://cloudinary.com/documentation/nuxt_image_component_tutorialhttps://image.nuxt.com/providers/cloudinary. Debes indicar el nombre de tu nube de Cloudinary y la clave de API y el secreto si quieres usar el modo de cargahttps://image.nuxt.com/providers/cloudinary. Por ejemplo:

export default {
image: {
cloudinary: {
baseURL: 'https://res.cloudinary.com/<your-cloud-name>/image/upload/',
apiKey: '<your-api-key>',
apiSecret: '<your-api-secret>'
},
},
}

•  Usa el componente <nuxt-img> o <nuxt-picture> para mostrar tus imágenes de Cloudinary en tu aplicaciónhttps://cloudinary.com/documentation/nuxt_image_component_tutorialhttps://image.nuxt.com/providers/cloudinary. Debes indicar el proveedor como cloudinary y el src como la ruta relativa de la imagen en Cloudinary. También puedes usar las propiedades del componente para personalizar el tamaño, el formato, la calidad y otras opciones de la imagenhttps://cloudinary.com/documentation/nuxt_image_component_tutorialhttps://image.nuxt.com/providers/cloudinary. Por ejemplo:

<nuxt-img provider="cloudinary" src="logo.png" width="300" height="200" />

## Uso de varios proveedores en una misma aplicación Nuxt

se pueden usar distintos proveedores de imágenes para una misma aplicación Nuxt, siempre que los configures correctamente en tu archivo nuxt.config.jshttps://blog-es.mimacom.com/nuxt-easy-mode-for-vue/. Puedes usar la propiedad provider en el componente <nuxt-img> o <nuxt-picture> para indicar el proveedor que quieres usar para cada imagenhttps://blog-es.mimacom.com/nuxt-easy-mode-for-vue/. Por ejemplo, si quieres usar Cloudinary para una imagen y Imgix para otra, puedes hacer lo siguiente:

<!-- Usamos Cloudinary para esta imagen -->
<nuxt-img provider="cloudinary" src="logo.png" />

<!-- Usamos Imgix para esta imagen -->
<nuxt-img provider="imgix" src="banner.png" />

Esto generará el siguiente código HTML:

<!-- Usamos Cloudinary para esta imagen -->
<img src="https://res.cloudinary.com/<your-cloud-name>/image/upload/logo.png" />

<!-- Usamos Imgix para esta imagen -->
<img src="https://<your-domain>.imgix.net/banner.png" />

## Configurar nuxt.config.js para usar distintos proveedores de imágenes

Para usar distintos proveedores de imágenes para una misma aplicación Nuxt, debes seguir estos pasos:

•  Instala el módulo @nuxt/image en tu proyecto con el comando npm install @nuxt/image o yarn add @nuxt/imagehttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3.

•  Añade @nuxt/image a la sección de buildModules de tu archivo nuxt.config.jshttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3. Por ejemplo:

export default defineNuxtConfig({
buildModules: [
'@nuxt/image',
],
})

•  Configura los proveedores que quieras usar en la sección de image de tu archivo nuxt.config.jshttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3. Debes indicar las opciones específicas de cada proveedor, como el nombre de la nube, la clave de API, el secreto, el dominio, etchttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3. Por ejemplo, si quieres usar Cloudinary y Imgix, puedes hacer lo siguiente:

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

•  Usa el componente <nuxt-img> o <nuxt-picture> para mostrar tus imágenes en tu aplicaciónhttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3. Debes indicar el proveedor que quieres usar para cada imagen con la propiedad provider. También puedes indicar el src y otras propiedades para personalizar el tamaño, el formato, la calidad y otras opciones de la imagenhttps://image.nuxt.com/get-started/configurationhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3. Por ejemplo, si quieres usar Cloudinary para una imagen y Imgix para otra, puedes hacer lo siguiente:

<!-- Usamos Cloudinary para esta imagen -->
<nuxt-img provider="cloudinary" src="logo.png" />

<!-- Usamos Imgix para esta imagen -->
<nuxt-img provider="imgix" src="banner.png" />

Puedes ver la lista de los proveedores disponibles y cómo configurarlos en la documentación oficialhttps://stackoverflow.com/questions/74485982/favicon-loading-from-assets-is-not-working-in-nuxt3 de Nuxt Image. También puedes crear tu propio proveedor si el que buscas no está soportado
