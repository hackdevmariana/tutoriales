# enumerate

Crea un objeto interable a partir de otro iterable, con un índice numérico y el elemento del iterable. Así:

``` py
letters = ['a', 'b', 'c', 'd', 'e']
enumerated_letters = enumerate(letters)
print(list(enumerated_letters))
```

Devuelve:

```
[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd'), (4, 'e')]
```

Si queremos cambiar el primer número para que no comience en 0 sino, por ejemplo, en 1:

``` py
letters = ['a', 'b', 'c', 'd', 'e']
enumerated_letters = enumerate(letters, 1)
print(list(enumerated_letters))
```

Que devuelve:

```
[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]
```


Podemos recorrer un objeto enumerate:

``` py
letters = ['a', 'b', 'c', 'd', 'e']

for item in enumerate(letters):
    print(item)
```

Que devuelve:

```
(0, 'a')
(1, 'b')
(2, 'c')
(3, 'd')
(4, 'e')
```

O recorrer el objeto con dos variables distintas, el contador y el valor del iterable:

``` py
letters = ['a', 'b', 'c', 'd', 'e']

for count, item in enumerate(letters):
    print(count, item)
```

Que devuelve:

```
0 a
1 b
2 c
3 d
4 e
```

Y, si no queremos empezar por el 0, podemos indicarle el primer valor de enumerate indicándoselo como segundo parámetro:

``` py
letters = ['a', 'b', 'c', 'd', 'e']

for count, item in enumerate(letters, 1):
    print(count, item)
```

Que devuelve:

```
1 a
2 b
3 c
4 d
5 e
```
