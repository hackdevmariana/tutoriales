import{_ as e,o as s,c as a,d as n}from"./app-75m0aKwH.js";const i={},l=n(`<h1 id="pseudoclase-visited" tabindex="-1"><a class="header-anchor" href="#pseudoclase-visited"><span>Pseudoclase visited</span></a></h1><p>La pseudo-clase <code>:visited</code> en CSS se utiliza para aplicar estilos a los enlaces que el usuario ya ha visitado. Esto es útil para diferenciar visualmente los enlaces que ya han sido clicados de aquellos que no lo han sido.</p><h2 id="sintaxis" tabindex="-1"><a class="header-anchor" href="#sintaxis"><span>Sintaxis</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">a:visited</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Declaraciones CSS */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejemplo-basico" tabindex="-1"><a class="header-anchor" href="#ejemplo-basico"><span>Ejemplo básico</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* Enlace no visitado */</span>
<span class="token selector">a:link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Enlace visitado */</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Enlace al pasar el ratón */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Enlace activo */</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="restricciones-de-estilo" tabindex="-1"><a class="header-anchor" href="#restricciones-de-estilo"><span>Restricciones de estilo</span></a></h2><p>Por motivos de privacidad, los navegadores limitan los estilos que se pueden aplicar a los enlaces visitados. Las propiedades CSS permitidas son:</p><ul><li><p>color</p></li><li><p>background-color</p></li><li><p>border-color</p></li><li><p>outline-color</p></li><li><p>column-rule-color</p></li><li><p>text-decoration-color</p></li><li><p>text-emphasis-color</p></li></ul><p>Además, los atributos SVG permitidos son <code>fill</code> y <code>stroke</code>.</p><p>Los navegadores implementan restricciones para evitar que los sitios web utilicen la pseudo-clase <code>:visited</code> para rastrear el historial de navegación del usuario. Por ejemplo, el componente alfa de los colores aplicados a <code>:visited</code> será ignorado, y el método <code>window.getComputedStyle</code> siempre devolverá el valor del color del estado no visitado.</p><h2 id="orden-de-las-pseudo-clases" tabindex="-1"><a class="header-anchor" href="#orden-de-las-pseudo-clases"><span>Orden de las pseudo-clases</span></a></h2><p>Para aplicar estilos correctamente a los enlaces, hay que seguir el orden LVHA (Link, Visited, Hover, Active):</p><ol><li><p><code>:link</code></p></li><li><p><code>:visited</code></p></li><li><p><code>:hover</code></p></li><li><p><code>:active</code></p></li></ol><h2 id="ejemplo-completo" tabindex="-1"><a class="header-anchor" href="#ejemplo-completo"><span>Ejemplo completo</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
}
a:active {
  color: yellow;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[l];function c(t,d){return s(),a("div",null,o)}const r=e(i,[["render",c],["__file","visited.html.vue"]]),u=JSON.parse('{"path":"/css/selectores/visited.html","title":"Pseudoclase visited","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Sintaxis","slug":"sintaxis","link":"#sintaxis","children":[]},{"level":2,"title":"Ejemplo básico","slug":"ejemplo-basico","link":"#ejemplo-basico","children":[]},{"level":2,"title":"Restricciones de estilo","slug":"restricciones-de-estilo","link":"#restricciones-de-estilo","children":[]},{"level":2,"title":"Orden de las pseudo-clases","slug":"orden-de-las-pseudo-clases","link":"#orden-de-las-pseudo-clases","children":[]},{"level":2,"title":"Ejemplo completo","slug":"ejemplo-completo","link":"#ejemplo-completo","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/selectores/visited.md"}');export{r as comp,u as data};
