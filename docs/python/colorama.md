# Módulo colorama

El módulo colorama es un módulo multiplataforma de Python que permite cambiar el color del texto y fondo de la consola, así como borrar mensajes previos. Este módulo es útil para crear aplicaciones de línea de comandos más atractivas y fáciles de usar.

El módulo colorama funciona usando las secuencias de escape ANSI o las funciones de la API de Windows para cambiar los colores de la consola, dependiendo del sistema operativo. El usuario no tiene que preocuparse por los detalles técnicos, solo tiene que importar el módulo e inicializarlo con la función `init()`.

Para cambiar el color del texto, se puede usar una de las constantes `colorama.Fore.*`, que representan los colores básicos: negro, rojo, verde, amarillo, azul, magenta, cian y blanco.

Para cambiar el color del fondo, se puede usar una de las constantes `colorama.Back.*`, que son las mismas que las anteriores.

También se puede cambiar el estilo del texto, usando una de las constantes `colorama.Style.*`, que representan la intensidad baja, normal o alta.

El siguiente código imprime "Hola mundo" en verde sobre fondo rojo con intensidad alta:

``` py
import colorama
colorama.init()
print(colorama.Back.RED + colorama.Fore.GREEN + colorama.Style.BRIGHT + "Hola mundo")
```

Para volver al color y estilo por defecto, se puede usar la constante `colorama.Style.RESET_ALL`, que restablece todos los efectos. También se puede usar la función `colorama.deinit()`, que deshace los cambios realizados por el módulo.

## Uso con click

Se puede usar colorama con `click.echo()`, ya que el módulo click soporta las secuencias de escape ANSI que colorama utiliza para cambiar los colores de la consola. Esto significa que podemos usar las constantes de colorama para darle color y estilo al texto que imprime `click.echo()`.


El siguiente código imprime "Hola mundo" en verde sobre fondo rojo con intensidad alta, adaptando el ejemplo anterior a click:

``` py
import click
import colorama

colorama.init()
click.echo(colorama.Back.RED + colorama.Fore.GREEN + colorama.Style.BRIGHT + "Hola mundo")
```

## Con f-string

También podemos usar colorama con `f-strings`, quedando un código más limpio:

``` py
import click
import colorama

output_path = "my_file.txt"

click.echo(f"The file { output_path } has been created{ colorama.Fore.GREEN } successfully{ colorama.Style.RESET_ALL }.")
```
