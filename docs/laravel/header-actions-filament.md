# Crear botones y acciones en los encabezamientos de FilamentPHP

Documentación: [https://filamentphp.com/docs/3.x/panels/pages#header-actions](https://filamentphp.com/docs/3.x/panels/pages#header-actions)


Podemos agregar fácilmente acciones al encabezado de cualquier página o recurso sin agregar nada a Blade.

Devolvemos las acciones desde el método `getHeaderActions()` de la clase de página:

``` php
use Filament\Actions\Action;

protected function getHeaderActions(): array
{
    return [
        Action::make('edit')
            ->url(route('posts.edit', ['post' => $this->post])),
        Action::make('delete')
            ->requiresConfirmation()
            ->action(fn () => $this->post->delete()),
    ];
}
```

Podemos cambiar el texto visible del botón con `->label('Texto')` y el color del botón con `->color('success')`. Para añadir un modal de confirmación, usaremos `->requiresConfirmation()`. Para los atajos de teclado, usaremos `->keyBindings('command+t', 'ctrl+t')`.

Las acciones las definiremos con funciones dentro de `->action()`:

``` php
->action(function(){
  dd('Hola, mundo');
})
```
