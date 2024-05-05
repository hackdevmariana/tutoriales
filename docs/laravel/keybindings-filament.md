# Cómo definir atajos de teclado en FilamentPHP

Podemos definir atajos de teclado en FilamentPHP con:

``` php
use Filament\Actions\Action;

Action::make('save')
    ->action(fn () => $this->save())
    ->keyBindings(['command+s', 'ctrl+s'])
```

Siendo `command` + `s` en Mac o `ctrl` + `s` en Windows y GNU/Linux la combinación para disparar la acción.

Hereda el estilo de los atajos de [https://craig.is/killing/mice](https://craig.is/killing/mice).

## Alternativas

Una tecla:

``` php
    ->keyBindings(['esc'])
```

Combinación de dos teclas:

``` php
    ->keyBindings(['command+s', 'ctrl+s'])
```

Combinación de tres teclas:

``` php
    ->keyBindings(['command+shift+k', 'ctrl+shift+k'])
```
