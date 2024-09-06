import{_ as t,r as p,o,c as i,a,e as n,b as c,d as s}from"./app-VK9RvX41.js";const l={},d=s(`<h1 id="como-definir-atajos-de-teclado-en-filamentphp" tabindex="-1"><a class="header-anchor" href="#como-definir-atajos-de-teclado-en-filamentphp"><span>Cómo definir atajos de teclado en FilamentPHP</span></a></h1><p>Podemos definir atajos de teclado en FilamentPHP con:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Action</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Action</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;save&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token operator">-&gt;</span><span class="token function">keyBindings</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;command+s&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ctrl+s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Siendo <code>command</code> + <code>s</code> en Mac o <code>ctrl</code> + <code>s</code> en Windows y GNU/Linux la combinación para disparar la acción.</p>`,4),r={href:"https://craig.is/killing/mice",target:"_blank",rel:"noopener noreferrer"},u=s(`<h2 id="alternativas" tabindex="-1"><a class="header-anchor" href="#alternativas"><span>Alternativas</span></a></h2><p>Una tecla:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>    <span class="token operator">-&gt;</span><span class="token function">keyBindings</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;esc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Combinación de dos teclas:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>    <span class="token operator">-&gt;</span><span class="token function">keyBindings</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;command+s&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ctrl+s&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Combinación de tres teclas:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>    <span class="token operator">-&gt;</span><span class="token function">keyBindings</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;command+shift+k&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ctrl+shift+k&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function k(m,g){const e=p("ExternalLinkIcon");return o(),i("div",null,[d,a("p",null,[n("Hereda el estilo de los atajos de "),a("a",r,[n("https://craig.is/killing/mice"),c(e)]),n(".")]),u])}const v=t(l,[["render",k],["__file","keybindings-filament.html.vue"]]),f=JSON.parse('{"path":"/laravel/keybindings-filament.html","title":"Cómo definir atajos de teclado en FilamentPHP","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Alternativas","slug":"alternativas","link":"#alternativas","children":[]}],"git":{"updatedTime":1714899027000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/keybindings-filament.md"}');export{v as comp,f as data};