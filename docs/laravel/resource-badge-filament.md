# Badges en Laravel

Para mostrar el número de elementos que tiene un modelo en el menú de un resource en FilamentPHP, podemos ir al fichero `{nombre}Resource.php` y añadir:


``` php
public static function getNavigationBadge(): ?string
{
    return static::getModel()::count();
}
```

Esto mostraría el número de elementos totales que tiene un modelo.

Para mostrar los elementos referentes al usuario, usaremos:

``` php
public static function getNavigationBadge(): ?string
{
    return parent::getEloquentQuery()->where('user_id', Auth::user()->id->count());
}
```

Para mostrar la cantidad de elementos de un usuario que cumplen una condición, usaremos algo como:

``` php
public static function getNavigationBadge(): ?string
{
    return parent::getEloquentQuery()->where('user_id', Auth::user()->id)->where('status', 'pending')->count();
}
```

Para cambiar el color en función la cantidad de elementos de un usuario que cumplen una condición, usaremos algo como:

``` php
public static function getNavigationBadge(): ?string
{
    return parent::getEloquentQuery()->where('user_id', Auth::user()->id)->where('status', 'pending')->count() > 1 ? 'warning' : 'primary';
}
```

Si, además de mostrar el badge, queremos que al pasar el ratón por encima, muestre una descripción de lo que está mostrando, usaremos:

``` php
protected static ?string $navigationBadgeTooltip = 'Descripción del badge';
```
