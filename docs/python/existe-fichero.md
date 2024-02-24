# Cómo saber en Python si un fichero o un directorio existe

## Con os.path

Con `os.path` podemos saber si la ruta del fichero o directorio existe:

``` py
from os import path

filename = "mi_fichero.txt"

if path.exists(filename):
    print(f"El fichero {filename} existe.")
else:
    print(f"El fichero {filename} no existe.")
```

Y también, si, además de existir, es un fichero:

``` py
from os import path

filename = "mi_fichero.txt"

if path.isfile(filename):
    print(f"El fichero {filename} existe y es un fichero.")
else:
    print(f"El fichero {filename} no es un fichero.")
```

O un directorio:

``` py
from os import path

filename = "mi_fichero.txt"

if path.isdir(filename):
    print(f"El fichero {filename} existe y es un directorio.")
else:
    print(f"El fichero {filename} no es un directorio.")
```

## Orientado a objetos con pathlib

De forma similar a `os.path`, con `pathlib` podemos saber si la ruta del fichero o directorio existe:

``` py
from pathlib import Path

filename = "mi_fichero.txt"
file_obj = Path(filename)

if file_obj.exists():
    print(f"El fichero {filename} existe.")
else:
    print(f"El fichero {filename} no existe.")
```

Y también, si, además de existir, es un fichero:

``` py
from pathlib import Path

filename = "mi_fichero.txt"
file_obj = Path(filename)

if file_obj.is_file():
    print(f"El fichero {filename} existe.")
else:
    print(f"El fichero {filename} no existe.")
```

O un directorio:

``` py
from pathlib import Path

filename = "mi_fichero.txt"
file_obj = Path(filename)

if file_obj.is_dir():
    print(f"El fichero {filename} existe.")
else:
    print(f"El fichero {filename} no existe.")
```
