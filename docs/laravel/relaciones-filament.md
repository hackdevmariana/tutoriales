# Añadir relaciones sobre tablas ya creadas

Para añadir relaciones sobre tablas ya creadas, debemos crear una migración con la estructura:

``` php
php artisan make:migration add_{campos_a_añadir}_fields_to_{tabla_en_la_que_añadir}_table
```

Por ejemplo:

``` php
php artisan make:migration add_address_fields_to_users_table
```

Vamos en `database/migrations/` a la nueva migración creada y añadimos:

``` php
Schema::table('users', function (Blueprint $table) {
    $table -> foreignID('country_id')
      ->constrained()
      ->nullable()
      ->onUpdate('cascade')
      ->onDelete('cascade');
    $table -> foreignID('state_id')
      ->contstrained()
      ->nullable()
      ->onUpdate('cascade')
      ->onDelete('cascade');
    $table -> foreignID('city_id')
      ->contstrained()
      ->nullable()
      ->onUpdate('cascade')
      ->onDelete('cascade');
    $table->string('address')->nullable();
    $table->string('postal_code')->nullable();
});
```

Con esto, crearíamos relaciones con las tablas country, state y city.

Le indicamos que pueden ser campos vacíos con `->nullable()` y que al borrar un usuario (`->onDelete('cascade')`), o se actualice el usuario (`->onUpdate('cascade')`), se elimine o actualice la relación.

También podemos crear, aparte de las relaciones, nuevos campos, como `address` o `postal_code`.

El fichero de migración quedaría algo así:

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('country_id')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('state_id')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('city_id')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('address')->nullable();
            $table->string('postal_code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
```

Para dar de alta estos campos en el formulario, iremos al fichero `app/Filament/Resources/{Modelo}Resource.php`, por ejemplo, a `app/Filament/Resources/UserResource.php` y añadirlos en el apartado:

``` php
public static function table(Table $table): Table
{
    return $table
        ->columns([

        ])
}
```

Podemos agrupar los campos en secciones. Para ello, deberemo importar:

``` php
use Filament\Forms\Components\Section;
```

Y agrupar, dentro de schema, las secciones con:

``` php
Section::make('Título de la sección')
    ->description('Descripción de la sección')
    ->schema([
        // ...
    ])
```

Por defecto, nos coloca cada campo en una fila, estando todos en la misma columna. Podemos definir el número de columnas con `->columns(X)`:

``` php
Section::make('Título de la sección')
    ->description('Descripción de la sección')
    ->columns(3)
    ->schema([
        // ...
    ])
```

También podemos agrupar en el menú lateral los items del menú. Crearemos una variable para agrupar los items en cada uno de los `{Modelo}Resource.php`:

``` php
protected static ?string $navigationGroup = 'Datos geográficos'
```

En este bloque, tenemos también las variables para cambiar el nombre del recurso:

``` php
protected static ?string $navigationLabel = 'Usuarios';
```

El icono:

``` php
protected static ?string $navigationIcon = 'heroicon-o-user';
```

Y el orden en el que se va a mostrar ese elemento en el menú:

``` php
protected static ?int $navigationSort = 1;
```



Podemos buscar los iconos en la página de iconos de Blade: [https://blade-ui-kit.com/](https://blade-ui-kit.com/).

En caso de que no tengamos algún paquete de iconos de Blade, podemos instalarlo con el comando composer que aparece en la página de los iconos:

``` php
composer require postare/blade-mdi
```


En caso de que no lo instalemos, podría darnos un error como este:

```
BladeUI \ Icons \ Exceptions \ SvgNotFound
PHP 8.1.2-1ubuntu2.15
10.48.9
Svg by name "mdi-city-variant-outline" from set "default" not found.
```


Para importar las claves foráneas de la tabla principal usaremos `Forms\Components\Select::make('{tabla}_id')`:

``` php
Forms\Components\Select::make('country_id')
->relationship(name : 'country', titleAttribute: 'name')
->searchable()
->preload()
->live()
->required()
```

- `->relationship(name : 'country', titleAttribute: 'name')` genera la relación.

- `->searchable()` permite la búsqueda.

- `->preload()` carga la búsqueda previamente para que sea más rápida la experiencia del usuario.

- `->live()` actualiza en tiempo real.

- `->required()` campo obligatorio.

Y para otras tablas, importaremos:

``` php
use Illuminate\Support\Collection;
use Filament\Forms\Get;
use App\Models\User;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
```

Y vincularemos las búsquedas:

``` php
Forms\Components\Select::make('state_id')
  ->options(fn (Get $get): Collection => State::query()
  ->where('country_id', $get('country_id'))
  ->pluck('name', 'id')
  )
  ->searchable()
  ->preload()
  ->required(),
Forms\Components\Select::make('city_id')
  ->options(fn (Get $get): Collection => City::query()
  ->where('state_id', $get('state_id'))
  ->pluck('name', 'id')
  )
  ->searchable()
  ->preload()
  ->required()
```

Para que al borrar el país, se borren también los otros dos campos, escribiremos en el bloque del país:

``` php
->afterStateUpdated(fn (Set $set) => $set('state_id', null))
->afterStateUpdated(fn (Set $set) => $set('city_id', null))
```

O, más legible:

``` php
->afterStateUpdated(function (Set $set) {
  $set('state_id', null);
  $set('city_id', null);
})
```

Para que no pida la contraseña en la versión de editar, indicaremos que `password` esté oculta con `->hiddenOn('edit')`.

Para que haya columnas que no se muestren por defecto, pero que se puedan mostar si se activan en el menú de las vistas, usaremos `->toggleable(isToggledHiddenByDefault: true)`. Si lo que queremos es que se muestren por defecto, pero se puedan ocultar, usaremos `->toggleable(isToggledHiddenByDefault: false)`.

Para que se puedan hacer búsquedas en los campos, hay que indicar en esos campos donde realizar las búsquedas `->searchable()`.

Si queremos que se pueda ordenar por un determinado campo, le indicaremos `->sortable()`.

Quedando algo así el fichero `app/Filament/Resources/UserResource.php`:

```php
namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Components\Section;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Collection;
use Filament\Forms\Get;
use Filament\Forms\Set;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';
    protected static ?string $navigationLabel = 'Usuarios';
    protected static ?int $navigationSort = 1;


    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Section::make('Información personal')
                    ->description('Datos del usuario')
                    ->columns(2)
                    ->schema([
                        // ...
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        Forms\Components\DateTimePicker::make('email_verified_at'),
                        Forms\Components\TextInput::make('password')
                            ->password()
                            ->required()
                            ->hiddenOn('edit')
                            ->maxLength(255),
                    ]),
                Section::make('Dirección')
                    ->description('Datos del usuario')
                    ->columns(3)
                    ->schema([
                        // ...
                        Forms\Components\Select::make('country_id')
                            ->relationship(name: 'country', titleAttribute: 'name')
                            ->searchable()
                            ->preload()
                            ->live()
                            ->afterStateUpdated(function (Set $set) {
                                $set('state_id', null);
                                $set('city_id', null);
                              })
                            ->required(),
                        Forms\Components\Select::make('state_id')
                            ->options(
                                fn(Get $get): Collection => State::query()
                                    ->where('country_id', $get('country_id'))
                                    ->pluck('name', 'id')
                            )
                            ->afterStateUpdated(fn (Set $set) => $set('city_id', null))
                            ->searchable()
                            ->afterStateUpdated(function (Set $set) {
                                $set('city_id', null);
                              })
                            ->preload()
                            ->live()
                            ->required(),
                        Forms\Components\Select::make('city_id')
                            ->options(
                                fn(Get $get): Collection => City::query()
                                    ->where('state_id', $get('state_id'))
                                    ->pluck('name', 'id')
                            )
                            ->searchable()
                            ->preload()
                            ->live()
                            ->required(),
                            Forms\Components\TextInput::make('address')
                            ->required(),
                            Forms\Components\TextInput::make('postal_code')
                            ->required()
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email_verified_at')
                    ->dateTime()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
```

Y debemos cargar la relación en el modelo (`app/Models/User.php`):

``` php
public function country()
{
  return $this->belongsTo(Country::class);
}
```

Quedando así:
