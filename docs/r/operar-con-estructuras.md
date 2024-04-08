# Operar con estructuras de datos

Operar con las diferentes estructuras de datos en R implica realizar una variedad de operaciones que van desde la manipulación básica hasta cálculos más avanzados.

Veamos algunos ejemplos de cómo operar con las estructuras de datos más comunes en R:

## Vectores:

Acceder a elementos individuales:

Utilizaremos corchetes `[ ]` y el índice del elemento que deseamos acceder. Accede al tercer elemento del vector (3):

``` r
vector <- c(1, 2, 3, 4, 5)
vector[3]
```

Operaciones vectorizadas:

Las operaciones se aplican a cada elemento del vector.

Multiplica cada elemento del vector por 2:

``` r
vector * 2  
```

## Listas

Acceder a elementos individuales:

Utiliza corchetes `[ ]` y el nombre o índice del elemento que deseas acceder.

Accede al elemento con nombre `b` en la lista:

``` r
lista <- list(a = 1, b = "texto", c = TRUE)
lista[["b"]]
```

Agregar elementos:

Utilizaremos `append()` o corchetes `[ ]`.

Agregar un nuevo elemento a la lista:

``` r
lista[["d"]] <- 4
```

## Matrices

Acceder a elementos individuales:

Utiliza corchetes `[ , ]` y los índices de fila y columna.

Accede al elemento en la segunda fila y tercera columna:

``` r
matriz <- matrix(1:6, nrow = 2)
matriz[2, 3]
```

Operaciones matriciales:

R proporciona funciones para realizar operaciones matriciales como la transposición, la multiplicación de matrices, etc.

Transpone la matriz:

``` r
t(matriz)  
```

## Data frames

Acceder a columnas:

Utilizamos el operador `$` o corchetes `[ , ]` y el nombre de la columna.

Accede a la columna "y" del data frame:

``` r
df <- data.frame(x = c(1, 2, 3), y = c("a", "b", "c"))
df$y
```

Filtrar filas:

Utilizamos condiciones lógicas dentro de corchetes `[ ]`.

Filtra las filas donde el valor de la columna "x" es mayor que 1:

``` r
subset(df, x > 1)
```
