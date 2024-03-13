# Condicional if 


## Compactar varias comprobaciones negativas.

Si tenemos que hacer varias comprobaciones negativas, como esta:

``` py
if not width and not height and not size:
```

Podemos compactarlas de esta manera:

``` py
if not (width or height or size):
```

Esta expresión verificará si width, height y size son todos falsos (es decir, si ninguno de ellos tiene un valor verdadero). Si todos son falsos, la expresión devolverá True, lo que es equivalente a la condición original, pero más legible y elegante.
