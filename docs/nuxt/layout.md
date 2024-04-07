# Uso de layouts

Podemos crear un layout creando un fichero `.vue` en el directorio `/layouts`.

O podemos crearlo con el CLI:

``` sh
nuxi add layout miLayout
```

Para usar un layout por defecto en todas las páginas, a menos que especifiquemos lo contrario, el layout se debe llamar `layouts/default.vue`.

``` sh
nuxi add layout default
```

## Estructura del layout

Para crear un layout personalizado en Nuxt, en la carpeta `layouts/` del proyecto Nuxt, crearemos un nuevo archivo `.vue`. Por ejemplo, `layouts/custom.vue`.

Podemos crearlo con:

``` sh
nuxi add layout custom
```

Dentro de este fichero, definimos la estructura HTML que deseemos para el layout.

Debemos asegurarnos de incluir un `<slot />` donde se renderizarán las páginas.

``` html
<template>
  <div>
    <!-- La estructura del layout -->
    <slot />
  </div>
</template>
```

## Uso de un layout específico en una página

Para usar un layout específico en un componente de Nuxt, primero, debemos tener un archivo de layout en la carpeta `layouts/` del proyecto Nuxt.

Por ejemplo, si queremos crear un layout llamado `custom`, deberíamos tener un archivo `layouts/custom.vue`.

En el componente de página donde queremos usar el layout, debemos establecer la propiedad `layout` en el script de configuración de la página:

``` html
<script setup>
  definePageMeta({
    layout: 'custom'
  })
</script>
```

El contenido de la página se mostrará dentro del `<slot />` del fiechero layout especificado.

Hay que asegurarse de que el layout tenga un elemento raíz único y un `<slot />` para el contenido de la página.

Si se especifica un layout, Nuxt usará el layout por defecto `layouts/default.vue`.

## Página sin layout

Para usar un layout por defecto en una aplicación Nuxt pero excluirlo en páginas específicas como la página de inicio o login, podemos tener un layout por defecto definido en `layouts/default.vue`. Este layout se aplicará automáticamente a todas las páginas que no especifiquen otro layout.

En las páginas donde no queramos usar ningún layout, como la página de inicio o login, debemos establecer la propiedad layout en el script de configuración de la página con el valor `false`.

``` html
<script setup>
  definePageMeta({
    layout: false
  })
</script>
```

## La función setPageLayout

La función `setPageLayout` es una función de utilidad en Nuxt que permite cambiar dinámicamente el layout de una página.

Esto es especialmente útil cuando necesitamos cambiar el layout basado en ciertas condiciones o eventos, como un cambio en el estado de autenticación del usuario o una respuesta a una acción del usuario.

Para usar `setPageLayout`, normalmente lo llamaríamos dentro de la función `setup` de un componente de página o en un middleware de ruta, dependiendo de las necesidades específicas.

Un ejemplo de cómo podríamos usar `setPageLayout` para cambiar a un layout llamado 'custom':

``` html
<script setup>
  import { setPageLayout } from 'nuxt/app'

  function enableCustomLayout() {
    setPageLayout('custom')
  }
</script>
```

En este ejemplo, `enableCustomLayout` es una función que podemos llamar, por ejemplo, en respuesta a un evento de clic para cambiar el layout actual al layout 'custom'.

Recordemos que el nombre del layout debe coincidir con el nombre de un archivo `.vue` en el directorio layouts.
