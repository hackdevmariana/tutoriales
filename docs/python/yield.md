# Generación diferida de resultados con yield

La generación diferida de resultados en Python se logra mediante el uso de generadores y expresiones generadoras. Un generador es una función que contiene la palabra clave `yield` en lugar de `return`. Cuando se llama a una función generadora, esta devuelve un generador, que es una especie de iterador especial que puede ser iterado una vez. Cada vez que se alcanza una declaración `yield`, el generador se detiene y el valor es devuelto al llamador. La próxima vez que se solicita el siguiente valor, la ejecución de la función generadora se reanuda justo después de la última declaración `yield`.

``` py
def generador_ejemplo():
    yield 1
    yield 2
    yield 3

# Crear un generador
mi_generador = generador_ejemplo()

# Iterar sobre el generador
for valor in mi_generador:
    print(valor)
```

Este código imprimirá:


``` sh
1
2
3
```

Además de la capacidad de generar valores de forma diferida, `yield` ofrece algunas otras características y posibilidades:

- **Pausa y reanudación**: Cuando se encuentra una instrucción `yield`, la ejecución de la función generadora se detiene y el valor es devuelto al llamador. La próxima vez que se solicita el siguiente valor, la ejecución se reanuda justo después de la última instrucción yield, manteniendo el estado local de la función.

- **Ahorro de memoria**: A diferencia de las funciones que devuelven listas o generadores completos de inmediato, las funciones generadoras con yield pueden ahorrar memoria al no generar todos los valores de una vez. Esto es útil cuando se trabaja con grandes conjuntos de datos o secuencias infinitas.

- **Iteración infinita**: Puedes usar yield para crear generadores que representen secuencias infinitas. La ejecución se pausará y reanudará según sea necesario.

Iterar infinitamente sobre los números:

``` py
def numeros_infinitos():
    i = 0
    while True:
        yield i
        i += 1

for numero in numeros_infinitos():
    print(numero)
```

## Generación condicional

Podemos utilizar `yield` en función de ciertas condiciones para producir valores sólo cuando sea necesario.

Iterar sobre los números pares infinitamente:

``` py
def pares_infinitos():
    i = 0
    while True:
        if i % 2 == 0:
            yield i
        i += 1

for numero_par in pares_infinitos():
    print(numero_par)
```
