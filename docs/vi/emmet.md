# Uso de emmet en vi

## Instalación

Hay que tener instalado el gestor de complementos `Plug`. Este es un programa que te permite instalar y actualizar fácilmente los complementos de vi. Para instalarlo, hay que ejecutar este comando:

``` sh
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Añadir esto en .vimrc:

```
call plug#begin()

Plug 'mattn/emmet-vim'
call plug#end()
```

Y, al reiniciar vi, ejecutar el comando `:PlugInstall` para instalar los complementos que haya en `.vimrc`, incluyendo `emmet-vim`.

## Uso y configuración

Por defecto, para ejecutar los autocompletados de emmet, hay que pulsar simultáneamente `«Control»` + `«y»` + `«,»`. Para facilitar el uso de Emmet, podemos cambiar la configuración para que autocomplete con `«TAB»` añadiendo en `.vimrc`:

```
let g:user_emmet_expandabbr_key = '<Tab>'
```

O, por otra combinación de teclas, como '`,,`', para evitar conflictos con otro plugin de autocompletado, como YouCompleteMe.

```
let g:user_emmet_expandabbr_key = ',,'
```
