# Botón de copiar código

Con el plugin **copy-code2**.

[https://plugin-copy-code2.vuejs.press/](https://plugin-copy-code2.vuejs.press/)


Instalación:

``` sh
npm i -D vuepress-plugin-copy-code2
```

Importar el plugin al comienzo del config.js:

``` js{2}
import { defaultTheme } from 'vuepress'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default {
```

Añadir al final, justo después del `}),` de cierre del `theme: defaultTheme({` y el `}` final:

``` js
  plugins: [
    copyCodePlugin({
    }),
  ],
```

Opcionalmente, podemos indicar parámetros entre las llaves de la llamada al plugin.
