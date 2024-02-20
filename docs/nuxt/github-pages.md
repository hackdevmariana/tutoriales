# Publicar un proyecto Nuxt en GitHub Pages

Para hacer un conjunto de componentes que se llame `@buey` y un proyecto con Nuxt para mostrar las demos, primero crearemos un directorio:

``` sh
mkdir @buey
```

Inicializamos git:

``` sh
git init
```

Luego, vamos a [GitHub](https://github.com) y creamos un repositorio llamado `@buey` (que GitHub lo transforma en `-buey`) y generamos un [token de acceso](../git/access-token).

GitHub no permite nombres de repositorio que comiencen con "@", por lo que cuando creamos el repositorio, lo convierte a "-buey". Sin embargo, en los archivos y carpetas locales, se puede mantener la nomenclatura `@buey`. Al trabajar localmente, podemos ignorar el cambio que GitHub ha hecho.

Y, en el directorio `@buey`, escribimos:

``` sh
git remote add origin https://usuario:token@github.com/usuario/my-github-repo.git
```

Creamos un fichero `.gitignore` en el directorio del repositorio para evitar subir archivos o directorios innecesarios, como `node_modules`, que no deberían ser parte del repositorio.

Agregamos las siguientes líneas:

```
node_modules/
dist/
```
