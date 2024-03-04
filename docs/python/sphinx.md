# Generar documentación a partir de los docstrings con Sphinx

## Instalación

``` sh
pip install sphinx
```

## Uso

Creamos una carpeta para la documentación, por ejemplo `docs`, y entramos en ella.

``` sh
mkdir docs
cd docs
```

Ejecutamos el comando

``` sh
sphinx-quickstart
```

para iniciar el proceso de configuración de Sphinx. Este comando realiza algunas preguntas sobre el proyecto, como el nombre, el autor, el lenguaje, el formato de salida, etc.

Podemos aceptar los valores por defecto o personalizarlos según las preferencias del desarroador.

Editamos el fichero `conf.py` que se ha generado en la carpeta `docs`. Este fichero contiene la configuración de Sphinx para el proyecto. Debemos asegurarnos de que la variable extensions incluya el valor `sphinx.ext.autodoc`, que es el que permite extraer los docstrings del código.

``` py
extensions = [
  'sphinx.ext.autodoc',
]
```

Añadimos la ruta del código fuente a la variable `sys.path` en el fichero `conf.py`. Esto le permitirá a Sphinx encontrar e importar los módulos y clases. Por ejemplo, si el código está en la carpeta `src` del mismo nivel que la carpeta `docs`, podemos hacer lo siguiente:

``` py
import os
import sys
sys.path.insert(0, os.path.abspath('../src'))
```

Creamos un fichero `.rst` para cada módulo o clase que quieras documentar. Podemos usar el comando:

``` sh
sphinx-apidoc
```

para generar estos ficheros automáticamente a partir del código. Por ejemplo, para generar los ficheros `.rst` para todos los módulos y clases en la carpeta `src`, podemos ejecutar el siguiente comando desde la carpeta docs:

``` sh
sphinx-apidoc -o . ../src
```

Editamos los ficheros `.rst` que se han generado para incluir los docstrings de tus módulos y clases. Para ello, debemos usar la directiva `.. automodule::` o `.. autoclass::` seguida del nombre del módulo o clase que queramos documentar. Por ejemplo, si tenemos un fichero `mi_modulo.py` que contiene una clase `MiClase`, podemos usar el siguiente código en el fichero `mi_modulo.rst`:

``` rst
mi_modulo
=========

.. automodule:: mi_modulo
:members:

MiClase
-------

.. autoclass:: mi_modulo.MiClase
:members:
```


Ejecutamos el comando

``` sh
make html
```

para generar la documentación en formato HTML. Esto creará una carpeta `_build` con los ficheros HTML de la documentación, con un fichero `index.html` como página raíz.
