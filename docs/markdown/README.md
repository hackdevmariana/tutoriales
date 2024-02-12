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

También podemos indicar subíndices, con la precaución de escribir un doble salto de línea en aquellos elementos que tengan más de un punto, como:

``` md
1. Elemento 1
2. Elemento 2
3. Elemento 3
3.1. Elemento 3.1

3.1.1 Elemento 3.1.1

4. Elemento 4
```  

1. Elemento 1
2. Elemento 2
3. Elemento 3
3.1. Elemento 3.1

3.1.1 Elemento 3.1.1

4. Elemento 4

## Citas

Para escribir una cita, usaremos `> cita` y, para acabar la cita, usaremos un doble salto de línea:

``` md
> cita

```

Que generará algo como:

> cita

Porque si seguimos escribiendo sin un doble salto de línea, el intérprete de Markdown lo entenderá como parte de la cita.

``` md
> cita
otro texto

```

Resultado:

> cita
otro texto


Podemos sangrar más usando más símbolos de mayor que (>):

``` md
> cita
>> autor

```

Para que genere:

> cita
>> autor

## Código

Los bloques de código se insertan entre:

``` md
    ```
    Bloque de código
    ```
```

Para generar:

``` md
Bloque de código
```

Opcionalmente, podemos incluir la extensión del lenguaje para que, si el intérprete tiene resaltado de sintaxis, pueda mostrarlo resaltado:

``` md
    ``` py
    print("Hola, mundo.")
    ```
```

Y lo mostrará con su resaltado:

``` py
print("Hola, mundo.")
```

También, si el intérprete tiene resaltado de sintaxis, normalmente, aceptará también resaltar una determinada línea:

``` md
    ``` py {2}
    string = "Hola, mundo."
    print(string)
    ```
```

Mostrará:

``` py {2}
string = "Hola, mundo."
print(string)
```

## Enlaces

Para insertar un enlace en un texto, usaremos la estructura `[texto del enlace](http://www.pagina_de_destino.com)`. Por ejemplo:

``` md
Vamos a ver un [enlace](http://www.python.org) a la página de Python.
```

Genera:

Vamos a ver un [enlace](http://www.python.org) a la página de Python.

## Imágenes

Las imágenes en Markdown, al ser ficheros externos a los que hay que enlazar, se muestran de forma muy similar a los enlaces a URLs. Entre corchetes escribiremos el texto alternativo (el que se mostrará si no renderiza la imagen) y, entre paréntesis, el enlace a la imagen:

``` md
![texto alternativo](/enlace/a/la/imagen.png)
```

![Logo Programación en español](../assets/hackertux.png)
