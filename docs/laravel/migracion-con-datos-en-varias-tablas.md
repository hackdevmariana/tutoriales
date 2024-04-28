# Migraciones en Laravel con datos predeterminados

Crear una migración con datos predeterminados en Laravel es un proceso sencillo.

Primero, creamos una nueva migración para la tabla donde deseamos insertar los datos predeterminados.

Podemos hacerlo con el comando Artisan:

``` php
php artisan make:migration create_mi_tabla_table --create=mi_tabla
```

Dentro del método `up()` de la migración, podemos insertar los datos predeterminados después de crear la estructura de la tabla.

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateMiTablaTable extends Migration
{
/**
* Run the migrations.
*
* @return void
*/
public function up()
{
Schema::create('mi_tabla', function (Blueprint $table) {
$table->id();
$table->string('nombre');
// Otros campos necesarios...
});

// Datos predeterminados
$datos = [
['nombre' => 'Dato1'],
['nombre' => 'Dato2'],
// Añade aquí más datos predeterminados
];

DB::table('mi_tabla')->insert($datos);
}

/**
* Reverse the migrations.
*
* @return void
*/
public function down()
{
Schema::dropIfExists('mi_tabla');
}
}
```

Una vez que hayamos definido los datos predeterminados en la migración, ejecutamos el comando `Artisan` para aplicar la migración:

``` php
php artisan migrate
```

Este proceso creará la tabla `mi_tabla` y llenará la misma con los datos predeterminados que hemos especificado.


## Migración con datos predeterminados para varias tablas a la vez

Para crear una migración con datos predeterminados para varias tablas a la vez en Laravel, debemos crear una nueva migración:

``` php
php artisan make:migration insert_datos_predeterminados
```

Escribimos los datos predeterminados en la migración dentro del método `up()` de la nueva migración:

``` php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertDatosPredeterminados extends Migration
{
/**
* Run the migrations.
*
* @return void
*/
public function up()
{
// Datos para la tabla 'provincias'
$provincias = [
['nombre' => 'A Coruña'],
['nombre' => 'Álava'],
// ... más provincias
];

// Datos para la tabla 'frases_quijote'
$frasesQuijote = [
['frase' => 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme...'],
// ... más frases
];

// Insertar datos en la tabla 'provincias'
DB::table('provincias')->insert($provincias);

// Insertar datos en la tabla 'frases_quijote'
DB::table('frases_quijote')->insert($frasesQuijote);

// Repetiremos este proceso para otras tablas si es necesario
}

/**
* Reverse the migrations.
*
* @return void
*/
public function down()
{
// Opcional: Código para revertir la migración si es necesario
// Por ejemplo, eliminar los datos de las tablas
}
}
```

Una vez que hayamos definido los datos predeterminados para todas las tablas en la migración, ejecutamos el comando `Artisan` para aplicar la migración:

``` php
php artisan migrate
```

Este proceso insertará los datos predeterminados en las tablas especificadas cuando se ejecute la migración.
