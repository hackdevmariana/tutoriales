# Filtrar datos en FilamentPHP

Dentro de los ficheros Resource, en `table`, hay un apartado de filtros:

``` php
use Filament\Tables\Table;

public static function table(Table $table): Table
{
  return $table
    ->filters([
        //
    ])
}
```

Que genera un botón de filtros en el panel de control. En este apartado, podemos usar selectores.

En FilamentPHP, los selectores son componentes que te permiten seleccionar uno o más valores de un conjunto de opciones predefinidas. Son muy útiles para crear formularios y filtros en tablas, y ofrecen una gran flexibilidad para adaptarse a las necesidades de tu aplicación. Aquí tienes una descripción general de los tipos de selectores disponibles y cómo se utilizan:

- **Select**: Este es el selector básico que te permite elegir un valor de una lista de opciones. Podemos definir las opciones manualmente o dinámicamente basándote en los datos de la base de datos.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

public static function table(Table $table): Table
{
    return $table
        ->filters([
            SelectFilter::make('status')
                ->options([
                    'draft' => 'Draft',
                    'reviewing' => 'Reviewing',
                    'published' => 'Published',
                ]),
        ]);
}
```

- **SelectFilter**: Utilizado en la construcción de tablas, permite filtrar los registros de la tabla basándose en un conjunto de opciones predefinidas. Podemos usar `SelectFilter::make()` para crear un filtro de selección.


- **Multi-select**: Con el método `multiple()`, podemos seleccionar múltiples valores de la lista de opciones. Esto es útil cuando necesitamos permitir que los usuarios seleccionen varias opciones en un formulario o filtro.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

public static function table(Table $table): Table
{
    return $table
        ->filters([
            SelectFilter::make('tags')
                ->options([
                    'php' => 'PHP',
                    'laravel' => 'Laravel',
                    'javascript' => 'JavaScript',
                ])
                ->multiple(),
        ]);
}
```

- **Relationship Select**: Los selectores de relación se utilizan para filtrar registros basándose en relaciones Eloquent. Por ejemplo, podemoss filtrar registros que pertenecen a un autor específico utilizando el método `relationship()`.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use App\Models\Category;

public static function table(Table $table): Table
{
    return $table
        ->filters([
            SelectFilter::make('category_id')
                ->relationship(Category::class, 'name'),
        ]);
}
```

- **Searchable Select**: Podemos hacer que un selector sea buscable, lo que permite a los usuarios encontrar fácilmente opciones en una larga lista de selección. Esto se logra con el método `searchable()`.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

public static function table(Table $table): Table
{
    return $table
        ->filters([
            SelectFilter::make('user_id')
                ->searchable(),
        ]);
}
```

- **BelongsToSelect**: Este selector se utiliza cuando se está trabajando con relaciones de uno a uno. Permite seleccionar una opción de una lista desplegable que está vinculada a otra entidad relacionada.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use App\Models\User;

public static function table(Table $table): Table
{
  return $table
    ->filters([
      SelectFilter::make('user_id')
        ->relationship('user', 'name')
        ->label('Usuario'),
    ]);
}
```

- **HasManySelect**: Similar al selector `BelongsToSelect`, pero para relaciones de uno a muchos. Permite seleccionar múltiples opciones de una lista desplegable vinculada a múltiples entidades relacionadas.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use App\Models\Post;

public static function table(Table $table): Table
{
  return $table
    ->filters([
      SelectFilter::make('post_id')
      ->relationship('posts', 'title')
      ->multiple()
      ->label('Publicaciones'),
    ]);
}
```

- **BelongsToManySelect**: Se utiliza para relaciones de muchos a muchos. Permite seleccionar múltiples opciones de una lista desplegable vinculada a múltiples entidades relacionadas a través de una tabla intermedia.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use App\Models\Role;

public static function table(Table $table): Table
{
  return $table
    ->filters([
      SelectFilter::make('role_id')
      ->relationship('roles', 'name')
      ->multiple()
      ->label('Roles'),
    ]);
}
```

- **MorphToManySelect**: Para relaciones polimórficas morphToMany, permite seleccionar múltiples opciones de una lista desplegable vinculada a diferentes tipos de entidades relacionadas.

- **MorphedByManySelect**: Similar al selector MorphToManySelect, pero para el lado inverso de la relación polimórfica.

- **EnumSelect**: Utilizado para campos que tienen un conjunto finito de valores, como enumeraciones. Permite al usuario seleccionar una opción de una lista desplegable basada en los valores definidos en el campo.

``` php
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use App\Enums\PostStatus;

public static function table(Table $table): Table
{
  return $table
    ->filters([
      SelectFilter::make('status')
      ->options(PostStatus::asSelectArray())
      ->label('Estado'),
    ]);
}
```

Estos selectores se pueden personalizar aún más con varios métodos para ajustar su comportamiento, como `preload()`, `attribute()`, `getOptionLabelUsing()`, y `getSearchResultsUsing()`, entre otros.
