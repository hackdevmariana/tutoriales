# CLI con click

## Instalación

``` sh
pip install click
```

## Comando sin subcomandos

Es posible crear un CLI con `Click` que se ejecute directamente sin mostrar la ayuda al escribir el nombre del script.

Podemos hacer esto utilizando un comando principal que se ejecute automáticamente cuando no se proporciona un subcomando, al estilo de cualquier comando clásico de Unix, como `ls`, `cd` o `mkdir`.


``` py
import click

@click.group()
def cli():
    pass

@cli.command()
@click.argument('parametro')
def comando(parametro):
    click.echo(f'Ejecutando comando con parámetro: {parametro}')

if __name__ == '__main__':
    cli()
```

Para ejecutarlo, escribiríamos en la consola:

``` sh
python3 script.py valor
```

## Aumentar la facilidad de uso

Si queremos no tener que escribir python3 en sistemas Unix, podemos añadir al principio del script el shebang `#!/usr/bin/env python3`:

``` py {1}
#!/usr/bin/env python3
import click

@click.group()
def cli():
    pass

@cli.command()
@click.argument('parametro')
def comando(parametro):
    click.echo(f'Ejecutando comando con parámetro: {parametro}')

if __name__ == '__main__':
    cli()
```

También podemos usar la extensión .py para facilitar el desarrollo y que el editor reconozca automáticamente el lenguaje que estamos usando y para usarlo nos queremos ahorrar la extensión, podemos renombrar el fichero:

``` sh
mv script.py script
```

Podemos saber los directorios donde se almacenan los ficheros ejecutables tanto del sistema como del usuario con:

``` sh
echo $PATH
```

Podemos copiarlo en uno de esos directorios o crear un directorio y añadirlo al PATH escribiendo en el fichero `~/.profile`:

``` sh
if [ -d "$HOME/.local/bin/mi-proyecto" ] ; then
    PATH="$HOME/.local/bin/mi-proyecto:$PATH"
fi
```

Y activarlo con:

``` sh
source ~/.profile
```

De esta manera, podemos ejecutarlo simplemente con:

``` sh
script valor
```
