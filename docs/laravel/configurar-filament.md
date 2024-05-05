# Configurar el panel de control de FilamentPHP

Podemos cambiar el color ámbar por defecto de Filament, el texto que aparece al entrar en el panel de control, la ruta... en el fichero `app/Providers/Filament/DashboardPanelProvider.php`, donde nos encontramos:

``` php
->path('dashboard')
```

que permite cambiar la ruta de acceso al panel de control, o

``` php
->colors([
    'primary' => Color::Amber,
])
```

donde podemos cambiar el color principal por otro color por su nombre:

``` php
->colors([
    'primary' => Color::Blue,
])
```

Para cambiar el nombre de la aplicación, en `.env` pondremos el nombre que queramos mostrar en la parte superior izquierda del panel de control, en la variable:

``` php
APP_NAME=MiAPI
```

En caso de que queramos usar dos o más palabras, deberemos entrecomillarlas:


``` php
APP_NAME='Mi panel de control de mi API'
```

## Crear vistas de usuarios

``` php
php artisan make:filament-resource User --generate
```

Esto nos genera automáticamente:

- el fichero `app/Filament/Resources/UserResource.php`

- el directorio `app/Filament/Resources/UserResource/Pages`

con los ficheros:

- `app/Filament/Resources/UserResource/Pages/CreateUser.php`

- `app/Filament/Resources/UserResource/Pages/EditUser.php`

- `app/Filament/Resources/UserResource/Pages/ListUser.php`

Y una entrada en el menú de Filament que indica "Users".


Si queremos cambiar el nombre de "Users" por "", podemos editar el fichero `app/Filament/Resources/UserResource.php` y añadir la variable `protected static ?string $navigationLabel = 'Usuarios';`.

También podemos cambiar el icono, por defecto `protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
` y podemos cambiarlo por un icono de usuario, por ejemplo: `protected static ?string $navigationIcon = 'heroicon-o-user';`

Quedaría algo así:

``` php
namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';
    protected static ?string $navigationLabel = 'Usuarios';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
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
                    ->maxLength(255),
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

## Personalizar el estilo

[https://filamentphp.com/docs/3.x/support/style-customization](https://filamentphp.com/docs/3.x/support/style-customization)
