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

Mantener la estructura de directorios predeterminada de Laravel para las APIs.

Dentro de `app/Http/Controllers`, crear una carpeta `api` para almacenar los controladores específicos de la API.

Utilizar las migraciones en `database/migrations` para definir la estructura de la base de datos.

## Autenticación

Si la API requiere autenticación, considerar usar `Laravel Sanctum `o `Passport` para manejar tokens de acceso.

## Rutas y controladores

Definir las rutas de la API en `routes/api.php`.

Crear controladores que extiendan de `Controller` y usarlos para manejar las peticiones de la API.



## Paquetes adicionales

Instalar paquetes útiles como `laravel/telescope` para depuración y `spatie/laravel-query-builder` para facilitar la creación de consultas API.

## Pruebas y documentación

Escribir pruebas con `PHPUnit` para asegurar que la API funciona correctamente.

Documentar la API con herramientas como Swagger o Postman.

## Despliegue

Preparar la aplicación para producción con:

``` sh
php artisan optimize
```

Desplegar la aplicación en un servidor o plataforma de hosting que soporte Laravel.

## Seguridad y mantenimiento

Asegurarse de que la API esté protegida contra ataques comunes.

Mantener actualizados Laravel y todos los paquetes.
