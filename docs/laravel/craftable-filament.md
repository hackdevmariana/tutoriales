# Usar FilamentPHP y Craftable en el mismo proyecto

Podemos tener FilamentPHP y Craftable en el mismo proyecto de Laravel y acceder a ellos a través de diferentes rutas, como [http://localhost:8000/craftable](http://localhost:8000/craftable) para Craftable y [http://localhost:8000/dashboard](http://localhost:8000/dashboard) para FilamentPHP, si ambos paquetes están instalados en el proyecto Laravel.

## Instalar y crear proyecto Laravel

``` sh
composer create-project laravel/laravel myproject
```

Vamos al directorio del proyecto:

``` sh
cd myproject
```

Y comprobamos que funciona:

``` sh
php artisan serve
```

## Configurar Laravel

En el fichero .env del proyecto Laravel, añadimos la base de datos a utilizar:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_project
DB_USERNAME=root
DB_PASSWORD=root_password
```

Y lanzamos la migración:

``` sh
php artisan migrate
```

## Instalar Craftable

Si la versión de Laravel es mayor que la 9, dejamos psr/simple-cache en la versión 2.0:

``` sh
composer require psr/simple-cache:^2.0 maatwebsite/excel
```

Descargamos Craftable:

``` sh
composer require brackets/craftable
```

Descargamos admin-generator:

``` sh
composer require --dev brackets/admin-generator
```

Y los instalamos:

``` sh
php artisan craftable:install
```

Nos devolverá una línea como esta:

```
Admin password is: YXa4j7uUQG
```

Esa será la contraseña por defecto del panel de administración (luego la podremos cambiar).

Necesitamos compilar todos los recursos usando npm.

Si estamos utilizando Laravel con Webpack:

``` sh
npm install && npm run dev
```

Si estamos utilizando Laravel con Vite, Craftable agregará Webpack para la generación de recursos administrativos:

``` sh
npm install && npm run craftable-dev
```

Podemos comprobar que funciona la instalación yendo a la URL del proyecto y añadiendo al final /admin. Por ejemplo:

[http://localhost:8000/admin/](http://localhost:8000/admin/)

Como nombre de usuario, escribiremos `administrator@brackets.sk` y la contraseña que nos ha generado Craftable en la instalación.

## Cambiar la ruta de Craftable

Por motivos de seguridad, o de comodidad, podemos cambiar la ruta de Craftable. Para ello, debemos definir las rutas en los archivos de rutas de Laravel (`routes/web.php`) para apuntar a los controladores o acciones correspondientes de cada panel de administración.

Una vez instalado Craftable, tendremos un fichero routes/web.php similar a esto:

``` php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/* Auto-generated admin routes */
Route::middleware(['auth:' . config('admin-auth.defaults.guard'), 'admin'])->group(static function () {
    Route::prefix('admin')->namespace('App\Http\Controllers\Admin')->name('admin/')->group(static function() {
        Route::prefix('admin-users')->name('admin-users/')->group(static function() {
            Route::get('/',                                             'AdminUsersController@index')->name('index');
            Route::get('/create',                                       'AdminUsersController@create')->name('create');
            Route::post('/',                                            'AdminUsersController@store')->name('store');
            Route::get('/{adminUser}/impersonal-login',                 'AdminUsersController@impersonalLogin')->name('impersonal-login');
            Route::get('/{adminUser}/edit',                             'AdminUsersController@edit')->name('edit');
            Route::post('/{adminUser}',                                 'AdminUsersController@update')->name('update');
            Route::delete('/{adminUser}',                               'AdminUsersController@destroy')->name('destroy');
            Route::get('/{adminUser}/resend-activation',                'AdminUsersController@resendActivationEmail')->name('resendActivationEmail');
        });
    });
});

/* Auto-generated admin routes */
Route::middleware(['auth:' . config('admin-auth.defaults.guard'), 'admin'])->group(static function () {
    Route::prefix('admin')->namespace('App\Http\Controllers\Admin')->name('admin/')->group(static function() {
        Route::get('/profile',                                      'ProfileController@editProfile')->name('edit-profile');
        Route::post('/profile',                                     'ProfileController@updateProfile')->name('update-profile');
        Route::get('/password',                                     'ProfileController@editPassword')->name('edit-password');
        Route::post('/password',                                    'ProfileController@updatePassword')->name('update-password');
    });
});
````

Para cambiar de tal forma que el panel de Craftable esté en /craftable, deberemos modificar las líneas que contengan el prefijo de admin por algo así:

``` php
Route::prefix('craftable')->group(function () {
// Aquí van las rutas de Craftable
});
```

Hay que tener en cuenta que, en Laravel, el nombre de las rutas se define con un punto como separador, no con una barra. Así que en lugar de name('craftable/') deberíamos tener name('craftable.')

Por lo tanto, el fichero routes/web.php debería quedar algo así:

```PHP
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:' . config('admin-auth.defaults.guard'), 'admin'])->group(static function () {
    Route::prefix('craftable')->namespace('App\Http\Controllers\Admin')->name('craftable.')->group(static function() {
        // Ruta para la página de inicio de Craftable
        Route::get('/', 'AdminUsersController@index')->name('index');

        // Otras rutas de Craftable con el prefijo craftable
        Route::prefix('admin-users')->name('admin-users.')->group(static function() {
            Route::get('/create', 'AdminUsersController@create')->name('create');
            Route::post('/', 'AdminUsersController@store')->name('store');
            Route::get('/{adminUser}/impersonal-login', 'AdminUsersController@impersonalLogin')->name('impersonal-login');
            Route::get('/{adminUser}/edit', 'AdminUsersController@edit')->name('edit');
            Route::post('/{adminUser}', 'AdminUsersController@update')->name('update');
            Route::delete('/{adminUser}', 'AdminUsersController@destroy')->name('destroy');
            Route::get('/{adminUser}/resend-activation', 'AdminUsersController@resendActivationEmail')->name('resendActivationEmail');
        });

        // Ajustar otras rutas de Craftable para usar el prefijo craftable
        Route::prefix('profile')->name('profile.')->group(static function() {
            Route::get('/', 'ProfileController@editProfile')->name('edit-profile');
            Route::post('/', 'ProfileController@updateProfile')->name('update-profile');
        });

        Route::prefix('password')->name('password.')->group(static function() {
            Route::get('/', 'ProfileController@editPassword')->name('edit-password');
            Route::post('/', 'ProfileController@updatePassword')->name('update-password');
        });

        // Otras rutas de Craftable
    });
});
```


Después, para poder probarlo, deberemos limpiar la caché de las rutas:

``` sh
php artisan route:cache
```

Es posible que, una vez dentro del panel de control nos encontremos con que los enlaces internos apunten a /admin/ en lugar de a /craftable/. Si es así, podemos editar el fichero /vendor/brackets/routes/web.php, cambiando de algo así:

```php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['web'])->group(static function () {
    Route::namespace('Brackets\AdminAuth\Http\Controllers\Auth')->group(static function () {
        Route::get('/admin/login', 'LoginController@showLoginForm')->name('brackets/admin-auth::admin/login');
        Route::post('/admin/login', 'LoginController@login');

        Route::any('/admin/logout', 'LoginController@logout')->name('brackets/admin-auth::admin/logout');

        Route::get('/admin/password-reset', 'ForgotPasswordController@showLinkRequestForm')->name('brackets/admin-auth::admin/password/showForgotForm');
        Route::post('/admin/password-reset/send', 'ForgotPasswordController@sendResetLinkEmail');
        Route::get('/admin/password-reset/{token}', 'ResetPasswordController@showResetForm')->name('brackets/admin-auth::admin/password/showResetForm');
        Route::post('/admin/password-reset/reset', 'ResetPasswordController@reset');

        Route::get('/admin/activation/{token}', 'ActivationController@activate')->name('brackets/admin-auth::admin/activation/activate');
    });
});

Route::middleware(['web', 'admin', 'auth:' . config('admin-auth.defaults.guard')])->group(static function () {
    Route::namespace('Brackets\AdminAuth\Http\Controllers')->group(static function () {
        Route::get('/admin', 'AdminHomepageController@index')->name('brackets/admin-auth::admin');
    });
});
```

Lo cambiamos por las rutas con `craftable`:

``` php
<?php

return [

    /*
    |
    | This option controls which defaults are used for admin users
    |
    */

    'defaults' => [
        'guard' => 'admin',
        'passwords' => 'admin_users',
        'activations' => 'admin_users',
    ],

    /*
    |
    | This option controls if Login should check also forbidden key
    |
    */

    'check_forbidden' => env('FORBIDDEN_ENABLED', false),

    /*
    |
    | This option controls if Login should check also enabled key
    |
    */

    'activation_enabled' => env('ACTIVATION_ENABLED', false),

    /*
    |--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------
    |
    | This option controls the url for redirect after login
    |
    */

    'login_redirect' => '/craftable',

    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    |
    | This option controls the url for redirect after logout
    |
    */

    'logout_redirect' => '/craftable/login',

    /*
    |--------------------------------------------------------------------------
    | Password reset
    |--------------------------------------------------------------------------
    |
    | This option controls the url for redirect after password reset
    |
    */

    'password_reset_redirect' => '/craftable/login',

    /*
    |--------------------------------------------------------------------------
    | Activations
    |--------------------------------------------------------------------------
    |
    | This options controls if activation is required or not
    | And the activation redirect controls where to redirect after activation
    |
    */

    'activation_redirect' => '/craftable/login',

    /*
    |
    | This option handles the self activation form accessibility.
    |
    */

    'self_activation_form_enabled' => true,

    /*
    |--------------------------------------------------------------------------
    | Routes
    |--------------------------------------------------------------------------
    |
    | This option controls if package routes are used or not
    |
    */

    'use_routes' => true,
];
```




Y la ruta para FilamentPHP:

``` php
Route::prefix('dashboard')->group(function () {
// Aquí van las rutas de FilamentPHP
});
```

1.
Configurar los middlewares: Si es necesario, configura los middlewares adecuados para cada panel para manejar la autenticación y cualquier otra lógica de control de acceso.
2.
Publicar y personalizar las configuraciones: Si ambos paquetes ofrecen la opción de publicar sus archivos de configuración, hazlo y ajusta las configuraciones para que no entren en conflicto entre sí, especialmente si hay alguna sobreposición en nombres de rutas o funcionalidades.
3.
Probar las rutas: Después de configurar, asegúrate de probar las rutas para verificar que puedes acceder a cada panel de administración a través de las URLs especificadas.
