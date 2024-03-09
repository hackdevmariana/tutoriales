# Comprimir y descomprimir ficheros zip


Comprimir varios ficheros en un solo fiecho `.zip`:

``` sh
zip ficherocomprimido.zip fichero1.txt fichero2.txt fichero3.txt
```

Comprimir todos los ficheros de directorio actual, sin incluir subdirectorios:

``` sh
zip ficheros.zip *
```

Comprimir un directorio completo incluyendo subdirectorios:

``` sh
zip -r directoriocomprimido.zip /path/to/directory
```

Descomprimir un fichero `.zip`:

``` sh
unzip fichero.zip
```
