# Interfaces de línea de comandos con t

## Instalación

``` py
pip install "typer[all]"
```

## Uso básico

``` py
import typer

def main(name: str):
    print(f"Hello {name}")

if __name__ == "__main__":
    typer.run(main)
```

## Uso con subcomandos

Para crear subcomandos, hay que definir una o más funciones que serán los subcomandos del CLI. Estas funciones pueden tener parámetros con anotaciones de tipo, que se convertirán en opciones o argumentos de la CLI. También podemos usar decoradores para agregar metadatos o validaciones a tus parámetros.

Para ello, debemos usar el método `command` de la instancia de Typer para registrar las funciones como subcomandos. También podemos usar el decorador `@app.command` directamente sobre las funciones.

Después, deberemos llamar al método `run` de la instancia de Typer al final del script, pasándole la función principal del CLI. Esto ejecutará el CLI cuando se invoque el script con Python.

Opcionalmente, podemos instalar Typer CLI, una herramienta que permite ejecutar los scripts con Typer con autocompletado en la terminal, sin tener que crear un paquete de Python. Para ello, debemos instalar Typer CLI con `pip` e instalar el autocompletado con el comando `typer --install-completion`.

Aquí hay un ejemplo de un script con Typer que tiene dos subcomandos: hello y bye:

``` py
import typer

app = typer.Typer()

@app.command()
def hello(name: str):
  typer.echo(f"Hello {name}!")

@app.command()
def bye(name: str):
  typer.echo(f"Bye {name}!")

if __name__ == "__main__":
  app()
```

## Recibir parámetros

Un comando hecho con Typer puede recibir parámetros de dos formas: como opciones o como argumentos.

Las opciones son parámetros que se pasan con un prefijo, como `--name` o `-n`, y que tienen un valor asociado.

Los argumentos son parámetros que se pasan sin prefijo y que se basan en el orden.

Por ejemplo, en el comando `git commit -m "mensaje" -a`, -m y -a son opciones, y "mensaje" es el valor de la opción -m. El comando no tiene argumentos.

Para definir opciones y argumentos en Typer, se usan anotaciones de tipo en los parámetros de la función que representa el comando. Typer infiere el tipo de la opción o argumento a partir de la anotación, y también genera la ayuda y el autocompletado. Además, se pueden usar decoradores para añadir metadatos o validaciones a las opciones y argumentos. Por ejemplo, el decorador `@typer.option` permite especificar el nombre, la ayuda, el valor por defecto, o si la opción es requerida o no. El decorador `@typer.argument` permite especificar la ayuda o el número máximo de argumentos.

Ejemplo de un comando con Typer que tiene una opción y un argumento:

``` py
import typer

@app.command()
def greet(name: str, formal: bool = typer.Option(False, "--formal", "-f")):
  if formal:
    typer.echo(f"Good day, {name}.")
  else:
    typer.echo(f"Hello, {name}!")

if __name__ == "__main__":
  app()
```

## Cómo Typer infiere automáticamente el tipo y genera la ayuda

**Tipo Automático**: Typer se beneficia del tipado estático introducido en Python 3.6+. En lugar de requerir que especifiquemos explícitamente el tipo de los argumentos y opciones, Typer utiliza las anotaciones de tipo para inferirlos automáticamente.

Esto significa que si declaramos una función como:

``` py
def greet(name: str, formal: bool):
```

Typer entiende que name es una cadena (`str`) y formal es un booleano (`bool`). Esta inferencia automática se basa en las anotaciones de tipo en los parámetros de la función.

**Generación Automática de Ayuda**: Typer aprovecha la información proporcionada por las anotaciones de tipo y otras decoraciones para generar automáticamente la ayuda y la documentación de los comandos. Cuando ejecutamos el script con `--help` o `-h`, Typer analiza la función principal y genera mensajes de ayuda coherentes para los usuarios, lo que incluye información sobre los tipos de parámetros, opciones, descripciones, etc.

Ejemplo:

``` py
import typer

def greet(name: str, formal: bool = typer.Option(False, "--formal", "-f")):
    if formal:
        typer.echo(f"Good day, {name}.")
    else:
        typer.echo(f"Hello, {name}!")

if __name__ == "__main__":
    typer.run(greet)
```

Cuando ejecutamos este script con `python3 script.py --help`, Typer generará automáticamente un mensaje de ayuda basado en la información de las anotaciones de tipo y las opciones de Typer.

## Ejemplos adicionales y escenarios de uso de typer

Manejo de ficheros y directorios:

``` py
import typer
from pathlib import Path

def process_files(directory: Path = typer.Argument(..., help="Directory to process")):
    """Process files in the given directory."""
    for file in directory.iterdir():
        typer.echo(f"Processing file: {file}")

if __name__ == "__main__":
    typer.run(process_files)
```

Operaciones de red:

``` py
import typer
import socket

def check_connection(host: str = typer.Option(..., help="Host to check")):
    """Check the connection to a given host."""
    try:
        socket.create_connection((host, 80))
        typer.echo(f"Connection to {host} successful.")
    except (socket.timeout, ConnectionError):
        typer.echo(f"Connection to {host} failed.")

if __name__ == "__main__":
    typer.run(check_connection)
```

Interacción con APIs:

``` py
import typer
import requests

def fetch_data(api_url: str = typer.Option(..., help="URL of the API")):
    """Fetch data from a given API."""
    response = requests.get(api_url)
    if response.status_code == 200:
        typer.echo(f"Data fetched successfully: {response.json()}")
    else:
        typer.echo(f"Failed to fetch data. Status code: {response.status_code}")

if __name__ == "__main__":
    typer.run(fetch_data)
```

Procesamiento de datos:

``` py
import typer
import pandas as pd

def analyze_data(file_path: str = typer.Argument(..., help="Path to data file")):
    """Analyze data from a CSV file."""
    data = pd.read_csv(file_path)
    # Perform data analysis operations here
    typer.echo(f"Data analysis completed for {file_path}.")

if __name__ == "__main__":
    typer.run(analyze_data)
```

Despliegue y gestión de aplicaciones:

``` py
import typer
import docker

def deploy_app(image_name: str = typer.Argument(..., help="Docker image to deploy")):
    """Deploy a Dockerized application."""
    client = docker.from_env()
    container = client.containers.run(image_name, detach=True)
    typer.echo(f"Application deployed. Container ID: {container.id}")

if __name__ == "__main__":
    typer.run(deploy_app)
```

## Uso de tres puntos (...)

Los tres puntos (`...`) en la construcción `typer.Argument(..., help="Docker image to deploy")` indican que el argumento es obligatorio. En Typer, los puntos suspensivos (`...`) se utilizan para denotar que el argumento es necesario y debe ser proporcionado al ejecutar el comando.

Por ejemplo, en el código:

``` py
typer.Argument(..., help="Docker image to deploy")
```

Se crea un argumento para el comando. El `...` indica que este argumento es requerido, y se espera que el usuario proporcione un valor para este argumento al ejecutar el comando correspondiente.

En resumen, cuando utilizamos `...` en Typer, estamos especificando que un argumento (o incluso una opción) es obligatorio y debe ser proporcionado al ejecutar el comando.

## Uso opcional de argumentos

Para indicar que un argumento es opcional en Typer, podemos utilizar el tipo de Python `Optional`:

``` py
import typer
from typing import Optional

def greet(name: str, age: Optional[int] = None):
    if age is not None:
        typer.echo(f"Hello {name}, you are {age} years old.")
    else:
        typer.echo(f"Hello {name}!")

if __name__ == "__main__":
    typer.run(greet)
```

En este ejemplo, `age` es un argumento opcional. Al utilizar `Optional[int]`, le estmos diciendo a Typer que este argumento puede ser un entero (`int`) o `None` (lo que indica la ausencia de un valor).

El hecho de no proporcionar un valor para `age` al ejecutar el comando no generará un error, ya que es un argumento opcional.

Por ejemplo:

``` sh
python3 script.py John
```

En este caso, `age` se establecerá en `None`. Si proporcionamos un valor para `age`:

``` sh
python script.py John --age 25
```

`age` tomará el valor proporcionado (en este caso, 25).

## Diferencias con click

Los módulos click y typer son dos librerías de Python que facilitan la creación de interfaces de línea de comandos (CLI). Ambas librerías están basadas en el uso de decoradores para definir los argumentos y las opciones de los comandos. Sin embargo, hay algunas diferencias entre ellas:

- Typer usa el tipado estático de Python 3.6+ para inferir el tipo de los argumentos y las opciones, mientras que Click requiere especificar el tipo de forma explícita.

- Typer genera automáticamente la ayuda y la documentación de los comandos, basándose en los tipos, los nombres y las anotaciones de las funciones.

- Typer permite usar sub-aplicaciones (sub-comandos) de forma más sencilla que Click, ya que no modifica las funciones originales.

- Typer está construido sobre Click, y por tanto, se puede combinar con Click usando una función interna de Typer


## Uso conjunto de click y typer

Para combinar click y typer, se puede usar la función `typer_click_object` de Typer, que convierte un objeto de Click en un objeto de Typer. De esta forma, se pueden usar las características de ambas librerías en una misma aplicación CLI.

Por ejemplo:

``` py
import click
import typer

@click.group()
def click_group():
  pass

@click.command()
@click.option("--name", prompt="Your name")
def hello(name):
  click.echo(f"Hello, {name}!")

  typer_app = typer.Typer()

@typer_app.command()
def goodbye():
  typer.echo("Goodbye!")

  typer_app.add_typer(typer_click_object(click_group))

if __name__ == "__main__":
typer_app()
```

Este código crea una aplicación CLI con dos comandos: hello y goodbye. El comando hello usa Click para pedir el nombre del usuario y saludarlo. El comando goodbye usa Typer para despedirse. Se puede ejecutar la aplicación con `python3 app.py hello` o `python3 app.py goodbye`.
