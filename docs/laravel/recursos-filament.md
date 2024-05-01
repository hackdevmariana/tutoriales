# Uso de recursos (resources) en FilamentPHP

Un resource en FilamentPHP es una herramienta que permite trabajar fácilmente con un CRUD en el panel de control. Es una clase estática que describe cómo los administradores deben poder interactuar con los datos de la aplicación y están asociados con los modelos Eloquent de la aplicación.

Para crear un resource para el modelo `App\Models\Customer`, usaremos el comando:

``` php
php artisan make:filament-resource Customer
```

Esto creará varios archivos en el directorio `app/Filament/Resources` para trabajar con esa tabla.

- **CustomerResource.php**: La clase principal del resource.

- **Pages**: Un directorio que contiene clases para personalizar las páginas del panel de administración que interactúan con el resource:

  - **CreateCustomer.php**

  - **EditCustomer.php**

  - **ListCustomers.php**

Las clases de resource registran formularios, tablas, configuraciones de autorización y páginas asociadas con ese modelo.

Por ejemplo, podemos definir un formulario para crear y actualizar registros del resource con un método `form()` dentro de la clase del resource.

Los `resources` son fundamentales para trabajar con Filament ya que proporcionan una estructura organizada para gestionar los datos y la interacción del usuario con esos datos en el panel de administración. Permiten una abstracción clara y mantenible del modelo de datos y la lógica de la interfaz de usuario.

## --generate

Otra forma de generar el recurso sería:

``` php
php artisan make:filament-resource Customer --generate
```

Este comando crea automáticamente un conjunto de archivos de recurso para el modelo Customer. Este comando es una forma rápida de generar las clases necesarias para construir interfaces CRUD (Crear, Leer, Actualizar, Eliminar) para los modelos Eloquent en el panel de administración de Filament.

Cuando ejecutamos este comando con la opción `--generate`, Filament intentará generar automáticamente los formularios y tablas basándose en las columnas de la base de datos del modelo. Esto incluye:

- Formularios para crear y editar registros.

- Tablas para listar los registros.

Antes de ejecutar el comando `php artisan make:filament-resource Customer --generate`, es recomendable tener la tabla correspondiente al modelo `Customer` ya creada en la base de datos. Esto se debe a que la opción `--generate` intentará leer la estructura de la tabla para generar automáticamente los formularios y tablas basados en las columnas de la base de datos.

Por lo tanto, deberíamos seguir estos pasos:

1. Crear el modelo Eloquent y su respectiva migración con el comando:

``` php
php artisan make:model Customer --migration
```

2. Definir las columnasde la tabla en el archivo de migración que se generó.

3. Ejecutar las migraciones para crear la tabla en la base de datos con el comando:

``` php
php artisan migrate
```

4. Ejecutar el comando para generar las vistas del CRUD:

``` php
php artisan make:filament-resource Customer --generate
```

El comando creará varios archivos en el directorio `app/Filament/Resources/CustomerResource`, incluyendo:

- **CustomerResource.php**: La clase principal del recurso.

- **Pages**: Un directorio que contiene clases para las páginas de crear, editar y listar clientes.

Es importante mencionar que necesitamos tener instalado el paquete `doctrine/dbal` para que la generación automática funcione correctamente, ya que se utiliza para escanear las columnas de la base de datos.

Si no tenemos instalado `doctrine/dbal`, podemos hacerlo con:

``` php
composer require doctrine/dbal
```

Si la tabla contiene columnas de tipo ENUM, `doctrine/dbal` no podrá escanear tu tabla y el comando fallará. En ese caso, Filament no podrá generar el esquema para el recurso si contiene una columna ENUM.


## Editar los formularios

En el fichero `app/Filament/Resources/CustomerResource.php` podemos definir la vista del CRUD en el panel de control.

Tiene dos bloques principales, el que devuelve el formulario, encabezado por `return $form` y el que devuelve la tabla, encabezado por `return $table`.

### form()

En Filament, el método `form()` de un `resource` se utiliza para definir el esquema del formulario que se usará para crear y actualizar registros. Dentro del `return $form`, podemos utilizar diversos componentes para construir el formulario, como:

- **Campos de texto**: `TextInput::make('name')` para campos de texto simples. El valor que incluyamos aquí será el nombre de la tabla, no el nombre que aparecerá en el campo, esto se define con `label`.

- **Selección**: `Select::make('opción')->options([...])` para listas desplegables.

- **Relaciones**: `BelongsToSelect::make('relación_id')->relationship('relación', 'columna')` para seleccionar registros relacionados.

- **Multiselección**: `MultiSelect::make('opciones')->options([...])` para seleccionar múltiples valores.

- **Interruptores**: `Toggle::make('interruptor')` para interruptores de encendido/apagado.

- **Fechas**: `DatePicker::make('date')` para seleccionar fechas.

- **Áreas de texto**: `Textarea::make('content')` para áreas de texto más grandes.

- **Archivos**: `FileUpload::make('filename')` para subir archivos.

### FieldModifiers

El conjunto de modificadores que se utilizan en FilamentPHP para personalizar los campos de formulario y tablas se llama "FieldModifiers". Estos modificadores permiten configurar diversos aspectos de los campos y columnas, como opciones de selección, capacidad de búsqueda, formato de fecha y hora, y capacidad de ordenación.

Para usarlos, se utiliza `->`:

``` php
use Filament\Tables\Columns\TextColumn;

TextColumn::make('title')
    ->searchable()
```

En FilamentPHP, algunos de los modificadores disponibles son:

- **options([...])**: Este modificador se utiliza para definir las opciones disponibles en un campo de selección o lista desplegable:

``` php
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

public function table(Table $table): Table
{
    return $table
        ->columns([
            // ...
        ])
        ->filters([
            Filter::make('is_featured')
                ->query(fn (Builder $query) => $query->where('is_featured', true)),
            SelectFilter::make('status')
                ->options([
                    'draft' => 'Draft',
                    'reviewing' => 'Reviewing',
                    'published' => 'Published',
                ]),
        ]);
}
```

En la primera parte de la opción (en el ejemplo, 'draft') usaremos el valor definido en la migración. La parte detrás del => será lo que mostrará en el panel de control, el texto que verá el usuario.

- **searchable()**: Este modificador habilita la capacidad de búsqueda en una tabla, lo que permite a los usuarios buscar registros basados en los valores de una o varias columnas:

``` php
TextColumn::make('name')->searchable()
```

- **dateTime()**: Este modificador se utiliza para configurar el formato de visualización de campos de fecha y hora en un formulario o tabla.

``` php
DateTimePicker::make('published_at')->dateTime()
```

- **sortable()**: Este modificador habilita la capacidad de ordenación en una tabla, lo que permite a los usuarios ordenar los registros basados en los valores de una o varias columnas.

``` php
TextColumn::make('name')->sortable()
```

- **nullable()**: Este modificador permite dejar en blanco ese campo.

``` php
TextInput::make('nickname')->nullable()
```

- **required()**: Este modificador obliga a rellenar el campo.

``` php
TextInput::make('name')->required()
```

- **columns()**: Filament incluye muchos tipos de columnas prediseñadas. Podemos ver una lista completa en [https://filamentphp.com/docs/3.x/tables/columns/](https://filamentphp.com/docs/3.x/tables/columns/). Filament permite crear tipos de columnas personalizadas para mostrar los datos de la forma que necesite.

Las columnas se almacenan en una matriz, como objetos dentro del método `$table->columns()`:

``` php
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

public function table(Table $table): Table
{
    return $table
        ->columns([
            TextColumn::make('title'),
            TextColumn::make('slug'),
            IconColumn::make('is_featured')
                ->boolean(),
        ]);
}
```

- **boolean()**: Este modificador indica que el campo acepta los valores `true` o `false`.

``` php
IconColumn::make('is_featured')->boolean()
```

- **numeric()**: Este modificador indica que el campo acepta solo valores numéricos.

``` php
NumberInput::make('age')->numeric()
```

- **toggleable()**: Este modificador se utiliza para campos que pueden ser alternados entre dos estados, como activado/desactivado, sí/no, verdadero/falso:

``` php
Toggle::make('active')->toggleable()
```

- **relationship**: Este modificador se utiliza para establecer relaciones entre modelos, como relaciones de uno a uno, uno a muchos o muchos a muchos.

``` php
BelongsToSelect::make('category_id')->relationship('categories', 'name')
```

`BelongsToSelect::make('category_id')` crea un campo de selección en la interfaz de usuario que está vinculado a una relación de base de datos. El método `relationship` se utiliza para definir esta conexión entre el campo de selección y la relación del modelo.

En el ejemplo:

``` php
BelongsToSelect::make('category_id')
->relationship('category', 'name');
```

  - **category_id** es el campo en la base de datos del modelo actual que guarda la clave foránea.

  - **relationship** es el método que define la relación.

  - **'category'** es el nombre del método en el modelo actual que define la relación de uno a uno o uno a muchos con el modelo `Category`.

  - **'name'** es el atributo del modelo relacionado `Category` que se desea mostrar en el campo de selección.

Por lo tanto, `BelongsToSelect` se usa para crear un campo desplegable en la interfaz de usuario que lista todas las categorías por su nombre. Cuando un usuario selecciona una categoría, el id correspondiente de esa categoría se guarda en el campo `category_id` del modelo actual.

En Filament, además del campo `BelongsToSelect`, hay varios otros campos de selección que podemos utilizar para manejar diferentes tipos de relaciones y selecciones, como:

  - **HasManySelect**: Permite seleccionar múltiples registros relacionados para una relación `hasMany`.

  - **BelongsToManySelect**: Utilizado para una relación `belongsToMany`, permite seleccionar varios registros relacionados.

  - **MorphToManySelect**: Para relaciones polimórficas `morphToMany`, permite seleccionar múltiples registros relacionados de diferentes tipos.

  - **MorphedByManySelect**: Similar al `MorphToManySelect`, pero para el lado inverso de la relación polimórfica.

  - **Select**: Un campo de selección simple que no está necesariamente vinculado a una relación Eloquent. Puedes proporcionar manualmente las opciones que se mostrarán.

  - **MultiSelect**: Permite seleccionar múltiples valores de una lista de opciones proporcionadas.

- **afterStateUpdated**: Método que se utiliza para ejecutar acciones después de que el estado de un componente haya sido actualizado. Esto significa que podemos definir funciones que se activarán después de que se haya completado una operación de actualización en un componente, como un formulario o una tabla.

El método `afterStateUpdated` permite definir lógica personalizada que se ejecutará después de que el estado de un componente haya sido actualizado, lo que da flexibilidad para realizar acciones adicionales según sea necesario en una aplicación FilamentPHP. Es especialmente útil cuando queremos realizar cambios en otros campos basados en la interacción del usuario con un campo específico.

```php
->afterStateUpdated(function (Set $set) {
    $set('state_id', null);
    $set('city_id', null);
})
```

En este caso, le estamos pasando una función anónima que toma un argumento `$set`. Dentro de esta función,  `$set` se está utilizando para modificar el estado del componente.

En particular, estable los valores de `state_id` y `city_id` en `null`, lo que puede ser útil en situaciones donde necesitemos restablecer o limpiar ciertos campos después de que se hayan completado una operación de actualización. Por ejemplo, después de enviar un formulario y guardar los datos, es posible que deseemos limpiar ciertos campos para preparar el formulario para una nueva entrada de datos.

El método `afterStateUpdated` puede recibir varios argumentos, como un objeto `Closure` que permite modificar el estado de otros campos del formulario. También podemos acceder al estado actual del campo que se está actualizando y, en función de ese estado, realizar cambios en otros campos.

Es importante mencionar que `afterStateUpdated` se ejecuta en el lado del servidor cada vez que se actualiza el campo, por lo que debemos considerar el rendimiento al utilizarlo, especialmente si el formulario tiene muchos campos o si la lógica es compleja.

- **maxLength(int $length)**: Limita la cantidad de caracteres que se pueden ingresar en un campo de texto. Por ejemplo:

``` php
TextInput::make('username')->maxLength(50)
```

- **minLength(int $length)**: Establece una longitud mínima para los valores de un campo de texto. Por ejemplo:

``` php
TextInput::make('password')->minLength(8)
```

- **default(mixed $value)**: Establece un valor predeterminado para el campo cuando se crea un nuevo registro. Por ejemplo:

``` php
TextInput::make('country')->default('España')
```

- **disabled(bool $condition = true)**: Deshabilita el campo para evitar que se edite. Por ejemplo:

``` php
TextInput::make('id')->disabled()
```

- **hidden(bool $condition = true)**: Oculta el campo en el formulario. Por ejemplo:

``` php
TextInput::make('secret')->hidden()
```

- **readonly(bool $condition = true)**: Hace que el campo sea de solo lectura. Por ejemplo:

``` php
TextInput::make('username')->readonly()
```

- **rule(mixed $rule)**: Añade una regla de validación personalizada al campo. Por ejemplo:

``` php
TextInput::make('email')->rule('unique:users,email')
```

- **help(string $message)**: Proporciona un mensaje de ayuda o instrucciones debajo del campo. Por ejemplo:

``` php
TextInput::make('email')->help('Introduce tu dirección de correo electrónico.')
```

- **prefix(string $content)** y **suffix(string $content)**: Añade un prefijo o sufijo al campo de texto. Por ejemplo:

``` php
TextInput::make('phone')->prefix('+34')
```

- **tel**: Indica que el campo acepta números de teléfono.

``` php
TextInput::make('phone')->tel()
```

- **columnSpanFull**: Este modificador se utiliza para que el campo ocupe todo el ancho disponible en una fila de la tabla.

``` php
TextInput::make('full_name')->columnSpanFull()
```

### Personalización avanzada

Además de los componentes mencionados anteriormente, Filament ofrece una serie de opciones de personalización avanzada para adaptar los formularios y tablas a las necesidades específicas de tu aplicación. Esto incluye:

- **Validación de datos**: Podemos definir reglas de validación personalizadas para los campos de formulario utilizando la misma sintaxis que en las solicitudes de validación en Laravel.

- **Personalización de mensajes de error**: Podemos personalizar los mensajes de error que se muestran cuando falla la validación de un formulario.

- **Campos personalizados**: Filament permite crear campos personalizados si necesitamos funcionalidades específicas que no están cubiertas por los componentes integrados.

- **Personalización de vistas**: Podemos personalizar completamente las vistas de tus formularios y tablas utilizando plantillas Blade, lo que te da un control total sobre la apariencia y el comportamiento de tu panel de administración.
