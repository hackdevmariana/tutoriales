import{_ as n,o as a,c as s,d as e}from"./app-DBCc-c6q.js";const t={},p=e(`<h1 id="la-regla-keyframes-en-css" tabindex="-1"><a class="header-anchor" href="#la-regla-keyframes-en-css"><span>La regla <code>@keyframes</code> en CSS</span></a></h1><p>La regla <code>@keyframes</code> en CSS se utiliza para definir una secuencia de pasos en una animación. Permite especificar cómo deben cambiar los estilos CSS en diferentes puntos de la animación.</p><p>Estos son sus pasos:</p><p><strong>Definición de la animación</strong>: Se crea una regla <code>@keyframes</code> con un nombre específico. Dentro de esta regla, se definen los estilos para diferentes puntos de la animación usando porcentajes o las palabras clave <code>from</code> (equivalente a 0%) y <code>to</code> (equivalente a 100%).</p><p><strong>Uso de la animación</strong>: La animación se aplica a un elemento utilizando las propiedades de animación como <code>animation-name</code>, <code>animation-duration</code>, <code>animation-timing-function</code>, entre otras.</p><h2 id="ejemplo-basico" tabindex="-1"><a class="header-anchor" href="#ejemplo-basico"><span>Ejemplo básico</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> ejemplo</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.elemento</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> ejemplo<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, la animación llamada &quot;ejemplo&quot; hace que la opacidad de un elemento pase de 0 a 1 en 2 segundos.</p><h2 id="ejemplo-avanzado" tabindex="-1"><a class="header-anchor" href="#ejemplo-avanzado"><span>Ejemplo avanzado</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> mover</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.cuadro</span> <span class="token punctuation">{</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> mover<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>
  <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, la animación mover cambia la posición de un elemento en tres etapas diferentes.</p>`,11),i=[p];function o(c,l){return a(),s("div",null,i)}const r=n(t,[["render",o],["__file","keyframes.html.vue"]]),d=JSON.parse('{"path":"/css/animacion/keyframes.html","title":"La regla @keyframes en CSS","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplo básico","slug":"ejemplo-basico","link":"#ejemplo-basico","children":[]},{"level":2,"title":"Ejemplo avanzado","slug":"ejemplo-avanzado","link":"#ejemplo-avanzado","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/animacion/keyframes.md"}');export{r as comp,d as data};
