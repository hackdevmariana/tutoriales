# Extraer cadenas de ficheros de texto

## Comando grep

## Comando cut

## Extraer el nombre de las funciones de un fichero Python

En Python, la definición de funciones sigue el siguiente formato: `def funcion(parametros):`, por lo que para extraer el nombre, debemos delimitar la subcadena entre el espacio en blanco y la apertura de paréntesis:

``` sh
cat script.py | grep def | cut -d ' ' -f2 | cut -d '(' -f 1
```

Si estamos usando click y hay líneas que contienen la palabra 'default', podemos hacer que no las liste con `grep -v`:

``` sh
cat script.py | grep def | grep -v default | cut -d ' ' -f2 | cut -d '(' -f 1
```
