# Bucles for en R

Los bucles for en R son una estructura de control que permite repetir un bloque de código para cada elemento en una secuencia o colección, como vectores, listas o matrices.

La sintaxis básica de un bucle for en R es la siguiente:

``` r
for (variable in secuencia) {
# Código a ejecutar
}
```

- variable: Es el nombre que le damos al elemento actual en la secuencia durante cada iteración del bucle.

- secuencia: Es la colección de elementos que queremos recorrer. Puede ser un vector, una lista, un rango de números, etc.

Ejemplo Simple de un bucle for que imprime los números del 1 al 5:

``` r
for (i in 1:5) {
  print(i)
}
```

Podemos usar un bucle for para iterar sobre los elementos de un vector o una lista:

``` r
vector <- c(10, 20, 30, 40, 50)
for (valor in vector) {
  print(valor)
}
```

Con una lista:

``` r
lista <- list(a = 1, b = 2, c = 3)
for (elemento in lista) {
  print(elemento)
}
```

Dentro de un bucle `for`, podemos usar `if`, `else`, `break` y `next` para controlar el flujo de ejecución:

- **if** y **else**: Permiten ejecutar código condicionalmente.

- **break**: Termina la ejecución del bucle inmediatamente.

- **next**: Salta el resto del código en la iteración actual y pasa a la siguiente.

Ejemplo con control de flujo:

``` r
for (i in 1:10) {
  if (i == 5) {
    break # Termina el bucle si i es igual a 5
  }
  if (i %% 2 == 0) {
    next # Salta los números pares
  }
  print(i) # Imprime solo los números impares menores que 5
}
```

También podemos anidar bucles `for` dentro de otros bucles `for` para trabajar con estructuras de datos más complejas, como matrices o listas de listas.

## Consejos

- Evitaremos bucles innecesarios: R es un lenguaje vectorizado, lo que significa que muchas operaciones pueden realizarse sin bucles explícitos. Mejor, utilizaremos funciones vectorizadas cuando sea posible.

- Preasignación: Para mejorar el rendimiento, preasignaremos el espacio para objetos que se modificarán o crearán dentro del bucle.
