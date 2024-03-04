# Uso de la documentación en programas Python mediante docstrings

Los 'docstrings' son cadenas de documentación que aparecen justo después de la declaración de una función, clase o módulo. Pueden ser accesibles a través de la función help() y son esenciales para herramientas de generación de documentación como Sphinx.

Ejemplo de docstring en una función:

``` py
def suma(a, b):
    """
    Esta función suma dos números.

    Args:
        a (int): El primer número.
        b (int): El segundo número.

    Returns:
        int: La suma de los dos números.
    """
    return a + b
```

Al principio de un módulo:

``` py
"""
Módulo de utilidades para operaciones matemáticas.

Contiene funciones para realizar diversas operaciones matemáticas,
como suma, resta y multiplicación.
"""
```

Los docstrings en el código ayudan a generar una documentación en distintos formatos y al uso de la función `help()`, pero a la hora de programar, es muy importante el uso de nombres descriptivos. Muchas veces es más eficaz que una buena documentación.

Mal nombre de una variable:

``` py
x = 5
```

Buen nombre de una variable:

``` py
numero_intentos = 5
```

## Función help()

Cuando estamos programando, podemos usar la función `help()` para mostrar la documentación de un módulo, función, clase... indicándosela como parámetro. Así pues, si escribimos:

``` py
help(print)
```

Nos devuelve algo así:

```
Help on built-in function print in module builtins:

print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

    Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.
```

Que nos ayuda a entender el uso de esta función y los parámetros que le podemos enviar.

## Coherencia del estilo en docstrings:

La coherencia en el estilo de los docstrings es crucial para mantener un código limpio y fácilmente comprensible. A continuación, se presentan algunas prácticas recomendadas para enfatizar la coherencia del estilo:

- Adherencia a las convenciones del PEP 257 para asegurar un estilo uniforme en los docstrings. Esto incluye el formato de las secciones, como "Args", "Returns", "Raises", "Examples" o "Note"..

- Elección de un estilo de formateo. Puede ser el estilo de una línea (""") o de varias líneas ('''). La clave es ser consistente.

- Hay que intenter mantener una longitud de línea uniforme en los docstrings. Esto facilita la lectura y la visualización del código. Además, se debería mantener un nivel uniforme de detalle en las descripciones para evitar inconsistencias.

- Seleccionemos si usaremos mayúsculas o minúsculas para los nombres de secciones, como "Args" o "Returns", y apliquemos esta elección de manera consistente en todos los docstrings.

- Debemos ser consistentes en la documentación de parámetros y atributos. Utilicemos el mismo formato para descripciones, tipos y cualquier información adicional relevante.

- Debemos realizar revisiones periódicas del código para garantizar que los nuevos docstrings sigan las mismas convenciones que los existentes. La coherencia del estilo es un esfuerzo continuo.

- Consideremos el uso de herramientas automáticas, como pylint o flake8, que pueden ayudar a identificar violaciones del estilo de docstrings. Integrar estas herramientas en nuestro flujo de trabajo puede ser beneficioso.

- Comuniquemos las convenciones de docstrings adoptadas dentro del equipo. Esto garantiza que todos los miembros del equipo estén en la misma página y sigan las mismas prácticas, incluyendo una sección en la documentación del proyecto que detalle las convenciones específicas de docstrings adoptadas. Esto servirá como referencia para todos los colaboradores.

- Realicemos sesiones de formación y revisión del código específicamente centradas en la documentación. Esto puede ayudar a abordar preguntas y asegurar que todos comprendan y sigan las convenciones de manera efectiva.

Siguiendo estas prácticas recomendadas, podemos garantizar que nuestros docstrings sean coherentes en estilo, facilitando la lectura y el mantenimiento del código a lo largo del tiempo.

## PEP 257

El PEP 257 es una Propuesta de Mejora de Python (Python Enhancement Proposal) que se centra en mejorar las convenciones y estándares para la documentación mediante docstrings en Python. Los docstrings son cadenas de documentación que se utilizan para describir el propósito y el funcionamiento de módulos, clases y funciones en Python.

El PEP 257 proporciona recomendaciones sobre el formato y estilo de los docstrings, con el objetivo de mejorar la coherencia y la legibilidad de la documentación en el ecosistema de Python.

Algunos aspectos clave del PEP 257 incluyen:

### Docstrings para módulos

Un docstring para un módulo se recomienda que esté presente y colocado al principio del archivo de módulo, antes de cualquier declaración de importación.

``` py
"""
Descripción del módulo.

Más detalles sobre el propósito y la funcionalidad del módulo.
"""
```

### Docstrings para clases

Un docstring para una clase se recomienda que esté presente y colocado después de la declaración de la clase.

``` py
class MiClase:
    """
    Descripción de la clase.

    Más detalles sobre el propósito y la funcionalidad de la clase.
    """
```

#### Clase simple con atributos

``` py
class Persona:
    """
    Clase que representa a una persona.

    Attributes:
        nombre (str): El nombre de la persona.
        edad (int): La edad de la persona.
        genero (str): El género de la persona ('Hombre' o 'Mujer').
    """

    def __init__(self, nombre, edad, genero):
        """
        Constructor de la clase Persona.

        Args:
            nombre (str): El nombre de la persona.
            edad (int): La edad de la persona.
            genero (str): El género de la persona.
        """
        self.nombre = nombre
        self.edad = edad
        self.genero = genero
```

#### Clase con métodos y descripciones detalladas

``` py
class Libro:
    """
    Clase que representa un libro.

    Attributes:
        titulo (str): El título del libro.
        autor (str): El autor del libro.
        paginas (int): El número de páginas del libro.

    Methods:
        obtener_info(): Devuelve una cadena con la información del libro.

    """

    def __init__(self, titulo, autor, paginas):
        """
        Constructor de la clase Libro.

        Args:
            titulo (str): El título del libro.
            autor (str): El autor del libro.
            paginas (int): El número de páginas del libro.
        """
        self.titulo = titulo
        self.autor = autor
        self.paginas = paginas

    def obtener_info(self):
        """
        Devuelve una cadena con la información del libro.

        Returns:
            str: Información del libro.
        """
        return f"{self.titulo} - {self.autor}, {self.paginas} páginas"
```

#### Clase con herencia y docstring de herencia

``` py
class Estudiante(Persona):
    """
    Clase que representa a un estudiante, hereda de la clase Persona.

    Attributes:
        estudiante_id (int): El ID único del estudiante.
        calificaciones (list): Lista de calificaciones del estudiante.

    """

    def __init__(self, nombre, edad, genero, estudiante_id):
        """
        Constructor de la clase Estudiante.

        Args:
            nombre (str): El nombre del estudiante.
            edad (int): La edad del estudiante.
            genero (str): El género del estudiante.
            estudiante_id (int): El ID único del estudiante.
        """
        super().__init__(nombre, edad, genero)
        self.estudiante_id = estudiante_id
        self.calificaciones = []

    def agregar_calificacion(self, calificacion):
        """
        Agrega una calificación a la lista de calificaciones.

        Args:
            calificacion (float): La calificación a agregar.
        """
        self.calificaciones.append(calificacion)
```


### Docstrings para funciones y métodos

Un docstring para una función o método se recomienda que esté presente y colocado después de la declaración de la función o método.

``` py
def mi_funcion(arg1, arg2):
    """
    Descripción de la función.

    Args:
        arg1: Descripción del primer argumento.
        arg2: Descripción del segundo argumento.

    Returns:
        Descripción del valor de retorno.
    """
    # Cuerpo de la función
```

## Documentación de clases

La documentación del constructor de una clase en Python generalmente se realiza a través de un docstring ubicado en la definición del método `__init__`.

Aquí hay un ejemplo de cómo podría verse la documentación para el constructor de una clase:

``` py
class MiClase:
    """
    Descripción de MiClase.

    Esta clase proporciona ...

    Args:
        parametro1 (tipo): Descripción del primer parámetro.
        parametro2 (tipo): Descripción del segundo parámetro.

    Attributes:
        atributo1 (tipo): Descripción del primer atributo.
        atributo2 (tipo): Descripción del segundo atributo.
    """

    def __init__(self, parametro1, parametro2):
        """
        Constructor de la clase MiClase.

        Args:
            parametro1 (tipo): Descripción del primer parámetro.
            parametro2 (tipo): Descripción del segundo parámetro.
        """
        self.atributo1 = None  # Inicializar atributo1
        self.atributo2 = None  # Inicializar atributo2

        # Resto del código del constructor
```

- Descripción general de la clase: En el docstring de la clase (`MiClase` en este caso), se proporciona una descripción general de la clase, sus propósitos y su funcionalidad.

- Descripción de parámetros y atributos: En la sección de `Args` se detallan los parámetros esperados por el constructor, y en la sección de Atributos se describen los atributos de la clase. Proporciona información sobre el tipo de cada parámetro o atributo y una breve descripción de su propósito.

- Docstring del método `__init__`: Dentro del método `__init__`, también se incluye un docstring que describe los parámetros específicos del constructor y cualquier inicialización adicional que pueda ser relevante.

Este enfoque permite que las herramientas de generación de documentación, como Sphinx, interpreten y presenten la información de manera clara y estructurada. Además, facilita a otros desarrolladores entender cómo utilizar la clase y qué parámetros se esperan.

## Argumentos y atributos

En el contexto de Python, los términos "argumentos" y "atributos" se refieren a conceptos distintos según dónde se utilicen.

### Argumentos

- Los "argumentos" son los valores que se pasan a una función o método cuando se invoca.

- En el contexto de funciones, se dividen en "argumentos posicionales" y "argumentos de palabra clave".

- Los "argumentos posicionales" se corresponden con la posición en la que se pasan a la función. Por ejemplo:

``` py
def ejemplo_funcion(arg1, arg2):
    # ...

ejemplo_funcion(valor1, valor2)
```

Los "argumentos de palabra clave" se especifican con un nombre y un valor. Por ejemplo:

``` py
def ejemplo_funcion(arg1, arg2):
    # ...

ejemplo_funcion(arg2=valor2, arg1=valor1)
```

### Atributos

- Los "atributos" son variables asociadas a un objeto en Python.

- Se accede a los atributos usando la sintaxis de punto (objeto.atributo).

- En el contexto de una clase, los atributos son variables que pertenecen a una instancia de la clase.

``` py
class MiClase:
    def __init__(self, atributo1, atributo2):
        self.atributo1 = atributo1
        self.atributo2 = atributo2
```

## Documentación en inglés, siempre

En este artículo he usado el español a modo puramente ilustrativo. Para facilitar el uso de la documentación para cualquier usuario del planeta, debemos escribir la documentación en inglés.

Tal como indica el PEP 8:

> Python coders from non-English speaking countries: please write your comments in English, unless you are 120% sure that the code will never be read by people who don’t speak your language.

Que, en español, sería:

> Para los programadores de Python de países de habla no inglesa: por favor escribe tus comentarios en inglés, a menos que estés 120% seguro que tu código jamás será leído por gente que no hable tu idioma.
