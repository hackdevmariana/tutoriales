# Etiqueta button

La etiqueta button de HTML se usa para crear botones que se pueden hacer clic en una página web.

Estos botones pueden tener diferentes funciones, como enviar un formulario, abrir un enlace, ejecutar un script, etc.

La etiqueta button tiene la siguiente sintaxis:

``` html
<button type="tipo" name="nombre" value="valor" atributos>Texto o contenido</button>
```

El atributo type indica el tipo de botón, que puede ser `button`, `submit` o `reset`.

El atributo name asigna un nombre al botón, que se usa para identificarlo en el formulario.

El atributo value asigna un valor inicial al botón, que se envía con el formulario. Los demás atributos son opcionales y pueden variar según el tipo de botón.

Dentro de la etiqueta button se puede poner texto o cualquier otro elemento HTML, como imágenes, iconos, estilos, etc.

Esto no es posible con un botón creado con la etiqueta `input`.

Aquí hay un ejemplo de un botón de HTML que abre una nueva ventana con un enlace:

``` html
<button type="button" onclick="window.open('https://www.google.com')">Visitar Google</button>
```
