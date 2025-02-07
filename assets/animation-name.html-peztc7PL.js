import{_ as n,o as a,c as s,d as e}from"./app-DRckrbPz.js";const i={},t=e(`<h1 id="propiedad-animation-name" tabindex="-1"><a class="header-anchor" href="#propiedad-animation-name"><span>Propiedad animation-name</span></a></h1><p>La propiedad <code>animation-name</code> en CSS se utiliza para especificar el nombre de una o más animaciones definidas con <code>@keyframes</code> que se aplicarán a un elemento.</p><h2 id="sintaxis" tabindex="-1"><a class="header-anchor" href="#sintaxis"><span>Sintaxis</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">element</span>
<span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> nombre-de-la-animación<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="valores" tabindex="-1"><a class="header-anchor" href="#valores"><span>Valores</span></a></h2><ul><li><p><code>none</code>: No se aplica ninguna animación.</p></li><li><p>nombre-de-la-animación: El nombre de la animación definida con <code>@keyframes</code>.</p></li></ul><h2 id="ejemplo-basico" tabindex="-1"><a class="header-anchor" href="#ejemplo-basico"><span>Ejemplo básico</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> mover</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.cuadro</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> mover<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, la animación &quot;mover&quot; hace que un elemento se desplace de izquierda a derecha en 2 segundos.</p><h2 id="multiples-animaciones" tabindex="-1"><a class="header-anchor" href="#multiples-animaciones"><span>Múltiples animaciones</span></a></h2><p>Podemos especificar múltiples animaciones separadas por comas:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> mover</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> cambiarColor</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.cuadro</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> mover<span class="token punctuation">,</span> cambiarColor<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">,</span> 4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este caso, el elemento se moverá y cambiará de color simultáneamente.</p>`,13),l=[t];function p(c,o){return a(),s("div",null,l)}const d=n(i,[["render",p],["__file","animation-name.html.vue"]]),r=JSON.parse('{"path":"/css/animacion/animation-name.html","title":"Propiedad animation-name","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Sintaxis","slug":"sintaxis","link":"#sintaxis","children":[]},{"level":2,"title":"Valores","slug":"valores","link":"#valores","children":[]},{"level":2,"title":"Ejemplo básico","slug":"ejemplo-basico","link":"#ejemplo-basico","children":[]},{"level":2,"title":"Múltiples animaciones","slug":"multiples-animaciones","link":"#multiples-animaciones","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/animacion/animation-name.md"}');export{d as comp,r as data};
