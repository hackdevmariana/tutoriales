import{_ as n,o as s,c as a,d as e}from"./app-DfPPcu7H.js";const t={},o=e(`<h2 id="metodos-magicos-o-dunder" tabindex="-1"><a class="header-anchor" href="#metodos-magicos-o-dunder"><span>Métodos mágicos o dunder</span></a></h2><p>Los &quot;métodos dunder&quot; (double underscore methods) en Python son también conocidos como &quot;métodos mágicos&quot; o &quot;métodos especiales&quot;. Estos métodos son identificados por tener doble guion bajo al principio y al final de sus nombres. Son llamados automáticamente por el intérprete en circunstancias específicas y proporcionan una forma de definir comportamientos específicos para objetos.</p><p>Algunos de los métodos dunder más comunes incluyen:</p><p><strong><code>__init__(self, ...)</code></strong></p><p>Este método se llama cuando se crea una nueva instancia del objeto. Se utiliza para inicializar los atributos del objeto.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> atributo1<span class="token punctuation">,</span> atributo2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>atributo1 <span class="token operator">=</span> atributo1
        self<span class="token punctuation">.</span>atributo2 <span class="token operator">=</span> atributo2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>__str__(self), __repr__(self)</code></strong></p><p><code>__str__</code> se llama cuando se utiliza la función str(objeto) y <code>__repr__</code> se llama cuando se utiliza repr(objeto). Ambos métodos deben devolver una representación de cadena del objeto.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;MiClase(atributo1=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>atributo1<span class="token punctuation">}</span></span><span class="token string">, atributo2=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>atributo2<span class="token punctuation">}</span></span><span class="token string">)&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>__len__(self)</code></strong></p><p>Se llama cuando se utiliza la función len(objeto) y debe devolver la longitud del objeto.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__len__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>atributo1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>__getitem__(self, key), __setitem__(self, key, value), __delitem__(self, key)</code></strong></p><p>Permiten definir comportamientos para acceder, asignar y eliminar elementos utilizando la notación de corchetes.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__getitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>atributo1<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__setitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>atributo1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value

    <span class="token keyword">def</span> <span class="token function">__delitem__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">del</span> self<span class="token punctuation">.</span>atributo1<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>__call__(self, ...)</code></strong></p><p>Permite que una instancia de la clase se comporte como una función. Se llama cuando se utiliza la notación de paréntesis con la instancia.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","dunder.html.vue"]]),r=JSON.parse('{"path":"/python/dunder.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Métodos mágicos o dunder","slug":"metodos-magicos-o-dunder","link":"#metodos-magicos-o-dunder","children":[]}],"git":{"updatedTime":1709938397000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/dunder.md"}');export{d as comp,r as data};
