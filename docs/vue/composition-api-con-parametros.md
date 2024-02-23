# Uso de parámetros en Componentes Vue

En Vue, el paso de parámetros a componentes es una parte fundamental del desarrollo de aplicaciones. Permite la comunicación entre componentes, facilitando la transferencia de datos desde un componente padre a un componente hijo.

## Convención de nombres en Vue:

En Vue, existe una convención de nombres para los componentes cuando se usan en el template. Si hay un componente llamado `ChildComponent.vue`, al usarlo en el template, se debe seguir la convención de kebab-case, lo que significa que en el template se escribiría como `<child-component></child-component>`.

Por ejemplo, en `ParentComponent.vue`:

``` vue
<template>
  <div>
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
```

Aquí, `ChildComponent` en el script se referirá a `child-component` en el `template`. Esta convención de nombres es común en muchos frameworks de componentes de un solo archivo.

## Propiedades (props)

Las propiedades son la forma principal de pasar datos desde un componente padre a un componente hijo en Vue. Se definen en el componente hijo y se pueden acceder como propiedades en el componente hijo. Aquí hay un ejemplo básico:

Definición de propiedades en el componente hijo `ChildComponent.vue`:

``` vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>
```

Definición de propiedades en el componente hijo `ParentComponent.vue`:

``` vue
<template>
  <div>
    <child-component :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hola desde el componente padre'
    };
  }
};
</script>
```

En este ejemplo, message es una propiedad definida en el componente hijo (ChildComponent). Se pasa desde el componente padre (ParentComponent) mediante la sintaxis de unión (`:message="parentMessage"`).

## Validación de propiedades

Se pueden proporcionar reglas de validación para las propiedades utilizando las opciones `type`, `required`, `default`, etc... Esto ayuda a garantizar que los datos proporcionados sean del tipo esperado y cumplan con ciertos criterios.

`ChildComponent.vue`:

``` vue
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>
```

En este caso, la propiedad message ahora es obligatoria (required: true) y debe ser de tipo String.

## Propiedades Dinámicas

En Vue, se pueden utilizar propiedades dinámicas para pasar objetos o arrays más complejos desde el componente padre al componente hijo.

`ParentComponent.vue`:

``` vue

<template>
  <div>
    <child-component :data="parentData" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentData: {
        key1: 'valor1',
        key2: 'valor2'
      }
    };
  }
};
</script>
```

`ChildComponent.vue`:

``` vue

<template>
  <div>
    <p>{{ data.key1 }} - {{ data.key2 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>
```

## Paso de funciones como propiedades

También se pueden pasar funciones como propiedades para permitir que el componente hijo comunique cambios al componente padre. Este enfoque es útil para manejar eventos.

`ParentComponent.vue`:

``` vue
<template>
  <div>
    <child-component :onButtonClick="handleButtonClick" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    handleButtonClick() {
      console.log('Botón clickeado en el componente hijo');
    }
  }
};
</script>
```

`ChildComponent.vue`:

``` vue
<template>
  <div>
    <button @click="onButtonClick">Clickeame</button>
  </div>
</template>

<script>
export default {
  props: {
    onButtonClick: Function
  }
};
</script>
```

En este ejemplo, onButtonClick es una función pasada desde el componente padre al componente hijo para manejar el evento de clic.

## Eventos personalizados

Además del uso de propiedades, Vue proporciona una forma de emitir eventos personalizados desde el componente hijo para notificar al componente padre sobre cambios o interacciones. Aquí hay un ejemplo:

Emitir eventos desde el componente hijo `ChildComponent.vue`:

``` vue
<template>
  <div>
    <button @click="handleButtonClick">Clickeame</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleButtonClick() {
      this.$emit('button-clicked', 'Información adicional');
    }
  }
};
</script>
```

Manejar eventos desde el componente padre `ChildComponent.vue`:

``` vue
<template>
  <div>
    <child-component @button-clicked="handleButtonClick" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    handleButtonClick(extraInfo) {
      console.log(`Botón clickeado en el componente hijo con información adicional: ${extraInfo}`);
    }
  }
};
</script>
```

En este ejemplo, el componente hijo emite un evento llamado `button-clicked` junto con información adicional, y el componente padre maneja este evento en el método `handleButtonClick`.

## Parámetros en <script setup>

En `<script setup>`, no se utilizan `props` de la misma manera que en el bloque script estándar. En su lugar, se utiliza la función `defineProps` para definir las propiedades.

Un ejemplo de cómo manejar parámetros con `<script setup>` en un componente hijo `ChildComponent.vue`:

``` vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
// Utilizando defineProps para recibir propiedades
const props = defineProps(['message']);
</script>

```

Y en el componente padre `ParentComponent.vue`:

``` vue
<template>
  <div>
    <!-- Usando el componente hijo y pasando la propiedad -->
    <child-component :message="parentMessage" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

// Datos en el componente padre
const parentMessage = ref('Hola desde el componente padre');
</script>
```

En este ejemplo, `defineProps` se utiliza para recibir propiedades en el bloque `<script setup>` del componente hijo de una forma más concisa y elimina la necesidad de declarar `props` explícitamente.
