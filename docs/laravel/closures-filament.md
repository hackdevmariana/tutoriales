# Cierres (closures) en FilamentPHP

En FilamentPHP, un `Closure` es una clase anónima que se utiliza para encapsular un bloque de código que puede ser pasado como un argumento a otros métodos. Es una parte fundamental de la programación en PHP, especialmente cuando se trabaja con frameworks como Laravel y Filament, que hacen un uso intensivo de las funciones anónimas para proporcionar funcionalidad personalizada.

En el contexto de Filament, los Closures se utilizan comúnmente para definir comportamientos personalizados en formularios y campos.

Por ejemplo, podemos usar un Closure para definir reglas de validación dinámicas, modificar el estado de otros campos basándose en la entrada del usuario, o incluso alterar la forma en que se muestran los datos en una tabla.

Algunos ejemplos de cómo se pueden utilizar los Closures en Filament:

- **Validación dinámica**: Podemos pasar un Closure a métodos como `rules()` para definir reglas de validación que cambian en función del estado actual del formulario.

``` php
TextInput::make('email')
  ->rules(function (Closure $get) {
    $rules = ['required', 'email'];
    if ($get('is_customer')) {
      $rules[] = 'unique:users,email';
    }
    return $rules;
  }),
```

Otro ejemplo:

``` php
use Filament\Forms\Component\Field;
use Illuminate\Validation\Rule;

Field::make('email')
    ->rules(function () {
        return [
            'required',
            'email',
            Rule::unique('users', 'email')->ignore(auth()->user()),
        ];
    });
```

En este ejemplo, estamos utilizando un Closure dentro del método `rules()` para definir reglas de validación dinámicas para el campo de correo electrónico. La regla `unique` está configurada para ignorar el correo electrónico del usuario actualmente autenticado.

- **Reactividad de campos**: Los Closures permiten definir lógica personalizada que se ejecuta cuando el estado de un campo cambia. Esto es útil para campos reactivos que deben actualizar su estado o el de otros campos cuando el usuario interactúa con ellos.

``` php
Select::make('country_id')
  ->options(Country::all()->pluck('name', 'id'))
  ->reactive()
  ->afterStateUpdated(function (Closure $set, $state) {
    $set('city_id', null);
  }),

Select::make('city_id')
  ->options(function (Closure $get) {
    return City::where('country_id', $get('country_id'))->pluck('name', 'id');
  }),
```

Otro ejemplo:

``` php
use Filament\Forms\Component\TextInput;

TextInput::make('username')
    ->afterStateUpdated(function ($state) {
        if ($state->get('username') === 'admin') {
            $state->set('isAdmin', true);
        }
    });
```

En este ejemplo, estamos utilizando un Closure dentro del método `afterStateUpdated()` para modificar dinámicamente el estado de un campo `isAdmin` basándonos en el valor del campo `username`.

- **Ocultar elementos condicionalmente**: Podemos utilizar un Closure para determinar si un recurso o una página debe ser registrado y mostrado en la navegación de Filament.

``` php
Pages\ListUsers::route('/users')
  ->visible(fn (User $user) => $user->isAdmin()),
```

- **Manejo de eventos**: Las Closures pueden ser utilizadas para manejar eventos específicos dentro de los componentes de Filament. Por ejemplo, el método `afterStateUpdated` acepta una Closure como argumento, permitiendo ejecutar acciones después de que se actualice el estado de un componente.

``` php
TextInput::make('password')
  ->password()
  ->afterStateUpdated(function (Closure $set, $state) {
    // Lógica para manejar el cambio de estado
  }),
```

Otro ejemplo:

``` php
use Filament\Forms\Component\Select;
use Illuminate\Support\Facades\Mail;

Select::make('department')
    ->options(['sales' => 'Sales', 'support' => 'Support'])
    ->afterStateUpdated(function ($state) {
        if ($state->get('department') === 'sales') {
            Mail::to('sales@example.com')->send(new SalesNotification());
        }
    });
```

En este ejemplo, estamos utilizando un Closure dentro del método `afterStateUpdated()` para enviar una notificación por correo electrónico cuando se seleccione el departamento de ventas en un campo de selección.

- **Transformación de datos**: Las Closures pueden ser utilizadas para transformar datos antes de ser procesados o mostrados en la interfaz de usuario. Por ejemplo, en una tabla de datos, se puede utilizar una Closure para formatear los valores de ciertas columnas antes de que se muestren al usuario.

``` php
TextColumn::make('created_at')
  ->date()
  ->format('d/m/Y H:i:s')
  ->sortable(),
```

- **Validación personalizada**: Al trabajar con formularios, las Closures pueden ser utilizadas para realizar validaciones personalizadas en los datos ingresados por el usuario. Esto permite definir reglas de validación específicas que no están cubiertas por las validaciones estándar proporcionadas por Filament.

``` php
TextInput::make('username')
  ->rules(['required', 'alpha_dash', function ($attribute, $value, $fail) {
    if ($value === 'admin') {
      $fail('El nombre de usuario "admin" no está permitido.');
    }
  }]),
```

- **Manipulación de estado**: Las Closures pueden ser utilizadas para modificar el estado de los componentes en respuesta a acciones del usuario. Por ejemplo, se puede utilizar una Closure para actualizar dinámicamente el estado de un campo en un formulario en función de la selección del usuario en otro campo.

``` php
Select::make('product_type')
  ->options([
    'physical' => 'Físico',
    'digital' => 'Digital',
  ])
  ->reactive()
  ->afterStateUpdated(function (Closure $set, $state) {
    if ($state === 'digital') {
      $set('shipping_required', false);
    }
  }),

Toggle::make('shipping_required'),
```
