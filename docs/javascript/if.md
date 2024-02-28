# Condicionales if

Los condicionales `if` en JavaScript son una forma de controlar el flujo de ejecución de un programa, dependiendo de una o más condiciones. La sintaxis básica de un condicional if es la siguiente:

``` js
if (condición) {
  // código a ejecutar si la condición es verdadera
}
```

## if - else

Los `if-else` en JavaScript son una forma de controlar el flujo de ejecución de un programa, dependiendo de una o más condiciones. La sintaxis básica de un `if-else` es la siguiente:

``` js
if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

La condición es una expresión que se evalúa como un valor booleano (`true` o `false`). Si la condición es verdadera, se ejecuta el código dentro del primer bloque de llaves (`{}`). Si la condición es falsa, se ejecuta el código dentro del segundo bloque de llaves (`{}`), si existe. El bloque `else` es opcional y se puede omitir si no se necesita ejecutar ningún código en caso de que la condición sea falsa.

Los `if-else` se pueden anidar para crear una estructura `else if`, que permite evaluar múltiples condiciones de forma secuencial. Por ejemplo:

``` js
if (condición1) {
  // código a ejecutar si la condición1 es verdadera
} else if (condición2) {
  // código a ejecutar si la condición1 es falsa y la condición2 es verdadera
} else {
  // código a ejecutar si ninguna de las condiciones anteriores es verdadera
}
```

## Condicionales anidados

Podemos anidar varios `if-else` para evaluar múltiples condiciones en JavaScript. Esto significa que podemos crear un `if-else` dentro de otro `if-else`, de forma que el `if-else` interno sólo se ejecute si se cumple la condición del `if-else` externo. Por ejemplo:

``` js
if (condicion1) {
  // código a ejecutar si la condicion1 es verdadera
  if (condicion2) {
    // código a ejecutar si la condicion1 y la condicion2 son verdaderas
  } else {
    // código a ejecutar si la condicion1 es verdadera y la condicion2 es falsa
  }
} else {
    // código a ejecutar si la condicion1 es falsa
}
```

Anidar varios `if-els`e te permite crear una lógica más compleja y precisa para tu código, pero también puede hacerlo más difícil de leer y entender. Por eso, es recomendable usar paréntesis, indentación y comentarios para organizar mejor tu código y evitar confusiones.

## Operador ternario

El operador ternario en JavaScript es una forma de escribir una condición `if-else` en una sola línea. Tiene la siguiente sintaxis:

``` js
condición ? expresión1 : expresión2;
```

Donde _condición_ es una expresión que se evalúa como `true` o `false`, _expresión1_ es el valor o la acción que se devuelve o se ejecuta si la condición es verdadera, y _expresión2_ es el valor o la acción que se devuelve o se ejecuta si la condición es falsa.

Por ejemplo, si queremos asignar un mensaje a una variable dependiendo del valor de otra variable, podríamos usar el operador ternario así:

``` js
var x = 10;
var mensaje = x > 0 ? "x es positivo" : "x es negativo o cero";
```

Esto es equivalente a escribir:

``` js
var x = 10;
var mensaje;
if (x > 0) {
  mensaje = "x es positivo";
} else {
  mensaje = "x es negativo o cero";
}
```

El operador ternario es útil para simplificar el código y hacerlo más legible, siempre que la condición y las expresiones sean sencillas y claras. También se puede anidar el operador ternario para evaluar más de una condición, pero se debe tener cuidado de no abusar de esta práctica, ya que puede dificultar la comprensión del código.

## Operador booleano

Una expresión booleana en JavaScript es una expresión que se evalúa como un valor de tipo booleano, es decir, true o false. Las expresiones booleanas se usan para controlar el flujo de ejecución de un programa, por ejemplo, en las sentencias `if` que estamos viendo en el presente artículo. Otras sentencias que operan con booleanos son `while`, `for`, `switch`...

Algunos ejemplos de expresiones booleanas son:

- Comparaciones entre valores, usando operadores como ==, !=, >, <, >=, <=...

Por ejemplo: x == y, a > b, c != 0...

- Operaciones lógicas entre valores booleanos, usando operadores como && (y), || (o), ! (no)...

Por ejemplo: x && y, a || b, !c...

- Evaluación de valores truthy o falsy, es decir, valores que se convierten implícitamente a true o false cuando se usan en un contexto booleano.

Por ejemplo: x, a ? b : c, !!d...
