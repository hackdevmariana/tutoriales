# Cambios entre modo día y modo noche

Configuración:

``` js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
})
```

## Uso básico

``` html
<template>
  <div>
    <button @click="colorMode.preference = 'dark'">Modo Oscuro</button>
    <button @click="colorMode.preference = 'light'">Modo Claro</button>
  </div>
</template>

<script setup>
  const colorMode = useColorMode();
</script>
```

## Componente más avanzado

``` html
<template>
  <button @click="toggleDarkMode(); toggleBodyTheme()" :class="isDark ? 'btn btn-sm btn-light' : 'btn btn-sm btn-dark'">
    <i :class="isDark ? 'bi bi-brightness-high-fill' : 'bi bi-moon-fill'"></i>
    {{ isDark ? "Día" : "Noche" }}
  </button>
</template>

<script setup>
  import { computed, watch } from "vue";

  const colorMode = useColorMode();

  const isDark = computed(() => colorMode.value === 'dark');

  const toggleDarkMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };

  const toggleBodyTheme = () => {
    document.body.classList.remove(isDark.value ? 'light-theme' : 'dark-theme');
    document.body.classList.add(isDark.value ? 'dark-theme' : 'light-theme');
  };

  watch(isDark, toggleBodyTheme);

</script>

<style scoped>
.bi-moon-fill {
  color: #dee2e6;
}

.bi-brightness-high-fill {
  color: #e1c123;
}
</style>
```

## CSS personalizado modo día-noche

``` css
/* Modo claro */
.theme-light {
  background-color: #ffffff;
  color: #333333;
}

/* Modo oscuro */
.theme-dark {
  background-color: #333333;
  color: #ffffff;
}

/* Otras clases pueden incluir el prefijo para mantener la consistencia */
.theme-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
}

/* Y puedes tener variaciones basadas en el modo de color */
.theme-light .theme-button {
  background-color: #007bff;
  color: #ffffff;
}

.theme-dark .theme-button {
  background-color: #0066cc;
  color: #ffffff;
}
```
