# Listar las tablas de una base de datos desde la terminal

Para listar bases de datos desde la terminal, debemos entrar en el servidor de MySQL:

``` sh
mysql -u root -p
```

Y listar las bases de datos con:

``` sql
SHOW DATABASES;
```

Cuando encontremos la base de datos de la que listar las tablas:

``` sql
SHOW FULL TABLES FROM database;
```
