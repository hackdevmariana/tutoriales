import{_ as a,o as n,c as s,d as e}from"./app-6Q4xxP2z.js";const t={},o=e(`<h1 id="comprobar-que-una-variable-es-una-cadena" tabindex="-1"><a class="header-anchor" href="#comprobar-que-una-variable-es-una-cadena"><span>Comprobar que una variable es una cadena</span></a></h1><p>Para comprobar si una variable es una cadena en Python, podemos usar las funciones <code>type()</code> o <code>isinstance()</code>.</p><h2 id="usando-type" tabindex="-1"><a class="header-anchor" href="#usando-type"><span>Usando type()</span></a></h2><p>La función <code>type()</code> devuelve el tipo de la variable. Podemos compararlo con <code>str</code> para verificar si es una cadena:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>variable <span class="token operator">=</span> <span class="token string">&quot;Hola, mundo&quot;</span>

<span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;La variable es una cadena&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;La variable no es una cadena&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usando-isinstance" tabindex="-1"><a class="header-anchor" href="#usando-isinstance"><span>Usando isinstance()</span></a></h2><p>La función <code>isinstance()</code> comprueba si una variable es una instancia de un tipo específico. Es más flexible y generalmente preferida a <code>type()</code>.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>variable <span class="token operator">=</span> <span class="token string">&quot;Hola, mundo&quot;</span>

<span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>variable<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;La variable es una cadena&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;La variable no es una cadena&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function p(c,l){return n(),s("div",null,i)}const u=a(t,[["render",p],["__file","es-cadena.html.vue"]]),r=JSON.parse('{"path":"/python/es-cadena.html","title":"Comprobar que una variable es una cadena","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Usando type()","slug":"usando-type","link":"#usando-type","children":[]},{"level":2,"title":"Usando isinstance()","slug":"usando-isinstance","link":"#usando-isinstance","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/es-cadena.md"}');export{u as comp,r as data};
