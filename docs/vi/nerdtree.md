# Uso de NERDTree en vi

## Instalación

Hay que tener instalado el gestor de complementos `Plug`. Este es un programa que te permite instalar y actualizar fácilmente los complementos de vi. Para instalarlo, hay que ejecutar este comando:

``` sh
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Añadir esto en .vimrc:

```
call plug#begin()

Plug 'preservim/nerdtree'

call plug#end()
```

Y, al reiniciar vi, ejecutar el comando `:PlugInstall` para instalar los complementos que haya en `.vimrc`, incluyendo `nerdtree`.

## Uso de NERDTree

Para activar NERDTree, hay que ejecutar:

```
:NERDTreeToggle
```

Para desactivar `NERDTree`, puedes usar el mismo comando `:NERDTreeToggle` o presionar la tecla `q` cuando el cursor esté en el panel de NERDTree. Esto cerrará el explorador de archivos y volverá a la ventana de edición.

Si quieres que NERDTree se ejecute automáticamente al iniciar vi, puedes añadir esta línea en tu .vimrc:

```
autocmd vimenter * NERDTree
```

## Cambio de ventanas

Para cambiar entre el fichero a editar y el árbol de directorios, puedes usar el atajo de teclado Ctrl + w. Este atajo te permite saltar entre las ventanas abiertas en vi, incluyendo la de NERDTree. Puedes presionar Ctrl + w seguido de una de estas teclas para moverte en la dirección deseada:

- `h`: izquierda

- `j`: abajo

- `k`: arriba

- `l`: derecha

Por ejemplo, si quieres ir de la ventana del fichero a la de NERDTree, puedes presionar Ctrl + w y luego h. Si quieres volver a la ventana del fichero, puedes presionar `Ctrl + w` y luego `l`.
