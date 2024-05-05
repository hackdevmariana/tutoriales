# Añadir enlaces al menú de FilamentPHP

Para añadir enlaces al menú de un panel de FilamentPHP, deberemos abrir el fichero del panel, por ejemplo, `app/Providers/Filament/DashboardPanelProvider.php`, y añadir en la sección de `panel` algo así:

``` php
->navigationItems([
    NavigationItem::make('Mi enlace')
        ->url('https://mi_pagina.com', shouldOpenInNewTab: true)
        ->icon('mdi-snake')
])
```
