import{_ as a,o as s,c as e,d as n}from"./app-CgV8IxxG.js";const l={},t=n(`<h1 id="listar-las-tablas-de-una-base-de-datos-desde-la-terminal" tabindex="-1"><a class="header-anchor" href="#listar-las-tablas-de-una-base-de-datos-desde-la-terminal"><span>Listar las tablas de una base de datos desde la terminal</span></a></h1><p>Para listar bases de datos desde la terminal, debemos entrar en el servidor de MySQL:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y listar las bases de datos con:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Cuando encontremos la base de datos de la que listar las tablas:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">FULL</span> <span class="token keyword">TABLES</span> <span class="token keyword">FROM</span> <span class="token keyword">database</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),d=[t];function r(i,o){return s(),e("div",null,d)}const p=a(l,[["render",r],["__file","listar-tablas.html.vue"]]),m=JSON.parse('{"path":"/mysql/listar-tablas.html","title":"Listar las tablas de una base de datos desde la terminal","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1714171990000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"mysql/listar-tablas.md"}');export{p as comp,m as data};