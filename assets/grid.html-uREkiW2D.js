import{_ as s,o as n,c as a,d as e}from"./app-1SkgAEAX.js";const i={},c=e(`<h1 id="css-grid" tabindex="-1"><a class="header-anchor" href="#css-grid"><span>CSS Grid</span></a></h1><p>CSS Grid es un sistema de diseño que permite crear estructuras complejas de filas y columnas en una página web.</p><p>Primero, debemos definir un contenedor que utilizará el grid. Esto se hace aplicando la propiedad <code>display: grid</code> a un elemento.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.contenedor</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para definir filas y columnas se utilizan las propiedades <code>grid-template-columns</code> y <code>grid-template-rows</code> para definir el número y tamaño de las columnas y filas.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.contenedor</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 2fr<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, el contenedor tiene dos columnas. La primera ocupa una fracción del espacio disponible y la segunda ocupa dos fracciones. También tiene dos filas de 100px y 200px de altura.</p><p>Para ubicar los elementos hijos del contenedor se colocan en las celdas del grid. Podemos usar propiedades como <code>grid-column</code> y <code>grid-row</code> para especificar la posición de cada elemento.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.elemento1</span> <span class="token punctuation">{</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span>
  <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código coloca el primer elemento en la primera columna y la primera fila.</p><p>También se pueden definir áreas de grid para agrupar celdas y asignarles nombres.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.contenedor</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
  <span class="token string">&quot;header header&quot;</span>
  <span class="token string">&quot;sidebar main&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> sidebar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, se crean áreas llamadas <code>header</code>, <code>sidebar</code> y <code>main</code> que ocupan diferentes partes del grid.</p>`,13),t=[c];function p(l,o){return n(),a("div",null,t)}const r=s(i,[["render",p],["__file","grid.html.vue"]]),u=JSON.parse('{"path":"/css/grid.html","title":"CSS Grid","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/grid.md"}');export{r as comp,u as data};
