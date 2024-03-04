# Módulo pathlib

`pathlib` es un módulo de Python que ofrece una interfaz orientada a objetos para trabajar con rutas de archivos y directorios.

pathlib es un módulo en la biblioteca estándar de Python que proporciona una interfaz orientada a objetos para trabajar con rutas de archivos y directorios. Fue introducido en Python 3.4 y es una forma más orientada a objetos y moderna de manipular rutas en comparación con las funciones tradicionales del módulo os.path o shutil.

Permite crear objetos Path que representan las rutas de tu sistema operativo, ya sea Windows, Linux o Mac. Estos objetos tienen métodos y propiedades que te facilitan el acceso a la información y las operaciones de las rutas.

Permite usar el operador / para unir las rutas de forma natural, sin tener que preocuparte por los separadores o las barras invertidas.

Permite usar métodos como glob, rglob, iterdir, mkdir, rmdir, rename, replace, touch, etc, para buscar, crear, mover, borrar y modificar archivos y directorios.

Permite usar métodos como exists, is_file, is_dir, is_symlink, is_absolute, is_relative_to, etc, para comprobar el estado y las propiedades de las rutas.

Permite usar métodos como open, read_text, write_text, read_bytes, write_bytes, etc, para leer y escribir archivos.

Permite usar propiedades como name, stem, suffix, parent, parts, anchor, drive, root, etc, para obtener los componentes de las rutas.

## Ejemplos de uso

Importar el módulo:

``` py
from pathlib import Path
```

Crear un objeto Path que represente la ruta a un archivo:

``` py
p = Path("data", "names", "file.txt")
```

Mostrar el objeto Path:

``` py
print(p)
```

Crear un objeto Path para una ruta absoluta y relativa:

``` py
from pathlib import Path

absolute_path = Path("/home/user/folder/file.txt")
relative_path = Path("folder/subfolder/file.txt")
```

Crear un objeto Path para el directorio actual con el método `Path.cwd()`:

``` py
from pathlib import Path
current_directory = Path.cwd()
```

Crear un objeto Path concatenando partes:

``` py
from pathlib import Path
combined_path = Path("folder") / "subfolder" / "file.txt"
```

Obtener la ruta absoluta de un objeto Path con el método resolve:

``` py
from pathlib import Path

p = Path("data", "names", "file.txt")

p_abs = p.resolve()

print(p_abs)
```

El método `path.resolve()` devuelve la ruta absoluta. Para obtener la ruta relativa a otra ruta, podemos usar `path.relative_to(other)`:

``` py
path = Path("folder/subfolder/file.txt")

absolute_path = path.resolve()
print(absolute_path)

relative_to_current = path.relative_to(Path.cwd())
print(relative_to_current)
```

Comprobar si un objeto `Path` existe, es un archivo o es un directorio, podemos usar los métodos `exists`, `is_file` y `is_dir`:

``` py
from pathlib import Path

p = Path("data", "names", "file.txt")

print(p.exists())

print(p.is_file())

print(p.is_dir())
```

Para leer o escribir el contenido de un archivo representado por un objeto `Path`, podemos usar los métodos `read_text`, `write_text`, `read_bytes` y `write_bytes`:

``` py
from pathlib import Path

p = Path("data", "names", "file.txt")
text = p.read_text()
print(text)

p.write_text("Nuevo contenido")
bytes = p.read_bytes()
print(bytes)

p.write_bytes(b"Nuevo contenido")
```

De estos métodos, los dos más usados son:

- `path.write_text(text)`: Escribe texto en un archivo.

- `path.read_text()`: Lee el contenido de un archivo como texto.

Veamos un uso más compacto:

``` py
file_path = Path("/home/user/file.txt")

file_path.write_text("Hola, mundo.")
content = file_path.read_text()
print(content)
```


Para crear, mover, renombrar o eliminar un archivo o directorio representado por un objeto `Path`, podemos usar los métodos `mkdir`, `rmdir`, `rename`, `replace` y `unlink`:

``` py
from pathlib import Path

p = Path("data", "new")

p.mkdir(exist_ok=True)

p_file = p / "file2.txt"

p_file.write_text("Contenido")

p_other = Path("data", "other")

p_file.replace(p_other / "file2.txt")

p_other.rename(Path("data", "old"))

(p_other / "file2.txt").unlink()

p_other.rmdir()
```

Para buscar ficheros en una ruta, podemos usar dos métodos:

- `Path.glob(pattern)`: Encuentra todos los archivos que coinciden con el patrón.

- `Path.rglob(pattern)`: Similar a glob, pero busca recursivamente en todos los subdirectorios.

``` py
directory = Path("/home/user/directory")
for file_path in directory.glob("*.txt"):
    print(file_path)
```

Para la manipulación de rutas, pathlib cuenta con dos métodos muy útiles:

- `path.joinpath(*parts)`: Une partes de rutas para formar una nueva ruta.

- `path.with_suffix(new_suffix)`: Cambia la extensión del archivo.

``` py
path = Path("/home/user/file.txt")

new_path = path.joinpath("subfolder", "new_file.txt")
print(new_path)

new_path_with_suffix = path.with_suffix(".csv")
print(new_path_with_suffix)
```

Devuelve:

```
/home/user/new_file.txt
/home/user/file.csv
```

Para mostrar información sobre una ruta, podemos usar los siguientes atributos y funciones:

- `path.parent`: Devuelve el directorio padre.

- `path.name`: Devuelve el último componente de la ruta.

- `path.suffix`: Devuelve la extensión del archivo.

- `path.stem`: Devuelve el nombre del archivo sin la extensión.

- `path.exists()`: Verifica si el archivo o directorio existe.

- `path.is_file()`: Verifica si es un archivo.

- `path.is_dir()`: Verifica si es un directorio.

``` py
path = Path("/home/user/file.txt")

print(path.parent)
print(path.name)   
print(path.suffix)
print(path.stem)   
print(path.exists())
print(path.is_file())
```

Devuelve:

```
/home/user
file.txt
.txt
file
True (o False)
True (o False)
```

## Método iterdir

El método `iterdir()` permite iterar sobre los elementos de un directorio. Este método retorna un iterador que produce objetos Path correspondientes a los elementos dentro del directorio.

Uso básico de `iterdir()`:

``` py
from pathlib import Path

directory_path = Path("/home/user/directory")

for entry in directory_path.iterdir():
    print(entry)
```

Podemos usar métodos como `is_file()` o `is_dir()` junto con `iterdir()` para filtrar solo los archivos o directorios, respectivamente:

``` py
from pathlib import Path

directory_path = Path("/home/user/directory")

for file_path in directory_path.iterdir():
    if file_path.is_file():
        print(f"Archivo: {file_path}")

for dir_path in directory_path.iterdir():
    if dir_path.is_dir():
        print(f"Directorio: {dir_path}")
```

Si también queremos incluir subdirectorios, podemos usar el método `rglob()` (recursivo glob) en lugar de `iterdir()`:

``` py
from pathlib import Path

directory_path = Path("/home/user/directory")

for entry in directory_path.rglob('*'):
    print(entry)
```

Con este código itera sobre todos los elementos, incluyendo subdirectorios.

Es una buena práctica usar la declaración `with` al trabajar con ficheros o directorios para asegurarnos de que los recursos se manejen correctamente, especialmente si estamos haciendo operaciones que puedan lanzar excepciones.

``` py
from pathlib import Path

directory_path = Path("/home/user/directory")

with directory_path.iterdir() as entries:
    for entry in entries:
        print(entry)
```
