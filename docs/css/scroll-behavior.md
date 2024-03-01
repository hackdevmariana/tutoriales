# Propiedad scroll-behavior

El scroll-behavior es una propiedad CSS que define el comportamiento del desplazamiento en un elemento con contenido desplazable, cuando se produce por la navegación o por las APIs CSSOM.

La sintaxis de scroll-behavior es la siguiente:

Valores de palabra clave:

```
scroll-behavior: auto;
scroll-behavior: smooth;
```

Valores globales:

```
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

Los valores posibles son:

- **auto**: El elemento se desplaza de forma instantánea.

- **smooth**: El elemento se desplaza de forma suave, usando una función de tiempo y una duración definidas por el agente de usuario. El agente de usuario seguirá las convenciones de su propia plataforma, si las hay.

Los valores globales, que tienen el mismo significado que en otras propiedades CSS, son:

- **inherit**

- **initial**

- **revert**

- **revert-layer**

- **unset**

Un ejemplo de uso de scroll-behavior es el siguiente:

``` html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
  <div class="scroll-page" id="page-1">1</div>
  <div class="scroll-page" id="page-2">2</div>
  <div class="scroll-page" id="page-3">3</div>
</div>
```

``` css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav, .scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

Este código crea una navegación con enlaces a diferentes secciones de la página, que se desplazan de forma suave al hacer clic en ellos.

## Aplicar a todo el documento

Una forma más simple para aplicar un desplazamiento suave en todo el documento es usar `scroll-behavior: smooth;` dentro de `html`:

``` css
html {
  scroll-behavior: smooth;
}
```
