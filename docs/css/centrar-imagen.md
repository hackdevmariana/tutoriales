# Centrar imagen

Para centrar una imagen en CSS, hay varias formas posibles, dependiendo de si la imagen es un elemento en línea o en bloque, y de si queremos centrarla horizontal o verticalmente.

Para centrar una imagen en línea horizontalmente, podemos usar la propiedad text-align: center en el elemento contenedor de la imagen. Por ejemplo:

``` html
<div class="contenedor">
<img src="imagen.jpg" alt="imagen centrada">
</div>
```

``` css
.contenedor {
text-align: center;
}
```

Para centrar una imagen en bloque horizontalmente, podemos usar la propiedad margin: auto en la imagen. Por ejemplo:

``` html
<img src="imagen.jpg" alt="imagen centrada" class="imagen">
```

``` css
.imagen {
display: block;
margin: auto;
}
```

Para centrar una imagen en bloque verticalmente, podemos usar la propiedad vertical-align: middle en la imagen, y también en el elemento contenedor. Por ejemplo:

``` html
<div class="contenedor">
<img src="imagen.jpg" alt="imagen centrada" class="imagen">
</div>
```

``` css
.contenedor {
display: block;
height: 300px;
line-height: 300px;
}

.imagen {
display: block;
vertical-align: middle;
}
```

Para centrar una imagen en ambos ejes, podemos usar las propiedades display: flex, justify-content: center y align-items: center en el elemento contenedor de la imagen. Por ejemplo:


``` html
<div class="contenedor">
<img src="imagen.jpg" alt="imagen centrada">
</div>
```

``` css
.contenedor {
display: flex;
justify-content: center;
align-items: center;
height: 300px;
}
```
