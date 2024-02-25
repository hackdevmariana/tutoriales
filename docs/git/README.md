# Uso básico de git

## Añadir / quitar ficheros

``` sh
git add dist
```

## Ramas

Saber las ramas existentes:

``` sh
git branch
```

Saber las ramas existentes en el repositorio remoto:

``` sh
git branch -r
```

Crear rama huérfana:

``` sh
git checkout --orphan gh-pages
```

Eliminar rama local `gh-pages`

``` sh
git branch -D gh-pages
```

Eliminar rama remota `gh-pages`

``` sh
git push origin --delete gh-pages
```
