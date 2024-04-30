# Borrar base de datos desde la consola

Para borrar una base de datos desde la terminal, debemos entrar en el servidor de MySQL:

``` sh
mysql -u root -p
```

Y listar las bases de datos con:

``` sql
SHOW DATABASES;
```

Cuando encontremos la base de datos que queramos borrar:

``` sql
DROP DATABASE database;
```

Y salimos del servidor con:

``` sql
quit;
```
