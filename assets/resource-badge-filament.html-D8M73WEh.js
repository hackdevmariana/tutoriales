import{_ as n,o as s,c as a,d as t}from"./app-DsLKox8_.js";const e={},p=t(`<h1 id="badges-en-laravel" tabindex="-1"><a class="header-anchor" href="#badges-en-laravel"><span>Badges en Laravel</span></a></h1><p>Para mostrar el número de elementos que tiene un modelo en el menú de un resource en FilamentPHP, podemos ir al fichero <code>{nombre}Resource.php</code> y añadir:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getNavigationBadge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword static-context">static</span><span class="token operator">::</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">::</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto mostraría el número de elementos totales que tiene un modelo.</p><p>Para mostrar los elementos referentes al usuario, usaremos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getNavigationBadge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">getEloquentQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para mostrar la cantidad de elementos de un usuario que cumplen una condición, usaremos algo como:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getNavigationBadge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">getEloquentQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;pending&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para cambiar el color en función la cantidad de elementos de un usuario que cumplen una condición, usaremos algo como:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getNavigationBadge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token operator">?</span><span class="token keyword return-type">string</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">getEloquentQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;user_id&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">Auth</span><span class="token operator">::</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;pending&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;warning&#39;</span> <span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;primary&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si, además de mostrar el badge, queremos que al pasar el ratón por encima, muestre una descripción de lo que está mostrando, usaremos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$navigationBadgeTooltip</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Descripción del badge&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","resource-badge-filament.html.vue"]]),d=JSON.parse('{"path":"/laravel/resource-badge-filament.html","title":"Badges en Laravel","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1714899027000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/resource-badge-filament.md"}');export{r as comp,d as data};