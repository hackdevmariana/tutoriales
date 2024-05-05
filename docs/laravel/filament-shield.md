# Usuarios y roles en FilamentPHP con filament-shield

Filament Shield es una extensión de Filament que proporciona una interfaz de usuario para la gestión de recursos, como usuarios, roles y permisos.

Filament Shield agrega capacidades de autorización avanzadas a Filament, lo que permite definir políticas de acceso y restricciones basadas en roles para controlar quién puede acceder y realizar acciones en los diferentes recursos de tu aplicación.

Con Filament Shield, podemos definir políticas de autorización utilizando el sistema de políticas de Laravel, que permite especificar reglas personalizadas para determinar si un usuario tiene permiso para realizar una determinada acción en un recurso específico. Estas políticas de autorización se pueden aplicar a las vistas y acciones de los recursos en la interfaz de usuario de Filament, lo que permite controlar finamente qué usuarios pueden ver, crear, editar o eliminar registros en la aplicación.

Podemos definir fácilmente **políticas de autorización** utilizando la sintaxis familiar de Laravel, lo que permite especificar reglas personalizadas para determinar si un usuario tiene permiso para realizar una determinada acción en un recurso.

Podemos aplicar **políticas de autorización a los recursos** de tu aplicación para controlar quién puede ver, crear, editar o eliminar registros en la interfaz de usuario de Filament.

Filament Shield proporciona soporte integrado para **roles y permisos**, lo que permite asignar roles a los usuarios y definir permisos específicos para cada rol.

Podemos personalizar los **mensajes de error** que se muestran cuando un usuario intenta realizar una acción para la que no tiene permiso, lo que te permite proporcionar una experiencia de usuario coherente y comprensible.

Instalación:

``` php
composer require bezhansalleh/filament-shield
```

En `app/Models/User.php`, debemos añadir, si no lo tenemos:

``` php
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
```

También:

``` php
class User extends Authenticatable
{
    use HasRoles;

    // ...
}
```

En caso de que ya tengamos definidos los usos, ya que podríamos tener algo así:

``` php
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // ...
}
```

Añadiremos HasRoles:

``` php
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    // ...
}
```

Publicamos la configuración del plugin:

``` php
php artisan vendor:publish --tag=filament-shield-config
```

En los distintos paneles que tengamos, que se encuentran en `app/Providers/Filament`, incluimos el plugin:


``` php
public function panel(Panel $panel): Panel
{
    return $panel
        ->plugins([
            \BezhanSalleh\FilamentShield\FilamentShieldPlugin::make()
        ]);
}
```

Terminamos de instalar el plugin siguiendo las instrucciones del prompt:

``` php
php artisan shield:install
```

Este prompt nos irá indicando posibles errores.

Tanto si no hemos configurado bien el plugin:

```
ERROR  Please make sure your Auth Provider model (\App\Models\User) uses either `HasRoles` or `HasFilamentShield` trait.
```

Como si tenemos alguna dependencia rota, como si creamos un resource y no hemos creado el modelo:

```
INFO  Generating permissions ...  


  ReflectionException

 Class "App\Models\TestNews" does not exist
```

Por lo que, si bien, puede ser ligeramente engorroso, nos ayuda a detectar errores en nuestro proyecto.

Nos permite elegir qué usuario va a ser el superadministrador:

```
INFO  Creating a filament user with Super Admin Role...  

+----+-----------+-----------------------------+-------+
| ID | Name      | Email                       | Roles |
+----+-----------+-----------------------------+-------+
| 1  | Fernando  | fernando@midominio.com      |       |
| 2  | Webmaster | webmaster@midominio.com     |       |
+----+-----------+-----------------------------+-------+

┌ Please provide the `UserID` to be set as `super_admin` ──────┐
│ 1                                                            │
└──────────────────────────────────────────────────────────────┘
```

Una vez instalado el plugin, continuamos con la integración en el proyecto. En `app/Models/User.php`, añadiremos, si no lo tenemos:

``` php
use BezhanSalleh\FilamentShield\Traits\HasPanelShield;
use Filament\Models\Contracts\FilamentUser;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements FilamentUser
{
    use HasRoles;
    use HasPanelShield;
    // ...
}
```

Con esto, ya tendríamos configurado el plugin y veríamos en el panel de control la pestaña de "Roles".

En ese apartado, seleccionaremos los permisos de cada usuario.

Una vez seleccionados, para hacerlos efectivos, podemos ejecutar:

``` php
php artisan shield:generate
```

Para publicar el recurso, ejecutaremos:

``` php
php artisan shield:publish
```

que crea el fichero `app/Filament/Resources/Shield/RoleResource.php` y el directorio `app/Filament/Resources/Shield/RoleResource` con otros ficheros.

## Usar los roles y permisos

Para usar los roles y permisos, vamos a `app/Filament/Resources/UserResource.php` y asignamos permisos a roles añadiendo en el apartado de formulario:

``` php
Forms\Components\Select::make('roles')
    ->relationship('roles', 'name')
    ->multiple()
    ->preload()
    ->searchable()

// Using CheckboxList Component
Forms\Components\CheckboxList::make('roles')
    ->relationship('roles', 'name')
    ->searchable()
```

Con esto, al acceder al panel de los usuarios, podemos asignar roles a los usuarios.
