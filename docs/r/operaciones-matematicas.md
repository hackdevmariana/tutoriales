# Operaciones matemáticas en R

R tiene muchos operadores y funciones matemáticas integradas que permiten realizar cálculos simples y complejos con facilidad.

Veamos algunos ejemplos de las operaciones matemáticas más comunes en R:

## Suma

Podemos sumar dos o más números, variables o vectores usando el operador +.

Por ejemplo:

``` r
2 + 3
```

devuelve 5,  

``` r
a + b
```

devuelve la suma de las variables a y b, y

``` r
c(1, 2, 3) + c(4, 5, 6)
```

devuelve el vector c(5, 7, 9).

## Resta

Podemos restar dos o más números, variables o vectores usando el operador -.

Por ejemplo:

``` r
5 - 2
```

devuelve 3,

``` r
a - b
```

devuelve la resta de las variables a y b,

y

``` r
c(1, 2, 3) - c(4, 5, 6)
```

devuelve el vector c(-3, -3, -3).

## Multiplicación

Podemos multiplicar dos o más números, variables o vectores usando el operador *. Por ejemplo:

``` r
2 * 3
```

devuelve 6,

``` r
a * b
```

devuelve el producto de las variables a y b, y

``` r
c(1, 2, 3) * c(4, 5, 6)
```

devuelve el vector c(4, 10, 18).

## División

Podemos dividir dos o más números, variables o vectores usando el operador /.

Por ejemplo:

``` r
6 / 3
```

devuelve 2,

``` r
a / b
```

devuelve el cociente de las variables a y b, y

``` r
c(1, 2, 3) / c(4, 5, 6)
```

devuelve el vector c(0.25, 0.4, 0.5).

## Potencia

Podemos elevar un número, una variable o un vector a una potencia usando el operador ^ o **.

Por ejemplo:

``` r
2 ^ 3 o 2 ** 3
```

devuelve 8,

``` r
a ^ b o a ** b
```

devuelve la variable a elevada a la potencia b, y

``` r
c(1, 2, 3) ^ c(4, 5, 6)
```

o

``` r
c(1, 2, 3) ** c(4, 5, 6)
```

devuelve el vector c(1, 32, 729).

## Raíz cuadrada

Podemos calcular la raíz cuadrada de un número, una variable o un vector usando la función sqrt().

Por ejemplo:

``` r
sqrt(4)
```

devuelve 2,

``` r
sqrt(a)
```

devuelve la raíz cuadrada de la variable a, y

``` r
sqrt(c(1, 4, 9))
```

devuelve el vector c(1, 2, 3).

## Factorial

Podemos calcular el factorial de un número entero, una variable o un vector usando la función factorial().

Por ejemplo:

``` r
factorial(4)
```

devuelve 24,

``` r
factorial(a)
```

devuelve el factorial de la variable a, y

``` r
factorial(c(1, 2, 3))
```

devuelve el vector c(1, 2, 6).

## Funciones trigonométricas

Podemos calcular el seno, el coseno, la tangente, el arcoseno, el arcocoseno y la arcotangente de un número, una variable o un vector usando las funciones sin(), cos(), tan(), asin(), acos() y atan().

Estas funciones trabajan con radianes por defecto, pero Podemos convertirlos a grados usando la función rad2deg() o viceversa usando la función deg2rad().

Por ejemplo:

``` r
sin(pi/6)
```

devuelve 0.5,

``` r
cos(a)
```

devuelve el coseno de la variable a, y

``` r
tan(c(0, pi/4, pi/2))
```

devuelve el vector c(0, 1, Inf).

## Funciones exponenciales y logarítmicas

Podemos calcular la exponencial, el logaritmo natural, el logaritmo en base 10, el logaritmo en cualquier base y la función gamma de un número, una variable o un vector usando las funciones exp(), log(), log10(), logb() y gamma().

Por ejemplo:

``` r
exp(1)
```

devuelve 2.718282,

``` r
log(10)
```

devuelve 2.302585,

``` r
log10(100)
```

devuelve 2,

``` r
logb(8, 2)
```

devuelve 3, y

``` r
gamma(5)
```

devuelve 24.

## Funciones redondeo

Podemos redondear un número, una variable o un vector al entero más cercano, al entero superior, al entero inferior o a un número determinado de decimales usando las funciones round(), ceiling(), floor() o signif().

Por ejemplo:

``` r
round(3.1416)
```

devuelve 3,

``` r
ceiling(3.1416)
```

devuelve 4,

``` r
floor(3.1416)
```

devuelve 3, y

``` r
signif(3.1416, 2)
```

devuelve 3.1.

Estas son solo algunas de las operaciones matemáticas que Podemos hacer en R, pero hay muchas más.
