import{_ as e,o as a,c as n,d as o}from"./app-B7GFNN2_.js";const s={},t=o(`<h1 id="campos-de-texto-en-las-migraciones-en-laravel" tabindex="-1"><a class="header-anchor" href="#campos-de-texto-en-las-migraciones-en-laravel"><span>Campos de texto en las migraciones en Laravel</span></a></h1><p>En una migración de Laravel, se pueden usar distintos tipos de campos para textos. Tanto <code>text</code> como <code>string</code> se utilizan para representar campos de texto, pero hay diferencias en su capacidad de almacenamiento y en cómo se gestionan internamente en la base de datos.</p><p>Veamos algunos campos de texto comunes en Laravel:</p><ul><li><strong>string</strong>: Este tipo se utiliza para campos de texto cortos, como nombres, correos electrónicos o contraseñas. En las migraciones de Laravel, el tipo <code>string</code> se traduce a un tipo de columna <code>VARCHAR</code> en la base de datos, que tiene una longitud máxima predeterminada de 255 caracteres. Puedes especificar una longitud personalizada utilizando el método string con un argumento opcional, por ejemplo:</li></ul><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>char</strong>: Similar a <code>string</code>, pero siempre tiene una longitud fija. Se traduce a un tipo de columna <code>CHAR</code> en la base de datos. Podemos especificar la longitud con el método <code>char</code>, por ejemplo:</li></ul><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token operator">-&gt;</span><span class="token function">char</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;code&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p><strong>text</strong>: Este tipo se utiliza para campos de texto más largos, como descripciones, comentarios o notas. En las migraciones de Laravel, el tipo <code>text</code> se traduce a un tipo de columna <code>TEXT</code> en la base de datos. A diferencia de <code>string</code>, <code>text</code> no tiene una longitud máxima específica y puede almacenar una cantidad considerablemente mayor de texto.</p></li><li><p><strong>longText</strong>: Similar a <code>text</code>, pero puede almacenar una cantidad aún mayor de texto. Se traduce a un tipo de columna <code>LONGTEXT</code> en la base de datos.</p></li></ul>`,8),c=[t];function i(d,r){return a(),n("div",null,c)}const p=e(s,[["render",i],["__file","campos-texto.html.vue"]]),m=JSON.parse('{"path":"/laravel/campos-texto.html","title":"Campos de texto en las migraciones en Laravel","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1715036632000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/campos-texto.md"}');export{p as comp,m as data};