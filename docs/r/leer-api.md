# Leer datos de una API con R

Para leer datos de una API con R, podemos seguir estos pasos generales, aunque puede que la API tenga una estructura o datos específicos, por lo que tendremos que adaptar estos pasos a las necesidades de cada proyecto.

Necesitemos instalar y cargar los paquetes `httr` para realizar peticiones HTTP y `jsonlite` para procesar datos en formato JSON, que es común en las APIs.

``` r
install.packages("httr")
library(httr)
install.packages("jsonlite")
library(jsonlite)
```

Utilizaremos la función `GET()` de `httr` para realizar una petición GET a la API:

``` r
respuesta <- GET("https://api.ejemplo.com/datos")
```

Necesitaremos convertir la respuesta a un formato que podamos manejar en R, como un dataframe. Si la respuesta es en JSON, podemos usar `fromJSON()` de `jsonlite`.

``` r
datos <- fromJSON(rawToChar(respuesta$content))
```

Ahora que tenemos los datos en R, podemos manipularlos como cualquier otro dataframe, utilizando funciones de `dplyr` o cualquier otra herramienta de manipulación de datos que prefiramos.

Un ejemplo completo de leer datos de una API y convertirlos en un dataframe:

``` r
# Cargar los paquetes necesarios
library(httr)
library(jsonlite)

# Realizar la petición GET
respuesta <- GET("https://api.ejemplo.com/datos")

# Verificar que la petición fue exitosa
if (status_code(respuesta) == 200) {
  # Convertir la respuesta en JSON a un dataframe
  datos <- fromJSON(rawToChar(respuesta$content))
  # Hacer algo con los datos
  print(head(datos))
} else {
  print(paste("Error en la petición:", status_code(respuesta)))
}
``` 
