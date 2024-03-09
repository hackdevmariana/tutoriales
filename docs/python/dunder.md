## Métodos mágicos o dunder

Los "métodos dunder" (double underscore methods) en Python son también conocidos como "métodos mágicos" o "métodos especiales". Estos métodos son identificados por tener doble guion bajo al principio y al final de sus nombres. Son llamados automáticamente por el intérprete en circunstancias específicas y proporcionan una forma de definir comportamientos específicos para objetos.

Algunos de los métodos dunder más comunes incluyen:

**`__init__(self, ...)`**

Este método se llama cuando se crea una nueva instancia del objeto. Se utiliza para inicializar los atributos del objeto.

``` py
class MiClase:
    def __init__(self, atributo1, atributo2):
        self.atributo1 = atributo1
        self.atributo2 = atributo2
```

**`__str__(self), __repr__(self)`**

`__str__` se llama cuando se utiliza la función str(objeto) y `__repr__` se llama cuando se utiliza repr(objeto). Ambos métodos deben devolver una representación de cadena del objeto.


``` py
class MiClase:
    def __repr__(self):
        return f'MiClase(atributo1={self.atributo1}, atributo2={self.atributo2})'
```

**`__len__(self)`**

Se llama cuando se utiliza la función len(objeto) y debe devolver la longitud del objeto.

``` py
class MiClase:
    def __len__(self):
        return len(self.atributo1)
```
**`__getitem__(self, key), __setitem__(self, key, value), __delitem__(self, key)`**

Permiten definir comportamientos para acceder, asignar y eliminar elementos utilizando la notación de corchetes.

``` py
class MiClase:
    def __getitem__(self, key):
        return self.atributo1[key]

    def __setitem__(self, key, value):
        self.atributo1[key] = value

    def __delitem__(self, key):
        del self.atributo1[key]
```

**`__call__(self, ...)`**

Permite que una instancia de la clase se comporte como una función. Se llama cuando se utiliza la notación de paréntesis con la instancia.

``` py
class MiClase:
    def __call__(self, x, y):
        return x + y
```
