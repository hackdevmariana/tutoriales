# Personalizar el panel de control de FilamentPHP

Para personalizar el panel de control de FilamentPHP, podemos modificar el archivo de configuración ubicado en `app/Providers/Filament/AdminPanelProvider.php`.

Este archivo contiene la configuración para el panel `/admin`.

## Añadir perfil del usuario

Para añadir perfil del usuario, en `app/Providers/Filament/DashboardPanelProvider.php` podemos añadir:

``` php
->profile()
```

Y nos mostrará una nueva opción en el menú del usuario (parte superior izquierda).

## Creación de un nuevo panel

Si deseamos crear un panel completamente nuevo, podemos usar el comando:

``` php
php artisan make:filament-panel nombre_del_panel
```

donde `nombre_del_panel` es el nombre único para el nuevo panel.

## Cambio de ruta

En el archivo de configuración del panel, podemos cambiar la ruta de acceso utilizando el método `path()` para especificar una nueva ruta.

## Ganchos de renderizado (Render Hooks)

Para personalizar aún más, podemos usar los ganchos de renderizado para insertar contenido Blade en puntos específicos de las vistas de Filament.

Por ejemplo, podemos registrar ganchos de renderizado que son específicos para un panel.
Más información en [https://filamentphp.com/docs/3.x/panels/configuration](https://filamentphp.com/docs/3.x/panels/configuration).

## Tema personalizado

Para cambiar el fondo del panel, podemos crear un tema personalizado y editar el CSS.

Por ejemplo, para cambiar el fondo globalmente, podemos usar la clase `.fi-body`.

## Cambiar la tipografía

Por defecto, Filament utiliza la fuente `Inter`, pero podemos cambiarla utilizando el método `font()` en el archivo de configuración.

Más información en [https://filamentphp.com/docs/3.x/panels/themes](https://filamentphp.com/docs/3.x/panels/themes)

## Crear un tema personalizado

Filament permite cambiar el CSS utilizado para renderizar la UI compilando una hoja de estilo personalizada para reemplazar la predeterminada.

Para crear un tema personalizado para un panel, podemos usar el comando:

``` php
php artisan make:filament-theme nombre_del_tema
```

## Modificar el proveedor de la tipografía

Si deseamos usar Google Fonts CDN en lugar de Bunny Fonts CDN, que es el predeterminado y cumple con el GDPR, podemos hacerlo usando el argumento `provider` del método `font()`.

## Hooks de vista

También podemos crear una vista y renderizar un hook añadiendo:

``` php
->renderHook('panels::body.start', fn (): View => view('filament.hooks.background'));
```

a `PanelProvider`.

Después de crear un nuevo archivo de configuración para un panel, debemos registrarlo en `bootstrap/providers.php` (Laravel 11 y superior) o en `config/app.php` (Laravel 10 e inferior).

## Cambiar colores

Para cambiar los colores en FilamentPHP, podemos personalizar la paleta de colores predeterminada utilizando el método `FilamentColor::register()` en el método `boot()` de un proveedor de servicios o en un middleware.

Primero, debemos registrar los colores personalizados que se utilizarán en los elementos de la UI de Filament.

Por ejemplo:

``` php
use Filament\Support\Facades\FilamentColor;
use Filament\Support\Colors\Color;

FilamentColor::register([
'danger' => Color::Red,
'success' => Color::Green,
// otros colores...
]);
```

Si queremos usar colores personalizados que no están incluidos en la paleta de colores de Tailwind CSS, podemos pasar un array de tonos de color en formato RGB:

``` php
FilamentColor::register([
  'danger' => [
    50 => '254, 242, 242',
    // otros tonos...
  ],
]);

```
También podemos generar una paleta de colores personalizada a partir de un código hexadecimal o un valor RGB utilizando los métodos `Color::hex()` o `Color::rgb()`:

``` php
FilamentColor::register([
  'danger' => Color::hex('#ff0000'),
]);
```

Los seis colores predeterminados que se utilizan en Filament son:

-Primary: Color principal que se utiliza en botones, enlaces y otros elementos destacados.

-Success: Color utilizado para indicar éxito o una acción positiva.

-Danger: Color utilizado para alertas o acciones que requieren atención.

-Warning: Color utilizado para advertencias o precauciones.

-Info: Color utilizado para información general o mensajes.

-Gray: Color neutro utilizado para fondos, bordes y otros elementos.

Estos colores se mapean a clases de Tailwind en el archivo de configuración y pueden personalizarse según las necesidades de cada proyecto.

Más información sobre colores: [https://filamentphp.com/docs/3.x/support/colors](https://filamentphp.com/docs/3.x/support/colors)
