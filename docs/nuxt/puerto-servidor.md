# Cambiar el puerto del servidor de desarrollo de Nuxt

Para cambiar el puerto de ejecución al ejecutar npm run dev en un proyecto de Nuxt, puedes usar la opción `--port` o `-p` seguida del número de puerto deseado:

``` sh
npm run dev -- -p 3001
```

Esto ejecutará la aplicación Nuxt en el puerto 3001 en lugar del puerto predeterminado (3000).

## En fichero de configuración

Para evitar tener que escribir el puerto cada vez que ejecutemos el servidor, podemos configurar el puerto en el archivo de configuración de Nuxt (`nuxt.config.js` o `nuxt.config.ts`).

En nuxt.config.js:

``` js
export default {
  server: {
    port: 3001
  }
}
```

En nuxt.config.ts:

``` js
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  server: {
    port: 3001
  }
}

export default config
```

O, más simple, para poder incluir más configuraciones, como activar las `devtools`:

``` js
import { NuxtConfig } from '@nuxt/types'

export default defineNuxtConfig({
  server: {
    port: 3001
  },
  devtools: { enabled: true }
})
```

Con esta configuración, al ejecutar `npm run dev`, la aplicación Nuxt se iniciará en el puerto especificado en la configuración.
