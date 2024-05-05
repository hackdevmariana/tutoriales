# Cómo crear paneles personalizados para usuarios de FilamentPHP

Documentación: [https://filamentphp.com/docs/3.x/panels/getting-started](https://filamentphp.com/docs/3.x/panels/getting-started)

Para crear paneles personalizados, por ejemplo, para editar artículos, podemos usar el comando:

``` php
php artisan make:filament-panel editor
```

Que nos devuelve un mensaje de aviso:

```
WARN  We've attempted to register the EditorPanelProvider in your [config/app.php] file as a service provider. If you get an error while trying to access your panel then this process has probably failed. You can manually register the service provider by adding it to the [providers] array.
```

Algo así como:

```
ADVERTENCIA Hemos intentado registrar EditorPanelProvider en su archivo [config/app.php] como proveedor de servicios. Si recibe un error al intentar acceder a su panel, es probable que este proceso haya fallado. Puede registrar manualmente el proveedor de servicios agregándolo a la matriz [proveedores].
```

Así que comprobamos en `config/app.php` si lo ha agregado bien con la línea:

``` php
App\Providers\Filament\EditorPanelProvider::class,
```

Y si existe el fichero `app/Providers/Filament/EditorPanelProvider.php`.

Si todo esto existe, deberemos añadir en ese fichero, para poder acceder al panel `->login()` en la zona de `return $panel`. Si queremos que este sea el panel por defecto, lo indicaremos con `->default()`.

Para limpiar los widgets que aparecen en la página por defecto, podemos hacerlo en el apartado widgets, borrando o comentando el código:

``` php
->widgets([
    // Widgets\AccountWidget::class,
    // Widgets\FilamentInfoWidget::class,
])
```

En los resources, cuando queramos que el panel muestre sólo la información referida a ese usuario, usaremos:

``` php
public static function getEloquentQuery(): Builder
{
    return parent::getEloquentQuery()->where('user_id', Auth::user()->id);
}
```

Para autorrellenar datos requeridos en un modelo, pero que el usuario no tiene por qué rellenarlos, ya que son referentes a sí mismo, como el autor de un artículo, podemo usar en `CreateArticle.php`:

``` php
protected function mutateFormDataBeforeCreate(array $data): array
{
    $data['user_id'] = Auth::user()->id;

    return $data;
}
```

La función `mutateFormDataBeforeCreate` permite añadir nuevos campos antes de enviar a la base de datos.


Para que, al crear un registro vaya al listado de datos, escribiremos en el recurso:

```php
protected function getRedirectUrl(): string
{
    return $this->getResource()::getUrl('index');
}
```
