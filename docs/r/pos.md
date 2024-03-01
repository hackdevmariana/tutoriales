# Etiquetado de partes del discurso

El etiquetado de partes del discurso (POS / Part Of Speech) es un proceso que consiste en asignar a cada palabra de un texto una categoría gramatical, como sustantivo, verbo, adjetivo, etc., según su definición y contexto. El etiquetado POS es útil para el análisis de texto, ya que permite identificar la estructura y el significado de las oraciones.

R es un lenguaje de programación que ofrece varias herramientas para realizar el etiquetado POS de forma automatizada. Algunos de los paquetes más populares son **quanteda**, **tidytext** y **spacyr**. Estos paquetes permiten cargar un corpus de texto, segmentarlo en palabras, detectar las oraciones y asignar las etiquetas POS a cada palabra. Además, ofrecen funciones para visualizar y analizar los resultados del etiquetado POS, como frecuencias, n-gramas, co-ocurrencias, etc.

## Paquete quanteda

Web: [https://quanteda.io/](https://quanteda.io/)

Quanteda es un paquete de R que permite realizar análisis cuantitativos de datos textuales, con funciones de procesamiento de lenguaje natural y gestión de datos textuales. Ofrece una API consistente y potente para investigadores, estudiantes y otros analistas que necesitan aplicar NLP a textos, desde documentos hasta el análisis final.

Quanteda funciona mediante la creación de objetos especiales para representar y manipular los textos, como corpus, tokens y matrices de documentos y características. Estos objetos permiten realizar operaciones como limpieza, segmentación, filtrado, ponderación, selección, agrupación, resumen y visualización de los textos.

Se puede usar el paquete quanteda para realizar análisis de sentimientos en R. Este paquete permite crear un corpus de texto, aplicar diferentes métodos de preprocesamiento, extraer características como n-gramas o tokens, y asignar valores de polaridad a cada palabra o documento. Para ello, podemos usar las funciones `tokens()` y `dfm()` para crear una matriz de documentos y términos, y luego usar la función `textstat_sentiment()` para calcular los puntajes de sentimiento usando diferentes diccionarios, como Bing, AFINN o NRC. También podemos usar la función `textplot_xray()` para visualizar las palabras clave asociadas a cada sentimiento.

## Ejemplos de uso

Dada esta cadena:

``` r
library(quanteda)

quijote <- "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años. Era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímiles se deja entender que se llamaba «Quijana». Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad."
```

Podemos crear un corpus y tokenizar:

``` r
quijote_corpus <- corpus(text = quijote)

quijote_tokens <- tokens(quijote_corpus, what = "word")
```

Contar la frecuencia de cada palabra en el texto:

``` r
quijote_wordfreq <- dfm(quijote_tokens, tolower = TRUE) %>% colSums()
```

Esto crea un objeto dfm (Document-Feature Matrix) que podemos utilizar para analizar la frecuencia de palabras en el texto.

Generar n-gramas (secuencias de n palabras consecutivas):

``` r
quijote_ngrams <- tokens_ngrams(quijote_tokens, n = 2)
```

Esto dará n-gramas de dos palabras. Podemos ajustar el valor de n según las necesidades de cada proyecto.

Podemos buscar concordancias para una palabra específica en el texto:

``` r
quijote_concordances <- concordance(quijote_tokens, pattern = "Mancha")
```

Esto devolverá fragmentos del texto que contienen la palabra "Mancha".
