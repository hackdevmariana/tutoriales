import{_ as n,o as s,c as a,d as e}from"./app-BeyxbKdu.js";const p={},t=e(`<h1 id="cambiar-el-relleno-de-un-checkbox" tabindex="-1"><a class="header-anchor" href="#cambiar-el-relleno-de-un-checkbox"><span>Cambiar el relleno de un checkbox</span></a></h1><p>Cambiar el relleno de un checkbox en CSS implica personalizar su apariencia, ya que los checkboxes tienen un estilo predeterminado que varía según el navegador.</p><p>Para ello, hay que hacer dos pasos:</p><ol><li><p>Ocultar el checkbox predeterminado Primero, ocultamos el checkbox predeterminado usando <code>appearance: none</code> o <code>opacity: 0</code> y <code>position: absolute</code>. Esto nos permite aplicar nuestros propios estilos.</p></li><li><p>Crear un checkbox personalizado Usamos un <code>span</code> para crear la apariencia del checkbox y aplicamos estilos CSS para personalizarlo.</p></li></ol><h2 id="ejemplo" tabindex="-1"><a class="header-anchor" href="#ejemplo"><span>Ejemplo</span></a></h2><p>HTML:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkmark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    HTML
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.custom-checkbox</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span> <span class="token comment">/* Color del texto */</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-checkbox input</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkmark</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span> <span class="token comment">/* Bordes redondeados */</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-checkbox:hover input ~ .checkmark</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-checkbox input:checked ~ .checkmark</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #3f51b5<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #3f51b5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.checkmark:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-checkbox input:checked ~ .checkmark:after</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-checkbox .checkmark:after</span> <span class="token punctuation">{</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> solid white<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 3px 3px 0<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explicacion" tabindex="-1"><a class="header-anchor" href="#explicacion"><span>Explicación</span></a></h3><p>Ocultar el checkbox predeterminado: Usamos <code>opacity: 0</code> y <code>position: absolute</code> para ocultar el <code>checkbox</code> predeterminado.</p><p>Crear una cajita personalizada: Usamos un <code>span</code> con la clase <code>checkmark</code> para crear la cajita del <code>checkbox</code>.</p><p>Cambiar el color de fondo y el borde: Usamos <code>background-color</code> y <code>border</code> para personalizar el relleno y el borde del <code>checkbox</code>.</p><p>Mostrar la marca de verificación: Usamos el pseudo-elemento <code>:after</code> para mostrar la marca de verificación cuando el <code>checkbox</code> está seleccionado.</p>`,14),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","relleno-checkbox.html.vue"]]),d=JSON.parse('{"path":"/css/relleno-checkbox.html","title":"Cambiar el relleno de un checkbox","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplo","slug":"ejemplo","link":"#ejemplo","children":[{"level":3,"title":"Explicación","slug":"explicacion","link":"#explicacion","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"css/relleno-checkbox.md"}');export{r as comp,d as data};
