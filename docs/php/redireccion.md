# Redirigir a otra página con PHP

Para redirigir a otro fichero o dominio, podemos usar la función header:

``` php
<?php
  header("Location: https://www.ejemplo.com");
  exit();
?>
```
