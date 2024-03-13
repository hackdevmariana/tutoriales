# Autocompletar con YouCompleteMe

## Instalación

Añadir al `~/.vimrc`:

```
plug#begin()
Plug 'Valloric/YouCompleteMe'
plug#end()
```

Para compilar el plugin, hace falta tener Go y Java:

``` sh
sudo apt-get update && sudo apt-get -y install golang-go
sudo apt install default-jre
sudo apt install default-jdk
```

Una vez instalados, hay que ir al directorio donde está el plugin y complilarlo:

``` sh
cd ~/.vim/plugged/YouCompleteMe
python3 install.py --all
```

### Añadir UltiSnip y SuperTab

Añadir al `~/.vimrc`:

```
plug#begin()
Plug 'Valloric/YouCompleteMe'
Plug 'SirVer/ultisnips'
Plug 'ervandew/supertab'
plug#end()
```

Ejecutar:

```
:PlugInstall
```


`YouCompleteMe` y `UltiSnips` son dos complementos que se pueden integrar para tener completado de texto y de snippets con el tabulador. Sin embargo, a veces pueden causar un error de sincronización que haga que UltiSnips falle.

Para evitar este error, puedes usar el complemento `SuperTab`, que permite usar el tabulador para diferentes tipos de completado. Puedes instalar `SuperTab` con el comando `Plug 'ervandew/supertab'` en el `.vimrc`, y luego ejecutar `:PlugInstall`. Después, puedes añadir estas líneas en el `.vimrc` para asignar el tabulador a `YouCompleteMe` y `UltiSnips`:

```
let g:ycm_key_list_select_completion = ['<Tab>', '<Down>']
let g:ycm_key_list_previous_completion = ['<S-Tab>', '<Up>']
let g:SuperTabDefaultCompletionType = '<C-n>'
let g:UltiSnipsExpandTrigger = "<tab>"
let g:UltiSnipsJumpForwardTrigger = "<tab>"
let g:UltiSnipsJumpBackwardTrigger = "<s-tab>"
```

## Creación de snippets

Para crear tus propios snippets con UltiSnips, debes crear un archivo con la extensión .snippets en el directorio ~/.vim/UltiSnips. El nombre del archivo debe coincidir con el tipo de archivo para el que quieres crear los snippets. Por ejemplo, si quieres crear snippets para Python, el archivo debe llamarse python.snippets. Dentro del archivo, puedes usar la sintaxis de UltiSnips para definir tus snippets.

``` snippets
snippet def "Function with docstring" b
def ${1:function_name}(${2:parameters}):
    """${3:Docstring for $1}

    ${4:More details}
    """
    ${0:# function body}
endsnippet
```

Este snippet se activa cuando escribes "def" y pulsas el tabulador. Te insertará el código de una función con un docstring, y te permitirá editar los campos que tiene. Puedes usar el tabulador para saltar entre los campos y `Shift` + `Tab` para volver al anterior. También puedes usar `Ctrl` + `J` y `Ctrl` + `K` para lo mismo.

Por ejemplo, si quieres crear una función que calcule el área de un círculo, puedes escribir "def" y pulsar tabulador, y luego escribir "area", tabulador, "radius", tabulador, "Calculate the area of a circle", tabulador, "The area is given by pi times radius squared", tabulador, y el código que quieras dentro de la función. El resultado sería algo así:

``` py
def area(radius):
    """Calculate the area of a circle

    The area is given by pi times radius squared
    """
    return math.pi * radius ** 2
```

Si queremos añadir nuevos snippets, sólo tenemos que añadir bloques de código entre `snippet` y `endsnippet`:

``` snippets
snippet def "Function with docstring" b
def ${1:function_name}(${2:parameters}):
        """${3:Docstring for $1}

        ${4:More details}
        """
        ${0:# function body}
endsnippet

snippet class "Class with docstring and constructor" b
class ${1:ClassName}(${2:object}):
        """${3:Docstring for $1}"""

        def __init__(self, ${4:parameters}):
                ${5:# constructor body}

                ${0:# class body}
endsnippet
```

## snippets avanzados

Si queremos escribir el nombre de la variable una sola vez, podemos usar una expresión de Python entre \` para asignar el valor del primer campo a una variable y luego usarla en el resto del snippet:

``` snippets
snippet vue "Vue component" b
`!p snip.rv = t[1]`
<template>
<div>
${1:<!-- template content -->}
</div>
</template>

<script>
export default {
name: '`!p snip.rv`',
data() {
return {
${2:/* data properties */}
};
},
methods: {
${3:/* methods */}
},
${0:/* other options */}
};
</script>
endsnippet
```

De esta forma, cuando escribamos el nombre del componente en el primer campo, se guardará en la variable snip.rv y se usará en el bloque `<script>`.

Si queremos usar un número indeterminado de variables, podemos usar la opción r en el snippet para indicar que el contenido se evalúa como una expresión regular. De esta forma, podemos usar grupos de captura para repetir el mismo patrón varias veces.

Por ejemplo:

``` snippets
snippet props "Vue props" r
props: {
`!p
import re
m = re.search(r'(\w+): (\w+)(, )?', t[1])
if m:
snip.rv = m.group(0)
while m:
snip.rv += "\n  " + m.group(1) + ": {\n    type: " + m.group(2) + ",\n    ${1:/* other options */}\n  }" + m.group(3)
m = re.search(r'(\w+): (\w+)(, )?', t[1], m.end())
`
}
endsnippet
```

De esta forma, cuando escribamos una lista de propiedades separadas por comas en el primer campo, se generarán los objetos correspondientes con el tipo y las opciones que queramos. Por ejemplo, si escribimos name: String, age: Number, se generará lo siguiente:

```
props: {
name: String,
age: Number
name: {
type: String,
/* other options */
},
age: {
type: Number,
/* other options */
}
}
```
