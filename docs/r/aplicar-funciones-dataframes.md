# Aplicar funciones en dataframes

Para aplicar una función a todos los elementos de un dataframe en R, podemos utilizar la función `apply()`. Esta función permite aplicar una función a las filas o columnas de un dataframe.

Un ejemplo de cómo usar `apply()` para aplicar una función a cada elemento de un dataframe:

Crear un dataframe de ejemplo:

``` r
df <- data.frame(a = 1:3, b = 4:6, c = 7:9)
```

Definir una función para aplicar, por ejemplo, elevar al cuadrado cada elemento:

``` r
mi_funcion <- function(x) {
  x^2
}
```

Aplicar la función a cada elemento del dataframe:

``` r
df_modificado <- apply(df, c(1,2), mi_funcion)
```

Mostrar el dataframe modificado:

``` r
print(df_modificado)
```

En este código, `apply(df, c(1,2), mi_funcion)` aplica `mi_funcion` a cada elemento del dataframe `df`. El segundo argumento, `c(1,2)`, indica que la función debe aplicarse tanto a las filas `(1)` como a las columnas `(2)`. El resultado es un nuevo dataframe `df_modificado` con la función aplicada a cada elemento.

Si solo queremos aplicar la función a las filas o a las columnas, podemos usar 1 o 2 respectivamente en lugar de `c(1,2)`.

Además de `apply()`, existen otras funciones como `lapply()`, `sapply()`, `vapply()`, `tapply()` y `mapply()` que también permiten aplicar funciones a estructuras de datos en R de manera eficiente.
