# Generar un número de teléfono aleatorio

Podemos generar un número aleatorio con formato de número telefónico con:

``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```

Donde:

``` sh
echo "+34 6"
```

Escribe la cadena `+34 6`

``` sh
shuf -i 1-10 -n 8
```

Genera ocho números del 1 al 10 (no incluído).

``` sh
tr -d '[:space:]'
```

Sustituye los saltos de línea por campos vacíos.

``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```


``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```


``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```


``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```


``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```


``` sh
echo "+34 6$(shuf -i 1-10 -n 8 | tr -d '[:space:]')"
```
