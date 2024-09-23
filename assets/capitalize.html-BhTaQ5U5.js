import{_ as a,o as s,c as n,d as e}from"./app-DeqmyMJe.js";const t={},i=e(`<h1 id="convertir-texto-a-minusculas-con-el-primer-caracter-en-mayuscula-capitalize-en-gnu-linux" tabindex="-1"><a class="header-anchor" href="#convertir-texto-a-minusculas-con-el-primer-caracter-en-mayuscula-capitalize-en-gnu-linux"><span>Convertir texto a minúsculas con el primer carácter en mayúscula (capitalize) en GNU/Linux</span></a></h1><p>Para convertir una cadena a minúsculas excepto la primera letra (capitalize), puedes usar una combinación de tr y sed.</p><p>Veamos cómo hacerlo en una línea:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;[:upper:]&#39;</span> <span class="token string">&#39;[:lower:]&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^\\(.\\)/\\U\\1/&#39;</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y en una función:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function-name function">capitalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;[:upper:]&#39;</span> <span class="token string">&#39;[:lower:]&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^\\(.\\)/\\U\\1/&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Uso de la función:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>capitalize <span class="token string">&quot;<span class="token variable">$string</span>&quot;</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Explicación:</p><ul><li><p>tr &#39;[:upper:]&#39; &#39;[:lower:]&#39;: Convierte toda la cadena a minúsculas.</p></li><li><p>s/^(.)/\\U\\1/: Este comando de sed busca el primer carácter (^.) y lo convierte a mayúscula (\\U).</p></li></ul>`,10),l=[i];function c(p,r){return s(),n("div",null,l)}const u=a(t,[["render",c],["__file","capitalize.html.vue"]]),d=JSON.parse('{"path":"/linux/capitalize.html","title":"Convertir texto a minúsculas con el primer carácter en mayúscula (capitalize) en GNU/Linux","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"linux/capitalize.md"}');export{u as comp,d as data};
