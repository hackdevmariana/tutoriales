# Instalación y primeros pasos con R


Instalación de R en Ubuntu:

``` sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install r-base r-base-dev
```

Para comprobar que se ha instalado correctamente:

``` sh
R --version
```

Para instalar R-Studio, podemos ir a su [página de descargas](https://posit.co/download/rstudio-desktop/) o, si tenemos Ubuntu 22 o Debian 12, descargar el paquete Deb con `wget`:

``` sh
wget https://download1.rstudio.org/electron/jammy/amd64/rstudio-2023.12.1-402-amd64.deb
```

Y luego, instalaremos el paquete con:

``` sh
sudo dpkg -i rstudio-2023.12.1-402-amd64.deb
```

O con `sudo dpkg -i` y el nombre de paqueta que corresponda.


En caso de que tengamos alguna dependencia no instalada, la instalaremos con:

``` sh
sudo apt-get install libclang-dev
```

O la dependencia no resuelta que tengamos. 
