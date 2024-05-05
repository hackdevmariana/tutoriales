# Crear un comando en artisan

Para crear un comando artisan, usaremos el comando artisan -sic-:

``` php
php artisan make:command Comando
```

Esto creará un fichero `app/Console/Commands/Comando.php`:

``` php
namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:comando';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
    }
}
```

Donde podemos configurar la forma de invocar el comando:

``` php
protected $signature = 'app:comando';
```

Por, por ejemplo:


``` php
protected $signature = 'make:sendmail';
```

Para crear directamente un comando que se ejecute al escribir make:sendmail, podríamos haberlo creado con:

``` php
php artisan make:command MakeSendMail
```

En función de si queremos que nuestro comando se invoque de una manera homogeneizada con el resto de comandos, usaremos `make:comando` o si lo que queremos es que se vea claramente que es un comando propio de la aplicación, usaremos el formato `app:comando`.

La propiedad `protected $description` en una clase de comando en Laravel se utiliza para proporcionar una descripción concisa de lo que hace ese comando.

Esta descripción se muestra cuando se ejecuta el comando `php artisan list`, que muestra una lista de todos los comandos disponibles en la aplicación Laravel, junto con sus descripciones.

## Comandos que ejecuten otros comandos

Una característica que nos puede ocurrir muchas veces es que tengamos que ejecutar muchas veces un comando. Por ejemplo, cuando creamos una aplicación con muchos modelos. Para evitar lanzar muchas veces el comando:

``` php
php artisan make:model Modelo -m
```

Podemos crear un comando con:

``` php
php artisan make:command GenerateModels
```

Que nos generará `app/Console/Commands/GenerateModels.php`. Podemos editar este fichero y crear de golpe todos los modelos con:

``` php
php artisan make:command GenerateModels
```

Y creamos un comando con tantos modelos como necesitemos:

``` php
namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateModels extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:models';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate models and migrations';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Lista de nombres de modelos
        $model_names = [
            "Author",
            "AuthorLife",
            "Content",
            "Group",
            "Specialty",
            "GroupAuthor",
            "GroupTheme",
            "AuthorTheme",
            "AuthorSpecialty",
            "Theme",
            "Specialty",
            "ThemeSpecialty",
            "Occupation",
            "Quote",
            "Photo",
            "URL",
        ];

        // Iterar sobre cada nombre de modelo y ejecutar el comando artisan para crear el modelo y la migración
        foreach ($model_names as $model_name) {
            // Crear el modelo y la migración
            $this->call('make:model', [
                'name' => $model_name,
                '-m' => true,
            ]);

            // Mensaje de salida
            $this->info("Modelo $model_name y migración creados");
        }

        return 0;
    }
}
```

Como lo que estamos haciendo es un comando que llama a artisan, no debemos ejecutar nada más en el sistema, ya que haremos referencias internas a los comandos de artisan con:

``` php
$this->call('make:model', [
    'name' => $model_name,
    '-m' => true,
]);
```

Ejecutamos el comando con:


``` php
php artisan generate:models
```
