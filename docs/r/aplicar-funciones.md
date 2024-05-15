# Aplicar funciones

Podemos aplicar funciones a todos los elementos de un conjunto. Lo podemos hacer con o sin `for`.

## Con bucle for

Podemos usar un bucle `for` en R para aplicar una función a cada elemento de un vector de la siguiente manera:

Creamos el vector:

``` r
mi_vector <- c(1, 2, 3, 4, 5)
```

Definimos una función que queranmos aplicar:

``` r
mi_funcion <- function(x) {
  return(x^2) # Por ejemplo, elevar al cuadrado
}
```

Creamos un vector para almacenar los resultados:

``` r
resultados <- numeric(length(mi_vector))
```

Usamos un bucle `for` para aplicar la función a cada elemento:

``` r
for (i in seq_along(mi_vector)) {
  resultados[i] <- mi_funcion(mi_vector[i])
}
```

Mostramos los resultados:

``` r
print(resultados)
```

Este script define primero un vector `mi_vector` y una función `mi_funcion` que se aplicará a cada elemento del vector. Luego, se inicializa un vector resultados para almacenar los resultados de la función. El bucle `for` itera sobre los índices del vector, aplicando la función a cada elemento y almacenando el resultado en el vector `resultados`. Finalmente, se imprimen los resultados.

Recuerdemos que R es un lenguaje vectorizado, por lo que muchas veces podemos aplicar una función directamente a un vector sin necesidad de un bucle for, lo cual es más eficiente.

Por ejemplo, si la función es vectorizada (como la mayoría de las funciones básicas de R), podríamos simplemente hacer:

``` r
resultados <- mi_funcion(mi_vector)
```

Esto aplicará `mi_funcion` a cada elemento de `mi_vector` y devolverá un vector `resultados`.

## Sin for

Podemos aplicar una función personalizada a todos los elementos de un vector en R sin usar bucles `for` utilizando funciones vectorizadas.

Las funciones vectorizadas son aquellas que pueden tomar un vector como entrada y operar en cada elemento del vector sin necesidad de escribir explícitamente un bucle.

Un ejemplo utilizando la función `sapply`:

Definir un vector:

``` r
mi_vector <- c(1, 2, 3, 4, 5)
```

Definir una función que queramos aplicar:

``` r
mi_funcion <- function(x) {
  return(x^2) # Por ejemplo, elevar al cuadrado
}
```

Aplicar la función a cada elemento del vector con `sapply`:

``` r
resultados <- sapply(mi_vector, mi_funcion)
```

Mostrar los resultados:

``` r
print(resultados)
```

En este ejemplo, `sapply` toma `mi_vector` y aplica `mi_funcion` a cada uno de sus elementos. El resultado es un nuevo vector resultados que contiene el cuadrado de cada número en `mi_vector`.

Otras funciones que también podemos usar para aplicar funciones a vectores incluyen `lapply`, `vapply`, y `apply` para matrices o arrays de dimensiones superiores.

Además, muchas funciones en R son inherentemente vectorizadas, lo que significa que podemos pasar un vector directamente a la función sin necesidad de un bucle.

Por ejemplo, para elevar al cuadrado cada elemento del vector directamente:

``` r
resultados <- mi_vector^2
```

Este código elevará al cuadrado cada elemento de `mi_vector` sin necesidad de una función adicional o un bucle for.
