# Cambiar el texto de un resource en FilamentPHP

Para cambiar el texto con el que se enlaza a un resource en FilamentPHP, en el fichero `{nombre}Resource.php`, añadiremos:

``` php
protected static ?string $navigationLabel = 'Texto a mostrar';
```
