# Switch entre paneles de FilamentPHP

Usaremos el plugin bezhansalleh-panel-switch.

Información: [https://filamentphp.com/plugins/bezhansalleh-panel-switch](https://filamentphp.com/plugins/bezhansalleh-panel-switch)


Instalación:

``` sh
composer require bezhansalleh/filament-panel-switch
```

## Cambio de panel con un modal

Con esto, nos aparecerá un botón en la parte superior derecha para cambiar de paneles. Por defecto, todos los usuarios podrán ver este botón.

Para que sólo `super_admin` pueda usar este plugin, iremos a `app/Provider/AppServiceProvider.php` y, en la parte de `boot`, añadiremos:

``` php
public function boot(): void
{
    //
    PanelSwitch::configureUsing(function (PanelSwitch $panelSwitch) {
        $panelSwitch
            ->visible(fn (): bool => auth()->user()?->hasAnyRole([
                'super_admin',
            ]));
    });
}
```

## Cambio de panel con un botón

Por defecto, muestra un botón que dispara un modal de pantalla completa para cambiar entre paneles. Podemos sustituirlo por un botón más discreto que muestre los paneles con `->simple()`, quedando algo así:

``` php
public function boot(): void
{
    //
    PanelSwitch::configureUsing(function (PanelSwitch $panelSwitch) {
        $panelSwitch
            ->simple()
            ->visible(fn (): bool => auth()->user()?->hasAnyRole([
                'super_admin',
            ]));
    });
}
```

Quedando el fichero `app/Provider/AppServiceProvider.php` algo así:


``` php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use BezhanSalleh\PanelSwitch\PanelSwitch;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        PanelSwitch::configureUsing(function (PanelSwitch $panelSwitch) {
            $panelSwitch
                ->simple()
                ->visible(fn (): bool => auth()->user()?->hasAnyRole([
                    'super_admin',
                ]));
        });
    }
}
```

## Cambio de panel con un botón en el menú del usuario

Independientemente de otras opciones, podemos incluir un botón dentro del menú del usuario para cambiar de panel. Lo haremos añadiendo en `app/Providers/Filament/DashboardPanelProvider.php` para pasar al panel de editor:

``` php
use Filament\Navigation\MenuItem;

->userMenuItems([
    MenuItem::make()
        ->label('Editor')
        ->url('/editor')
        ->icon('iconpark-editor')
        ->visible(fn (): bool => auth()->user()?->hasAnyRole([
                    'super_admin',
                ]));
])
```

Y en todos los paneles que queramos hacer los cambios. 

Con `->label()` indicaremos el texto a mostrar.
Con `->url()` indicaremos la ruta a enlazar.
Con `->icon()` indicaremos el icono a mostrar.
Con `->visible()` indicaremos para qué usuarios se mostrará el item.
