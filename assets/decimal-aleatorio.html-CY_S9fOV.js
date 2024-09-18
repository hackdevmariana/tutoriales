import{_ as n,o as a,c as e,d as s}from"./app-D_6w_KD0.js";const o={},t=s(`<h1 id="generar-un-decimal-aleatorio-en-python" tabindex="-1"><a class="header-anchor" href="#generar-un-decimal-aleatorio-en-python"><span>Generar un decimal aleatorio en Python</span></a></h1><p>Para generar un número decimal aleatorio de dos dígitos en Python, podemos usar la biblioteca <code>random</code>.</p><p>Primero, debemos importarla:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> random
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y luego, generar un número decimal aleatorio entre el rango que necesitemos. Por ejemplo, entre 10 y 99:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>numero_aleatorio <span class="token operator">=</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>numero_aleatorio<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código utiliza la función <code>uniform</code> de la biblioteca <code>random</code>, que genera un número decimal aleatorio en el rango especificado (en este caso, entre 10 y 99).</p><h2 id="determinar-el-numero-de-decimales" tabindex="-1"><a class="header-anchor" href="#determinar-el-numero-de-decimales"><span>Determinar el número de decimales</span></a></h2><p>Para generar un número decimal aleatorio con un número específico de decimales en Python, podemos usar la biblioteca <code>random</code> junto con la función <code>round</code> para limitar el número de decimales.</p><p>Para especificar que buscamos dos decimales:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> random

numero_aleatorio <span class="token operator">=</span> random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

numero_aleatorio_redondeado <span class="token operator">=</span> <span class="token builtin">round</span><span class="token punctuation">(</span>numero_aleatorio<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>numero_aleatorio_redondeado<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este código, <code>random.uniform(0, 100)</code> genera un número decimal aleatorio entre 0 y 100, y <code>round(numero_aleatorio, 2)</code> redondea ese número a dos decimales.</p><p>Ambas funciones las podemos usar en una misma línea, compactando el código:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> random
numero_aleatorio_redondeado <span class="token operator">=</span> <span class="token builtin">round</span><span class="token punctuation">(</span>random<span class="token punctuation">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>numero_aleatorio_redondeado<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[t];function r(l,p){return a(),e("div",null,i)}const c=n(o,[["render",r],["__file","decimal-aleatorio.html.vue"]]),u=JSON.parse('{"path":"/python/decimal-aleatorio.html","title":"Generar un decimal aleatorio en Python","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Determinar el número de decimales","slug":"determinar-el-numero-de-decimales","link":"#determinar-el-numero-de-decimales","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/decimal-aleatorio.md"}');export{c as comp,u as data};