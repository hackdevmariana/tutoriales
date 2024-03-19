# Expresiones generadoras en Python

Las expresiones generadoras son una herramienta de Python que permite crear iteradores de una manera eficiente y concisa.

Son similares a las comprensiones de listas, pero en lugar de construir una lista completa, generan los elementos uno por uno, lo cual es más eficiente en términos de memoria.

Algunos puntos clave sobre las expresiones generadoras son:

- **Eficiencia de memoria**: Como las expresiones generadoras no construyen una lista completa en memoria, son especialmente útiles cuando trabajamos con secuencias grandes de datos y queremos mantener un bajo uso de memoria.

- **Lazy evaluation**: Las expresiones generadoras utilizan la evaluación perezosa (*lazy evaluation*), lo que significa que generan el siguiente valor sólo cuando se necesita. Esto es útil para secuencias infinitas o para secuencias donde sólo necesitamos procesar parte de los elementos.

- **Sintaxis**: Se escriben como una comprensión de lista, pero con paréntesis en lugar de corchetes.

Por ejemplo:

``` py
(x*x for x in range(10))
```

- **Uso con funciones**: Podemos pasar una expresión generadora directamente a una función que toma un iterable.

Por ejemplo:

``` py
sum(x*x for x in range(10))
```

calcularía la suma de los cuadrados de los números del 0 al 9.

- **Conversión a listas**: Si necesitamos una lista completa, podemos convertir una expresión generadora en una lista simplemente pasándola a la función `list()`.

Por ejemplo:

``` py
list(x*x for x in range(10))
```

daría la lista de los cuadrados.
