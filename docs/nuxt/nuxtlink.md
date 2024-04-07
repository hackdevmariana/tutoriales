# Componente NuxtLink

El componente `<NuxtLink>` es un componente de Nuxt que se utiliza para manejar enlaces dentro de tu aplicación. Es un reemplazo directo tanto para el componente `<RouterLink>` de Vue Router como para la etiqueta `<a>` de HTML.

El componente `<NuxtLink>` determina de manera automática si el enlace es interno o externo y lo renderiza en consecuencia, con optimizaciones disponibles como la precarga (prefetching), atributos predeterminados, etc.

Para enrutamiento interno, podemos usar `<NuxtLink>` para navegar a otra página de la aplicación.

Por ejemplo:

``` html
<NuxtLink to="/about">Página sobre nosotros</NuxtLink>
```

Para enrutamiento externo, como enlaces a otros sitios web, `<NuxtLink>` se renderizará como una etiqueta `<a>` con atributos como `rel="noopener noreferrer"` por defecto para mejorar la seguridad y privacidad.

Podemos usar la propiedad `external` para forzar que se renderice como una etiqueta `<a>`.

``` html
<NuxtLink to="https://nuxtjs.org" external> Sitio web de Nuxt </NuxtLink>
```

`<NuxtLink>` soporta todas las propiedades de `<RouterLink>` de Vue Router cuando no se usa external.

Esto incluye cosas como `exactActiveClass` para aplicar una clase a enlaces activos exactos, y la propiedad `custom` para tomar control total de cómo se renderiza un enlace.

Es una herramienta poderosa para la navegación en aplicaciones Nuxt, facilitando la creación de enlaces optimizados y mejorando la experiencia del usuario con cargas rápidas y transiciones suaves entre página.

## Uso y personalización del comportamiento de NuxtLink

Para usar `<NuxtLink>` en una aplicación Nuxt 3, está disponible globalmente y no requiere importación.

Para enlazar a páginas dentro de la aplicación, se utiliza la propiedad `to` para especificar la ruta de destino:

``` html
<template>
  <NuxtLink to="/about">Acerca de</NuxtLink>
</template>
```

Para enlazar a una URL externa, podemos hacerlo estableciendo la propiedad `to` con la URL completa y agregando la propiedad `external`.

``` html
<template>
  <NuxtLink to="https://ejemplo.com" external>Visita Ejemplo.com</NuxtLink>
</template>
```

Podemos agregar clases CSS para personalizar la apariencia de los enlaces `<NuxtLink>`. También puedes usar las propiedades `activeClass` y `exactActiveClass` para estilos específicos cuando el enlace está activo.

Por defecto, `<NuxtLink>` intentará precargar la página de destino para una navegación más rápida. Esto se puede desactivar con la propiedad `no-prefetch`.

El componente `<NuxtLink>` acepta todas las propiedades de `<RouterLink>` de Vue Router cuando no se usa la propiedad `external`, lo que te permite tener un control total sobre el comportamiento del enlace.

## Personalización del estilo

Para personalizar el estilo de los enlaces con `<NuxtLink>` en Nuxt, podemos utilizar clases CSS y estilos en línea.

**Con clases globales**: Definimos clases CSS globales en los archivos de estilo y aplicándolos a los enlaces `<NuxtLink>` usando la propiedad `class`.

``` html
<template>
  <NuxtLink to="/about" class="enlace-personalizado">Acerca de</NuxtLink>
</template>

<style>
  .enlace-personalizado {
  color: #42b983;
  text-decoration: none;
  /* más estilos */
}
</style>
```


**Con estilos en línea**: Puedes aplicar estilos directamente en el componente `<NuxtLink>` usando la propiedad `:style`.

``` html
<template>
  <NuxtLink to="/about" :style="{ color: 'blue', fontSize: '20px' }">Acerca de</NuxtLink>
</template>
```

**Con clases activas**: Nuxt automáticamente aplica clases a los enlaces activos. Podemos personalizar estas clases en un archivo de configuración de Nuxt o directamente en el CSS.

``` css
/* Estilo para enlaces activos */
.nuxt-link-active {
  font-weight: bold;
}
```

**Con estilos condicionales**: Podemos usar expresiones de Vue para aplicar estilos condicionalmente.

``` html
<template>
  <NuxtLink
    to="/about"
    :class="{ 'enlace-activo': rutaActiva }"
  >
  Acerca de
  </NuxtLink>
</template>

<script>
  export default {
    data() {
      return {
        rutaActiva: true // Cambia esto según tu lógica
      };
    }
  };
</script>
```

**Con estilos para rutas anidadas**: Si tenemos rutas anidadas y queremos aplicar estilos a los enlaces que coinciden exactamente con la ruta actual, podemos usar la clase `.nuxt-link-exact-active`.

``` css
/* Estilo para enlaces con coincidencia exacta */
.nuxt-link-exact-active {
  color: green;
}
```

Tanto la clase `.nuxt-link-active` como `.nuxt-link-exact-active` las asigna NuxtLink automáticamente.
