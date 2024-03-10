import{_ as n,o as e,c as a,d as s}from"./app-Cc5DV6oD.js";const i={},o=s(`<h1 id="generacion-diferida-de-resultados-con-yield" tabindex="-1"><a class="header-anchor" href="#generacion-diferida-de-resultados-con-yield"><span>Generación diferida de resultados con yield</span></a></h1><p>La generación diferida de resultados en Python se logra mediante el uso de generadores y expresiones generadoras. Un generador es una función que contiene la palabra clave <code>yield</code> en lugar de <code>return</code>. Cuando se llama a una función generadora, esta devuelve un generador, que es una especie de iterador especial que puede ser iterado una vez. Cada vez que se alcanza una declaración <code>yield</code>, el generador se detiene y el valor es devuelto al llamador. La próxima vez que se solicita el siguiente valor, la ejecución de la función generadora se reanuda justo después de la última declaración <code>yield</code>.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">generador_ejemplo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">yield</span> <span class="token number">2</span>
    <span class="token keyword">yield</span> <span class="token number">3</span>

<span class="token comment"># Crear un generador</span>
mi_generador <span class="token operator">=</span> generador_ejemplo<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Iterar sobre el generador</span>
<span class="token keyword">for</span> valor <span class="token keyword">in</span> mi_generador<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>valor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este código imprimirá:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Además de la capacidad de generar valores de forma diferida, <code>yield</code> ofrece algunas otras características y posibilidades:</p><ul><li><p><strong>Pausa y reanudación</strong>: Cuando se encuentra una instrucción <code>yield</code>, la ejecución de la función generadora se detiene y el valor es devuelto al llamador. La próxima vez que se solicita el siguiente valor, la ejecución se reanuda justo después de la última instrucción yield, manteniendo el estado local de la función.</p></li><li><p><strong>Ahorro de memoria</strong>: A diferencia de las funciones que devuelven listas o generadores completos de inmediato, las funciones generadoras con yield pueden ahorrar memoria al no generar todos los valores de una vez. Esto es útil cuando se trabaja con grandes conjuntos de datos o secuencias infinitas.</p></li><li><p><strong>Iteración infinita</strong>: Puedes usar yield para crear generadores que representen secuencias infinitas. La ejecución se pausará y reanudará según sea necesario.</p></li></ul><p>Iterar infinitamente sobre los números:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">numeros_infinitos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> i
        i <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">for</span> numero <span class="token keyword">in</span> numeros_infinitos<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>numero<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generacion-condicional" tabindex="-1"><a class="header-anchor" href="#generacion-condicional"><span>Generación condicional</span></a></h2><p>Podemos utilizar <code>yield</code> en función de ciertas condiciones para producir valores sólo cuando sea necesario.</p><p>Iterar sobre los números pares infinitamente:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">pares_infinitos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> i
        i <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">for</span> numero_par <span class="token keyword">in</span> pares_infinitos<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>numero_par<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function r(d,c){return e(),a("div",null,l)}const p=n(i,[["render",r],["__file","yield.html.vue"]]),u=JSON.parse('{"path":"/python/yield.html","title":"Generación diferida de resultados con yield","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Generación condicional","slug":"generacion-condicional","link":"#generacion-condicional","children":[]}],"git":{"updatedTime":1710110777000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/yield.md"}');export{p as comp,u as data};
