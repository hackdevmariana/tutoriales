import{_ as a,o as s,c as n,d as e}from"./app-DYRxUgPV.js";const t={},o=e(`<h1 id="operar-con-estructuras-de-datos" tabindex="-1"><a class="header-anchor" href="#operar-con-estructuras-de-datos"><span>Operar con estructuras de datos</span></a></h1><p>Operar con las diferentes estructuras de datos en R implica realizar una variedad de operaciones que van desde la manipulación básica hasta cálculos más avanzados.</p><p>Veamos algunos ejemplos de cómo operar con las estructuras de datos más comunes en R:</p><h2 id="vectores" tabindex="-1"><a class="header-anchor" href="#vectores"><span>Vectores:</span></a></h2><p>Acceder a elementos individuales:</p><p>Utilizaremos corchetes <code>[ ]</code> y el índice del elemento que deseamos acceder. Accede al tercer elemento del vector (3):</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>vector <span class="token operator">&lt;-</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
vector<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Operaciones vectorizadas:</p><p>Las operaciones se aplican a cada elemento del vector.</p><p>Multiplica cada elemento del vector por 2:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>vector <span class="token operator">*</span> <span class="token number">2</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="listas" tabindex="-1"><a class="header-anchor" href="#listas"><span>Listas</span></a></h2><p>Acceder a elementos individuales:</p><p>Utiliza corchetes <code>[ ]</code> y el nombre o índice del elemento que deseas acceder.</p><p>Accede al elemento con nombre <code>b</code> en la lista:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>lista <span class="token operator">&lt;-</span> list<span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">&quot;texto&quot;</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
lista<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Agregar elementos:</p><p>Utilizaremos <code>append()</code> o corchetes <code>[ ]</code>.</p><p>Agregar un nuevo elemento a la lista:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>lista<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;-</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="matrices" tabindex="-1"><a class="header-anchor" href="#matrices"><span>Matrices</span></a></h2><p>Acceder a elementos individuales:</p><p>Utiliza corchetes <code>[ , ]</code> y los índices de fila y columna.</p><p>Accede al elemento en la segunda fila y tercera columna:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>matriz <span class="token operator">&lt;-</span> matrix<span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span> nrow <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
matriz<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Operaciones matriciales:</p><p>R proporciona funciones para realizar operaciones matriciales como la transposición, la multiplicación de matrices, etc.</p><p>Transpone la matriz:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>t<span class="token punctuation">(</span>matriz<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="data-frames" tabindex="-1"><a class="header-anchor" href="#data-frames"><span>Data frames</span></a></h2><p>Acceder a columnas:</p><p>Utilizamos el operador <code>$</code> o corchetes <code>[ , ]</code> y el nombre de la columna.</p><p>Accede a la columna &quot;y&quot; del data frame:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>df <span class="token operator">&lt;-</span> data.frame<span class="token punctuation">(</span>x <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> y <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
df<span class="token operator">$</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Filtrar filas:</p><p>Utilizamos condiciones lógicas dentro de corchetes <code>[ ]</code>.</p><p>Filtra las filas donde el valor de la columna &quot;x&quot; es mayor que 1:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>subset<span class="token punctuation">(</span>df<span class="token punctuation">,</span> x <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38),c=[o];function p(r,l){return s(),n("div",null,c)}const d=a(t,[["render",p],["__file","operar-con-estructuras.html.vue"]]),u=JSON.parse('{"path":"/r/operar-con-estructuras.html","title":"Operar con estructuras de datos","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Vectores:","slug":"vectores","link":"#vectores","children":[]},{"level":2,"title":"Listas","slug":"listas","link":"#listas","children":[]},{"level":2,"title":"Matrices","slug":"matrices","link":"#matrices","children":[]},{"level":2,"title":"Data frames","slug":"data-frames","link":"#data-frames","children":[]}],"git":{"updatedTime":1712614626000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"r/operar-con-estructuras.md"}');export{d as comp,u as data};
