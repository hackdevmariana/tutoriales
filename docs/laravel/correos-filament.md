# Envío de correos en FilamentPHP

Para crear un servicio de alertas por correo en Laravel utilizando un servicio externo, como Mailgun, debemos, primero, crear una cuenta en [Mailgun](https://www.mailgun.com/es/).

Daremos de alta el correo donde vamos a recibir los correos en "Authorized Recipients".

Una vez conseguidos los credenciales, necesitamos configurar Mailgun en la aplicación Laravel. Abrimos el archivo `.env` y configuramos las siguientes variables de entorno con las credenciales proporcionadas por Mailgun:

``` txt
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=your-mailgun-smtp-username
MAIL_PASSWORD=your-mailgun-smtp-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email-address
MAIL_FROM_NAME="${APP_NAME}"
```

Una vez configurado `.env`, creamos una `Mailable`. Una Mailable es una clase que representa un correo electrónico en Laravel. Podemos generar una Mailable utilizando el comando Artisan:

``` php
php artisan make:mail AlertMail
```

Esto creará una nueva clase `AlertMail` en el directorio `app/Mail` (`app/Mail/AlertMail.php`). Dentro de esta clase, podemos personalizar el contenido del correo electrónico que se enviará. Por defecto:

``` php
public function content(): Content
{
    return new Content(
        view: 'view.name',
    );
}
```

Esto enviaría por correo la plantilla `resources/views/name.blade.php`, que no existe por defecto.

Podemos crear `resources/views/mail/alert.blade.php` y configurar ahí la plantilla.

Creamos el directorio:

``` sh
mkdir resources/views/mail/
```

Y el fichero:

``` sh
touch resources/views/mail/alert.blade.php
```

Y podemos añadir algo como:

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Alert Email</title>
</head>
<body>
    <h1>¡Alerta!</h1>
    <p>Este es un correo de alerta.</p>
</body>
</html>
```

Para indicar que queremos esta vista, escribiremos en `app/Mail/AlertMail.php`:

``` php
public function content(): Content
{
    return new Content(
        view: 'mail.alert',
    );
}
```

Luego, pasaremos a configurar la lógica de alerta en la aplicación, donde determinaremos el escenario en el que deseamos enviar una alerta por correo electrónico.

Por ejemplo, si deseamos enviar una alerta cuando un evento ocurra, podemos agregar la lógica de alerta en el controlador o en el servicio correspondiente:

``` php
use App\Mail\AlertMail;
use Illuminate\Support\Facades\Mail;

// Dentro de un método de un controlador o servicio
public function sendAlert()
{
    // Lógica para determinar cuándo enviar una alerta

    // Envío de la alerta por correo electrónico
    $recipient = 'recipient@example.com';
    Mail::to($recipient)->send(new AlertMail());
}
```

Dentro de la clase `AlertMail`, podemos personalizar el contenido del correo electrónico y cualquier otro aspecto relacionado con el envío del correo. Por ejemplo:

``` php
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AlertMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(config('mail.from.address'))
                    ->subject('Alerta Importante')
                    ->view('emails.alert');
    }
}
```

También podemos crear una vista (opcional), si deseamos personalizar el contenido del correo electrónico.

Utilizando una plantilla Blade, podemos crear una vista en el directorio `resources/views/emails`. Por ejemplo, creamos un archivo `alert.blade.php` con el contenido del correo electrónico.

Para probar el envío de correo electrónico, podemos llamar al método `sendAlert` que hemos creado anteriormente desde una ruta o un controlador en la aplicación y verificar si el correo electrónico se envía correctamente:

```php
Route::get('/send-alert', function () {
    app()->make('App\Http\Controllers\YourController')->sendAlert();
});
```

O crear un comando con:

``` php
php artisan make:command TestEmail
```

Y editar el fichero del comando (`app/Console/Commands/TestEmail.php`) dejándolo algo así:


``` php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Mail\AlertMail;
use Mail;

class TestEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:testemail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send test email';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $user = User::find(2);
        Mail::to($user)->send(new AlertMail);
    }
}
```
