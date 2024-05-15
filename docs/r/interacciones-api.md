# Subir datos a una API

Las peticiones POST y PUT son dos métodos de petición HTTP comúnmente utilizados en APIs para enviar datos al servidor. DELETE se usa para borrar datos del servidor.

**Peticiones POST**

- **Uso**: Las peticiones POST se utilizan para enviar datos al servidor para crear un nuevo recurso. Son comúnmente usadas en formularios web, donde los datos del formulario se envían al servidor para ser procesados.

- **Operación**: Cuando enviamos una petición POST, estamos solicitando al servidor que acepte los datos incluidos en el cuerpo de la petición. Estos datos pueden ser detalles de un nuevo usuario, una publicación en un blog, información de un formulario, etc.

- **Idempotencia**: Una petición POST no es idempotente, lo que significa que si enviamos la misma petición POST varias veces, es posible que se creen múltiples recursos o que se realicen múltiples efectos secundarios.

**Peticiones PUT**

- **Uso**: Las peticiones PUT se utilizan para enviar datos al servidor con el propósito de actualizar un recurso existente o crear uno nuevo si no existe.

- **Operación**: Con una petición PUT, proporcionamos una versión modificada de un recurso que reemplaza completamente la versión actual en el servidor. Por ejemplo, si estamos actualizando los detalles de un perfil de usuario, enviaríamos una petición PUT con la información actualizada del usuario.

- **Idempotencia**: A diferencia de POST, PUT es idempotente. Esto significa que podemos enviar la misma petición PUT varias veces y el resultado será siempre el mismo: el recurso se actualizará una vez, y las peticiones adicionales no tendrán ningún efecto adicional.

**Peticiones DELETE**

- **Propósito**: Se utilizan para eliminar un recurso específico identificado por la URI de la petición.

- **Comportamiento**: Al enviar una petición DELETE, le indicamos al servidor que elimine el recurso en la ubicación especificada. Si el recurso existe y se puede eliminar, la API lo elimina y generalmente devuelve un código de estado HTTP 200 (OK) o 204 (No Content) para indicar éxito.

- **Idempotencia**: Al igual que las peticiones PUT, las peticiones DELETE también son idempotentes. Si el recurso ya ha sido eliminado o no existe, enviar peticiones DELETE adicionales no tiene ningún efecto

## Post en R

Para enviar datos en una petición POST con R, podemos utilizar el paquete `httr`.

Si aún no lo hemos hecho, instalaremos y cargaremos el paquete `httr`.

``` r
install.packages("httr")
library(httr)
```

Definiremos la URL a la que deseamos enviar la petición POST y los datos que queremos enviar. Los datos suelen estar en formato de lista o JSON:

``` r
url <- "https://api.ejemplo.com/endpoint"
datos <- list(
  campo1 = "valor1",
  campo2 = "valor2"
)
```

Utilizaremos la función POST() para enviar los datos. Podemos usar `body = datos` para adjuntar los datos que queramos enviar:

``` r
respuesta <- POST(url, body = datos, encode = "json")
```

Comprobaremos el estado de la respuesta para asegurarnos de que la petición fue exitosa:

``` r
print(status_code(respuesta))
```

Si la API devuelve una respuesta en formato JSON, podemos convertirla en un objeto de R con `content()`.

``` r
contenido <- content(respuesta, "parsed")
print(contenido)
```

Este es un ejemplo básico y es posible que necesitemos ajustar los parámetros y las opciones de la petición según la API específica con la que estemos trabajando.

## PUT en R

``` r
library(httr)
url <- "https://api.ejemplo.com/recurso"

datos <- list(
  campo1 = "nuevo valor1",
  campo2 = "nuevo valor2"
)

respuesta <- PUT(url, body = datos, encode = "json")
status_code(respuesta)
contenido <- content(respuesta, "parsed")
print(contenido)
```

Este código envía una petición PUT a la URL especificada con los datos proporcionados en formato JSON.

## DELETE en R

Para eliminar un recurso con una petición DELETE:

``` r
library(httr)

url <- "https://api.ejemplo.com/recurso/123"

respuesta <- DELETE(url)

status_code(respuesta)

contenido <- content(respuesta, "parsed")
print(contenido)
```

Este código envía una petición DELETE a la URL especificada para eliminar el recurso.
