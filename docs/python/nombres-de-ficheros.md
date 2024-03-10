# Extraer nombre de fichero y extensión

Nombre del fichero:

``` py
from pathlib import Path

path = '/home/user/fichero.txt'
filename = Path(path).stem

print(filename)
```

Resultado:

```
fichero
```

Extensión:

``` py
from pathlib import Path

path = '/home/user/fichero.txt'
ext = Path(path).suffix

print(ext)
```
Resultado:

```
.txt
```

Múltiples extensiones:

``` py
from pathlib import Path

path = '/home/user/fichero.tar.gz'
ext = Path(path).suffixes

print(ext)
```

Resultado:

```
['.tar', '.gz']
```
