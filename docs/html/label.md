# Etiqueta label

La etiqueta `<label>` en HTML se utiliza para asociar un texto descriptivo a un elemento de formulario, como un campo de entrada (`<input>`), un botón (`<button>`), un área de texto (`<textarea>`), o un elemento de selección (`<select>`).

La asociación se realiza mediante el atributo `for` de la etiqueta `<label>`, que debe coincidir con el valor del atributo `id` del elemento de formulario que se quiere asociar.

Cuando un usuario hace clic en el texto del `<label>`, el navegador automáticamente enfocará el elemento de formulario asociado.

Ejemplo de uso de la etiqueta `<label>` con `for`:

``` html
<label for="username">Nombre de usuario:</label>
<input type="text" id="username" name="username">
```

En este ejemplo, el texto "Nombre de usuario:" está asociado con el campo de entrada de texto. Cuando el usuario hace clic en el texto "Nombre de usuario:", el campo de entrada de texto obtiene el foco.

Esto permite que el "screen reader" lea el texto del label cuando el input esté focus o seleccionado

También se puede utilizar la etiqueta `<label>` de la siguiente manera, donde el elemento de formulario está anidado dentro de la etiqueta `<label>`:

``` html
<label>
  Nombre de usuario:
  <input type="text" name="username">
</label>
```

En este caso, el campo de entrada de texto está anidado dentro de la etiqueta <label>, por lo que no es necesario usar el atributo for. Esto también tiene el mismo efecto de asociar el texto "Nombre de usuario:" con el campo de entrada de texto.
