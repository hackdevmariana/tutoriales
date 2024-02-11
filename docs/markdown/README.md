# Introducción a Markdown

Markdown es un lenguaje de marcado que permite dar formato a texto plano. Se puede usar para formatear documentos web, notas, libros... 

Markdown tiene una sintaxis básica y una sintaxis extendida que permiten añadir elementos como negritas, cursivas, enlaces, listas, tablas, códigos... y se puede convertir fácilmente a otros formatos como HTML, PDF, o ePub.

## Encabezamientos

Del mismo modo que en HTML, en Markdown hay seis tipos de encabezamientos. El equivalente a h1 sería una almohadilla (#), a h2, dos almohadillas y así sucesivamente hasta seis. 

``` md
# Encabezamiento 1
## Encabezamiento 2
### Encabezamiento 3
#### Encabezamiento 4
##### Encabezamiento 5
###### Encabezamiento 6
```

Que genera:

# Encabezamiento 1
## Encabezamiento 2
### Encabezamiento 3
#### Encabezamiento 4
##### Encabezamiento 5
###### Encabezamiento 6

## Negritas y cursivas

Para las negritas y cursivas, podemos usar * o _ para delimitar, con un símbolo, el texto en cursiva; con dos, en negrita y, con tres, en negrita y cursiva.

``` md
Este texto *está en cursiva*.
Este texto **está en negrita**.
Este texto ***está en cursiva y negrita***.
```

Que generará:

Este texto *está en cursiva*. \
Este texto **está en negrita**. \
Este texto ***está en cursiva y negrita***.

## Saltos de línea

En ocasiones, si escribimos varias líneas seguidas simplemente con un salto de línea, al renderizar a determinados formatos, puede que nos genere un texto sin salto de línea. Así pues:

``` md
Línea 1
Línea 2
Línea 3
```

Puede que nos genere algo como:

Línea 1
Línea 2
Línea 3

Para evitarlo, podemos añadir \ al final de la línea para que genere un salto de línea en cualquier texto o formato:

``` md
Línea 1 \
Línea 2 \
Línea 3 \
```

Que sí hará los saltos de línea:

Línea 1 \
Línea 2 \
Línea 3 

Otra opción es hacer un doble salto de línea:


``` md
Línea 1

Línea 2 

Línea 3 
```

Que hará saltos de línea según lo esperado:

Línea 1 

Línea 2

Línea 3 

## Listas

Igual que en HTML, podemos hacer listas ordenadas o no ordenadas en Markdown. 

Para las listas ordenadas, debemos añadir la numeración manualmente:

``` md
1. Elemento 1
2. Elemento 2
3. Elemento 3
```  

Para generar:

1. Elemento 1
2. Elemento 2
3. Elemento 3

También podemos indicar subíndices, con la precaución de escribir \ en aquellos elementos que tengan más de un punto, como:

``` md
1. Elemento 1
2. Elemento 2
3. Elemento 3
3.1. Elemento 3.1 \
3.1.1 Elemento 3.1.1 \
4. Elemento 4
```  

1. Elemento 1
2. Elemento 2
3. Elemento 3
3.1. Elemento 3.1 \
3.1.1 Elemento 3.1.1 \
4. Elemento 4
