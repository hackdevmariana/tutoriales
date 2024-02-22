# Compartir en GitHub un proyecto con dependencias

## Crear entorno virtual

Crear un entorno virtual es una buena práctica durante el desarrollo de un proyecto en Python. Un entorno virtual proporciona un ambiente aislado donde poder instalar las dependencias de un proyecto sin afectar a las instaladas a nivel del sistema. Esto es útil para evitar conflictos entre versiones de bibliotecas y garantizar que el proyecto sea reproducible en diferentes sistemas.

Para crearlo, podemos ir al directorio del proyecto y ejecutar:

``` sh
python -m venv venv
```

Esto creará un directorio llamado `venv` que contendrá el entorno virtual.

Para activar el entorno virtual, en sistemas basados en Unix o MacOS, ejecutaremos:

``` sh
source venv/bin/activate
```

Y, en Windows:

``` sh
.\venv\Scripts\activate
```

Una vez activado el entorno virtual, podemos instalar las dependencias de desarrollo, y desarrollar el proyecto.

Para desactivar el entorno virtual, usaremos:

``` sh
deactivate
```

## Fichero requirements.txt

Al compartir un proyecto de Python en GitHub con dependencias, es una práctica común incluir un archivo `requirements.txt` que lista todas las dependencias necesarias para ejecutar el código.

Para ello, hay que crear un archivo llamado `requirements.txt` en el directorio del proyecto. Este archivo debe contener una lista de todas las dependencias y sus versiones. Algo así:

```
click==7.1.2
```

Para generar el fichero `requirements.txt`, mientras estamos en el entorno virtual, podemos ejecutar el comando:

``` sh
pip freeze > requirements.txt
```

Esto capturará todas las dependencias y sus versiones en un archivo.

## Fichero setup.py

Aunque no es necesario para un proyecto local, no está de más incluir un archivo `setup.py`, sobre todo, si se planea empaquetar el proyecto de alguna manera, por ejemplo, como un paquete de Python en [pypi](https://pypi.org/).

El archivo `setup.py` en un proyecto Python es un script de configuración que se utiliza para definir metadatos del proyecto y sus dependencias. Este archivo es esencial cuando se empaqueta y distribuye el proyecto, y también se utiliza para instalar el proyecto en el sistema local del usuario.

Comúnmente en un archivo `setup.py` se encuentra la siguiente información:

- **name**: Nombre del proyecto.
- **version**: Número de versión del proyecto. Puede seguir el formato X.Y.Z, donde X es la versión principal, Y es la versión secundaria y Z es la versión de parche.
- **author**: Nombre del autor del proyecto.
- **author_email**: Correo electrónico del autor.
- **description**: Breve descripción del proyecto.
- **long_description**: Descripción más detallada del proyecto.

## Fichero README

También debería incluir instrucciones en el fichero `README.md` para que otros usuarios sepan cómo instalar las dependencias. Pueden usar el siguiente comando para instalar todas las dependencias:

``` sh
pip install -r requirements.txt
```

Y cómo ejecutarlo, como:

``` sh
python3 script.py comando parametro
```

## Fichero LICENSE

Es una buena práctica incluir un archivo `LICENSE` que especifique los términos bajo los cuales otros pueden usar, copiar, modificar y distribuir el código.
