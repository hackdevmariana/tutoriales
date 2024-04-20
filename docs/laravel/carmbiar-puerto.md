# Cambiar el puerto del servidor de desarrollo de Laravel

Podemos cambiar el puerto del servidor de desarrollo puntualmente para un determinado lanzamiento del servidor con:

``` sh
php artisan serve --port=8080
```

Para una configuración más estable, podemos añadir a `composer.json`, en la sección `scripts` la siguiente línea:

```
"serve": "php artisan serve --port=8080"
```

De esta manera, podremos lanzar el servidor con composer y abrirá ese puerto:

``` sh
composer serve
```

Y podremos acceder mediante la dirección [http://127.0.0.1:8080/](http://127.0.0.1:8080/).
