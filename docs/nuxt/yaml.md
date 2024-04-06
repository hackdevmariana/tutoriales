# Leer variables de un fichero yaml

Necesitaremos instalar el módulo `yaml-loader` en el proyecto. Lo podemos hacer con `npm`:

``` sh
npm install --save-dev yaml-loader
```

O la librería `js-yaml`:

``` sh
npm install js-yaml
```

Después, debemos configurar Nuxt en el fichero `nuxt.config.ts` para usar `yaml-loader` para los archivos locales:

``` js
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Otras configuraciones de Nuxt...

  buildModules: [
    // Otros módulos...
    '@nuxt/typescript-build'
  ],

  build: {
    extend(config, ctx) {
      // Agregar regla para cargar archivos YAML
      config.module!.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      });
    }
  }
};

export default config;
```

## Leer el fichero completo

Para leer el fichero completo, dentro del `script setup` o método `asyncData` de `script`:

``` js
var doc = await queryContent('data/projects').findOne();
console.log(doc.body);
```

## Acceso a variables

Para acceder a variables específicas de un archivo YAML en Nuxt, podemos importar el archivo y luego acceder a las propiedades deseadas directamente:

``` js
// Importa el módulo fs para leer archivos
const fs = require('fs');
// Importa la librería yaml para parsear el archivo YAML
const yaml = require('js-yaml');

// Lee el archivo YAML
const fileContents = fs.readFileSync('./locales/miArchivo.yaml', 'utf8');

// Parsea el contenido del archivo
const data = yaml.load(fileContents);

// Accede a las variables específicas
const title = data.title;
const image = data.image;
const content = data.content;

// Ahora puedes usar las variables 'title', 'image' y 'content' como necesites
console.log(title, image, content);
```

## Leer conjuntos de datos

Podemos almacenar conjuntos de datos en un fichero YAML:

``` YML
datos:
  - titulo: "Conjunto de datos 1"
    descripcion: "Este es el primer conjunto de datos."
    enlace: "https://ejemplo.com/1"
    imagen: "imagen1.jpg"

  - titulo: "Conjunto de datos 2"
    descripcion: "Este es el segundo conjunto de datos."
    enlace: "https://ejemplo.com/2"
    imagen: "imagen2.jpg"

  - titulo: "Conjunto de datos 3"
    descripcion: "Este es el tercer conjunto de datos."
    enlace: "https://ejemplo.com/3"
    imagen: "imagen3.jpg"
```

Y leerlos desde un componente:

``` HTML
<template>
  <div>
    <div v-for="(dato, index) in datos" :key="index">
      <h2>{{ dato.titulo }}</h2>
      <p>{{ dato.descripcion }}</p>
      <a :href="dato.enlace">{{ dato.enlace }}</a>
      <img :src="dato.imagen" alt="Imagen">
    </div>
  </div>
</template>

<script>
import yaml from 'js-yaml';
import fs from 'fs';

export default {
  data() {
    return {
      datos: []
    };
  },
  mounted() {
    const datosYAML = fs.readFileSync('datos.yaml', 'utf8');

    this.datos = yaml.load(datosYAML);
  }
};
</script>
```

## Escribir un yaml

Para escribir un archivo YAML en Nuxt, debemos crear previamente la estructura de datos que necesitamos.

Por ejemplo, `miArchivo.yaml`:

``` YML
title: "Mi Título"
image: "mi-imagen.jpg"
content: "Este es el contenido."
```

Guardamos este archivo en el directorio del proyecto donde sea accesible, como `static/` o `assets/`.

Utilizamos el módulo `fs` (File System) de Node.js para escribir en el archivo.

Aquí, un ejemplo de cómo hacerlo en un método o acción de Nuxt:

``` js
const fs = require('fs');
const yaml = require('js-yaml');

// Suponiendo que tienes un objeto de datos para escribir en YAML
const data = {
title: "Nuevo Título",
image: "nueva-imagen.jpg",
content: "Nuevo contenido."
};

// Convierte el objeto de datos a una cadena YAML
const yamlStr = yaml.dump(data);

// Escribe la cadena YAML en el archivo
fs.writeFileSync('ruta/a/miArchivo.yaml', yamlStr, 'utf8');
```

## js-yaml y yaml-loader

Las bibliotecas js-yaml y yaml-loader son herramientas que se utilizan para trabajar con archivos YAML en proyectos de JavaScript, pero tienen propósitos ligeramente diferentes y se usan en contextos distintos:

- **js-yaml**: Es una librería de Node.js que permite parsear y serializar datos en formato YAML. Se puede utilizar tanto en aplicaciones del lado del servidor como en herramientas de línea de comandos. Es útil para leer archivos YAML y convertirlos en objetos JavaScript, o viceversa, convertir objetos JavaScript en cadenas YAML para su almacenamiento o transmisión.

- **yaml-loader**: Es un loader para Webpack que permite importar archivos YAML como módulos dentro de aplicaciones web. Cuando se usa con Webpack, `yaml-loader` convierte los datos YAML en JSON, lo que facilita su integración con el ecosistema de módulos de JavaScript. Es especialmente útil en el contexto del desarrollo de aplicaciones web, donde se necesita incluir archivos de configuración YAML como parte del paquete de la aplicación.

En resumen, `js-yaml` es una librería general para parsear y serializar YAML en aplicaciones Node.js, mientras que `yaml-loader` es específico para proyectos que usan Webpack, permitiendo importar archivos YAML directamente en el código fuente de una aplicación web.
