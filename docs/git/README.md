# Uso básico de git

## Añadir / quitar ficheros

``` sh
git add dist
```

## Ramas

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
