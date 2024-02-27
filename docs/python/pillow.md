# Uso de Pillow

Instalación:

``` sh
pip install Pillow
```

Pillow es un fork amigable de Python Imaging Library (PIL), que es una biblioteca de procesamiento de imágenes en Python. Pillow mantiene la compatibilidad con PIL y agrega varias mejoras y correcciones de errores. Aquí hay algunas características clave de Pillow:

- Manipulación de imágenes: Pillow proporciona una amplia variedad de funciones para abrir, manipular y guardar diferentes formatos de imágenes. Puede realizar operaciones básicas como recortar, redimensionar, rotar y aplicar filtros a las imágenes.

- Gran cantidad de formatos de imagen soportados: Pillow admite una amplia gama de formatos de imagen, incluyendo JPEG, PNG, GIF, BMP, TIFF, y más. Puede abrir y guardar imágenes en diferentes formatos.

- Procesamiento de píxeles: Permite el acceso a los datos de píxeles de una imagen para realizar manipulaciones a un nivel más detallado.

- Operaciones avanzadas: Además de las operaciones básicas, Pillow admite operaciones más avanzadas como mezcla de imágenes, superposición de texto, y composición de imágenes.

- Compatibilidad con Python 3: Pillow es compatible con Python 3 y ofrece una interfaz fácil de usar para trabajar con imágenes.

## Ejemplos de uso de Pillow

Mostrar información de una imagen:

``` py
from PIL import Image

img = Image.open("ejemplo.jpg")

print("Formato:", img.format)
print("Tamaño:", img.size)
print("Modo:", img.mode)
```

Mostrar una imagen:

``` py
from PIL import Image

img = Image.open("ejemplo.jpg")

img.show()
```

Cambiar el formato de una imagen:

``` py
from PIL import Image

img = Image.open("ejemplo.jpg")

img.save("ejemplo.png")
```

Crear lienzo:

``` py
from PIL import Image, ImageDraw

canvas = Image.new('RGB', (500, 500), color='white')

canvas.save('lienzo.png')
```

Escalar una imagen al 50% del tamaño original:

``` py
from PIL import Image

imagen = Image.open('imagen.jpg')

imagen_redimensionada = imagen.resize((imagen.width // 2, imagen.height // 2))

imagen_redimensionada.save('imagen_redimensionada.jpg')
```

Escribir texto en una imagen:

``` py
from PIL import Image, ImageDraw, ImageFont

imagen = Image.open('imagen.jpg')

draw = ImageDraw.Draw(imagen)

font = ImageFont.load_default()

draw.text((10, 10), "Hola, Mundo!", font=font, fill='red')

imagen.save('imagen_con_texto.jpg')
```
