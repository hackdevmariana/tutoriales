# Vectores

Los vectores son una estructura de datos fundamental en R y se utilizan ampliamente en análisis de datos y programación estadística.

Un vector en R es una secuencia ordenada de elementos del mismo tipo. Esto significa que todos los elementos dentro de un vector deben ser del mismo tipo de datos, ya sea numérico, de caracteres, lógico, etc.

Hay varias formas de crear vectores en R:

**Utilizando la función c()**: Esta función combina elementos en un vector.


``` r
vector_numerico <- c(1, 2, 3, 4, 5)
vector_caracter <- c("a", "b", "c", "d", "e")
vector_logico <- c(TRUE, FALSE, TRUE, FALSE)
```
**Utilizando la función seq()**: Esta función genera secuencias de números.

Genera: una secuencia del 1 al 10 con incrementos de 2:

``` r
secuencia <- seq(1, 10, by = 2)
```

**Utilizando el operador :**: Este operador crea una secuencia numérica.

Crea un vector numérico del 1 al 5:

``` r
secuencia <- 1:5  
```

## Tipos de vectores

Los vectores en R pueden ser de diferentes tipos, incluyendo:

- Vectores numéricos: Contienen números reales.

- Vectores de caracteres: Contienen texto.

- Vectores lógicos: Contienen valores lógicos (TRUE o FALSE).

- Vectores complejos: Contienen números complejos.

- Vectores enteros: Contienen números enteros.

- Acceso a elementos: Puedes acceder a elementos individuales de un vector utilizando corchetes `[ ]` y especificando el índice del elemento que deseas acceder.

Los índices en R comienzan desde 1.

Accede al tercer elemento del vector (30):

``` r
vector_numerico <- c(10, 20, 30, 40, 50)
vector_numerico[3]  
```

Operaciones vectorizadas:

Una de las características de R es que muchas operaciones se aplican de manera automática a cada elemento de un vector.

Multiplicar cada elemento del vector por 2:

``` r
vector <- c(1, 2, 3, 4, 5)
vector_doble <- vector * 2
```

Funciones útiles:

R proporciona una variedad de funciones útiles para trabajar con vectores, como `length()` para obtener la longitud del vector, `sum()` para sumar los elementos del vector, `mean()` para calcular la media, `min()` y `max()` para encontrar el mínimo y máximo, entre otros.
