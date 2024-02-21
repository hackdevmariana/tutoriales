# Problemas con git en la creación de un proyecto Nuxt

Al crear un proyecto Nuxt con el comando:

``` sh
npx create-nuxt-app
```

se crea un directorio .git por defecto. Esto puede causar conflictos si ya tienes otro repositorio de git en el mismo directorio. Supongamos que queremos hacer unos componentes y, en el mismo repositorio, una página con las demos. Si tenemos una estructura como esta:

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

En el directorio `demos` tendremos `demos/.git` a no ser que creemos el proyecto con el siguiente comando:

``` sh
npx create-nuxt-app --no-git
```

para crear un proyecto Nuxt sin el directorio .git.

En caso de que ya hayamos creado el proyecto y al intentar añadir los ficheros nos indique esto git:

``` sh
$  git add .
error: 'demos/' does not have a commit checked out
fatal: adding files failed
```

Podemos usar el comando:

``` sh
rm -rf .git
```

para eliminar el directorio `.git` después de crear el proyecto Nuxt.
