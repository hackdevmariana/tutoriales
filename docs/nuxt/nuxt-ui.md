# Nuxt UI

Nuxt UI es un módulo que proporciona un conjunto de componentes y composables de Vue construidos con Tailwind CSS y Headless UI. Está diseñado para ayudar a crear interfaces de usuario visualmente agradables y accesibles para aplicaciones Nuxt. Su objetivo es ofrecer todo lo relacionado con la interfaz de usuario al construir una aplicación Nuxt, incluyendo componentes, iconos, colores, modo oscuro y también atajos de teclado.

Algunas características destacadas de Nuxt UI son:

- Construido con Headless UI y Tailwind CSS: Esto asegura que los componentes sean accesibles y estén estilizados con un enfoque moderno.

- Soporte HMR: Gracias al soporte de Hot Module Replacement (HMR), podemos ver los cambios en tiempo real mientras desarrollamos la aplicación.

- Soporte de Modo Oscuro: Podemos alternar entre temas claros y oscuros, lo cual es una característica muy solicitada en las aplicaciones web modernas.

- Soporte para Idiomas LTR y RTL: Esto es útil si tu aplicación necesita soportar idiomas que se leen de derecha a izquierda.

- Atajos de Teclado: Los atajos de teclado son una gran adición para mejorar la usabilidad y la accesibilidad.

- Iconos Integrados: Tener una biblioteca de iconos a mano puede ser muy útil para el desarrollo rápido de interfaces.

- Totalmente Tipado: Nuxt UI esté completamente tipado con TypeScript.

- Kit de Figma: Para aquellos que utilizan Figma para el diseño, Nuxt UI ofrece un kit que facilita su uso.

Ejemplo de un componente de botón de Nuxt UI:


``` html
<template>
  <div class="p-4">
    <NuxtUIButton @click="alert('¡Hola, Nuxt UI!')" variant="primary">
      Haz clic en mí
    </NuxtUIButton>
  </div>
</template>

<script>
export default {
  methods: {
    alert(message) {
      window.alert(message);
    }
  }
}
</script>
```

En este ejemplo, NuxtUIButton es un componente de botón estilizado que viene con Nuxt UI. Podemos pasarle propiedades como `variant` para cambiar su apariencia según las variantes definidas en tu configuración de Tailwind CSS. Al hacer clic en el botón, se llama al método alert que muestra un mensaje.
