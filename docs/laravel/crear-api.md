# Crear una API pública con Laravel y utilizar un dashboard de FilamentPHP para cargar los datos

Para crear una API pública con Laravel y utilizar un dashboard de `FilamentPHP` para cargar los datos, podemos los siguientes pasos generales, adaptándolos a las necesidades concretas de cada proyecto:

## Instalación y configuración inicial

Instalar Laravel a través de Composer con el comando:

``` sh
composer create-project laravel/laravel nombre-proyecto
```

Comprobamos que tenemos intl activado:

``` sh
php -m | grep intl
```

Si no devuelve nada, lo activamos:

``` sh
sudo apt-get install php-intl
```

Una vez instalado, al ejecutar:

``` sh
php -m | grep intl
```

Debería devolver algo así como:

``` sh
intl
```


### Instalación de FilamentPHP

Instalar FilamentPHP con Composer usando `composer require filament/filament` seguido de la versión a instalar en el directorio del proyecto Laravel:

``` sh
cd nombre-proyecto

composer require filament/filament:"^3.2" -W

php artisan filament:install --panels
```

Para comprobar la última versión disponible, podemos ir a la [documentación de FilamentPHP](https://filamentphp.com/docs/3.x/panels/installation).

### Configuración

Configurar el entorno de desarrollo en `.env` con las credenciales de la base de datos y otros ajustes necesarios.

Para cambiar el nombre de la base de datos, iremos a la línea:

```
DB_DATABASE=libertapi
```

Y realizamos las migraciones:

``` sh
php artisan migrate
```

Creamos el usuario del panel de control:

``` sh
php artisan make:filament-user
```

### Ejecutar el servidor de desarrollo

Para comprobar que todo ha funcionado bien, podemos lanzar el servidor de desarrollo con:

``` sh
php artisan serve
```

Que, por defecto, nos lanzará un servidor de desarrollo en:

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Y el acceso al panel de control a través de:

[http://127.0.0.1:8000/admin/login](http://127.0.0.1:8000/admin/login)

## Estructura de directorios

Para mantener la estructura de directorios predeterminada de Laravel para las APIs, debemos crear un controlador para manejar la lógica de las rutas de API.

En la terminal, en el directorio raíz del proyecto Laravel, ejecutamos el siguiente comando Artisan para crear un controlador llamado TestNewsController:

``` sh
php artisan make:controller TestNewsController
```

Este comando generará un nuevo archivo en el directorio `app/Http/Controllers` llamado `TestNewsController.php`.

Abrimos el archivo `TestNewsController.php` recién creado y dentro de él, definimos el método `index()` que será responsable de manejar la lógica para obtener los artículos de `test_news` y devolverlos como JSON:

``` PHP
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestNews;

class TestNewsController extends Controller
{
    public function index()
    {
        $testNews = TestNews::all();
        return response()->json($testNews);
    }
}
```

Ahora, podemos acceder a la API con [http://127.0.0.1:8000/api/v1/test-news/](http://127.0.0.1:8000/api/v1/test-news/).

## Mejoras

### Hacer visibles las imágenes

Si subimos imágenes, comprobamos su nombre accediendo a la API y las buscamos con find:

``` sh
find . -iname 01HWDWYZE4H77118EY8X2HMZ2N.jpg
```

Que devolverá algo como:

``` sh
./storage/app/public/01HWDWYZE4H77118EY8X2HMZ2N.jpg
```

Si funciona bien la subida de imágenes, deberemos crear un enlace simbólico con:

``` sh
php artisan storage:link
```

Que devolverá algo como:

``` sh
   INFO  The [public/storage] link has been connected to [storage/app/public].
```

Por lo que podremos acceder a esa imagen con la ruta `http://127.0.0.1:8000/storage/01HWDWYZE4H77118EY8X2HMZ2N.jpg`.

### Crear la URL en la API

Para construir la URL en la API, editaremos el fichero `Http/Controllers/TestNewsController.php` añadiendo:

``` php
$modifiedData = $testNews->map(function ($item) {
            $item->image_url = asset('storage/' . $item->image);
            return $item;
        });
```

Por lo que el fichero quedaría algo así:

``` php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestNews;

class TestNewsController extends Controller
{
    public function index()
    {
        $testNews = TestNews::all();
        $modifiedData = $testNews->map(function ($item) {
            $item->image_url = asset('storage/' . $item->image); // Construir la URL completa de la imagen
            return $item;
        });
        return response()->json($testNews);
    }
}
```

Este controlador, primero obtiene todos los datos de `TestNews`. Luego, utiliza el método `map` para iterar sobre cada elemento y agregar una nueva propiedad `image_url` que contiene la URL completa de la imagen construida utilizando la función `asset` de Laravel.

### Autenticación

Si la API requiere autenticación, considerar usar `Laravel Sanctum `o `Passport` para manejar tokens de acceso.

### Paquetes adicionales

Instalar paquetes útiles como `laravel/telescope` para depuración y `spatie/laravel-query-builder` para facilitar la creación de consultas API.

### Pruebas y documentación

Escribir pruebas con `PHPUnit` para asegurar que la API funciona correctamente.

Documentar la API con herramientas como `Swagger` o `Postman`.

## Despliegue

Preparar la aplicación para producción con:

``` sh
php artisan optimize
```

Desplegar la aplicación en un servidor o plataforma de hosting que soporte Laravel.
