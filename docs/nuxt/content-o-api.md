# Uso de Nuxt Content y, si no existiese un fichero, acceso a una API

Ejemplo:

``` html
<template>
  <div v-if="content">
    <!-- Renderiza el contenido si está disponible -->
    <nuxt-content :document="content" />
  </div>
  <div v-else>
    <!-- Mensaje o componente alternativo si el contenido no está disponible -->
    <p>El contenido no está disponible.</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: null,
      };
    },
      async asyncData({ $content, params, $axios }) {
      try {
        // Intenta cargar el archivo de contenido local
          const localContent = await $content(params.slug).fetch();
          return { content: localContent };
      } catch (e) {
        // Si el archivo no existe, carga los datos de una API externa
        try {
          const { data } = await $axios.get(`https://mi-api.com/${params.slug}`);
          return { content: data };
      } catch (error) {
        // Maneja errores de la API aquí
        console.error('Error al cargar los datos de la API:', error);
      }
      }
    }
  }
</script>
```

En este componente, `asyncData` intenta primero cargar un archivo de contenido local utilizando `$content`. Si falla (por ejemplo, si el archivo no existe), entonces atrapa el error y hace una solicitud a una API externa con `$axios`. Si la solicitud a la API también falla, se maneja el error y se muestra un mensaje alternativo.

Este es un patrón común para manejar contenido dinámico en aplicaciones Nuxt, permitiendo proporcionar una experiencia de usuario fluida incluso cuando algunos datos no están disponibles localmente.

Antes de usar este componente, demos reemplazar `https://mi-api.com/` con la URL de una API real y manejar los errores según sea necesario para la aplicación.

## Importación de módulos

En `Nuxt.js`, no necesitamos importar explícitamente `axios` o `@nuxt/content` en cada archivo donde los usemos, siempre y cuando hayamos configurado estos módulos correctamente en el fichero `nuxt.config.js`.

Para `axios`, debes asegurarte de que el módulo `@nuxtjs/axios` esté instalado y configurado en el proyecto.

Un ejemplo de cómo podría ser un `nuxt.config.js`:


``` js
export default {
  // ...
  modules: [
  '@nuxtjs/axios',
  ],
  axios: {
    // Configuración de Axios aquí
  },
  // ...
}
```

Una vez configurado, podemos usar `this.$axios` en los componentes y páginas sin necesidad de importarlo.

Para `@nuxt/content`, si hemos instalado el módulo y lo hemos agregado al fichero `nuxt.config.js`, podemos acceder a la función `$content` directamente en el contexto de las funciones `asyncData` o `fetch` sin importaciones adicionales.

Un ejemplo de cómo agregar `@nuxt/content` a la configuración:

``` js
export default {
  // ...
  modules: [
    '@nuxt/content'
  ],
  // ...
}
```

Con estas configuraciones, ambos módulos estarán disponibles globalmente en la aplicación Nuxt, y podemos utilizarlos en los componentes y páginas como se muestra en el primer ejemplo.
