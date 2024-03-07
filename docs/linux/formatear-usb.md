# Formatear un USB desde la consola

Para formatear un usb desde la consola de GNY/Linux, podemos seguir estos pasos:

1. Conectamos el pendrive al ordenador y abrimos una terminal.

2. Ejecutamos el comando

``` sh
lsblk
```

para listar los dispositivos de almacenamiento conectados al sistema.

3. Identificamos el dispositivo usb que deseamos formatear en la lista.

Normalmente es `/dev/sdX`, donde X es una letra que varía según el orden de conexión. Por ejemplo, `/dev/sdb` o `/dev/sdc`.

4. Desmontamos el dispositivo usb con el comando

``` sh
sudo umount /dev/sdX
```

reemplazando X por la letra correspondiente.

5. Elegimos el sistema de archivos que queremos usar para formatear el usb. Podemos usar `vfat` para FAT32, `ntfs` para NTFS, `ext4` para ext4, etc. Cada sistema de archivos tiene sus ventajas y desventajas, dependiendo de la compatibilidad y el rendimiento que busquemos.

6. Ejecutamos el comando `sudo mkfs.TIPO -I /dev/sdX`, reemplazando TIPO por el sistema de archivos elegido y X por la letra del dispositivo usb. Por ejemplo:

``` sh
sudo mkfs.vfat -I /dev/sdb
```

``` sh
sudo mkfs.ext4 -I /dev/sdc
```

La opción -I sirve para ignorar la advertencia de que el dispositivo es de tamaño completo.

Cuando el proceso termine, tendremos el usb formateado con el sistema de ficheros elegido.


## Formatear en ntfs3

Primero, necesitamos el comando ntfs-3g:

``` sh
sudo apt install ntfs-3g
```

Desmontamos:

``` sh
sudo umount /dev/sdb
```

Y formateamos:

``` sh
sudo mkfs.ntfs /dev/sdb
``` 
