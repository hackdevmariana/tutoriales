# Cómo crear una cadena alfanumérica pseudoaleatoria en Python, tipo contraseña

Podemos crear una cadena alfanumérica pseudoaleatoria en Python utilizando el módulo `random` para generar caracteres aleatorios de un conjunto definido.

Aquí tenemos un ejemplo de cómo hacerlo a través de una función incluyendo letras y números:

``` py
import random
import string

def create_a_password(length):
  chars = string.ascii_letters + string.digits
  random_string = ''.join(random.choice(chars) for i in range(length))
  return random_string
```

Ejemplo de uso de la función:

``` py
length = 12  
random_string = generar_contrasena(length)
print(random_string)
```

Este código genera una cadena aleatoria (por ejemplo, una contraseña) de la longitud especificada, utilizando letras mayúsculas, minúsculas y números.

Puedes ajustar la variable length para cambiar la longitud de la contraseña generada.

Si queremos que la función devuelva también signos de puntuación, podemos usar `string.punctuation`:

``` py
import random
import string

def create_a_password(length):
  chars = string.ascii_letters + string.digits + string.punctuation
  random_string = ''.join(random.choice(chars) for i in range(length))
  return random_string
```
