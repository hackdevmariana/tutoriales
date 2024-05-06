# Migraciones

En Laravel, las migraciones son herramientas que permiten modificar la estructura de la base de datos de manera controlada y reversible. Para ello, cuentan con una función up() que hace la migración y una función down() que la revierte.

## Crear tablas

Podemos utilizar migraciones para crear nuevas tablas en la base de datos, especificando los nombres de las columnas, tipos de datos y restricciones.

Comando:

``` php
php artisan make:migration create_users_table
```

Código:

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
```

## Modificar tablas existentes

Las migraciones te permiten modificar tablas existentes agregando, modificando o eliminando columnas.

Comando:

``` php
php artisan make:migration add_phone_number_to_users_table
```

Código:

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPhoneNumberToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone_number')->nullable()->after('email');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone_number');
        });
    }
}
```

## Eliminar tablas

Si ya no necesitamos una tabla en la base de datos, podemos utilizar una migración para eliminarla. Aquí la reversión es más compleja, ya que deberemos reestablecer no sólo la tabla, sino todos los campos de la tabla borrada.

Comando:

``` php
php artisan make:migration drop_posts_table
```

Código:

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropPostsTable extends Migration
{
    public function up()
    {
        Schema::dropIfExists('posts');
    }

    public function down()
    {
        // Recrear la tabla si necesitas deshacer la migración
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->timestamps();
        });
    }
}
```

## Crear índices

Puedes utilizar migraciones para crear índices en las tablas, lo que puede mejorar el rendimiento de ciertas consultas.

Comando:

``` php
php artisan make:migration add_index_to_users_table
```

Código:

``` php 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->index('email');
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex('users_email_index');
        });
    }
}
```

## Eliminar índices

Si ya no necesitas un índice en tu base de datos, puedes eliminarlo utilizando una migración.

Comando:

``` php

```

Código:

``` php

```

## Crear restricciones de clave externa (foreign key constraints)

Las migraciones te permiten definir restricciones de clave externa entre tablas para mantener la integridad referencial de los datos.

Comando:

``` php

```

Código:

``` php

```

## Eliminar restricciones de clave externa

Si necesitas eliminar una restricción de clave externa, puedes hacerlo utilizando una migración.

Comando:

``` php

```

Código:

``` php

```

## Modificar el tipo de columna

Si necesitas cambiar el tipo de datos de una columna en una tabla existente, puedes hacerlo utilizando una migración.

Comando:

``` php

```

Código:

``` php

```

## Renombrar columnas o tablas

Las migraciones te permiten cambiar el nombre de una columna o una tabla existente.

Comando:

``` php

```

Código:

``` php

```

## Agregar datos iniciales

Puedes utilizar migraciones para insertar datos iniciales en tu base de datos, como usuarios predeterminados o configuraciones de la aplicación.


Comando:

``` php

```

Código:

``` php

```
