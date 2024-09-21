import{_ as s,o as a,c as t,d as e}from"./app-BLmzr94g.js";const n={},o=e(`<h1 id="convertir-texto-a-minusculas" tabindex="-1"><a class="header-anchor" href="#convertir-texto-a-minusculas"><span>Convertir texto a minúsculas</span></a></h1><p>Podemos usar el comando <code>tr</code> en Bash para convertir todas las letras de un fichero a minúsculas:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">tr</span> <span class="token string">&#39;[:upper:]&#39;</span> <span class="token string">&#39;[:lower:]&#39;</span> <span class="token operator">&lt;</span> input.txt <span class="token operator">&gt;</span> output.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O, con <code>cat</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> input.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;[:upper:]&#39;</span> <span class="token string">&#39;[:lower:]&#39;</span> <span class="token operator">&gt;</span> output.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),c=[o];function r(i,l){return a(),t("div",null,c)}const d=s(n,[["render",r],["__file","texto-minusculas.html.vue"]]),u=JSON.parse('{"path":"/linux/texto-minusculas.html","title":"Convertir texto a minúsculas","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"linux/texto-minusculas.md"}');export{d as comp,u as data};