# Definición de estructuras de datos

**Variables**: En R, una variable es un contenedor que almacena un valor o conjunto de valores. Pueden contener cualquier tipo de dato: numérico, de caracteres, lógico, etc. Por ejemplo:

``` r
edad <- 25
nombre <- "Juan"
es_hombre <- TRUE
```

**Vectores**: Un vector es una secuencia ordenada de valores del mismo tipo. Los vectores pueden ser de una dimensión (vector) o multidimensionales (matrices y arrays). Puedes crear vectores utilizando la función c() o generadores de secuencias como seq(). Por ejemplo:

``` r
numeros <- c(1, 2, 3, 4, 5)
letras <- c("a", "b", "c", "d", "e")
```

**Matrices**: Una matriz es una colección bidimensional de elementos del mismo tipo. Puedes crear matrices usando la función matrix(), especificando el número de filas y columnas. Por ejemplo:

``` r
matriz <- matrix(c(1, 2, 3, 4, 5, 6), nrow = 2, ncol = 3)
```

**Data frames**: Un data frame es una estructura de datos tabular similar a una hoja de cálculo donde cada columna puede ser de un tipo diferente. Es una de las estructuras de datos más utilizadas para el análisis de datos en R. Puedes crear data frames usando la función data.frame(). Por ejemplo:

``` r
datos <- data.frame(nombre = c("Juan", "María", "Pedro"),
                    edad = c(25, 30, 28),
                    ciudad = c("Madrid", "Barcelona", "Sevilla"))
```
