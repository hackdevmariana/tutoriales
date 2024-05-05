# Cómo crear widgets en FilamentPHP

Filament viene con una plantilla de widget de "descripción general de estadísticas" (stats overview), que se puede utilizar para mostrar varias estadísticas diferentes en un solo widget, sin necesidad de escribir una vista personalizada.

Crearemos un widget con el comando:

``` php
php artisan make:filament-widget StatsOverview --stats-overview
```

Si queremos crear cualquier tipo de widget disponible y que artisan nos pregunte qué es lo que queremos crear, usaremos:

``` php
php artisan make:filament-widget
```
