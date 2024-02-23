# Cómo mostrar una imagen circular en CSS

En este artículo vamos a ver cómo transformar cualquier imagen en una imagen circular usando sólo CSS. Esto es muy útil para crear avatares, logos, iconos y otros elementos gráficos. Veremos tres casos diferentes: imágenes cuadradas, rectangulares horizontales y rectangulares verticales.

## Imágenes en HTML

Para mostrar una imagen en HTML, lo haremos con:

``` html
<img src="imagen.png" />
```

Que nos mostrará, tal cual, la imagen. Para redondear los bordes, podemos usar las siguientes directivas:

- border-top-left-radius

- border-top-right-radius

- border-bottom-right-radius

- border-bottom-left-radius

O su método abrevidado:

- border-radius

Y hay tres posibilidades en la imagen, que sea:

- cuadrada

- rectangular horizontal

- rectangular vertical

## Caso 1. Imagen cuadrada

Para mostrar circular una imagen cuadrada, usaremos la clase `round-square`:

``` html
<img class="round-square" src="image.png" />
```

Y, en el fichero css podemos indicar cada uno de los parámetros:

``` css
.round-square {
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
```

O, de forma abreviada:

``` css
.round-square {
  border-radius: 50%;
}
```

## Caso 2. Imagen rectangular

No se pueden mostrar como circular las imágenes rectangulares, por lo que tenemos que tomar una porción de la imagen de la misma altura que la anchura. Es decir, tomar como muestra, un cuadrado. Y redondear el cuadrado para convertirlo en círculo.

Si bien esto no es siempre así, si lo que queremos mostrar redondeado es una imagen de perfil, la mayoría de las imágenes de perfil rectangulares horizontales tienen como foco de atención el centro, mientras que las imágenes verticales tienen como foco de atención la parte superior de la imagen, por lo que, para estandarizar, tomaremos estas referencias.

Para convertir en circulares las imágenes rectangulares, debemos crear primero un recorte redondo en un contenedor y después, insertar la imagen ajustando la posición.

### Caso 2.1. Imagen rectangular horizontal

Veamos cómo generar el contenedor en HTML con la imagen rectangular horizontal dentro:

``` html
<div class="round-horizontal-rectangle">
  <img src="horizontal-rectangle-image.png" />
</div>
```

Y el CSS:

``` css
.round-horizontal-rectangle {
  display: inline-block;
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 50%;
}

.round-horizontal-rectangle img {
  width: auto;
  height: 100%;
  margin-left: -50px;
}
```

### Caso 2.2. Imagen rectangular vertical

Veamos cómo generar el contenedor en HTML con la imagen rectangular vertical dentro:

``` html
<div class="round-vertical-rectangle">
  <img src="vertical-rectangle-image.png" />
</div>
```

Y el CSS:

``` css
.round-vertical-rectangle {
  position: relative;
  width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 50%;
}

.round-vertical-rectangle img {
  width: 100%;
  height: auto;
}
```

## Ajuste dinámico al tamaño de la imagen

Se podría ajustar el ancho y el alto del contenedor usando la propiedad max-width y max-height en CSS. Por ejemplo:

``` css
.round-horizontal-rectangle {
display: inline-block;
position: relative;
max-width: 200px;
max-height: 200px;
overflow: hidden;
border-radius: 50%;
}

.round-horizontal-rectangle img {
width: auto;
height: 100%;
margin-left: -50px;
}
```

Esto hará que el contenedor se adapte al tamaño de la imagen, pero sin superar los 200px de ancho y alto. Si la imagen es más pequeña, el contenedor se reducirá proporcionalmente.

Otra opción sería con propiedad `width: 100%;` en la imagen hace que ocupe el 100% del ancho del contenedor, y `height: auto;`, que mantiene la proporción original de la imagen.

``` css
.round-horizontal-rectangle {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.round-horizontal-rectangle img {
  display: block;
  width: 100%;
  height: auto;
}
```

Otra opción, más desarrollada, es ajustar tanto el ancho como el alto en función del tamaño de la imagen, usando JavaScript para calcular las dimensiones y aplicarlas al contenedor:

``` html
<div class="round-horizontal-rectangle" id="imageContainer">
  <img src="horizontal-rectangle-image.png" id="image" />
</div>

<script>
  const imageContainer = document.getElementById('imageContainer');
  const image = document.getElementById('image');

  image.onload = function () {
    const width = image.width;
    const height = image.height;

    imageContainer.style.width = width + 'px';
    imageContainer.style.height = height + 'px';
  };
</script>
```

Crear imágenes circulares con CSS es muy fácil y rápido. Sólo necesitamos usar la propiedad `border-radius` y ajustar el tamaño y la posición de la imagen según su forma. Sólo si queremos una mayor precisión necesitaremos usar JavaScript.
