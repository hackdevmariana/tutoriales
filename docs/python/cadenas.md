# Principales métodos para trabajar con cadenas en Python

Longitud de la cadena:

``` py
cadena = "Hola, mundo!"
longitud = len(cadena)
print(longitud)  # Salida: 13
```

Convertir a minúsculas / mayúsculas:

``` py
cadena = "Hola, mundo!"
print(cadena.lower())  # Salida: hola, mundo!
print(cadena.upper())  # Salida: HOLA, MUNDO!
```

Eliminar espacios en blanco al principio y final de la cadena:

``` py
cadena = "   Hola, mundo!   "
print(cadena.strip())  # Salida: Hola, mundo!
```

Dividir una cadena en una lista:

``` py
cadena = "Hola, mundo!"
partes = cadena.split(", ")
print(partes)  # Salida: ['Hola', 'mundo!']
```

Reemplazar subcadenas:

``` py
cadena = "Hola, mundo!"
nueva_cadena = cadena.replace("mundo", "Python")
print(nueva_cadena)  # Salida: Hola, Python!
```


## Formatear cadenas con f-string

``` py
nombre = "Alice"
edad = 30
altura = 1.75

# Usando f-string
mensaje = f"{nombre} tiene {edad} años y mide {altura} metros."
print(mensaje)
# Salida: Alice tiene 30 años y mide 1.75 metros.
```
