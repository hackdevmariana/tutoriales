# Ejecutar función al hacer clic

Para ejecutar un función al hacer clic en un botón, se define la acción en el botón mediante:

``` html
<button v-on:click="funcion">Aceptar</button>
```
O su abreviatura:

``` html
<button @click="funcion">Aceptar</button>
```

Y definimos la función en la sección script:

``` html
<script setup>
  conts funcion=()=>{
    console.log("Hola, mundo")
  }
</script>
```

## Funciones con parámetros

Definimos el botón con la llamada a la acción:

``` html
<button @click="funcion(miNombre)">Aceptar</button>
```

Y definimos la función en la sección script:

``` html
<script setup>
  conts funcion=(name)=>{
    console.log(`Hola, ${name}`)
  }
</script>
```


## Funciones con valores reactivos

``` html
<template>
  <button @click="incremento">+</button>
  <span> {{ contador }} </span>
  <button @click="decremento">-</button>
</template>
<script setup>
  import { ref } from 'vue';
  const contador=ref(0);
  const decremento = () => {
    contador.value--;
  }
  const incremento = () => {
    contador.value++;
  }
</script>
```
