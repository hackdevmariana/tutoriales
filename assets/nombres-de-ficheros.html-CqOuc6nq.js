import{_ as e,o as n,c as a,d as s}from"./app-DmRi4eNh.js";const t={},i=s(`<h1 id="extraer-nombre-de-fichero-y-extension" tabindex="-1"><a class="header-anchor" href="#extraer-nombre-de-fichero-y-extension"><span>Extraer nombre de fichero y extensión</span></a></h1><p>Nombre del fichero:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> <span class="token string">&#39;/home/user/fichero.txt&#39;</span>
filename <span class="token operator">=</span> Path<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>stem

<span class="token keyword">print</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultado:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fichero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Extensión:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> <span class="token string">&#39;/home/user/fichero.txt&#39;</span>
ext <span class="token operator">=</span> Path<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>suffix

<span class="token keyword">print</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultado:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Múltiples extensiones:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> <span class="token string">&#39;/home/user/fichero.tar.gz&#39;</span>
ext <span class="token operator">=</span> Path<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>suffixes

<span class="token keyword">print</span><span class="token punctuation">(</span>ext<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultado:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[&#39;.tar&#39;, &#39;.gz&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),o=[i];function p(r,l){return n(),a("div",null,o)}const c=e(t,[["render",p],["__file","nombres-de-ficheros.html.vue"]]),u=JSON.parse('{"path":"/python/nombres-de-ficheros.html","title":"Extraer nombre de fichero y extensión","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1710110458000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/nombres-de-ficheros.md"}');export{c as comp,u as data};
