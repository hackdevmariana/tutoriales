# Dataframes

Los data frames son una de las estructuras de datos más utilizadas en R y son esenciales para el análisis de datos. Se utilizan para almacenar datos tabulares donde cada columna puede ser de un tipo diferente.

## Creación de data frames

Podemos crear data frames en R utilizando la función `data.frame()`. Esta función toma vectores como argumentos y los combina en un data frame.

Por ejemplo, para crear un data frame con tres columnas: nombre, edad y ciudad

``` r
df <- data.frame(nombre = c("Juan", "María", "Pedro"),
                 edad = c(25, 30, 28),
                 ciudad = c("Madrid", "Barcelona", "Sevilla"))
```

## Acceso a datos

Podemos acceder a datos individuales dentro de un data frame utilizando corchetes `[ , ]` y especificando el nombre de la columna o el índice de fila y columna.

Por ejemplo, para acceder a la edad de la segunda persona en el data frame:

``` r
edad_segunda_persona <- df[2, "edad"]
```

## Manipulación de datos
Puedes realizar una variedad de operaciones para manipular y transformar datos en data frames, como añadir nuevas columnas, eliminar columnas, filtrar filas, ordenar datos, entre otros.


Aquí hay algunos ejemplos:

``` r
# Añadir una nueva columna al data frame
df$profesion <- c("Ingeniero", "Doctor", "Profesor")

# Eliminar la columna 'ciudad' del data frame
df <- df[, -3]  # La coma indica que se mantiene todas las filas, el '-3' indica que se elimina la tercera columna

# Filtrar el data frame para obtener solo las personas mayores de 25 años
df_filtrado <- df[df$edad > 25, ]
```

Los data frames son extremadamente versátiles y se utilizan ampliamente en el análisis de datos en R. Proporcionan una forma conveniente de almacenar y manipular datos tabulares, lo que los hace ideales para una amplia gama de aplicaciones, desde la exploración de datos hasta el modelado estadístico y la generación de informes.

## Funciones útiles

R proporciona varias funciones útiles para trabajar con data frames, como `head()` para mostrar las primeras filas del data frame, `tail()` para mostrar las últimas filas, `summary()` para obtener un resumen estadístico del data frame, `str()` para mostrar la estructura del data frame, entre otros.
