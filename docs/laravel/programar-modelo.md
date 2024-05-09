# Programar modelo en Laravel

Los modelos en Laravel se almacenan en el directorio `app/Models` y se nombran comenzando en mayúscula, el resto de letras en minúscula y en singular. Por ejemplo: `User.php`

Heredan de la clase `Illuminate\Database\Eloquent\Model`.

Por lo que hay que importar:

``` php
use Illuminate\Database\Eloquent\Model;
```

Por ejemplo:

``` php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Organizer extends Model
{
    protected $fillable = ['organizer'];

    public function events()
    {
        return $this->belongsToMany(Event::class, 'event_organizers', 'organizer_id', 'event_id');
    }
}
```


## Propiedad $fillable

En Laravel, la propiedad `$fillable` se utiliza en los modelos Eloquent para especificar qué atributos pueden asignarse en masa (`mass assignable`). Cuando guardamos un modelo Eloquent utilizando el método `create` o `fill`, Laravel solo permitirá la asignación de atributos que estén presentes en el array `$fillable` del modelo. Esto es una medida de seguridad para proteger las aplicaciones contra la asignación en masa no deseada o maliciosa.

Por ejemplo, supongamos que tenemos un modelo `User` con los campos `name`, `email` y `password`. Podemos definir la propiedad `$fillable` de la siguiente manera:

``` php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
}
```

En este caso, sólo los atributos `name`, `email` y `password` podrán ser asignados en masa al crear o actualizar un usuario. Otros atributos, aunque estén presentes en los datos de entrada, serán ignorados por Laravel.

Es importante tener en cuenta que si no se define la propiedad `$fillable`, Laravel asumirá que ningún atributo es fillable, lo que significa que ninguno podrá ser asignado en masa a menos que se especifique explícitamente.

Esto puede ser útil en ciertos casos en los que prefiramos optar por una estrategia de asignación explícita en lugar de permitir la asignación en masa.


## Métodos

En el contexto de los modelos de Laravel, hay una serie de métodos que se utilizan para definir las relaciones entre diferentes modelos en una base de datos relacional, como son belongsTo y belongsToMany.

## belongsTo

El método `belongsTo` se utiliza para definir una relación de "pertenece a" entre dos modelos.

Esto significa que el modelo actual "pertenece a" otro modelo. Por ejemplo, si tenemos un modelo `Comment` que pertenece a un modelo `Post`, la relación se definiría de la siguiente manera:

``` php
class Comment extends Model
{
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
```

Esto permite acceder al modelo `Post` desde el modelo `Comment`.

Laravel asume que la clave foránea en la tabla de comentarios es `post_id`, pero podemos especificar un nombre de columna diferente si es necesario, aunque usar la nomenclatura estándar ahorra ese trabajo.

## belongsToMany

El método `belongsToMany` se utiliza para definir una relación de "pertenece a muchos" entre dos modelos.

Esto se usa generalmente cuando hay una relación de muchos a muchos entre dos entidades. Por ejemplo, si tenemos un modelo `User` y un modelo `Role`, y un usuario puede tener varios roles y un rol puede tener varios usuarios, la relación se definiría así:

``` php
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}
```

Esto permite acceder a los roles asociados a un usuario y viceversa.

Laravel asume que las claves foráneas en la tabla pivot siguen la convención de nombres estándar (`user_id` y `role_id` en este caso), pero podemos especificar nombres de columna diferentes si es necesario.

## hasOne

Define una relación de "tiene uno" entre dos modelos.

Se utiliza cuando un modelo está relacionado con exactamente un registro en otro modelo.

``` php
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
```

## hasMany

Define una relación de "tiene muchos" entre dos modelos.

Se utiliza cuando un modelo está relacionado con varios registros en otro modelo.

``` php
class Post extends Model
{
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

## hasManyThrough

Define una relación de "tiene muchos a través de" entre dos modelos.

Se utiliza para acceder a registros relacionados a través de una tercera tabla intermedia.

``` php
class Country extends Model
{
    public function posts()
    {
        return $this->hasManyThrough(Post::class, User::class);
    }
}
```

## morphTo y morphMany/morphOne

Se utilizan para definir relaciones polimórficas, donde un modelo puede estar asociado a uno o más modelos diferentes a través de una sola relación.

``` php
class Comment extends Model
{
    public function commentable()
    {
        return $this->morphTo();
    }
}

class Post extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

class Video extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
```

**morphTo**: Este método se utiliza en el modelo que puede pertenecer a varios modelos diferentes.

Por ejemplo, supongamos que tenemos un modelo `Comment` que puede comentar tanto `Post` como `Video`. En este caso, el modelo `Comment` usaría morphTo para definir la relación:

``` php
class Comment extends Model
{
    public function commentable()
    {
        return $this->morphTo();
    }
}
```

**morphMany/morphOne**: Estos métodos se utilizan en el modelo relacionado para definir la relación inversa.

En nuestro ejemplo de Comment, usamos `morphMany` si un Post o Video pueden tener varios comentarios, o `morphOne` si solo pueden tener un comentario:

``` php
class Post extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

class Video extends Model
{
    public function comment()
    {
        return $this->morphOne(Comment::class, 'commentable');
    }
}
```

## hasOneThrough y hasManyThrough

Permiten acceder a relaciones secundarias a través de una relación secundaria:

``` php
class Country extends Model
{
    public function post()
    {
        return $this->hasOneThrough(Post::class, User::class);
    }
}
```

**hasOneThrough**: Este método se utiliza para acceder a una relación secundaria a través de una relación secundaria.

Por ejemplo, si tenemos un modelo `Country` que tiene muchos `User`, y cada `User` tiene un `Profile`, podemos acceder directamente al `Profile` desde `Country` usando `hasOneThrough`:

``` php
class Country extends Model
{
    public function profile()
    {
        return $this->hasOneThrough(Profile::class, User::class);
    }
}
```

**hasManyThrough**: Similar a `hasOneThrough`, pero se utiliza cuando la relación secundaria puede tener varios registros en lugar de uno solo.

Por ejemplo, si queremos acceder a todos los `Profile` de todos los `User` en un país:

``` php
class Country extends Model
{
    public function profiles()
    {
        return $this->hasManyThrough(Profile::class, User::class);
    }
}
```

## with()

Este método se utiliza para cargar relaciones de manera anticipada (`eager loading`) y puede mejorar significativamente el rendimiento al reducir el número de consultas a la base de datos.

``` php
$users = App\Models\User::with('posts')->get();
```

## whereHas() y orWhereHas()

Permiten consultar la existencia de relaciones basándose en condiciones específicas.

``` php
$users = App\Models\User::whereHas('posts', function ($query) {
    $query->where('title', 'like', '%primer post%');
})->get();
```

## sync()

En relaciones de muchos a muchos, este método se utiliza para sincronizar la tabla pivot con un array de IDs, añadiendo o eliminando registros según sea necesario.

``` php
$user->roles()->sync([1, 2, 3]);
```

## attach() y detach()

También para relaciones de muchos a muchos, estos métodos se utilizan para añadir o eliminar registros en la tabla pivot sin afectar a otros registros existentes.

``` php
$user->roles()->attach($roleId);
$user->roles()->detach($roleId);
```

## touch()

Este método se utiliza para actualizar las marcas de tiempo (timestamps) de un modelo relacionado.

``` php
$comment->post()->touch();
```

## save() y saveMany()

Se utilizan para guardar uno o varios modelos relacionados respectivamente.

``` php
$post->comments()->save($newComment);
$post->comments()->saveMany([$comment1, $comment2]);
```

## create() y createMany()

Similar a `save()` y `saveMany()`, pero estos métodos crean y guardan un nuevo modelo relacionado.

``` php
$post->comments()->create(['message' => 'Un nuevo comentario']);
```

El método **create()** es utilizado para crear un nuevo registro en la base de datos utilizando la asignación en masa.

Este método es parte de los modelos Eloquent y puede ser utilizado tanto en el modelo principal como en las relaciones definidas.

Un ejemplo de cómo se utiliza `create()` en un modelo:

``` php
use App\Models\Post;
use App\Models\User;

// Crear un nuevo post utilizando el método create()
$post = Post::create([
  'title' => 'Mi primer post',
  'content' => 'Contenido del post'
]);

// Alternativamente, si tenemos un usuario y queremos crear un post asociado a ese usuario
$user = User::find(1); // Encuentra el usuario con ID 1
$post = $user->posts()->create([
  'title' => 'Post del usuario',
  'content' => 'Contenido del post del usuario'
]);
```

Es importante recordar que para utilizar `create()`, debemos tener definida la propiedad `$fillable` en el modelo para especificar qué campos pueden ser asignados en masa.

Método **createMany()**: es similar a `create()`, pero se utiliza para crear múltiples registros relacionados en una sola operación. Este método es especialmente útil cuando tenemos una relación de uno a muchos y queremos crear varios registros relacionados al mismo tiempo.

Un ejemplo de cómo se utiliza `createMany()`:

``` php
use App\Models\User;

// Suponiendo que ya tienes un modelo User
$user = User::find(1); // Encuentra el usuario con ID 1

// Crear varios posts asociados al usuario utilizando createMany()
$user->posts()->createMany([
  [
    'title' => 'Segundo post del usuario',
    'content' => 'Contenido del segundo post'
  ],
  [
    'title' => 'Tercer post del usuario',
    'content' => 'Contenido del tercer post'
  ]
]);
```

Con `createMany()`, pasamos un array de arrays, donde cada array interno representa los atributos de un nuevo registro que queremos crear.
