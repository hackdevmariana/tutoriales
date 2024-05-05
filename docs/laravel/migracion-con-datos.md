# Migraciones en Laravel con datos predeterminados

A veces nos encontramos con que tenemos que rellenar una base de datos con información antes de llevarla a producción. Muchas veces, esos datos son masivos y es más eficiente incluirlos a la hora de hacer el modelo.

Tenemos dos opciones para subir esa información a la base de datos.

Supongamos que queremos añadir datos que se mantendrán constantes en el tiempo, como las provincias de España.

## 1. Migraciones con datos predeterminados

Podemos crear una migración que, además de definir la estructura de la tabla, también inserte los datos predeterminados. Esto es útil para datos que no cambiarán con el tiempo o que son necesarios para el funcionamiento inicial de la aplicación.

``` php
Schema::create('provincias', function (Blueprint $table) {
  $table->id();
  $table->string('nombre');
  // Otros campos necesarios...
});

// Insertamos los datos predeterminados
DB::table('provincias')->insert([
  ['nombre' => 'A Coruña'],
  ['nombre' => 'Álava'],
  // ... Resto de provincias
]);
```

## 2. Seeders para desarrollo y producción

Aunque generalmente se recomienda no ejecutar `seeders` en un entorno de producción, hay casos en los que puede ser apropiado, especialmente si se trata de datos que no cambian y son esenciales para la aplicación. Si decidimos usar `seeders`, nos aseguraremos de que su ejecución no afecte los datos existentes y que solo se ejecuten una vez.

Ejemplo de un seeder para provincias de España:

``` php
use Illuminate\Database\Seeder;

class ProvinciasTableSeeder extends Seeder
{
  public function run()
  {
    $provincias = [
      'A Coruña', 'Álava', // ... Resto de provincias
    ];

    foreach ($provincias as $provincia) {
      DB::table('provincias')->insert(['nombre' => $provincia]);
    }
  }
}
```

Para ejecutar este `seeder`, podemos usar el comando `php artisan db:seed` con una bandera especial para indicar que se trata de una operación de producción:

``` php
php artisan db:seed --class=ProvinciasTableSeeder --force
```

## 3. Inserción masiva y evolutiva

Supongamos que estamos haciendo una inserción evolutiva, como frases del Quijote. En una fase, seleccionamos una serie de frases, luego, otras frases y así, a medida que vamos leyendo el libro, vamos seleccionando las frases y añadiéndolas en migraciones.

Para asegurarnos de que no se añaden duplicados, podemos comprobar si la entrada ya existe en la base de datos antes de insertarla.

Aquí hay un ejemplo de cómo podríamos hacerlo en una migración:

``` php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class InsertQuijotePhrases extends Migration
{
/**
* Run the migrations.
*
* @return void
*/
public function up()
{
// Frases del Quijote a añadir
$phrases = [
"En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
// Otras frases seleccionadas
];

foreach ($phrases as $phrase) {
// Comprobar si la frase ya existe
$exists = DB::table('frases_quijote')->where('frase', $phrase)->exists();

// Si no existe, la insertamos
if (!$exists) {
DB::table('frases_quijote')->insert(['frase' => $phrase]);
}
}
}

/**
* Reverse the migrations.
*
* @return void
*/
public function down()
{
// Opcional: Código para revertir la migración si es necesario
}
}
```

Este script de migración itera sobre un array de frases y comprueba si cada una ya existe en la tabla `frases_quijote`. Si la frase no existe, la inserta.

De esta manera, podemos ejecutar múltiples migraciones a lo largo del tiempo, añadiendo nuevas frases sin preocuparnos por los duplicados.
