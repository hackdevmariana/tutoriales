# Cambiar "Log out" por "Salir" en el menú de FilamentPHP


Para cambiar "Log out" por "Salir" en el menú de FilamentPHP deberemos ir al fichero del panel, por ejemplo, `app/Providers/Filament/DashboardPanelProvider.php` y en la sección `$panel` añadir:

``` php
use Filament\Navigation\MenuItem;

->userMenuItems([
    'logout' => MenuItem::make()->label('Salir'),
    // ...
])
```
