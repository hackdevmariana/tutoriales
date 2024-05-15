# Crear funciones

Definir la función:

``` r
calcular_cuadrado <- function(x) {
  resultado <- x^2
  return(resultado)
}
```

Usar la función:

``` r
cuadrado_de_cuatro <- calcular_cuadrado(4)
print(cuadrado_de_cuatro)
```

Imprime: 16

En este ejemplo, `calcular_cuadrado` es el nombre de la función, `x` es el argumento, y resultado es el valor que se retorna.

## Documentar funciones

Documentar tus funciones en R es esencial para que tanto nosotros como programadores como otras personas puedan entender y utilizar el código correctamente.

Algunos pasos y consejos para documentar las funciones:

**Comentarios descriptivos**: Utilizaremos comentarios claros y descriptivos al principio de la función para explicar qué hace, cómo se usa y qué parámetros espera. Los comentarios en R se añaden con el símbolo `#`:

``` r
# Esta función calcula el cuadrado de un número
# Parámetros:
#   x: Un número
# Devuelve:
#   El cuadrado de x
calcular_cuadrado <- function(x) {
  x^2
}
```

**Documentación en bloque**: Para funciones más complejas, consideraremos usar un bloque de comentarios al principio de la función para proporcionar una descripción más detallada, incluyendo ejemplos de uso:

``` r
# Calcular Cuadrado
#
# Esta función toma un número como entrada y devuelve su cuadrado.
#
# Args:
#   x: Un número (numeric).
#
# Returns:
#   El cuadrado de x (numeric).
#
# Examples:
#   calcular_cuadrado(4) # devuelve 16
#
calcular_cuadrado <- function(x) {
  x^2
}
```

**Roxygen2 para paquetes**: Si estamos desarrollando un paquete en R, podemos usar `Roxygen2`, que es una herramienta de documentación que permite escribir la documentación junto al código y luego la convierte en archivos `.Rd` que R puede interpretar.

``` r
#' Calcular Cuadrado
#'
#' @param x Un número.
#' @return El cuadrado de x.
#' @examples
#' calcular_cuadrado(4) # devuelve 16
calcular_cuadrado <- function(x) {
  x^2
}
```

Luego, podemos usar `devtools::document()` para generar la documentación del paquete.
