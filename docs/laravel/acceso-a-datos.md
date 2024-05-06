# Acceso a datos en Laravel

En Laravel, los modelos se invocan mediante la clase que los representa. Esto se hace típicamente dentro de los controladores o en cualquier otro lugar donde necesitemos interactuar con la base de datos.

Crear una instancia del modelo:

``` php
use App\User;

$user = new User();
```

Recuperar todos los registros:

``` php
$users = User::all();
```

Recuperar un único registro por su clave primaria:

``` php
$user = User::find(1);
```

Recuperar registros que cumplan con ciertos criterios:

``` php
$admins = User::where('role', 'admin')->get();
```

Crear un nuevo registro:

``` php
$user = new User();
$user->name = 'John Doe';
$user->email = 'john@example.com';
$user->save();
```

Actualizar un registro existente:

``` php
$user = User::find(1);
$user->name = 'Jane Doe';
$user->save();
```

Eliminar un registro:

``` php
$user = User::find(1);
$user->delete();
```
