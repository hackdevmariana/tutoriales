# Uso de parámetros en las funciones Python

En Python, los parámetros en las funciones son las variables que se utilizan para recibir valores durante la llamada a la función.

Hay varios tipos de parámetros que podemos utilizar en la definición de una función.

## Parámetros posicionales

Los parámetros posicionales son los más comunes. Se definen en el orden en que aparecen en la función y se deben proporcionar en el mismo orden durante la llamada a la función.

Llamada a una función con parámetros posicionales:

``` py
def saludar(nombre, saludo):
    print(f"{saludo}, {nombre}!")

saludar("Juan", "Hola")
```

## Parámetros de palabra clave (Keyword)

Los parámetros de palabra clave se especifican durante la llamada a la función utilizando la sintaxis `nombre=valor`.

Esto permite cambiar el orden de los argumentos sin afectar la función.

Llamada a una función con parámetros de palabra clave:

``` py
def saludar(nombre, saludo):
    print(f"{saludo}, {nombre}!")

saludar(saludo="Hola", nombre="Juan")
```

## Parámetros por defecto

Podemos asignar valores predeterminados a los parámetros en la definición de la función.

Estos valores se utilizan si no se proporciona un valor durante la llamada.

Llamada a una función sin proporcionar el segundo argumento:

``` py
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}!")

saludar("Juan")
```

## Desempaquetado de argumentos

Podemos desempaquetar secuencias (listas, tuplas) o diccionarios durante la llamada a la función utilizando `*` y `**`.

Desempaquetado de una lista:

``` py
def funcion_desempaquetado(arg1, arg2, arg3):
    # Cuerpo de la función

lista_argumentos = [1, 2, 3]
funcion_desempaquetado(*lista_argumentos)
```

Desempaquetado de un diccionario:

``` py
def funcion_desempaquetado(arg1, arg2, arg3):
    # Cuerpo de la función

diccionario_argumentos = {'arg1': 1, 'arg2': 2, 'arg3': 3}
funcion_desempaquetado(**diccionario_argumentos)
```


## Indicar el tipo de dato que recibe una función

En Python, los tipos de las variables de los parámetros no se especifican directamente en la definición de la función, al estilo de lenguajes estáticamente tipados como C++ o Java.

Python es un lenguaje de tipado dinámico, lo que significa que no es necesario declarar el tipo de una variable antes de usarla.

Sin embargo, a partir de la versión 3.5, Python introdujo las "annotations" (anotaciones), que permiten añadir información opcional sobre los tipos de los parámetros y el valor de retorno de una función.

Las anotaciones de tipo se especifican utilizando dos puntos (`:`) después del nombre del parámetro o de la función, seguido del tipo.

Aquí hay un ejemplo básico:


``` py
def suma(a: int, b: int) -> int:
    return a + b
```


## Uso de un número variable de argumentos en una función

En Python, `*args` y `**kwargs` son convenciones utilizadas para pasar un número variable de argumentos a una función. Esto proporciona flexibilidad y versatilidad al definir funciones que pueden aceptar diferentes cantidades de argumentos.

## Uso de *args (Argumentos posicionales)

El uso de `*args` en la definición de una función permite que la función acepte un número arbitrario de argumentos posicionales.

La palabra "args" es solo una convención; podemos usar cualquier nombre, pero `args` es común y entendido por la comunidad.


``` py
def ejemplo_args(*args):
    for arg in args:
        print(arg)

ejemplo_args(1, 2, 3, "cuatro")
```

En este ejemplo, `*args` recoge todos los argumentos posicionales proporcionados a la función y los almacena en una tupla llamada `args`. La función puede iterar sobre esta tupla y realizar operaciones según sea necesario.


## **kwargs (Argumentos de palabra clave)

Similar a `*args`, `**kwargs` se utiliza para aceptar un número variable de argumentos, pero en este caso, se trata de argumentos de palabra clave.

Al igual que con `*args`, `"kwargs"` es una convención, y podemos usar cualquier otro nombre.

``` py
def ejemplo_kwargs(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

ejemplo_kwargs(nombre="Juan", edad=25, ciudad="Ciudad de Ejemplo")
```

En este ejemplo, `**kwargs` recoge todos los argumentos de palabra clave proporcionados a la función y los almacena en un diccionario llamado kwargs.

La función puede trabajar con este diccionario como desee.


## Parámetros en la definición de funciones

Cuando definimos una función, podemos utilizar parámetros posicionales, parámetros de palabra clave y combinaciones de ambos:

``` py
def funcion_ejemplo(parametro_posicional, *args, parametro_keyword="valor_por_defecto", **kwargs):
    pass
```

- parametro_posicional: Es un parámetro que debe ser proporcionado en la llamada a la función.

- `*args`: Recoge argumentos posicionales adicionales en una tupla.

- parametro_keyword: Es un parámetro de palabra clave con un valor predeterminado.

- `**kwargs`: Recoge argumentos de palabra clave adicionales en un diccionario.


## Llamadas a Funciones con `*args` y `**kwargs`

Cuando llamamos a una función, podemos utilizar `*` y `**` para desempaquetar secuencias (tuplas o diccionarios) y pasar los elementos como argumentos individuales.

Llamada a la función con `*args` y `**kwargs`:

``` py
def funcion_ejemplo(parametro_posicional, *args, parametro_keyword="valor_por_defecto", **kwargs):
    pass

funcion_ejemplo(1, 2, 3, parametro_keyword="nuevo_valor", nombre="Juan", edad=25)
```

En este ejemplo, `args` recoge los valores 2 y 3 como una tupla, y kwargs recoge los valores `nombre="Juan"` y `edad=25` como un diccionario.

La función puede manejar estos valores de manera flexible.

Estas características son especialmente útiles cuando necesitas diseñar funciones que pueden adaptarse a diferentes situaciones y permitir un código más dinámico y reutilizable.
