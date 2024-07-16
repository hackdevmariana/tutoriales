import{_ as n,o as s,c as a,d as e}from"./app-kAyB6N1g.js";const o={},t=e(`<h1 id="crear-un-comando-en-artisan" tabindex="-1"><a class="header-anchor" href="#crear-un-comando-en-artisan"><span>Crear un comando en artisan</span></a></h1><p>Para crear un comando artisan, usaremos el comando artisan -sic-:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>command Comando
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En función de si queremos que nuestro comando se invoque de una manera homogeneizada con el resto de comandos, usaremos <code>make:comando</code> o si lo que queremos es que se vea claramente que es un comando propio de la aplicación, usaremos el formato <code>app:comando</code>.</p><p>La propiedad <code>protected $description</code> en una clase de comando en Laravel se utiliza para proporcionar una descripción concisa de lo que hace ese comando.</p><p>Esta descripción se muestra cuando se ejecuta el comando <code>php artisan list</code>, que muestra una lista de todos los comandos disponibles en la aplicación Laravel, junto con sus descripciones.</p><h2 id="comandos-que-ejecuten-otros-comandos" tabindex="-1"><a class="header-anchor" href="#comandos-que-ejecuten-otros-comandos"><span>Comandos que ejecuten otros comandos</span></a></h2><p>Una característica que nos puede ocurrir muchas veces es que tengamos que ejecutar muchas veces un comando. Por ejemplo, cuando creamos una aplicación con muchos modelos. Para evitar lanzar muchas veces el comando:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>model Modelo <span class="token operator">-</span>m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Podemos crear un comando con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>command GenerateModels
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Que nos generará <code>app/Console/Commands/GenerateModels.php</code>. Podemos editar este fichero y crear de golpe todos los modelos con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>command GenerateModels
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y creamos un comando con tantos modelos como necesitemos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Commands</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Console<span class="token punctuation">\\</span>Command</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">GenerateModels</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * The name and signature of the console command.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$signature</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;generate:models&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * The console command description.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token variable">$description</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Generate models and migrations&#39;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Execute the console command.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">int</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Lista de nombres de modelos</span>
        <span class="token variable">$model_names</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">&quot;Author&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;AuthorLife&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Content&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Group&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Specialty&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;GroupAuthor&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;GroupTheme&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;AuthorTheme&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;AuthorSpecialty&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Theme&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Specialty&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;ThemeSpecialty&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Occupation&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Quote&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;Photo&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;URL&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// Iterar sobre cada nombre de modelo y ejecutar el comando artisan para crear el modelo y la migración</span>
        <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$model_names</span> <span class="token keyword">as</span> <span class="token variable">$model_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Crear el modelo y la migración</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;make:model&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$model_name</span><span class="token punctuation">,</span>
                <span class="token string single-quoted-string">&#39;-m&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Mensaje de salida</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Modelo <span class="token interpolation"><span class="token variable">$model_name</span></span> y migración creados&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Como lo que estamos haciendo es un comando que llama a artisan, no debemos ejecutar nada más en el sistema, ya que haremos referencias internas a los comandos de artisan con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;make:model&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$model_name</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;-m&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ejecutamos el comando con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan generate<span class="token punctuation">:</span>models
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,27),p=[t];function i(c,l){return s(),a("div",null,p)}const u=n(o,[["render",i],["__file","crear-comando.html.vue"]]),r=JSON.parse('{"path":"/laravel/crear-comando.html","title":"Crear un comando en artisan","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Comandos que ejecuten otros comandos","slug":"comandos-que-ejecuten-otros-comandos","link":"#comandos-que-ejecuten-otros-comandos","children":[]}],"git":{"updatedTime":1714899027000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/crear-comando.md"}');export{u as comp,r as data};
