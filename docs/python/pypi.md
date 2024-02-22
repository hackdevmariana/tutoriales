# Compartir en PyPI un proyecto

Para subir un proyecto a PyPI hace falta que el proyecto tenga una estructura adecuada y que incluya un archivo `setup.py` que describa el proyecto y sus dependencias. Aquí hay un ejemplo básico de un `setup.py`:

``` py
from setuptools import setup, find_packages

setup(
    name='mi_proyecto',
    version='0.1.0',
    author='Tu Nombre',
    author_email='tu@email.com',
    description='Una descripción breve',
    long_description='Una descripción más detallada...',
    packages=find_packages(),
    install_requires=[
        'numpy',
        'click',
    ],
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
    ],
)
```

El proyecto debe tener una versión. Si cambia, hay que actualizar la versión en el archivo `setup.py`.

También hay que crear una [cuenta en PyPI](https://pypi.org/account/register/), e instalar y configurar twine, que es una herramienta que facilita la carga de paquetes a PyPI. Se puede instalar usando pip:

``` sh
pip install twine
```

Para empaquetar el proyecto, hay que ejecutar el siguiente comando para crear un archivo tar.gz que contenga el proyecto:

``` sh
pip install twine
```

Esto creará un directorio `dist` con el archivo .tar.gz del proyecto.

Para subir a PyPI, se hace usando `twine`, ejecutando el siguiente comando desde la carpeta `dist`:

``` sh
twine upload mi_proyecto-0.1.0.tar.gz
```

`twine` pedirá los credenciales de PyPI (usuario y contraseña) la primera vez que se ejecute. Después de eso, los credenciales se almacenarán de forma segura.

Después de unos minutos, el paquete debería estar disponible en `PyPI`. Se puede verificar visitando la página del proyecto en https://pypi.org/project/mi_proyecto/ (reemplaza mi_proyecto con el nombre de tu proyecto).

Para instalar el paquete, cualquier usuario podrá hacerlo utilizando pip:

``` sh
pip install mi_proyecto
```
