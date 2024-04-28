# Simplificar los CRUDs en Laravel con Craftable

Craftable es una herramienta de desarrollo diseñada para acelerar el proceso de creación de aplicaciones web con Laravel. Ofrece una serie de características y funcionalidades que simplifican y agilizan el desarrollo de aplicaciones Laravel, especialmente aplicaciones de tipo `CRUD` (Create, Read, Update, Delete).

Craftable proporciona generadores de código que permiten crear rápidamente CRUD (Crear, Leer, Actualizar, Eliminar) para los modelos de una aplicación Laravel. Estos generadores crean controladores, rutas, vistas y formularios automáticamente, lo que ahorra tiempo y esfuerzo durante el desarrollo.

Incluye un panel de administración prediseñado y flexible que se puede personalizar según las necesidades del proyecto. Este panel de administración proporciona una interfaz intuitiva para gestionar los datos de la aplicación, incluyendo la capacidad de crear, editar y eliminar registros de base de datos.

Craftable está diseñado para trabajar bien con Vue.js, lo que permite crear interfaces de usuario interactivas y dinámicas para una aplicación Laravel. Podemos integrar fácilmente componentes Vue.js en las vistas de Craftable para mejorar la experiencia del usuario.

Autenticación y autorización integradas: Craftable proporciona características integradas de autenticación y autorización, lo que permite gestionar fácilmente la autenticación de usuarios y definir roles y permisos para restringir el acceso a ciertas partes de la aplicación.

Aunque Craftable ofrece una serie de características listas para usar, también es altamente personalizable y extensible.  Ofrece una plantilla de administración basada en CoreUI que podemos personalizar fácilmente, tanto la apariencia del panel de administración, agregar nuevas funcionalidades y ajustar el comportamiento según las necesidades específicas del proyecto. Incluye un gestor de traducciones con interfaz de usuario para manejar contenido traducible, añadiendo un grado mayor de personalización.

## Instalación de Craftable con su instalador

Necesitamos instalar el instalador de Craftable:

``` sh
composer global require "brackets/craftable-installer"
```

En función de si tenemos un proyecto existente o no, instalaremos de una u otra forma.

Si no existe el proyecto (proyecto nuevo):

``` sh
craftable new craftable_project
```

Vamos al directorio recién creado e instalamos Craftable:

``` sh
cd craftable_project
craftable install
```

Si estamos trabajando en un proyecto Laravel y queremos instalar Craftable, iremos al directorio del proyecto y ejecutamos:

``` sh
craftable install
```

## Instalación manual de Craftable

Si ya tenemos un proyecto Laravel funcionando y con el fichero `.env` configurado, podemos ir al directorio del proyecto Laravel e instalar manualmente Craftable con:

``` sh
composer require brackets/craftable
composer require --dev brackets/admin-generator
php artisan craftable:install
```

Para ejecutar el servidor, si usamos Laravel con Webpack, escribiremos:

``` sh
npm install && npm run dev
```

Si usamos Laravel con Vite, Craftable necesita añadir Webpack para generar los recursos de administración, por lo que debemos compilarlos con:

``` sh
npm install && npm run craftable-dev
```

Al instalar Craftable, nos generará una contraseña aleatoria.

Para acceder al panel de control, debemos escribir el usuario por defecto: `administrator@brackets.sk` y la contraseña proporcionada en la instalación.

## Crear un CRUD con Craftable

Si queremos hacer una tabla `post`, primero, generaremos una migración con:

``` sh
php artisan make:migration create_posts_table --create=posts
```

En la migración, en el apartado `up()`, añadiremos:

``` php
Schema::create('posts', function (Blueprint $table) {
    $table->increments('id');
    $table->string('title');
    $table->string('slug')->unique();
    $table->text('perex')->nullable();
    $table->date('published_at')->nullable();
    $table->boolean('enabled')->default(false);
    $table->timestamps();
});
```

Ejecutamos la migración:

``` sh
php artisan migrate
```

Y generamos el CRUD:

``` sh
php artisan admin:generate posts
```

Si vamos al panel de control, veremos que ya está operativa, creando Craftable el modelo, las rutas y todo lo necesario para insertar, leer, actualizar y borrar datos de esa tabla.
