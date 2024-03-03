# Sistema de rutas de Nuxt

Las rutas en `Nuxt` son la forma de definir y acceder a las diferentes páginas de una aplicación web. `Nuxt` utiliza el sistema de enrutamiento de `vue-router`, pero lo simplifica y mejora con algunas características adicionales.

Algunas de estas características son:

- El enrutamiento basado en el sistema de archivos, que crea automáticamente las rutas a partir de los archivos que creamos en el directorio `pages/` de un proyecto.

Por ejemplo, si creamos un archivo `index.vue`, tendremos una ruta `/` que mostrará el contenido de ese archivo.
Si creamos un archivo `about.vue`, tendremos una ruta `/about` que mostrará el contenido de ese archivo. Y así sucesivamente.

- El enrutamiento dinámico, que permite crear rutas que dependen de parámetros variables, como el id de un producto, el nombre de un usuario, etc. Para crear una ruta dinámica, sólo tenemos que nombrar el archivo con un guión bajo (_) seguido del nombre del parámetro.

Por ejemplo, si creamos un archivo `_id.vue` dentro del directorio `products/`, tendremos una ruta `/products/:id` que mostrará el contenido de ese archivo según el valor de id que se pase en la URL.

- El enrutamiento anidado, que permite crear rutas que contienen subrutas dentro de una ruta principal. Para crear una ruta anidada, solo tenemos que crear un directorio con el nombre de la ruta principal y poner dentro los archivos de las subrutas.

Por ejemplo, si creamos un directorio `users/` y dentro ponemos un archivo `index.vue` y otro `_id.vue`, tendremos una ruta `/users` que mostrará el contenido de `index.vue` y una ruta `/users/:id` que mostrará el contenido de `_id.vue`.

- El enrutamiento con comodines, que permite crear rutas que coincidan con cualquier valor que se pase en la URL. Para crear una ruta con comodines, sólo tenemos que nombrar el archivo con un asterisco (\*) seguido del nombre del parámetro.

Por ejemplo, si creamos un archivo `*.vue` en el directorio `pages/`, tendremos una ruta `/:pathMatch` que mostrará el contenido de ese archivo según el valor de `pathMatch` que se pase en la URL.

El pathMatch es una propiedad que se usa en el enrutamiento de Nuxt para crear rutas con comodines, que coinciden con cualquier valor que se pase en la URL. Para crear una ruta con comodines, solo tenemos que nombrar el archivo con un asterisco (*) seguido del nombre del parámetro.

Esta característica es útil para crear páginas de error personalizadas, o para manejar rutas que no existen o que no se pueden definir de antemano. Sin embargo, debemos tener en cuenta que las rutas con comodines tienen la menor prioridad, y solo se activan si ninguna otra ruta coincide con la URL.

Además, debemos usar el método `$route.params.pathMatch` para acceder al valor del parámetro en el componente.

- El middleware de rutas, que te permite ejecutar una función antes de entrar en una ruta, para hacer alguna validación, autenticación, redirección, etc. Para crear un middleware de rutas, solo tenemos que crear un archivo con el nombre del middleware en el directorio `middleware/` del proyecto y asignarlo a la propiedad middleware de la página que queramos proteger.
