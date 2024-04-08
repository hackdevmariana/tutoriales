# Matrices

Las matrices en R son estructuras de datos bidimensionales que contienen elementos del mismo tipo. Son muy similares a los vectores, pero organizados en filas y columnas.

## Creación de matrices:

Podemos crear matrices en R utilizando la función `matrix()`. Esta función toma un vector de elementos y especifica el número de filas y columnas que deseas en la matriz.

Por ejemplo, crear una matriz de 2x3:

``` r
matriz <- matrix(1:6, nrow = 2, ncol = 3)
```

Esto creará una matriz con 2 filas y 3 columnas, utilizando los números del 1 al 6 para llenar la matriz por columnas.

## Acceso a elementos

Al igual que con los vectores, podemos acceder a elementos individuales de una matriz utilizando corchetes `[ , ]` y especificando el índice de fila y columna.

Por ejemplo, para acceder al elemento en la segunda fila y tercera columna:

``` r
elemento <- matriz[2, 3]
```

## Operaciones matriciales

R proporciona una variedad de funciones para realizar operaciones matriciales.

Por ejemplo, podemos sumar matrices, multiplicar matrices, calcular la transpuesta de una matriz, etc.

Aquí hay algunos ejemplos:

``` r
# Sumar dos matrices
matriz1 <- matrix(1:4, nrow = 2)
matriz2 <- matrix(5:8, nrow = 2)
suma <- matriz1 + matriz2

# Multiplicar dos matrices
multiplicacion <- matriz1 %*% matriz2

# Calcular la transpuesta de una matriz
transpuesta <- t(matriz)
```

## Funciones útiles

R proporciona varias funciones útiles para trabajar con matrices, como `dim()` para obtener las dimensiones de una matriz, `rownames()` y `colnames()` para obtener o establecer los nombres de fila y columna, `diag()` para extraer la diagonal de una matriz, entre otros.

Las matrices son útiles para representar datos tabulares o realizar cálculos matriciales en análisis de datos y estadísticas. Son una herramienta esencial para muchas operaciones en R y proporcionan una forma conveniente de organizar y manipular datos bidimensionales.
