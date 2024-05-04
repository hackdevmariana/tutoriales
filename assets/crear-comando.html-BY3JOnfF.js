import{_ as n,o as a,c as s,d as e}from"./app-t77-xqMy.js";const o={},c=e(`<h1 id="crear-un-comando-en-artisan" tabindex="-1"><a class="header-anchor" href="#crear-un-comando-en-artisan"><span>Crear un comando en artisan</span></a></h1><p>Para crear un comando artisan, usaremos el comando artisan -sic-:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>command Comando
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto creará un fichero <code>app/Console/Commands/Comando.php</code>:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Commands</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Command</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestEmails</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * The name and signature of the console command.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$signature</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;app:comando&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The console command description.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$description</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Command description&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Execute the console command.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Donde podemos configurar la forma de invocar el comando:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$signature</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;app:comando&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Por, por ejemplo:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$signature</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;make:sendmail&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para crear directamente un comando que se ejecute al escribir make:sendmail, podríamos haberlo creado con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>command MakeSendMail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En función de si queremos que nuestro comando se invoque de una manera homogeneizada con el resto de comandos, usaremos <code>make:comando</code> o si lo que queremos es que se vea claramente que es un comando propio de la aplicación, usaremos el formato <code>app:comando</code>.</p><p>La propiedad <code>protected $description</code> en una clase de comando en Laravel se utiliza para proporcionar una descripción concisa de lo que hace ese comando.</p><p>Esta descripción se muestra cuando se ejecuta el comando <code>php artisan list</code>, que muestra una lista de todos los comandos disponibles en la aplicación Laravel, junto con sus descripciones.</p>`,14),i=[c];function p(d,t){return a(),s("div",null,i)}const r=n(o,[["render",p],["__file","crear-comando.html.vue"]]),u=JSON.parse('{"path":"/laravel/crear-comando.html","title":"Crear un comando en artisan","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/crear-comando.md"}');export{r as comp,u as data};
