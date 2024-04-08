# Función seq()

La función `seq()` en R se utiliza para generar secuencias de números.

Puede ser útil cuando necesitamos crear vectores con valores ordenados en una secuencia específica.

La sintaxis básica de la función seq() es la siguiente:

``` r
seq(from, to, by = (to - from)/(length.out - 1), length.out = NULL)
```

Explicación:

**from**: El primer número en la secuencia.
**to**: El último número en la secuencia.
**by**: El incremento entre cada par de números en la secuencia. Por defecto, es calculado automáticamente para que haya length.out - 1 intervalos.
**length.out**: El número total de elementos en la secuencia. Si se especifica, by se calculará automáticamente para ajustar el número total de elementos.

## Ejemplos de uso

Crear una secuencia numérica:

``` r
secuencia <- seq(1, 10)
```

Crear una secuencia con un incremento específico:

``` r
secuencia_incremento <- seq(0, 1, by = 0.2)
```

Crear una secuencia con un número específico de elementos:

``` r
secuencia_longitud <- seq(1, 100, length.out = 5)
```

Crear una secuencia en orden descendente:

``` r
secuencia_descendente <- seq(10, 1)
```
