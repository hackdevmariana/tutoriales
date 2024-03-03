# Recibir parámetros en componentes Vue

Se puede pasar parámetros a un componente Vue usando la propiedad `props`. Los parámetros se definen como un array de cadenas o un objeto con opciones de validación. Por ejemplo, para pasar dos cadenas, podemos hacer algo así:

``` html
<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['titulo', 'descripcion']);
</script>
```

Luego, para usar el componente y pasarle los valores de los parámetros, podemos hacer algo así:

``` html
<mi-componente-vue
  titulo="Mi componente Vue"
  descripcion="Este es un ejemplo de cómo convertir una plantilla en HTML con Bootstrap en un componente Vue."
>
</mi-componente-vue>
```

Un `script setup` es una forma de escribir el código de un componente Vue usando la API de composición de una manera más concisa y declarativa. En lugar de exportar un objeto con una función `setup`, podemos escribir el código directamente en el bloque `<script setup>` y cualquier variable o función que declaremos se expondrá automáticamente en la plantilla. Por ejemplo, el componente anterior se podría escribir así usando un `script setup`:

Definir los parámetros con un array de cadenas:

``` html
<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const [titulo, descripcion] = defineProps(['titulo', 'descripcion']);
</script>
```

O definir los parámetros con un objeto con opciones de validación:

``` html
<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const { titulo, descripcion } = defineProps({
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      default: ''
    }
  });
</script>
```
