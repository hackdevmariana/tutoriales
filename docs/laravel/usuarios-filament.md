# Añadir usuarios al panel de control de FilamentPHP

Creamos un recurso para la gestión de usuarios:

``` sh
php artisan make:filament-resource User
```

Si vamos al panel de control, nos aparecerá directamente el recurso. Pero el recurso recién creado está vacío:

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

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
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

Importamos las declaraciones de los campos:

``` php
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
```

Añadimos los campos al esquema:

``` php
public static function form(Form $form): Form
{
    return $form
        ->schema([
            //
            TextInput::make('name')
            ->required(),
            TextInput::make('email')
            ->email()
            ->required(),
            TextInput::make('password')
            ->password()
            ->hiddenOn('edit')
            ->required(),
            Select::make('roles')->multiple()->relationship('roles'),
        ]);
}
```

Con esto, indicamos que queremos tres campos: `name`, `email` y `password` y que sean obligatorios (`->required()`).

Además, comprueba que email tiene formato de correo electrónico con `->email()`, que no se muestran los caracteres, sino asteriscos, con `->password()` y que cuando editamos un usuario, no aparezca la contraseña (`->hiddenOn('edit')`).

Con `Select::make('roles')->multiple()->relationship('roles'),` le indicamos que queremos poder seleccionar, de la tabla 'roles', múltiples roles para ese usuario.

Para mostrar los campos en el panel de control, deberemos importar `TextColumn`:

``` php
use Filament\Tables\Columns\TextColumn;
```

Y añadir los campos a la tabla:

``` php
return $table
    ->columns([
        TextColumn::make('name'),
        TextColumn::make('email'),
        TextColumn::make('email_verified_at'),
        TextColumn::make('roles.name'),
    ])
```

Podemos verificar o quitar la verificación desde la propia tabla con:

``` php
->actions([
        Tables\Actions\EditAction::make(),
        Tables\Actions\Action::make('verify')
        ->icon('heroicon-m-check-circle')
        ->action(function(User $user){
            $user->email_verified_at = Date('Y-m-d H:i:s');
            $user->save();
        }),
        Tables\Actions\Action::make('Unverify')
        ->icon('heroicon-m-x-circle')
        ->action(function(User $user){
            $user->email_verified_at = null;
            $user->save();
        }),
    ])
```

Y filtrar por usuarios verificados con:

``` php
->filters([
    Tables\Filters\Filter::make('verified')
    ->query(fn (Builder $query) => $query->whereNotNull('email_verified_at')),
])
```

Para poder asignar los roles a los usuarios, debemos editar `app/Models/User.php` añadiendo:

``` PHP
use Spatie\Permission\Traits\HasRoles;
use HasApiTokens, HasFactory, Notifiable, HasRoles;
```

Quedando algo así:

``` PHP
namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
```
