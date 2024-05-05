# Registrar accesos a una API con Laravel

Con una Laravel, incluso en una API, es posible capturar la IP del cliente y otros datos del navegador, como el idioma o el tipo de dispositivo, incluso si no tienes acceso al frontend.

## Captura de la IP del cliente

Podemos capturar la IP del cliente desde el servidor en el que se procesa la solicitud de la API. La IP del cliente generalmente se encuentra en el encabezado `X-Forwarded-For` o `Remote_Addr`.

En Laravel, podemos acceder a la IP del cliente a través de la solicitud HTTP actual:

``` php
$clientIP = $request->ip();
```

## Captura del idioma del navegador

Podemos obtener el idioma preferido del navegador del cliente desde el encabezado `Accept-Language` de la solicitud HTTP.

En Laravel, podemos acceder al encabezado `Accept-Language` de la solicitud HTTP actual:

``` php
$acceptLanguage = $request->header('Accept-Language');
```

## Captura del dispositivo del cliente

El tipo de dispositivo del cliente no se puede obtener directamente desde el servidor, ya que esta información se encuentra en el agente de usuario (`user agent`) del navegador. Sin embargo, podemos usar librerías de análisis del agente de usuario para extraer esta información.

En Laravel, podemos usar la librería `jenssegers/agent` para analizar el agente de usuario:

``` php
use Jenssegers\Agent\Agent;

$agent = new Agent();

// Verificar si es un dispositivo móvil
$isMobile = $agent->isMobile();
```
