# Controladores
Los controladores en Laravel son clases que manejan las solicitudes HTTP y contienen la lógica de la aplicación.

Proporcionan un punto centralizado para organizar y manejar la lógica de la aplicación relacionada con un conjunto específico de rutas. Los controladores se encargan de procesar las solicitudes entrantes, interactuar con los modelos para recuperar o modificar datos y devolver una respuesta adecuada al cliente.

Se almacenan en `app/Http/Controllers`.

Creación:

``` php
php artisan make:controller UserController
```

Se invoca desde las vistas con:

``` php
use App\Http\Controllers\UserController;

Route::get('users', [UserController::class, 'index'])
```

## Características clave de los controladores en Laravel

- **Métodos de acción**: Los controladores contienen métodos de acción que definen cómo responder a diferentes tipos de solicitudes HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.). Cada método de acción generalmente corresponde a una ruta en el archivo de rutas de Laravel.

- **Interacción con modelos**: Los controladores a menudo interactúan con los modelos para recuperar datos de la base de datos, actualizarlos o eliminarlos según sea necesario. Esto ayuda a mantener separada la lógica de la aplicación de la capa de presentación.

- **Lógica de la aplicación**: Los controladores encapsulan la lógica de la aplicación, lo que facilita la reutilización del código y el mantenimiento de la aplicación. La lógica relacionada con la autenticación, la validación de formularios, la autorización y otros aspectos de la aplicación se puede centralizar en los controladores.

- **Respuestas HTTP**: Los controladores devuelven respuestas HTTP al cliente, que pueden ser vistas renderizadas, redirecciones, respuestas JSON u otro tipo de respuesta según sea necesario.


## Ejemplo simple de un controlador en Laravel

``` php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', ['users' => $users]);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return view('users.show', ['user' => $user]);
    }

    public function store(Request $request)
    {
        // Validar los datos del formulario
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        // Crear un nuevo usuario
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        // Redireccionar a la página de perfil del usuario
        return redirect()->route('users.show', $user->id);
    }

    // Otros métodos de acción como update() y destroy() también se pueden definir aquí
}
```

En este ejemplo, el controlador `UserController` maneja las solicitudes relacionadas con los usuarios. Tiene métodos de acción como `index()` para mostrar una lista de usuarios, `show()` para mostrar un usuario específico y `store()` para almacenar un nuevo usuario en la base de datos.
