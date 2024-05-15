# Ejecutar scripts

Para ejecutar scripts de R desde la shell, podemos utilizar el comando `Rscript`, que es un front-end para ejecutar código R desde la línea de comandos.

Dependiendo del sistema operativo, abriremos la terminal (en Linux o macOS) o la línea de comandos (en Windows).

Navegamos hasta el directorio del script usando el comando `cd` para navegar hasta el directorio donde se encuentra el script de R.

Para ejecutar el script con Rscript, escribiremos el comando Rscript seguido del nombre del archivo de script. Por ejemplo:

``` sh
Rscript mi_script.R
```

Esto ejecutará el script `mi_script.R` y mostrará los resultados en la terminal.

Podemos agregar opciones adicionales al comando Rscript para personalizar la ejecución, como `--verbose` para obtener más detalles sobre la ejecución o `--help` para obtener ayuda sobre el comando.

En sistemas basados en Unix, como GNU/Linux, podemos hacer que el script sea directamente ejecutable añadiendo una "shebang line" al principio del archivo y dándole permisos de ejecución con chmod.

Por ejemplo:

``` r
#!/usr/bin/env Rscript
```

Y luego:

``` sh
chmod +x mi_script.R
./mi_script.R
```

Esto permitirá ejecutar el script simplemente con:

``` sh
./mi_script.R
```
