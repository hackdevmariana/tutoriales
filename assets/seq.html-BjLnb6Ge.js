import{_ as n,o as e,c as a,d as s}from"./app-D0ho2q3G.js";const t={},o=s(`<h1 id="funcion-seq" tabindex="-1"><a class="header-anchor" href="#funcion-seq"><span>Función seq()</span></a></h1><p>La función <code>seq()</code> en R se utiliza para generar secuencias de números.</p><p>Puede ser útil cuando necesitamos crear vectores con valores ordenados en una secuencia específica.</p><p>La sintaxis básica de la función seq() es la siguiente:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>seq<span class="token punctuation">(</span>from<span class="token punctuation">,</span> to<span class="token punctuation">,</span> by <span class="token operator">=</span> <span class="token punctuation">(</span>to <span class="token operator">-</span> from<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span>length.out <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> length.out <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Explicación:</p><p><strong>from</strong>: El primer número en la secuencia. <strong>to</strong>: El último número en la secuencia. <strong>by</strong>: El incremento entre cada par de números en la secuencia. Por defecto, es calculado automáticamente para que haya length.out - 1 intervalos. <strong>length.out</strong>: El número total de elementos en la secuencia. Si se especifica, by se calculará automáticamente para ajustar el número total de elementos.</p><h2 id="ejemplos-de-uso" tabindex="-1"><a class="header-anchor" href="#ejemplos-de-uso"><span>Ejemplos de uso</span></a></h2><p>Crear una secuencia numérica:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Crear una secuencia con un incremento específico:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia_incremento <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> by <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Crear una secuencia con un número específico de elementos:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia_longitud <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> length.out <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Crear una secuencia en orden descendente:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia_descendente <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),c=[o];function p(r,l){return e(),a("div",null,c)}const u=n(t,[["render",p],["__file","seq.html.vue"]]),d=JSON.parse('{"path":"/r/seq.html","title":"Función seq()","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplos de uso","slug":"ejemplos-de-uso","link":"#ejemplos-de-uso","children":[]}],"git":{"updatedTime":1712617101000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"r/seq.md"}');export{u as comp,d as data};