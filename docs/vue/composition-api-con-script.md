# Composition API con script

La Composition API es una característica de Vue 3 que permite organizar la lógica de los componentes en bloques reutilizables y cohesivos. Cuando se utiliza con `<script>`, se puede dividir la lógica en diferentes secciones, como `data`, `methods`, `computed`, `watch`..., entre otras, para una mejor legibilidad y mantenimiento del código.

## Inicializar el componente

En la sección `<script>`, se inicia el componente Vue utilizando el método `defineComponent` o `export default` para definir el componente:

``` js
import { defineComponent } from 'vue';

export default defineComponent({
  // Configuración del componente
});
```

`export default defineComponent` es la forma recomendada para definir un componente en Vue 3. `defineComponent` permite tipar propiedades y eventos del componente y facilita la correcta inferencia de tipos en el desarrollo con TypeScript. Es la forma explícita de definir un componente Vue y es la opción preferida cuando se trabaja con TypeScript.

`export default` es la forma se utiliza cuando no se requiere tipado o características específicas de TypeScript en el componente. Es una forma más genérica de exportar el componente y puede ser útil para componentes simples o cuando no se necesita la capacidad de tipado de TypeScript.

``` js
export default {
  // ... Configuración del componente
};
```

## Propiedades y eventos tipados

`<script>` facilita la tipificación de propiedades y eventos del componente, especialmente cuando se usa `defineComponent` con TypeScript. Esto ayuda en el desarrollo al proporcionar autocompletado y detección de errores.

``` js
import { defineComponent, ref, reactive } from 'vue';

interface MyComponentProps {
  initialCount: number;
}

export default defineComponent<MyComponentProps>({
  props: {
    initialCount: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const count = ref(props.initialCount);

    // Resto del setup...
  }
});
```

## Variables, variables reactivas y variables computadas

``` js
import { ref, reactive, computed } from 'vue';

export default defineComponent({
  setup() {
    // Variables reactivas
    const count = ref(0); // Variable reactiva con ref
    const state = reactive({      // Variable reactiva con reactive
      message: 'Hello!',
      status: 'active'
    });

    // Variable computada
    const doubledCount = computed(() => count.value * 2);

    return {
      count,
      state,
      doubledCount
    };
  }
});
```

En Vue 3, se utiliza `ref` para crear datos reactivos simples y `reactive` para objetos reactivos más complejos.

``` js
import { ref, reactive } from 'vue';

// Variable reactiva simple
const count = ref(0);

// Objeto reactiv
const state = reactive({
  message: 'Hello!',
  status: 'active'
});
```

Para objetos simples, `ref` puede ser suficiente y a veces más apropiado.

``` js
// Para un objeto simple
const simpleObject = ref({ key: 'value' });
```

Las variables computadas se definen con `computed`. Estas dependen de otros valores reactivos y se recalculan solo cuando alguna de sus dependencias cambia.

``` js
import { ref, computed } from 'vue';

const count = ref(0);

// Variable computada
const doubledCount = computed(() => count.value * 2);
```

## Métodos

Los métodos se definen de manera similar a las variables reactivas, pero como funciones simples dentro del bloque setup.

``` js
export default defineComponent({
  setup() {
    const increment = () => {
      count.value++;
    };

    const toggleStatus = () => {
      state.status = state.status === 'active' ? 'inactive' : 'active';
    };

    return {
      increment,
      toggleStatus
    };
  }
});
```

## Lifecycle Hooks

Los ganchos del ciclo de vida, como `onMounted`, `onUpdated`, `onUnmounted`, etc., se utilizan dentro del bloque `setup` para ejecutar lógica en diferentes momentos del ciclo de vida del componente.

``` js
import { onMounted, onUnmounted } from 'vue';

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('Componente montado');
    });

    onUnmounted(() => {
      console.log('Componente desmontado');
    });
  }
});
```

Estos ganchos pueden recibir argumentos, como el contexto, para acceder a las propiedades del componente.

``` js
import { onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);

    onMounted(() => {
      console.log(`Componente montado. Valor actual de count: ${count.value}`);
    });
  }
});
```

## Watchers

Para observar cambios en variables reactivas, se usa `watch`.

``` js
import { watch } from 'vue';

export default defineComponent({
  setup() {
    watch(
      count,
      (newValue, oldValue) => {
        console.log(`El valor ha cambiado de ${oldValue} a ${newValue}`);
      }
    );
  }
});
```

Se utiliza para observar cambios en las variables reactivas y ejecutar una función cuando estas cambian.

``` js
import { watch, ref } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`El valor ha cambiado de ${oldValue} a ${newValue}`);
});
```

## Uso de watchEffect

Es similar a watch, pero ejecuta la función automáticamente al inicio sin necesidad de especificar dependencias.

``` js
import { watchEffect, ref } from 'vue';

const count = ref(0);

watchEffect(() => {
  console.log(`El valor actual de count es: ${count.value}`);
});
```

## return

En el bloque setup de un componente, se utiliza `return` para exponer los datos, métodos o valores que se desean usar en el template del componente.

``` js
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    return {
      count
    };
  }
};
```

`return` es fundamental en Composition API ya que permite que las variables y funciones definidas en el bloque setup estén disponibles en el template del componente para su uso. Esto facilita la separación clara entre la lógica y la presentación en los componentes Vue.


## Módulos y exportación detallada

`<script>` facilita la exportación detallada de módulos, lo que puede ser útil en componentes más complejos o cuando se desea mayor claridad en la estructura del código.

``` js
// En lugar de export default, puedes exportar de manera detallada
export { count, state, doubledCount };
```
