# Tablas pivot en Laravel

En Laravel, una tabla pivot es una tabla intermedia que se utiliza para establecer una relación de muchos a muchos entre dos modelos.

Esta tabla contiene las claves foráneas de ambos modelos y, opcionalmente, puede contener datos adicionales relacionados con la relación.

Por ejemplo, si tenemos dos modelos, `User` y `Role`, y cada usuario puede tener varios roles y cada rol puede ser asignado a varios usuarios, necesitaríamos una tabla pivot para manejar esta relación.

La tabla pivot podría llamarse `role_user` y tendría al menos dos columnas: `user_id` y `role_id`.

Aquí hay un ejemplo de cómo podríamos definir esta relación en los modelos `User` y `Role`:

En el modelo User:

``` php
class User extends Model
{
  public function roles()
  {
    return $this->belongsToMany(Role::class);
  }
}
```

En el modelo Role:


``` php
class Role extends Model
{
  public function users()
  {
    return $this->belongsToMany(User::class);
  }
}
```

Laravel asume por convención que el nombre de la tabla pivot es el resultado de la concatenación en orden alfabético de los nombres de las tablas relacionadas en singular y en plural, separados por un guion bajo.

También asume que las claves foráneas en la tabla pivot son los nombres de las tablas relacionadas en singular seguidos por `_id`.

Si necesitásemos personalizar el nombre de la tabla pivot o los nombres de las claves foráneas, podemos hacerlo pasando argumentos adicionales al método `belongsToMany()`:

``` php
return $this->belongsToMany(Role::class, 'tabla_pivot_personalizada', 'clave_foranea_usuario', 'clave_foranea_rol');
```

Además de las claves foráneas, las tablas pivot pueden contener otros atributos que sean relevantes para la relación.

Por ejemplo, si en la relación entre `User` y `Role` queremos almacenar la fecha en la que el usuario fue asignado al rol, podríamos añadir una columna `assigned_at` a la tabla pivot.

Para trabajar con estos atributos adicionales, podemos utilizar el método `withPivot()` al definir la relación:

``` php  
public function roles()
{
  return $this->belongsToMany(Role::class)->withPivot('assigned_at');
}
```

Esto permitirá acceder y manipular el valor de `assigned_at` cuando trabajemos con la relación.
