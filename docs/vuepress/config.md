# Configurar proyecto VuePress

Crear el nombre del proyecto:

``` js
import { defaultTheme } from 'vuepress'

export default {
	title: 'Nombre del proyecto',
}
```

## Menú superior o navbar

Crear enlaces simples en el navbar:

``` js
import { defaultTheme } from 'vuepress'

export default {
	title: 'Nombre del proyecto',

  theme: defaultTheme({
    // default theme config
    navbar: [
			{ text: 'Texto a mostrar',
			  link: '/directorio/',
			},
    ]
  })
}
```

Enlazará al fichero `/docs/directorio/README.md`.

Menús desplegables:


``` js
theme: defaultTheme({
  navbar: [
    { text: 'Nombre del proyecto',
    children: [
      { text: 'Cadenas de texto', link: '/cadenas-de-texto/' },
      { text: 'Ficheros y directorios', link: '/ficheros-y-directorios/' },
     ],
    },
    { text: 'Desarrollo',
    children: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Bootstrap', link: '/bootstrap/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'VuePress', link: '/vuepress/' },
      { text: 'Python', link: '/python/' },
      { text: 'Django', link: '/django/' },
     ],
    },
  ],
}),
```


## Menú lateral o aside

Enlaces simples:

``` js
theme: defaultTheme({
  navbar: [
  //  Contenido del navbar
  ],
  sidebar: {
    '/bootstrap/': [
    ''
    ],
    '/css/': [
    ''
    ],
  }
}),
```

Enlaza a los ficheros `/docs/bootstrap/README.md` y  `/docs/css/README.md`.

Menú con navegación:

``` js
theme: defaultTheme({
  navbar: [
  ],
  sidebar: {
    '/bootstrap/': [
    ''
    ],
    '/css/': [
    ''
    ],
    '/vuepress/': [
      {
        title: 'VuePress',
        children: ['',
                   'config',
                  ],
      },

    ],
  }
}),
```

## Incluir un logo

Para incluir un logo en el proyecto VuePress, para que se muestre en la parte superior izquierda junto al nombre del proyecto, debemos guardarlo en el directorio de imágenes del proyecto (`docs/.vuepress/img/` o `docs/.vuepress/assets/img/`) que, por defecto, no existe:

``` sh
img_dir="docs/.vuepress/public/img/"; [ -d $img_dir ] || mkdir -p $img_dir
```

Una vez guardado el fichero de imagen del logo en ese directorio, podemos enlazarlo en el `config.js` dentro de la configuración del tema:

``` js {2}
theme: defaultTheme({
  logo: '/img/logo.png',
```

## Configurar el favicon

En el mismo directorio se pueden guardar también los favicons, imágenes cuadradas en formato png, ico... para incluirlo en el proyecto, deberemos enlazarlo en el encabezamiento. Dentro de `config.js`:

``` js {5}
export default {
	title: 'Nombre del proyecto',
	description: "Program faster with Vue and Django",
	head: [
		['link', { rel: 'icon', href: '/img/favicon.png' }],
```
