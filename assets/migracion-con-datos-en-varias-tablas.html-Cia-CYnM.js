import{_ as n,o as a,c as s,d as e}from"./app-B9E03NR6.js";const t={},p=e(`<h1 id="migraciones-en-laravel-con-datos-predeterminados" tabindex="-1"><a class="header-anchor" href="#migraciones-en-laravel-con-datos-predeterminados"><span>Migraciones en Laravel con datos predeterminados</span></a></h1><p>Crear una migración con datos predeterminados en Laravel es un proceso sencillo.</p><p>Primero, creamos una nueva migración para la tabla donde deseamos insertar los datos predeterminados.</p><p>Podemos hacerlo con el comando Artisan:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>migration create_mi_tabla_table <span class="token operator">--</span>create<span class="token operator">=</span>mi_tabla
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Dentro del método <code>up()</code> de la migración, podemos insertar los datos predeterminados después de crear la estructura de la tabla.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>DB</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreateMiTablaTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
* Run the migrations.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mi_tabla&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;nombre&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Otros campos necesarios...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Datos predeterminados</span>
<span class="token variable">$datos</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;nombre&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Dato1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;nombre&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Dato2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// Añade aquí más datos predeterminados</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mi_tabla&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token variable">$datos</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* Reverse the migrations.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mi_tabla&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Una vez que hayamos definido los datos predeterminados en la migración, ejecutamos el comando <code>Artisan</code> para aplicar la migración:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Este proceso creará la tabla <code>mi_tabla</code> y llenará la misma con los datos predeterminados que hemos especificado.</p><h2 id="migracion-con-datos-predeterminados-para-varias-tablas-a-la-vez" tabindex="-1"><a class="header-anchor" href="#migracion-con-datos-predeterminados-para-varias-tablas-a-la-vez"><span>Migración con datos predeterminados para varias tablas a la vez</span></a></h2><p>Para crear una migración con datos predeterminados para varias tablas a la vez en Laravel, debemos crear una nueva migración:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>migration insert_datos_predeterminados
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Escribimos los datos predeterminados en la migración dentro del método <code>up()</code> de la nueva migración:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>DB</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">InsertDatosPredeterminados</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
* Run the migrations.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">// Datos para la tabla &#39;provincias&#39;</span>
<span class="token variable">$provincias</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;nombre&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;A Coruña&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;nombre&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Álava&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// ... más provincias</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Datos para la tabla &#39;frases_quijote&#39;</span>
<span class="token variable">$frasesQuijote</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;frase&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;En un lugar de la Mancha, de cuyo nombre no quiero acordarme...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// ... más frases</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Insertar datos en la tabla &#39;provincias&#39;</span>
<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;provincias&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token variable">$provincias</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Insertar datos en la tabla &#39;frases_quijote&#39;</span>
<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;frases_quijote&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token variable">$frasesQuijote</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Repetiremos este proceso para otras tablas si es necesario</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* Reverse the migrations.
*
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
*/</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token comment">// Opcional: Código para revertir la migración si es necesario</span>
<span class="token comment">// Por ejemplo, eliminar los datos de las tablas</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Una vez que hayamos definido los datos predeterminados para todas las tablas en la migración, ejecutamos el comando <code>Artisan</code> para aplicar la migración:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Este proceso insertará los datos predeterminados en las tablas especificadas cuando se ejecute la migración.</p>`,18),i=[p];function o(c,l){return a(),s("div",null,i)}const d=n(t,[["render",o],["__file","migracion-con-datos-en-varias-tablas.html.vue"]]),u=JSON.parse('{"path":"/laravel/migracion-con-datos-en-varias-tablas.html","title":"Migraciones en Laravel con datos predeterminados","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Migración con datos predeterminados para varias tablas a la vez","slug":"migracion-con-datos-predeterminados-para-varias-tablas-a-la-vez","link":"#migracion-con-datos-predeterminados-para-varias-tablas-a-la-vez","children":[]}],"git":{"updatedTime":1714320491000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/migracion-con-datos-en-varias-tablas.md"}');export{d as comp,u as data};
