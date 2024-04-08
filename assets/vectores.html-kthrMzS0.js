import{_ as n,o as e,c as s,d as a}from"./app-bmRE82T9.js";const t={},o=a(`<h1 id="vectores" tabindex="-1"><a class="header-anchor" href="#vectores"><span>Vectores</span></a></h1><p>Los vectores son una estructura de datos fundamental en R y se utilizan ampliamente en análisis de datos y programación estadística.</p><p>Un vector en R es una secuencia ordenada de elementos del mismo tipo. Esto significa que todos los elementos dentro de un vector deben ser del mismo tipo de datos, ya sea numérico, de caracteres, lógico, etc.</p><p>Hay varias formas de crear vectores en R:</p><p><strong>Utilizando la función c()</strong>: Esta función combina elementos en un vector.</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>vector_numerico <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
vector_caracter <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
vector_logico <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token boolean">TRUE</span><span class="token punctuation">,</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Utilizando la función seq()</strong>: Esta función genera secuencias de números.</p><p>Genera: una secuencia del 1 al 10 con incrementos de 2:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia <span class="token operator">&lt;-</span> seq<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> by <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Utilizando el operador :</strong>: Este operador crea una secuencia numérica.</p><p>Crea un vector numérico del 1 al 5:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>secuencia <span class="token operator">&lt;-</span> <span class="token number">1</span><span class="token operator">:</span><span class="token number">5</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tipos-de-vectores" tabindex="-1"><a class="header-anchor" href="#tipos-de-vectores"><span>Tipos de vectores</span></a></h2><p>Los vectores en R pueden ser de diferentes tipos, incluyendo:</p><ul><li><p>Vectores numéricos: Contienen números reales.</p></li><li><p>Vectores de caracteres: Contienen texto.</p></li><li><p>Vectores lógicos: Contienen valores lógicos (TRUE o FALSE).</p></li><li><p>Vectores complejos: Contienen números complejos.</p></li><li><p>Vectores enteros: Contienen números enteros.</p></li><li><p>Acceso a elementos: Puedes acceder a elementos individuales de un vector utilizando corchetes <code>[ ]</code> y especificando el índice del elemento que deseas acceder.</p></li></ul><p>Los índices en R comienzan desde 1.</p><p>Accede al tercer elemento del vector (30):</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>vector_numerico <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
vector_numerico<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Operaciones vectorizadas:</p><p>Una de las características de R es que muchas operaciones se aplican de manera automática a cada elemento de un vector.</p><p>Multiplicar cada elemento del vector por 2:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>vector <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
vector_doble <span class="token operator">&lt;-</span> vector <span class="token operator">*</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Funciones útiles:</p><p>R proporciona una variedad de funciones útiles para trabajar con vectores, como <code>length()</code> para obtener la longitud del vector, <code>sum()</code> para sumar los elementos del vector, <code>mean()</code> para calcular la media, <code>min()</code> y <code>max()</code> para encontrar el mínimo y máximo, entre otros.</p>`,24),c=[o];function p(r,l){return e(),s("div",null,c)}const u=n(t,[["render",p],["__file","vectores.html.vue"]]),d=JSON.parse('{"path":"/r/vectores.html","title":"Vectores","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Tipos de vectores","slug":"tipos-de-vectores","link":"#tipos-de-vectores","children":[]}],"git":{"updatedTime":1712617101000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"r/vectores.md"}');export{u as comp,d as data};
