# Saber los sistemas de ficheros

Para saber los sistemas de ficheros que hay montados en Linux, podemos usar algunos de los siguientes comandos:

## findmnt

``` sh
findmnt
```

Este comando muestra una lista de los sistemas de ficheros montados, con información sobre su tipo, tamaño, opciones y punto de montaje.

Podemos usar la opción `--raw` para obtener una salida más simple.

``` sh
findmnt --raw
```

## df

``` sh
df
```

Este comando muestra el espacio disponible y usado de los sistemas de ficheros montados.

Podemos usar la opción `-aTh` para ver todos los sistemas de ficheros, incluyendo los virtuales, en un formato legible.

## mount

``` sh
mount
```

Este comando permite montar y desmontar sistemas de ficheros, pero también muestra los sistemas de ficheros montados si no le pasamos ningún argumento.

## cat /proc/mounts

``` sh
cat /proc/mounts
```

Este comando muestra el contenido del archivo `/proc/mounts`, que contiene información sobre los sistemas de ficheros montados en el sistema
