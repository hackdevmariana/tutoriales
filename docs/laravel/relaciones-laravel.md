# Crear relaciones entre modelos

Creamos los distintos modelos que vayamos a usar con sus respectivas migraciones:

``` php
php artisan make:model Departament -m
```

Con -m genera el modelo y también la migración.

Para las migraciones que no requieren modelo, ya que son sólo para relacionar tablas, usaremos algo así:

``` php
php artisan make:migration create_user_departament_table
```

En el que indicaremos que cree una migración para crear una tabla llamada user_departament. La migración la creará en `database/migrations/` en un fichero que será algo así: `database/migrations/{año}_{mes}_{dia}_{código}_create_user_departament_table.php` y que contendrá algo como:

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
        Schema::create('user_departament', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_departament');
    }
};
```

Es importante seguir el orden de las instrucciones a la hora de crear las migraciones empezando por `create_` y acabe con `_table`. Si cambiáramos el orden y, por ejemplo, escribiéramos `create_table_user_departament` generaría una función así:

``` php
    public function up(): void
    {
        Schema::create('table_user_departament', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }
```

La tabla no se llamaría `user_departament` sino `table_user_departament`.

En la migración de Departament (`database/migrations/...create_departament_table.php`) añadimos los campos que queramos añadir al modelo. Por ejemplo, '':

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
        Schema::create('departament', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departament');
    }
};
```

Es importante que haya un `id` en cada tabla, para que haya un campo único con el que poder hacer las relaciones.

Otros valores que pueden tomar los campos son:

**Clave externa** de otra tabla:

``` php
$table->foreignId('tabla_id');
```

**Enumeración** de estados:

``` php
$table->enum('type', ['Activo', 'Inactivo']);
```

Al que le podemos dar un valor por defecto:

``` php
$table->enum('type', ['Activo', 'Inactivo'])->default('Activo');
```

Y puede haber tantos estados como deseemos:

``` php
$table->enum('type', ['Activo', 'Inactivo', 'En espera'])->default('Activo');
```

**Horarios** de comienzo y final de estados:

``` php
$table->timestamp('Activo');
$table->timestamp('Inactivo');
```

**Fechas**:

``` php
$table->date('Fecha');
```

Para las tablas de relaciones, lo que haremos será crear campos con los identificadores externos (`foreignId`). Este tipo de tablas no necesita un identificador, ya que sólo registra la relación:

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
        Schema::create('user_departament', function (Blueprint $table) {
            $table->foreignId('user_id');
            $table->foreignId('departament_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_departament');
    }
};
```

Con:

``` php
$table->foreignId('user_id');
$table->foreignId('departament_id');
```

indicamos que tome el `id` de las tablas `user` y `departament`, respectivamente. Si escribimos el nombre correcto de la tabla, seguido de `_id`, Laravel entiende que es el identificador de la tabla, no hace falta poner explícitamente el nombre de las tablas.

Para poder hacer relaciones de muchos a muchos, debemos crear una función en una de los modelos, por ejemplo, en `Models/User.php`:

``` php
public function departaments(){
  return $this->belongsToMany(Departament::class);
}
```

Si sólo pudiera pertenecer a un modelo, la función sería:

``` php
public function departaments(){
  return $this->belongsTo(Departament::class);
}
```

Y, en caso contrario, que en lugar de definir que pertenece a muchos, indicamos que tiene muchos, la función sería:


``` php
public function departaments(){
  return $this->hasMany(Departament::class);
}
```

Para construir estas relaciones, deberemos lanzar las migraciones:


``` php
php artisan migrate
```
