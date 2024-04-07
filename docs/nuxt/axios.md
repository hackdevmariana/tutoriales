# Módulo @nuxtjs/axios

Instalación:

``` sh
npm install @nuxtjs/axios
```

Después de instalar `@nuxtjs/axios`, necesitamos configurarlo en el archivo `nuxt.config.ts`:

``` js
export default {
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // Configuración de axios
  }
}
```

## Configuración de baseURL (opcional)

Podemos configurar una `baseURL` global para todas las solicitudes axios.

La baseURL es la URL base de la API a la que se enviarán todas las solicitudes axios. Por ejemplo:

``` js
export default {
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://api.example.com'
  }
}
```

## Uso en componentes y páginas

Ahora, podemos usar `this.$axios` en los componentes y páginas de Nuxt para hacer solicitudes HTTP.

Por ejemplo:

``` js
export default {
  async asyncData() {
    // Ejemplo de solicitud GET
    const response = await this.$axios.$get('/ruta-de-la-api');
    return { data: response };
  }
}
```
