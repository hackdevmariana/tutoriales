# Instalar entorno de desarrollo para Laravel en Ubuntu

Primero, actualizaremos los paquetes disponibles y sus versiones:

``` sh
sudo apt update
```

## Instalar PHP

Instalamos los paquetes necesarios de PHP:

``` sh
sudo apt install php php-cli php-fpm php-json php-common php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath
```

Comprobamos que se ha instalado correctamente PHP:

``` sh
php -v
```

Que nos devolverá algo así:

```
PHP 8.1.2-1ubuntu2.15 (cli) (built: Feb 23 2024 17:26:53) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.2, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.2-1ubuntu2.15, Copyright (c), by Zend Technologies
```

También podemos probar la instalación desde un navegador visitando [http://localhost/](http://localhost/).

## Instalar MySQL

Si tenemos correctamente instalado PHP, procedemos a instalar MySQL:

``` sh
sudo apt install mysql-server
```

Comprobamos que se ha instalado bien:

``` sh
mysql --version
```

Que nos devolverá algo como:

```
mysql  Ver 8.0.36-0ubuntu0.22.04.1 for Linux on x86_64 ((Ubuntu))
```

Instalamos el script de seguridad de MySQL.

``` sh
sudo mysql_secure_installation
```

Mostrará algo como:

```
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No:
```

Este componente ayuda a asegurar que las contraseñas utilizadas sean fuertes y seguras. Pulsamos `Y` y le damos al `Enter`.

Después de habilitar VALIDATE PASSWORD, MySQL pedirá que elijamos el nivel de validación de contraseña. Los niveles disponibles son:

- LOW

- MEDIUM

- STRONG

Seleccionamos el nivel que prefiramos según la seguridad que deseemos implementar.

```
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:
```

Para una instalación local, especialmente si es para desarrollo y pruebas, el nivel LOW de la política de validación de contraseñas puede ser suficiente. Esto requiere que la contraseña tenga una longitud de al menos 8 caracteres.

Sin embargo, es una buena práctica acostumbrarse a utilizar políticas de seguridad más estrictas, como MEDIUM o STRONG, para prepararse para entornos de producción y fomentar hábitos de seguridad consistentes.

Para utilizar el nivel LOW, simplemente escribimos 0 cuando la instalación lo solicite.

Pero si en algún momento llevamos la aplicación a un entorno de producción o accesible públicamente, consideraremos usar un nivel de seguridad más alto para proteger mejor los datos.

La siguiente opción a elegir es si queremos eliminar los usuarios anónimos:

```
Skipping password set for root as authentication with auth_socket is used by default.
If you would like to use password authentication instead, this can be done with the "ALTER_USER" command.
See https://dev.mysql.com/doc/refman/8.0/en/alter-user.html#alter-user-password-management for more information.

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) :
```

Es muy recomendable eliminar los usuarios anónimos en MySQL, especialmente si planeamos utilizar la base de datos en un entorno de producción en el futuro.

Los usuarios anónimos pueden representar un riesgo de seguridad porque permiten el acceso a la base de datos sin necesidad de autenticación.

Para eliminar los usuarios anónimos, presionamos `Y` y luego `Enter`. Esto asegurará que solo los usuarios autenticados con los permisos adecuados puedan acceder a la base de datos MySQL.

Además, si queremos usar la autenticación por contraseña en lugar de `auth_socket`, podemos cambiar el método de autenticación para el usuario `root` utilizando el comando `ALTER USER`, como se indica en la documentación de MySQL. Esto permitirá establecer una contraseña para el usuario root, lo cual es una práctica común de seguridad.

Un ejemplo de cómo hacerlo:

``` sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nueva_contraseña';
```

Después de realizar el cambio de contraseña, hay que asegurarse de reiniciar el servicio de MySQL para que los cambios surtan efecto.

El siguiente paso es decidir si se restringe el inidio de sesión remoto al usuario `root`.

```
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) :
```

Es una buena práctica de seguridad restringir el inicio de sesión remoto del usuario root. Esto limita el acceso al usuario root solo desde el '`localhost`', lo cual reduce significativamente la superficie de ataque y la posibilidad de que alguien intente adivinar la contraseña del root desde la red.

Para deshabilitar el inicio de sesión remoto del usuario root, presionamos `Y` y luego `Enter`. Esto configurará MySQL para que el usuario root solo pueda conectarse desde la máquina local, lo cual es adecuado para la mayoría de los entornos de desarrollo y producción.

Recordemos que siempre podemos crear usuarios adicionales con permisos específicos si necesitamos acceso remoto a la base de datos para tareas administrativas o de desarrollo.

La siguiente pregunta es si queremos eliminar la base de datos de prueba y el acceso a ella. Esta base de datos 'test' es accesible por defecto para cualquier usuario, lo cual no es adecuado para un entorno de producción debido a posibles riesgos de seguridad, aunque puede ser usada en un entorno de desarrollo. Aunque, para mayor seguridad, mejor eliminarla:

```
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.

Remove test database and access to it? (Press y|Y for Yes, any other key for No) :
```

Para eliminar la base de datos de prueba y restringir el acceso a ella, presionamos `Y` y luego `Enter`. Esto ayudará a asegurar que sólo las bases de datos autorizadas sean accesibles y evitará que usuarios no deseados puedan interactuar con tus bases de datos en MySQL.

Estas medidas de seguridad son pasos importantes para proteger el entorno de desarrollo y prepararlo para un futuro despliegue en producción.

Por último, nos pregunta si queremos recargar las tablas de privilegios para asegurarnos de que todos los cambios realizados hasta ahora surtan efecto inmediatamente. Esto es especialmente importante después de realizar cambios de seguridad y permisos en MySQL.

```
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) :
```

Para recargar las tablas de privilegios, presionamos `Y` y luego `Enter`. Esto ejecutará el comando

``` sql
FLUSH PRIVILEGES
```

que aplicará todos los nuevos privilegios y configuraciones de seguridad que hemos establecido durante el proceso de instalación y configuración de MySQL.

Recargar las tablas de privilegios es un paso final crucial para completar la configuración segura de un servidor MySQL.

Si todo ha funcionado correctamente, MySQL devolverá un mensaje de confirmación como este:

```
All done!
```

## Instalar PHPMyAdmin

Para instalar PHPMyAdmin con apt, usaremos el siguiente comando:

``` sh
sudo apt install phpmyadmin
```

Nos pregunta si usamos Apache, Ngix u otro servidor web. Elegimos el que tengamos instalado.

Después, pregunta:

```
El paquete phpmyadmin debe tener una base de datos instalada y configurada antes de poder ser utilizado. Puede gestionar esto opcionalmente a través
 «dbconfig-common».  

Debería rechazar esta opción si es Vd. un administrador de bases de datos avanzado y desea realizar esta configuración manualmente, o si la base de datos ya está instalada y configurada. Probablemente podrá encontrar los detalles de las operaciones que debe realizar en «/usr/share/doc/phpmyadmin».

Debería escoger esta opción en cualquier otro caso.

¿Desea configurar la base de datos para phpmyadmin con «dbconfig-common»?  
```

Para configurar con `dbconfig-common`, pulsaremos en el botón de `Yes`.

Nos pide una contraseña para que PHPMyAdmin se conecte a la base de datos.

Si le indicamos una contraseña poco segura, puede que nos de un error como este:

```
Se ha producido un error al instalar la base de datos:  

mysql said: ERROR 1819 (HY000) at line 1: Your password does not satisfy the current policy requirements

Sus opciones son:

* interrumpir - Hace que esta operación falle. Tendrá que instalar una versión anterior, reinstalar, reconfigurar el paquete o hacer alguna otra intervención manual antes de continuar. Habitualmente esto le impedirá instalar otros paquetes hasta que resuelva el fallo de instalación.                              
* reintentar - Vuelve a hacer las preguntas de configuración (incluyendo las que se han omitido debido a la configuración de prioridad de debconf) y hace otro intento para realizar la operación.  
* reintentar (omitir preguntas) - Intenta la operación de nuevo inmediatamente, omitiendo todas las preguntas. Esta opción es útil si ya ha resuelto el problema subyacente desde que se produjo el error.                                                                                      │
* ignorar - Continua la operación ignorando los errores de dbconfig-common. Por regla general hacer esto dejará el paquete sin una base de datos operativa.

Paso siguiente para la instalación de la base de datos:
interrumpir
reintentar
reintentar (omitir la pregunta)
ignorar

<Ok>
```       

Podemos ver la política de contraseñas entrando en la consola de MySQL:

``` sh
sudo mysql -u root -p
```                  

Y usando el comando:

``` sql
SHOW VARIABLES LIKE 'validate_password%';
```

Suponiendo que devuelva algo así:

```
mysql> SHOW VARIABLES LIKE 'validate_password%';
+-------------------------------------------------+-------+
| Variable_name                                   | Value |
+-------------------------------------------------+-------+
| validate_password.changed_characters_percentage | 0     |
| validate_password.check_user_name               | ON    |
| validate_password.dictionary_file               |       |
| validate_password.length                        | 8     |
| validate_password.mixed_case_count              | 1     |
| validate_password.number_count                  | 1     |
| validate_password.policy                        | LOW   |
| validate_password.special_char_count            | 1     |
+-------------------------------------------------+-------+
8 rows in set (0,00 sec)
```

Nos indicaría que la política de contraseñas del servidor MySQL está establecida en `LOW`, lo que generalmente requiere lo siguiente:

- Longitud mínima de la contraseña: 8 caracteres.

- Cantidad de caracteres en mayúscula y minúscula: Al menos 1 de cada uno.

- Cantidad de números: Al menos 1.

- Cantidad de caracteres especiales: Al menos 1.

Podemos comprobar que acepta una determinada contraseña creando un usuario de prueba con:

``` sql
CREATE USER 'usuario_prueba'@'localhost' IDENTIFIED BY 'contraseña_segura';
```

Si nos devuelve algo así:

```
Query OK, 0 rows affected (0,00 sec)
```

Es que se ha creado correctamente ese usuario. Podemos comprobarlo con:

``` sql
SELECT user FROM mysql.user WHERE user = 'usuario_prueba';
```

Que devolverá algo así como:

```
+----------------+
| user           |
+----------------+
| usuario_prueba |
+----------------+
1 row in set (0,00 sec)
```

En caso de que siga dando problemas, podemos crear del mismo modo el usuario 'phpmyadmin':

``` sql
CREATE USER 'phpmyadmin'@'localhost' IDENTIFIED BY 'w1Dv06@nA~sH';
```

Para salir de la consola de MySQL, podemos usar:
``` sql
quit
```

o

``` sql
exit
```

Y continuar con la instalación.

## Configurar PHPMyAdmin para acceder desde el navegador

Para configurar PHPMyAdmin con nginx, deberemos crear un enlace simbólico al directorio `/usr/share/phpmyadmin/`:

``` sh
sudo ln -s /usr/share/phpmyadmin /var/www/html
```

Configuramos `nginx` añadiendo un bloque de configuración para PHPMyAdmin en el archivo de configuración de nginx. Podemos hacer esto editando el archivo de configuración del sitio (por ejemplo, `/etc/nginx/sites-available/default`):

``` sh
sudo vi /etc/nginx/sites-available/default
```

Y añadiendo esto:

```
server {
  listen 80;
  server_name _;

  root /var/www/html;
  index index.php index.html index.htm;

  location /phpmyadmin {
    root /usr/share/;
    index index.php index.html index.htm;
    location ~ ^/phpmyadmin/(.+\.php)$ {
      try_files $uri =404;
      fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
    }
    location ~* ^/phpmyadmin/(.+\.jpg|jpeg|gif|css|png|js|ico|html|xml|txt)$ {
      root /usr/share/;
    }
  }
}
```

Asegunrándonos de que `/var/run/php/php8.1-fpm.sock` es el socket de PHP-FPM que estamos usando.

Reiniciamos nginx:

``` sh
sudo systemctl restart nginx
```

Y accedemos mediante [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/).

## Crear un administrador para PHPMyAdmin

Accedemos a la consola de MySQL:

``` sh
mysql -u root -p
```

En caso de que no nos deje entrar, entraremos como root del sistema:

``` sh
sudo mysql -u root
```

Y cambiamos la contraseña:

``` sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nueva_contraseña';
```

Aplicamos los cambios:

``` sql
FLUSH PRIVILEGES;
```

Ya podremos entrar con:

``` sh
sudo mysql -u root
```

Creamos un administrador:

``` sql
CREATE USER 'administrador'@'localhost' IDENTIFIED BY 'contraseña';
```

Le damos permisos:

``` sql
GRANT ALL PRIVILEGES ON *.* TO 'administrador'@'localhost' WITH GRANT OPTION;
```

Y aplicamos los cambios:

``` sql
FLUSH PRIVILEGES;
```

## Instalación de composer

Actualizamos los paquetes del sistema:

``` sh
sudo apt update
```

Instalamos los paquetes necesarios con:

``` sh
sudo apt install php-cli unzip
```

Descargamos `composer` con:

``` sh
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
```

Y comprobamos que el Hash es correcto:

``` sh
HASH=`curl -sS https://composer.github.io/installer.sig`
php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('/tmp/composer-setup.php'); } echo PHP_EOL;"
```

Si devuelve:

```
Installer verified
```

Podemos proceder a instalar con:

``` sh
sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Que nos debería devolver algo así:

```
All settings correct for using Composer
Downloading...

Composer (version 2.7.3) successfully installed to: /usr/local/bin/composer
Use it: php /usr/local/bin/composer
```

Comprobamos que funciona:

``` sh
composer --version
```

## Instalación de Laravel

Vamos al directorio raíz del servidor web:

``` sh
cd /var/www/html
```

E instalamos la última versión de Laravel:

``` sh
composer create-project --prefer-dist laravel/laravel nombre_del_proyecto
```

## Configuración de nginx para mostrar el proyecto

Editamos el fichero `/etc/nginx/sites-available/default` con permisos de administrador:

``` sh
sudo vi /etc/nginx/sites-available/default
```

Y añadimos:

```
location /nombre_del_proyecto {
  root /var/www/html/nombre_del_proyecto/public;
  index index.php index.html index.htm;
  location ~ ^/nombre_del_proyecto/(.+\.php)$ {
    try_files $uri =404;
    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock; # Asegúrate de usar la versión correcta de PHP
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
  }
    location ~* ^/nombre_del_proyecto/(.+\.jpg|jpeg|gif|css|png|js|ico|html|xml|txt)$ {
    root /var/www/html/nombre_del_proyecto/public/;
  }
}
location @nombre_del_proyecto {
    rewrite /nombre_del_proyecto/(.*)$ /nombre_del_proyecto/index.php?$1 last;
}
```

En nginx, las ubicaciones nombradas (named locations) solo pueden definirse a nivel de servidor (server level) y no dentro de bloques de ubicación (location blocks). Por lo tanto, tenemos que escribir los bloques `location /nombre_del_proyecto` y `location @nombre_del_proyecto` al mismo nivel, no uno dentro de otro.

Para comprobar que hemos escrito bien el fichero de configuración, podemos usar:

``` sh
sudo nginx -t
```

Si devuelve algo como:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Es que todo ha ido correctamente y podemos reiniciar el servidor:

``` sh
sudo systemctl restart nginx
```

Y ya podremos acceder mediante el enlace [http://localhost/nombre_del_proyecto](http://localhost/nombre_del_proyecto).

## Uso del servidor de desarrollo

Si no queremos configurar nginx o Apache, podemos usar el servidor de desarrollo que incluye Laravel:

``` sh
php artisan serve
```

Y usar la dirección que indique el comando. Por defecto: [http://127.0.0.1:8000/](http://127.0.0.1:8000/).
