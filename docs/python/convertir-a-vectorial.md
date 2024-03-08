# Convertir una imagen a formato vectorial

La conversión de una imagen en formato raster (como JPEG o PNG) a un formato vectorial (como SVG) no es una tarea directa, ya que las imágenes raster y vectoriales representan información de manera muy diferente.

Las imágenes raster están compuestas por píxeles, mientras que las imágenes vectoriales se componen de formas geométricas y se almacenan como descripciones de esas formas.

Sin embargo, hay algunas bibliotecas y herramientas que pueden ayudar a realizar una aproximación a la vectorización.

Una de las bibliotecas populares para esta tarea en Python es `Potrace`, que es una interfaz para la biblioteca de trazado de potenciales (Potrace). Potrace convierte imágenes bitmap en gráficos vectoriales.

Podemos usar la biblioteca `potrace` junto con otras bibliotecas de manejo de imágenes como `PIL` (Pillow) para lograr esto.

Primero, debemos instalar `potrace`:

``` sh
pip install potrace
```

Y convertir las imágenes raster en vectorial:

``` py
from PIL import Image
import potrace

def convert_to_svg(input_path, output_path):
    img = Image.open(input_path).convert('L')
    bitmap = potrace.Bitmap(img)
    path = bitmap.trace()
    path.to_svg(output_path)

if __name__ == "__main__":
    convert_to_svg("input_image.png", "output_image.svg")
```

## Módulo autotrace

O el módulo `autotrace`, que es más sencillo:

``` sh
pip install autotrace
```

Ejemplo de uso:

``` py
import autotrace

def vectorize_image(input_path, output_path):
    autotrace.svg(input_path, output_path)

if __name__ == "__main__":
    vectorize_image('input_image.png', 'output_image.svg')
```


## Módulo CairoSVG

``` sh
pip install cairosvg
```

Ejemplo de uso:

``` py
import cairosvg

def vectorize_image(input_path, output_path):
    cairosvg.svg2svg(input_path, output_path)

if __name__ == "__main__":
    vectorize_image('input_image.png', 'output_image.svg')
```

## Módulo SVGwrite y PILLOW

``` sh
pip install pillow svgwrite
```

Ejemplo de uso:

``` py
from PIL import Image
import svgwrite

def vectorize_image(input_path, output_path):
    img = Image.open(input_path)
    dwg = svgwrite.Drawing(output_path)
    dwg.add(dwg.image(img.size, img.tobytes()))
    dwg.save()

if __name__ == "__main__":
    vectorize_image('input_image.png', 'output_image.svg')
```

O:

``` py
from PIL import Image
import svgwrite

def vectorize_image(input_path, output_path):
    image = Image.open(input_path)
    svg = svgwrite.Drawing(output_path, profile='tiny')
    width, height = image.size
    svg.add(svg.rect(insert=(0, 0), size=(width, height), fill='white'))
    for y in range(height):
        for x in range(width):
            pixel = image.getpixel((x, y))
            svg.add(svg.rect(insert=(x, y), size=(1, 1), fill=f'rgb{pixel}'))
    svg.save()
if __name__ == "__main__":
    vectorize_image('input_image.png', 'output_image.svg')
```
