# Crear proyecto Vue

``` sh
npm create vue@latest
cd vue-project
npm install
npm run format
npm run dev
```

### Descripción de los comandos

``` sh
npm create vue@latest
```

Este comando utiliza `npm` (el gestor de paquetes de Node.js) para crear un nuevo proyecto Vue.

**create**: Indica a npm que cree un nuevo proyecto.
**vue@latest**: Especifica que se debe usar la última versión de Vue.js para crear el proyecto.

``` sh
cd vue-project
```

Este comando cambia el directorio de trabajo actual al directorio del proyecto recién creado.

**cd**: Abreviatura de "change directory" (cambiar directorio).
**vue-project**: Nombre del directorio del proyecto creado por el comando anterior.

``` sh
npm install
```

Este comando instala las dependencias del proyecto definidas en el archivo `package.json`.

**npm install**: Descarga e instala las dependencias listadas en el archivo `package.json`.

``` sh
npm run format
```

Este comando ejecuta un script personalizado llamado "format" que puede estar configurado para formatear el código según ciertas reglas.

**npm run**: Ejecuta un script definido en el archivo `package.json`.
**format**: Nombre del script que realiza tareas de formateo según la configuración del proyecto.

``` sh
npm run dev
```

Este comando ejecuta el servidor de desarrollo para la aplicación Vue.

**npm run**: Ejecuta un script definido en el archivo `package.json`.
**dev**: Nombre del script que inicia el servidor de desarrollo.

Una vez ejecutados estos comandos, podemos ir a [http://localhost:5173/](http://localhost:5173/) y ver el proyecto funcionando.

## Fichero index.html

En el mismo directorio del proyecto está el fichero `index.html`, con este código por defecto:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

Donde podemos cambiar el idioma de la página:

``` html
<html lang="es">
```

El nombre del proyecto:

``` html
<title>Mi proyecto Vue</title>
```
