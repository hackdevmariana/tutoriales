# Crear un CRUD con FilamentPHP

Vamos a ver cómo crear un CRUD con FilamentPHP con una tabla llamada test_news en la que tengamos unas noticias de prueba.

## Crear modelo


## Crear las vistas en el panel de control

``` php
php artisan make:filament-resource TestNews --generate
```

Esto nos genera automáticamente:

- el fichero `app/Filament/Resources/TestNewsResource.php`

- el directorio `app/Filament/Resources/TestNewsResource/Pages`

con los ficheros:

- `app/Filament/Resources/TestNewsResource/Pages/CreateTestNews.php`

- `app/Filament/Resources/TestNewsResource/Pages/EditTestNews.php`

- `app/Filament/Resources/TestNewsResource/Pages/ListTestNews.php`

Y una entrada en el menú de Filament que indica "Test News".
