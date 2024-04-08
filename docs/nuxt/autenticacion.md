# Autenticación de usuarios

Para comprobar si un usuario está registrado y logueado correctamente en un layout de Nuxt y redirigirlo según sea necesario, podemos utilizar el módulo de autenticación de Nuxt o implementar una lógica de autenticación personalizada.

Veamos cómo hacerlo con el módulo de autenticación:

Instalamos el módulo de autenticación:

``` sh
npm i -D @sidebase/nuxt-auth
```

Configura el Middleware de Autenticación: Crea un middleware que verifique el estado de autenticación del usuario. Puedes hacerlo en el archivo `middleware/auth.js`.

``` js
export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    return redirect('/login');
  }
}
```

En el layout donde queramos realizar la comprobación, podemos utilizar el middleware de autenticación.

``` html
<template>
  <div>
    <!-- Tu estructura de layout aquí -->
    <slot />
  </div>
</template>

<script>
  export default {
    middleware: 'auth'
  }
</script>
```
