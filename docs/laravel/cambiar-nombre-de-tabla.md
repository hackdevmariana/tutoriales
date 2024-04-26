# Cambiar el nombre de una tabla en Laravel

Para cambiar el nombre de una tabla en Laravel, podemos realizar una migración para renombrar la tabla existente.

## Crear la migración

Para crear una nueva migración, utilizamos el comando:

``` sh
php artisan make:migration
```

En esta migración, en la que queremos cambiar el nombre de una tabla, utilizaremos el método `rename` para cambiar el nombre de la tabla.

Ejecutaremos el siguiente comando en la terminal:

``` sh
php artisan make:migration rename_test_news_table
```

Abrimos el archivo de migración recién creado en el directorio `database/migrations` y utilizamos el método `rename` para cambiar el nombre de la tabla:

```PHP
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameTestNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename('news', 'test_news');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename('test_news', 'news');
    }
}
```

Ejecutamos la migración con el siguiente comando:

```sh
php artisan migrate
```

Esto renombrará la tabla `news` a `test_news` en la base de datos.
