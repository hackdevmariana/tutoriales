# Modelos en Laravel

En los modelos de Laravel, puedes definir relaciones entre diferentes modelos, agregar métodos para realizar consultas personalizadas en la base de datos, definir accesores y mutadores para manipular los datos antes de que sean almacenados o devueltos, y establecer restricciones de validación para los atributos del modelo.

## Acciones

Algunas acciones comunes que se pueden realizar en los modelos de Laravel:

- **Definir relaciones**: Se pueden definir relaciones como `hasOne`, `hasMany`, `belongsTo`, `belongsToMany`..., para establecer relaciones entre modelos y facilitar la recuperación de datos relacionados.

- **Consultas personalizadas**: Se pueden definir métodos personalizados en los modelos para realizar consultas específicas en la base de datos. Esto permite encapsular la lógica de consulta en el modelo y reutilizarla en diferentes partes de la aplicación.

- **Accesores y mutadores**: Se pueden definir métodos de acceso (accesores) y mutación (mutadores) para manipular los valores de los atributos antes de que sean almacenados en la base de datos o devueltos desde el modelo.

- **Definir validaciones**: Se pueden utilizar el método `validate` para definir reglas de validación para los atributos del modelo. Estas reglas se aplicarán automáticamente al intentar almacenar o actualizar el modelo.

- **Definir eventos**: Se pueden utilizar los eventos del modelo (como `creating`, `created`, `updating`, `updated`, etc.) para ejecutar código en respuesta a diferentes acciones que ocurren en el modelo, como la creación, actualización o eliminación de registros.

- **Definir scopes**: Se pueden definir métodos de ámbito (`scopes`) para encapsular consultas comunes y reutilizarlas fácilmente en diferentes partes de la aplicación.

## Ejemplos

Definir un modelo con relación uno a uno:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function phone()
    {
        return $this->hasOne(Phone::class);
    }
}
```

Definir un modelo con relación uno a muchos:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

Definir un modelo con accesores y mutadores:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function getNameAttribute($value)
    {
        return ucfirst($value);
    }

    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value);
    }
}
```

Definir un modelo con reglas de validación:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;

class Product extends Model
{
    protected $fillable = ['name', 'price'];

    public static $rules = [
        'name' => 'required|unique:products|max:255',
        'price' => 'required|numeric',
    ];
}
```

Definir un modelo con eventos:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($task) {
            $task->status = 'pending';
        });
    }
}
```

## Accesores y mutadores

Los accesores y mutadores son funcionalidades de Laravel que permiten manipular los atributos de un modelo antes de que se guarden en la base de datos (mutadores) o después de recuperarlos de la base de datos (accesores). Estas características brindan una forma conveniente de transformar los datos según sea necesario, lo que puede ser útil para formatear los datos, realizar cálculos o aplicar lógica específica.

Los accesores y mutadores permiten encapsular la lógica relacionada con los atributos del modelo dentro del propio modelo, lo que facilita el mantenimiento y la organización del código.

### Accesores

Un accesor es un método definido en el modelo que se usa para manipular un atributo al recuperarlo de la base de datos. Los accesores no modifican los datos en la base de datos, solo los transforman temporalmente cuando se accede a través del modelo. Por ejemplo, podríamos tener un accesor para formatear un atributo antes de mostrarlo en la vista.

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function getPriceAttribute($value)
    {
        return '$' . number_format($value, 2);
    }
}
```

En este ejemplo, `getPriceAttribute` es un accesor que formatea el precio de un producto antes de devolverlo.

### Mutadores

Un mutador es un método definido en el modelo que se usa para manipular un atributo antes de que se guarde en la base de datos. Los mutadores permiten modificar los datos antes de almacenarlos, lo que puede ser útil para realizar validaciones, formatear los datos o aplicar lógica de negocio antes de la persistencia.

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function setEmailAttribute($value)
    {
        $this->attributes['email'] = strtolower($value);
    }
}
```

En este ejemplo, `setEmailAttribute` es un mutador que convierte el correo electrónico a minúsculas antes de guardarlo en la base de datos.
