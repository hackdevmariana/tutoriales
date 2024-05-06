# Principales ficheros y directorios en un proyecto Laravel

En un proyecto Laravel, hay varios directorios y archivos importantes que forman parte de la estructura estándar del framework.

## Directorios

Aquí hay una descripción de los principales directorios en un proyecto Laravel:

**app**: Este directorio contiene la lógica de la aplicación. Aquí es donde se encuentran los modelos, controladores, clases de servicio y otros archivos relacionados con la lógica de negocio de la aplicación.

**bootstrap**: Contiene los archivos necesarios para iniciar la aplicación, como el archivo app.php, que carga y configura la aplicación Laravel.

**config**: En este directorio se encuentran todos los archivos de configuración de la aplicación, como las configuraciones de la base de datos, la autenticación, el correo electrónico, etc.

**database**: Aquí se encuentran las migraciones de base de datos y los `seeds` (datos de prueba). Las migraciones se utilizan para modificar la estructura de la base de datos de manera controlada y reversible.

**public**: Este es el directorio raíz de la aplicación web y contiene los archivos públicos accesibles desde el navegador, como los archivos CSS, JavaScript y los activos compilados.

**resources**: Aquí se almacenan los recursos que serán compilados, como las vistas de Blade (archivos `.blade.php`), los archivos de traducción, los archivos de estilos (CSS) y los archivos de scripts (JavaScript).

**routes**: Contiene los archivos de definición de rutas de la aplicación. Las rutas definen cómo se responde a las solicitudes HTTP y se relacionan con los controladores correspondientes.

**storage**: Este directorio es utilizado para almacenar archivos generados dinámicamente por la aplicación, como archivos de registro, archivos temporales y archivos cargados por los usuarios.

**tests**: Aquí se encuentran los archivos de pruebas de la aplicación, incluidas las pruebas unitarias y las pruebas de características (también conocidas como pruebas de integración).

**vendor**: Este es el directorio donde Composer instala las dependencias de la aplicación, incluido el propio Laravel y cualquier otra biblioteca de terceros utilizada en el proyecto.

## Ficheros

Además de estos directorios, hay algunos archivos principales en un proyecto Laravel:

**.env**: Este archivo contiene la configuración de entorno de la aplicación, como la configuración de la base de datos, la configuración de correo electrónico y otras variables de entorno.

**composer.json** y **composer.lock**: Estos archivos son utilizados por Composer para administrar las dependencias del proyecto y asegurar que las versiones específicas de las bibliotecas sean instaladas.

**artisan**: Este es el script de la línea de comandos de Laravel. Se utiliza para realizar tareas comunes de desarrollo, como la ejecución de migraciones, la generación de controladores y modelos, entre otros.
