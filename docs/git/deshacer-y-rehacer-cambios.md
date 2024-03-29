# Cómo moverse por los cambios en los commits

Para volver al estado del último commit:

``` sh
git reset --hard HEAD
```

Listar todos los commits del proyecto:

``` sh
git log
```

Volver a un commit específico:

``` sh
git reset --hard HEAD <hash>
```

Listar todos los commits por los que ha pasado un proyecto, incluso cuando hemos dehecho algún cambio:

``` sh
git reflog
```

Deshacer un cambio y volver a un estado posterior:

``` sh
git reflog --hard HEAD <hash>
```
