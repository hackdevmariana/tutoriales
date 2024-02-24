# Composition API con script setup

La opción `<script setup>` es una característica introducida en Vue 3 que simplifica enormemente el uso de la Composition API. Básicamente, `<script setup>` es una forma más concisa y declarativa de escribir la lógica de un componente utilizando la Composition API.

## Ventajas de `<script setup>`

**Automatización de la Reactividad**: Vue se encarga automáticamente de la reactividad de las variables y funciones definidas en `<script setup>`. Esto elimina la necesidad de importar funciones como `ref` o `reactive` y permite a los desarrolladores centrarse directamente en la lógica del componente.

**Menos importaciones**: Al utilizar `<script setup>`, se reducen las importaciones, ya que muchas de las funciones de Vue necesarias para la reactividad se manejan implícitamente.

**Exportación implícita**: Las variables y funciones definidas en `<script setup>` están automáticamente disponibles en el template sin necesidad de exportarlas explícitamente, simplificando aún más el código y mejorando la legibilidad.

**Menos Código**: Reduce la verbosidad y hace que el código sea más legible y conciso.

**Más Declarativo**: Facilita la comprensión al escribir la lógica del componente más cerca del template, lo que mejora la cohesión del código.

## Características principales de `<script setup>`

Reduce la cantidad de código al eliminar la necesidad de importar funciones de Vue (como `ref`, `reactive`, `computed`, etc.) y el uso de return.

Las variables y funciones definidas en `<script setup>` se exponen automáticamente al template, lo que significa que no es necesario devolver explícitamente los elementos del componente.

Vue maneja automáticamente la configuración de la infraestructura para el uso de las funciones de la Composition API, lo que reduce la complejidad y la necesidad de escribir código repetitivo.

``` js
<script setup>
  const count = ref(0);

  const increment = () => {
    count.value++;
  };
</script>

<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>
```


## Diferencias entre `<script>` y `<script setup>`

La elección entre `<script setup>` y `<script>` estándar depende mucho del contexto y la complejidad del componente.

`<script setup>` es ideal para:

- Componentes Simples: Cuando se trata de componentes más simples y directos, `<script setup>` ofrece una sintaxis más concisa y legible.

- Logica Directa del Template: Para lógica que se integra directamente con el template y no requiere un control detallado del ciclo de vida del componente.

`<script>` estándar es útil para:

- Control Detallado: Cuando se necesita un control más detallado del ciclo de vida del componente, como en casos de uso avanzados o lógica más compleja.

- Componentes Reutilizables o Complejos: En componentes reutilizables, con lógica compleja o donde se necesita más separación entre la lógica y el template.
