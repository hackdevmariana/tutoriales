import{_ as a,o as n,c as s,d as e}from"./app-Cayui1mt.js";const t={},o=e(`<h1 id="comprobar-si-la-libreria-gd-esta-habilitada" tabindex="-1"><a class="header-anchor" href="#comprobar-si-la-libreria-gd-esta-habilitada"><span>Comprobar si la librería GD está habilitada</span></a></h1><p>Para comprobar si la librería GD está habilitada en un servidor PHP, podemos crear un script PHP que nos lo indique:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">extension_loaded</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gd&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">function_exists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gd_info&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;La librería GD está habilitada.&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;La librería GD no está habilitada.&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[o];function p(r,l){return n(),s("div",null,i)}const d=a(t,[["render",p],["__file","comprobar-gd.html.vue"]]),u=JSON.parse('{"path":"/php/imagenes/comprobar-gd.html","title":"Comprobar si la librería GD está habilitada","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/imagenes/comprobar-gd.md"}');export{d as comp,u as data};
