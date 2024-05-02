import{_ as n,o as s,c as a,d as t}from"./app-bUC6OYzN.js";const p={},e=t(`<h1 id="mostrar-notificaciones-en-filamentphp" tabindex="-1"><a class="header-anchor" href="#mostrar-notificaciones-en-filamentphp"><span>Mostrar notificaciones en FilamentPHP</span></a></h1><p>Cuando realizamos una acción en FilamentPHP, podemos informar al usuario de la realización de dicha acción.</p><p>Para mostrar un mensaje simple:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos añadir un icono y definir su color:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">icon</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;heroicon-o-document-text&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">iconColor</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FilamentPHP cuenta con cuatro métodos incorporados: <code>success()</code>, <code>warning()</code>, <code>danger()</code> e <code>info()</code> que vienen ya predefinidos con icono y color:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>También podemos definir el color de fondo:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;success&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos definir la duración en milisegundos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">duration</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O en segundos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si queremos que sea persistente y no desaparezca:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">persistent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos mostrar un título y una descripción:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Changes to the post have been saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lanzar acciones desde las notificaciones:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Changes to the post have been saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si, en lugar de acciones, lo que queremos es enviar a una URL, podemos usar:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Changes to the post have been saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts.show&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token argument-name">shouldOpenInNewTab</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Envío de eventos Livewire desde acciones de notificación</p><p>A veces, nos interesa ejecutar código adicional cuando se hace clic en una acción de notificación. Esto se puede lograr configurando un evento <code>Livewire</code> que debe enviarse al hacer clic en la acción.</p><p>Opcionalmente, podemos pasar una serie de datos, que estarán disponibles como parámetros en el detector de eventos del componente Livewire:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Changes to the post have been saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts.show&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token argument-name">shouldOpenInNewTab</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undoEditingPost&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>También podemos hacer <code>dispatchSelf</code> y <code>dispatchTo</code>:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">dispatchSelf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undoEditingPost&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">dispatchTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;another_component&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;undoEditingPost&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Después de abrir una URL o enviar un evento desde su acción, es posible que nos interese cerrar la notificación de inmediato:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Notifications<span class="token punctuation">\\</span>Notification</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Notification</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Saved successfully&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Changes to the post have been saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;view&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">button</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts.show&#39;</span><span class="token punctuation">,</span> <span class="token variable">$post</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token argument-name">shouldOpenInNewTab</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undo&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;gray&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;undoEditingPost&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$post</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","notificaciones-filament.html.vue"]]),r=JSON.parse('{"path":"/laravel/notificaciones-filament.html","title":"Mostrar notificaciones en FilamentPHP","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/notificaciones-filament.md"}');export{k as comp,r as data};
