# Trabajar con múltiples servidores en Vue / VuePress

Podemos estar trabajando en un proyecto con Vue y, a la vez, documentando con VuePress.

Si es así, puede que necesitemos trabajar con varios servidores, uno para ejecutar el proyecto Vue y otro para la documentación en VuePress.

Tendríamos una opción, que sería ejecutar individualmente cada servidor con el _flag_ `--port` e indicar el servidor:

``` sh
npm run docs:dev --port 8081
```

Pero es más sencillo modificar los scripts en el archivo package.json de cada proyecto para asignar puertos específicos al ejecutar los servidores de desarrollo.

Por ejemplo, para Vue, el script de inicio en `package.json` podría tener algo así:

``` json
"scripts": {
  "serve": "vue-cli-service serve --port 8080"
}
```

Y para VuePress, el archivo `package.json`, podría tener algo como:

``` json{2}
"scripts": {
  "docs:dev": "vuepress dev docs --port 8081",
  "docs:build": "vuepress build docs"
},
```

De esta manera, al ejecutar `npm run serve` en el proyecto Vue, utilizará el puerto 8080, y al correr `npm run docs:dev` en el proyecto VuePress, se lanzará en el puerto 8081.


Esto permitirá tener ambos servidores ejecutándose al mismo tiempo sin conflictos.
