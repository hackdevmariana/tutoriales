# Ciclo while

El bucle `while` en Javascript es una estructura de control que permite repetir la ejecución de un bloque de código mientras se cumpla una condición específica. Es decir, el bucle `while` continúa ejecutándose hasta que la condición evaluada se vuelva falsa.

La sintaxis general del bucle `while` es la siguiente:

``` js
while (condicion) {
  // código a ejecutar mientras la condición sea verdadera
}
```

La condición puede ser cualquier expresión que devuelva un valor booleano. El código dentro del bucle se ejecuta mientras la condición sea verdadera. Si la condición es falsa desde el inicio, el bucle no se ejecuta ni una sola vez.

Por ejemplo, el siguiente bucle imprime los números del 1 al 10:

``` js
let i = 1; // inicializamos la variable de control
while (i <= 10) { // mientras i sea menor o igual que 10
  console.log(i); // mostramos el valor de i
  i++; // incrementamos i en uno
}
```

## Ciclo do-while

El bucle do-while en Javascript es una variante del bucle while que ejecuta el bloque de código al menos una vez, y luego repite la ejecución mientras la condición sea verdadera. Es decir, el bucle do-while evalúa la condición después de cada iteración, en lugar de antes.

La sintaxis general del bucle do-while es la siguiente:

``` js
do {
  // código a ejecutar al menos una vez y mientras la condición sea verdadera
} while (condicion);
```

La condición puede ser cualquier expresión que devuelva un valor booleano. El código dentro del bucle se ejecuta una vez, y luego se vuelve a ejecutar mientras la condición sea verdadera. Si la condición es falsa desde el inicio, el bucle se ejecuta solo una vez.

Por ejemplo, el siguiente bucle imprime los números del 10 al 1 en orden descendente:

``` js
let i = 10; // inicializamos la variable de control
do {
  console.log(i); // mostramos el valor de i
  i--; // decrementamos i en uno
} while (i >= 1); // mientras i sea mayor o igual que 1
```

## Diferencias

La diferencia entre `while` y `do-while` es que el bucle `while` evalúa la condición antes de ejecutar el código, mientras que el bucle `do-while` ejecuta el código al menos una vez y luego evalúa la condición. Por ejemplo, si la condición es falsa desde el principio, el bucle `while` no se ejecuta ni una sola vez, pero el bucle `do-while` se ejecuta una vez.
