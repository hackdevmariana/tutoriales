# Publicar un proyecto Nuxt en GitHub Pages

Para hacer un conjunto de componentes que se llame `@proyecto` y un proyecto con Nuxt para mostrar las demos, primero crearemos un directorio:

``` sh
mkdir @buey
cd @buey
```

Inicializamos git:

``` sh
git init
```

Luego, vamos a [GitHub](https://github.com) y creamos un repositorio llamado `@proyecto` (que GitHub lo transforma en `-proyecto`) y generamos un [token de acceso](../git/access-token).

GitHub no permite nombres de repositorio que comiencen con "@", por lo que cuando creamos el repositorio, lo convierte a "-buey". Sin embargo, en los archivos y carpetas locales, se puede mantener la nomenclatura `@proyecto`. Al trabajar localmente, podemos ignorar el cambio que GitHub ha hecho.

Y, en el directorio `@proyecto`, escribimos:

``` sh
git remote add origin https://usuario:token@github.com/usuario/proyecto.git
```

Creamos un fichero `.gitignore` en el directorio del repositorio para evitar subir archivos o directorios innecesarios, como `node_modules`, que no deberían ser parte del repositorio.

Agregamos las siguientes líneas:

```
node_modules/
dist/
```

## Descarga de componentes individuales

Es posible que los usuarios descarguen componentes individuales organizando el repositorio de manera que cada componente tenga su propia carpeta o estructura dentro del directorio `@proyecto`. Por ejemplo:

```
@proyecto/
└── Componente1/
    └── Componente1.vue
└── Componente2/
    └── Componente2.vue
```

Así, los usuarios pueden clonar o descargar solo la carpeta del componente que desean utilizar.

## Página con Nuxt de demos

Podemos crear una página con Nuxt para mostrar demos de los componentes. Podemos crear un repositorio separado para la documentación y las demos, y luego utilizar `GitHub Pages` o cualquier otro servicio de alojamiento para mostrar esa página. Esto permite separar claramente la biblioteca de componentes (`@proyecto`) de la documentación y las demos.

Por ejemplo, podemos tener la siguiente estructura de repositorios:

```
my-project/
├── @project/
│   ├── Componente1/
│   │   └── Componente1.vue
│   ├── Componente2/
│   │   └── Componente2.vue
├── demos/
│   ├── pages/
│   │   └── index.vue  (página principal)
│   │   └── Componente1Demo.vue
│   │   └── Componente2Demo.vue
```

## Proyecto Nuxt

Creamos el proyecto Nuxt en el directorio demos:

``` sh
mkdir demos
cd demos
npx create-nuxt-app .
```
