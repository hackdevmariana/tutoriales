# Crear modelo en Laravel

Vamos a crear un modelo para una API con Laravel y un dashboard con FilamentPHP de noticias de prueba llamdado `testnews` con los siguientes campos (añadiremos los campos innecesarios `width` y `height` como si cometiéramos un error al crear la tabla en la base de datos para luego ver cómo solucionar este posible error tan habitual):

- image

- width

- height

- title

- abstract

- content

- author

- date

Primero, crearemos el modelo con el comando:

``` sh
php artisan make:model TestNews -m
```

Esto creará un nuevo archivo PHP en el directorio `app/Models` llamado `TestNews.php`, que será el modelo para la entidad `TestNews`. La bandera `-m` genera el fichero de migración.

Por defecto, el nuevo fichero `TestNews.php` será algo así:

```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestNews extends Model
{
    use HasFactory;
}
```

Y, la migración, algo así:

```
<?php

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
        Schema::create('test_news', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('test_news');
    }
};
```

Abrimos el archivo de migración generado en `database/migrations` y definimos los campos a crear:

```
<?php

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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->integer('width');
            $table->integer('height');
            $table->string('title');
            $table->text('abstract');
            $table->longText('content');
            $table->string('author');
            $table->timestamp('date')->nullable();
            $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('test_news');
    }
};
```

Ejecutamos la migración para crear la tabla en la base de datos con los campos definidos:

``` sh
php artisan migrate
```


Para definir los campos del modelo, abriremos el archivo `app/Models/TestNews.php` y definiremos los campos del modelo en el método `fillable`.

```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestNews extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'width',
        'height',
        'title',
        'abstract',
        'content',
        'author',
        'date',
    ];
}
```

También podemos definir las reglas de validación, relaciones con otros modelos, accesors, mutators y otros métodos útiles en este archivo.

Al haber definido como campos `$fillable`, pueden ser asignados en masa.

## Crear el recurso de Filament

Usaremos el comando de Filament para generar un recurso que permitirá administrar las noticias de prueba en el dashboard:

``` sh
php artisan make:filament-resource TestNewsResource
```

Editamos el recurso generado en `app/Filament/Resources/TestNewsResource.php` para definir los campos que se mostrarán en el formulario y en la tabla del dashboard quedando algo así:


``` php
namespace App\Filament\Resources;

use App\Filament\Resources\TestNewsResource\Pages;
use App\Models\TestNews;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DateTimePicker;
use Filament\Tables\Columns\ImageColumn;

class TestNewsResource extends Resource
{
    protected static ?string $model = TestNews::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')->image(),
                TextInput::make('width'),
                TextInput::make('height'),
                TextInput::make('title'),
                Textarea::make('abstract'),
                RichEditor::make('content'),
                TextInput::make('author'),
                DateTimePicker::make('date'),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image'),
                TextColumn::make('width'),
                TextColumn::make('height'),
                TextColumn::make('title'),
                TextColumn::make('abstract')->html(),
                TextColumn::make('content')->html(),
                TextColumn::make('author'),
                TextColumn::make('date')->date(),
            ])
            ->filters([
                //
            ])

            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTestNews::route('/'),
            'create' => Pages\CreateTestNews::route('/create'),
            'edit' => Pages\EditTestNews::route('/{record}/edit'),
        ];
    }
}
```


## Crear la vista para la API

Una vez que hayamos definido el modelo en Laravel y configurado los campos en FilamentPHP, podemos crear las rutas y controladores necesarios en Laravel para exponer una API que permita a los clientes consumir los datos de las noticias. Esto generalmente implica definir rutas en `routes/api.php` y controladores que manejen las solicitudes HTTP y devuelvan respuestas JSON.

Por ejemplo, podríamos tener rutas como:

``` php
Route::get('/test-news', [TestNewsController::class, 'index']);
Route::get('/test-news/{id}', [TestNewsController::class, 'show']);
Route::post('/test-news', [TestNewsController::class, 'store']);
Route::put('/test-news/{id}', [TestNewsController::class, 'update']);
Route::delete('/test-news/{id}', [TestNewsController::class, 'destroy']);
```

Y un controlador `TestNewsController` que maneje estas rutas y realice operaciones en el modelo `TestNews` para devolver respuestas JSON.

Creamos el controlador con:

``` sh
php artisan make:controller TestNewsController
```

Y editamos `/Http/Controllers/TestNewsController.php`:

``` php
namespace App\Http\Controllers;

use App\Models\TestNews;
use Illuminate\Http\Request;

class TestNewsController extends Controller
{
  public function index()
  {
    $news = TestNews::all();
    return response()->json($news);
}

public function show($id)
{
  $newsItem = TestNews::findOrFail($id);
  return response()->json($newsItem);
}

// Métodos para crear, actualizar y eliminar noticias...
}
```

## Borrar campos de la tabla

Hemos puesto en la tabla dos campos erróneos: width y height. Así que los queremos borrar. Lo podemos hacer mediante una migración de base de datos.

Creamos una nueva migración utilizando el comando:

``` sh
php artisan make:migration remove_width_and_height_from_testnews_table
```

y utilizando el método `dropColumn` para eliminar los campos de la tabla:

``` php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DropWidthAndHeightColumnsFromTestNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('test_news', function (Blueprint $table) {
            $table->dropColumn(['width', 'height']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('test_news', function (Blueprint $table) {
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
        });
    }
}
```

Y ejecutando la migración:

``` sh
php artisan migrate
```


## Añadir campos a la tabla

Si necesitamos añadir nuevos campos a la tabla en la base de datos, podemos hacerlo creando una nueva migración y utilizando el método `addColumn` para añadir los campos necesarios a la tabla.

## Alta masiva de datos

Si necesitamos insertar una gran cantidad de datos en la tabla de noticias de prueba, podemos hacerlo utilizando el sistema de semillas de Laravel.

Creamos un archivo de semilla en el directorio `database/seeders` y utilizamos el modelo `TestNews` para crear y guardar los registros de noticias de prueba en la base de datos:

``` php
namespace Database\Seeders;

use App\Models\TestNews;
use Illuminate\Database\Seeder;

class TestNewsSeeder extends Seeder
{
  public function run()
  {
    TestNews::create([
      'image' => 'ruta/a/imagen.jpg',
      'title' => 'Título de la noticia',
      'abstract' => 'Resumen de la noticia',
      'content' => 'Contenido de la noticia',
      'author' => 'Autor de la noticia',
      'date' => now(),
    ]);
  }
}
```

Podemos añadir más noticias aquí o iterar sobre un array.
