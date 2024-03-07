# Decoradores

Un decorador en Python es una función que toma otra función (o método) como argumento y devuelve una nueva función modificada o extendida. Los decoradores se aplican utilizando la sintaxis `@decorador` justo antes de la definición de la función que se va a decorar.

## Sintaxis básica de un decorador

``` py
def mi_decorador(funcion_original):
    def nueva_funcion(*args, **kwargs):
        # Código antes de llamar a la función original
        resultado = funcion_original(*args, **kwargs)
        # Código después de llamar a la función original
        return resultado
    return nueva_funcion

@mi_decorador
def mi_funcion():
    print("¡Hola, soy una función decorada!")

mi_funcion()
```


Saber cuánto tiempo tarda una función en ejecutarse:

``` py
import time

def medir_tiempo(funcion):
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = funcion(*args, **kwargs)
        fin = time.time()
        print(f"{funcion.__name__} ejecutada en {fin - inicio} segundos")
        return resultado
    return wrapper

@medir_tiempo
def funcion_lenta():
    time.sleep(2)
    print("Función lenta ejecutada")

funcion_lenta()
```

Gestión de permisos:

``` py
def verificar_permisos(funcion):
    def wrapper(*args, **kwargs):
        # Verificar permisos aquí
        if tiene_permisos(args[0]):
            return funcion(*args, **kwargs)
        else:
            print("No tienes permisos para ejecutar esta función.")
    return wrapper

@verificar_permisos
def funcion_protegida(usuario):
    print(f"Ejecutando función protegida para {usuario}")

funcion_protegida("usuario1")
```

## Múltiples decoradores

Podemos aplicar múltiples decoradores a una función, y se ejecutarán en el orden inverso al que aparecen.

``` py
@decorador1
@decorador2
def mi_funcion():
    # Código de la función
    pass
```

En este caso, primero se aplicará `decorador2` y luego decorador1.


## Decoradores con argumentos

Los decoradores también pueden aceptar argumentos, lo que permite personalizar su comportamiento. Podemos lograr esto agregando una capa adicional de funciones.

``` py
def decorador_con_argumentos(argumento):
    def decorador(funcion):
        def wrapper(*args, **kwargs):
            print(f"Decorador con argumento: {argumento}")
            resultado = funcion(*args, **kwargs)
            return resultado
        return wrapper
    return decorador

@decorador_con_argumentos("Hola, soy un argumento")
def funcion_decorada():
    print("Función decorada ejecutada")

funcion_decorada()
```

## Ejemplo práctico: decorador que registra las llamadas a una función

Un decorador que registre las llamadas a una función es una función que toma como argumento otra función y devuelve una nueva función que envuelve la función original con un código que registra la hora, los argumentos y el resultado de cada llamada. Podemos utilizarlo, por ejemplo, para resgistrar en logs las llamadas funciones.

Su código podría ser así:

``` py
import time

def registrar_llamadas(funcion):
    def envoltura(*args, **kwargs):
        hora = time.strftime("%H:%M:%S")
        resultado = funcion(*args, **kwargs)
        print(f"{hora} - Se llamó a {funcion.__name__} con {args} y {kwargs} y devolvió {resultado}")

        return resultado
    return envoltura

@registrar_llamadas
def sumar(a, b):
  return a + b

sumar(3, 4)
```

Devolverá algo así:

```
23:29:42 - Se llamó a sumar con (3, 4) y {} y devolvió 7
```

En este ejemplo, el decorador `registrar_llamadas` toma como argumento la función `sumar` y devuelve una nueva función envoltura que ejecuta la función `sumar` y además imprime un mensaje con la información de la llamada. El decorador se aplica a la función `sumar` usando la sintaxis `@registrar_llamadas` antes de la definición de la función.

## Decoradores integrados

Los decoradores integrados en Python son aquellos que están incorporados dentro del lenguaje y que se usan para crear patrones de diseño concretos o desarrollar funcionalidades específicas. Algunos de los decoradores integrados más comunes son:

### @staticmethod

Este decorador se usa para definir un método estático dentro de una clase. Un método estático es aquel que no recibe el argumento `self` ni el argumento `cls`, y que no depende del estado de la instancia o de la clase. Un método estático se puede llamar directamente desde la clase o desde una instancia de la clase, y se comporta como una función normal.

Por ejemplo:

``` py
class Calculadora:
  @staticmethod
  def sumar(x, y):
    return x + y
```

Podemos llamar al método estático desde la clase:


``` py
print(Calculadora.sumar(3, 4))
```

Que devuelve:

```
7
```

O podemos llamar al método estático desde una instancia de la clase:

``` py
c = Calculadora()
print(c.sumar(5, 6))
```

Que devuelve:

```
11
```

### @classmethod

Este decorador se usa para definir un método de clase dentro de una clase. Un método de clase es aquel que recibe el argumento cls, que representa la clase en sí misma, y que puede acceder o modificar los atributos o métodos de la clase. Un método de clase se puede llamar directamente desde la clase o desde una instancia de la clase, y se suele usar como un constructor alternativo.

Por ejemplo:

``` py
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    @classmethod
    def desde_cadena(cls, cadena):
```

Creamos una instancia de la clase a partir de una cadena con el formato "nombre-edad":

``` py
nombre, edad = cadena.split("-")
return cls(nombre, int(edad))
```

De nuevo, podemos llamar al método de clase desde la clase

``` py
p1 = Persona.desde_cadena("Ana-25")
print(p1.nombre, p1.edad) # Ana 25
```

O llamar al método de clase desde una instancia de la clase:

``` py
p2 = Persona("Luis", 30)
p3 = p2.desde_cadena("Pedro-40")
print(p3.nombre, p3.edad) # Pedro 40
```

### @property

Este decorador se usa para definir una propiedad dentro de una clase. Una propiedad es un atributo que se accede o modifica mediante un método `getter` o `setter`, que se definen con los decoradores `@property` y `@property.setter` respectivamente.

Una propiedad permite controlar el acceso y la validación de los datos de una instancia de la clase, y se usa como si fuera un atributo normal.

Por ejemplo:

``` py
class Circulo:
def __init__(self, radio):
    self.radio = radio
```

Calculamos el área del círculo como una propiedad de solo lectura:

``` py
@property
def area(self):
    return 3.14 * self.radio ** 2

@property
def diametro(self):
    return 2 * self.radio
```

Validamos y modificamos el diámetro del círculo, y actualizamos el radio:

``` py
@diametro.setter
def diametro(self, valor):
    if valor <= 0:
        raise ValueError("El diámetro debe ser positivo")
        self.radio = valor / 2

Creamos una instancia de la clase:

``` py
c = Circulo(5)
```

Y accedemos a las propiedades:

``` py
print(c.area)
print(c.diametro)
```

Que nos devolverá:

```
78.5
10
```

Podemos modificar la propiedad:

``` py
c.diametro = 20
print(c.radio) # 10
```

Y nos devolverá:

```
20
```
