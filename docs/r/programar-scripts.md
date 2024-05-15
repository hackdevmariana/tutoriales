# Programar script en R

Programar scripts en R es un proceso que te permite escribir y ejecutar código de R de manera eficiente, especialmente para análisis de datos repetitivos o complejos.


Guía paso a paso sobre cómo hacerlo:

1. Instalar R y RStudio: Antes de comenzar, nos aseguraremos de tener instalados R y RStudio, que es un entorno de desarrollo integrado (IDE) para R.

2. Crear un Script:

- Abrimos RStudio.

- Vamos al menú `File > New File > R Script`.

Esto abrirá una nueva pestaña en el panel de scripts.

3. Escribir el código:

- Escribimos el código en el panel de scripts. Podemos escribir tantas líneas de código y comentarios como necesitemos.

- Para comentar una línea, usaremos el símbolo `#`. Todo lo que sigue después de `#` en esa línea será ignorado al ejecutar el script.

4. Ejecutar el código:

- Para ejecutar una línea de código, colocaremos el cursor en la línea y presionamos `Ctrl` + `Enter`.

- Para ejecutar varias líneas, las seleccionamos y presionamos `Ctrl` + `Enter`. Veremos los resultados en la consola.

5. Guardar el script:

- Guardaremos el script con la extensión `.R` para poder reutilizarlo o compartirlo.

Usaremos `Ctrl` + `S` o iremos al menú `File > Save`.

6. Organizar el trabajo:

- Es una buena práctica establecer un directorio de trabajo donde guardar los scripts y datos.

Podemos hacerlo con:

``` r
setwd("/directorio/de/trabajo")
```

7. Cargar datos:

- Utilizaremos funciones como `read.csv()` o `read.table()` para cargar los datos en R desde archivos externos.

8. Análisis y visualización:

- Realizaremos los análisis utilizando las funciones y paquetes de R.

- Crearemos visualizaciones con paquetes como `ggplot2` para representar los datos gráficamente.

9. Funciones y bucles:

- Definiremos nuestras propias funciones para tareas repetitivas.

- Utilizaremos bucles `for` o `while` para automatizar procesos.

10. Documentación:

- Documentar el código con comentarios detallados para que otros (o tú en el futuro) puedan entender qué hace el script.
