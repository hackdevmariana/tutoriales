# Mostrar notificaciones en FilamentPHP

Cuando realizamos una acción en FilamentPHP, podemos informar al usuario de la realización de dicha acción.

Para mostrar un mensaje simple:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->send();
```

Podemos añadir un icono y definir su color:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->icon('heroicon-o-document-text')
    ->iconColor('success')
    ->send();
```

FilamentPHP cuenta con cuatro métodos incorporados: `success()`, `warning()`, `danger()` e `info()` que vienen ya predefinidos con icono y color:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->send();
```

También podemos definir el color de fondo:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->color('success')
    ->send();
```

Podemos definir la duración en milisegundos:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->duration(5000)
    ->send();
```

O en segundos:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->seconds(5)
    ->send();
```

Si queremos que sea persistente y no desaparezca:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->persistent()
    ->send();
```

Podemos mostrar un título y una descripción:

``` php
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->body('Changes to the post have been saved.')
    ->send();
```

Lanzar acciones desde las notificaciones:

``` php
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->body('Changes to the post have been saved.')
    ->actions([
        Action::make('view')
            ->button(),
        Action::make('undo')
            ->color('gray'),
    ])
    ->send();
```

Si, en lugar de acciones, lo que queremos es enviar a una URL, podemos usar:

``` php
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->body('Changes to the post have been saved.')
    ->actions([
        Action::make('view')
            ->button()
            ->url(route('posts.show', $post), shouldOpenInNewTab: true)
        Action::make('undo')
            ->color('gray'),
    ])
    ->send();
```

Envío de eventos Livewire desde acciones de notificación

A veces, nos interesa ejecutar código adicional cuando se hace clic en una acción de notificación. Esto se puede lograr configurando un evento `Livewire` que debe enviarse al hacer clic en la acción.

Opcionalmente, podemos pasar una serie de datos, que estarán disponibles como parámetros en el detector de eventos del componente Livewire:

``` php
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->body('Changes to the post have been saved.')
    ->actions([
        Action::make('view')
            ->button()
            ->url(route('posts.show', $post), shouldOpenInNewTab: true),
        Action::make('undo')
            ->color('gray')
            ->dispatch('undoEditingPost', [$post->id]),
    ])
    ->send();
```

También podemos hacer `dispatchSelf` y `dispatchTo`:

``` php
Action::make('undo')
    ->color('gray')
    ->dispatchSelf('undoEditingPost', [$post->id])

Action::make('undo')
    ->color('gray')
    ->dispatchTo('another_component', 'undoEditingPost', [$post->id])
```

Después de abrir una URL o enviar un evento desde su acción, es posible que nos interese cerrar la notificación de inmediato:

``` php
use Filament\Notifications\Actions\Action;
use Filament\Notifications\Notification;

Notification::make()
    ->title('Saved successfully')
    ->success()
    ->body('Changes to the post have been saved.')
    ->actions([
        Action::make('view')
            ->button()
            ->url(route('posts.show', $post), shouldOpenInNewTab: true),
        Action::make('undo')
            ->color('gray')
            ->dispatch('undoEditingPost', [$post->id])
            ->close(),
    ])
    ->send();
```

Podemos probar el envío de correos creando un comando :

``` php
php artisan make:command TestEmail
```
