# Pasar el menú de FilamentPHP a la parte superior del panel

Para colocar el menú de un panel de FilamentPHP a la parte superior del navegador, deberemos abrir el fichero del panel, por ejemplo, `app/Providers/Filament/DashboardPanelProvider.php`, y añadir en la sección de `panel` la siguiente línea:

``` php
->topNavigation()
```
