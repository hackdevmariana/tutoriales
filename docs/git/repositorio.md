# Crear y configurar un repositorio en GitHub

Para poder compartir código en GitHub, debemos crear un repositorio para nuestro proyecto.

Para ello, una vez logueados en GitHub, iremos a https://github.com/usuario?tab=repositories (cambiando usuario por nuestro nombre de usuario).

Generaremos un token de acceso en [https://github.com/settings/tokens](https://github.com/settings/tokens).

Escribiremos la nota que nos ayude a recordar el motivo del token y seleccionaremos "Repo", que activará automáticamente:

- repo:statusAccess commit status

- repo_deploymentAccess deployment status

- public_repoAccess public repositories

- repo:inviteAccess repository invitations

- security_eventsRead and write security events

En el directorio donde estemos desarrollando el proyecto, iniciamos git:

``` sh
git init
```

Y configuramos el repositorio remoto:

``` sh
git remote add origin https://usuario:token@github.com/usuario/proyecto.git
```

Creamos el fichero .gitignore para evitar subir código que no aporta valor al proyecto, como el directorio del entorno virtual en Python:

``` sh
echo venv/ >> .gitignore
```

O el directorio node_modules y dist en Vue, Nuxt u otro framework de JavaScript:

``` sh
echo node_modules/ >> .gitignore
echo dist/ >> .gitignore
```

Mientras trabajamos en nuestro proyecto, podemos ver el estado de git con:

``` sh
git status
```

Añadimos los ficheros que queramos añadir con:

``` sh
git status fichero
```

O si añadir todos, lo haremos con:

``` sh
git add .
```

Y realizamos un commit:

``` sh
git add .
git commit -m "first commit"
```

Y ya podemos subirlo con:

``` sh
git push -u origin master
```
