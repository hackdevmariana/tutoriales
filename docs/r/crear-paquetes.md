# Crear paquetes en R

Para crear un paquete en R y documentar sus funciones, primero necesitamos instalar y cargar `devtools` y `usethis`. Estos paquetes proporcionan funciones útiles para la creación de paquetes.

``` r
install.packages("devtools")
library(devtools)
install.packages("usethis")
library(usethis)
```


Utilizaremos `usethis::create_package(path)` para crear la estructura básica del paquete. `path` es la ruta donde queremos crear el directorio del paquete.

```
usethis::create_package("path/to/package")
```

Escribimos las funciones que deseamos incluir en el paquete y las guardamos en el directorio `R/` dentro de la estructura del paquete.

Para documentar las funciones, utilizaremos comentarios `Roxygen2` encima de cada función. Luego, usaremos:

``` r
devtools::document()
```

para generar la documentación:

``` r
#' Suma dos números
#'
#' Esta función toma dos números y devuelve su suma.
#'
#' @param x Un número.
#' @param y Un número.
#' @return La suma de x y y.
#' @export
#' @examples
#' sumar(1, 2) # devuelve 3
sumar <- function(x, y) {
  x + y
}
devtools::document()
```

Para construir y cargar el paquete, usaremos:

``` r
devtools::load_all()
```

para cargar el paquete y:

``` r
devtools::install()
```

para instalarlo localmente.


``` r
devtools::load_all("path/to/your/package")
devtools::install("path/to/your/package")
```

Antes de compartir el paquete, es importante chequearlo con `devtools::check()`. Esto ejecutará una serie de pruebas para asegurarse de que todo está configurado correctamente.

``` r
devtools::check("path/to/your/package")
```

La documentación de las funciones es crucial para que otros usuarios entiendan cómo usarlas.

Cómo documentarlas adecuadamente:

Usaremos Roxygen2. Roxygen2 es una herramienta que facilita la documentación de las funciones. Colocanis comentarios especiales encima de tus funciones, y Roxygen2 generará los archivos `.Rd` necesarios.

En la estructura de la documentación, incluiremos títulos, descripciones, parámetros, valores de retorno y ejemplos en los comentarios Roxygen2.

Después de escribir los comentarios `Roxygen2`, usaremos `devtools::document()` para generar la documentación del paquete.

Debemos asegurarnos de actualizar la documentación si realizamos cambios en las funciones.
