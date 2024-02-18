# VuePress

## Crear proyecto



``` sh
mkdir proyecto-vuepress
cd proyecto-vuepress
git init
npm init
npm install -D vuepress@next
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

Definir los comandos para lanzar los servidores de desarrollo y de compilación en `package.json`:

``` js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

Añadir los directorios de desarrollo a `.gitignore`:

``` sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

Crear el directorio de trabajo:

``` sh
mkdir docs
mkdir docs/.vuepress
```

Crear página de prueba:

``` sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

Y el fichero de configuración `docs/.vuepress/config.js`:

``` js
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

Debemos añadir los scripts de ejecución del servidor y renderizado en `package.json`:

``` js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```


Ejecutar el servidor de desarrollo:

``` sh
npm run docs:dev
```
