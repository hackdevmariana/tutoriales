import{_ as e,o as a,c as s,d as n}from"./app-_wv3WP9v.js";const t={},o=n(`<h1 id="composition-api-con-script-setup" tabindex="-1"><a class="header-anchor" href="#composition-api-con-script-setup"><span>Composition API con script setup</span></a></h1><p>La opción <code>&lt;script setup&gt;</code> es una característica introducida en Vue 3 que simplifica enormemente el uso de la Composition API. Básicamente, <code>&lt;script setup&gt;</code> es una forma más concisa y declarativa de escribir la lógica de un componente utilizando la Composition API.</p><h2 id="ventajas-de-script-setup" tabindex="-1"><a class="header-anchor" href="#ventajas-de-script-setup"><span>Ventajas de <code>&lt;script setup&gt;</code></span></a></h2><p><strong>Automatización de la Reactividad</strong>: Vue se encarga automáticamente de la reactividad de las variables y funciones definidas en <code>&lt;script setup&gt;</code>. Esto elimina la necesidad de importar funciones como <code>ref</code> o <code>reactive</code> y permite a los desarrolladores centrarse directamente en la lógica del componente.</p><p><strong>Menos importaciones</strong>: Al utilizar <code>&lt;script setup&gt;</code>, se reducen las importaciones, ya que muchas de las funciones de Vue necesarias para la reactividad se manejan implícitamente.</p><p><strong>Exportación implícita</strong>: Las variables y funciones definidas en <code>&lt;script setup&gt;</code> están automáticamente disponibles en el template sin necesidad de exportarlas explícitamente, simplificando aún más el código y mejorando la legibilidad.</p><p><strong>Menos Código</strong>: Reduce la verbosidad y hace que el código sea más legible y conciso.</p><p><strong>Más Declarativo</strong>: Facilita la comprensión al escribir la lógica del componente más cerca del template, lo que mejora la cohesión del código.</p><h2 id="caracteristicas-principales-de-script-setup" tabindex="-1"><a class="header-anchor" href="#caracteristicas-principales-de-script-setup"><span>Características principales de <code>&lt;script setup&gt;</code></span></a></h2><p>Reduce la cantidad de código al eliminar la necesidad de importar funciones de Vue (como <code>ref</code>, <code>reactive</code>, <code>computed</code>, etc.) y el uso de return.</p><p>Las variables y funciones definidas en <code>&lt;script setup&gt;</code> se exponen automáticamente al template, lo que significa que no es necesario devolver explícitamente los elementos del componente.</p><p>Vue maneja automáticamente la configuración de la infraestructura para el uso de las funciones de la Composition API, lo que reduce la complejidad y la necesidad de escribir código repetitivo.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Contador<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>Incrementar<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="diferencias-entre-script-y-script-setup" tabindex="-1"><a class="header-anchor" href="#diferencias-entre-script-y-script-setup"><span>Diferencias entre <code>&lt;script&gt;</code> y <code>&lt;script setup&gt;</code></span></a></h2><p>La elección entre <code>&lt;script setup&gt;</code> y <code>&lt;script&gt;</code> estándar depende mucho del contexto y la complejidad del componente.</p><p><code>&lt;script setup&gt;</code> es ideal para:</p><ul><li><p>Componentes Simples: Cuando se trata de componentes más simples y directos, <code>&lt;script setup&gt;</code> ofrece una sintaxis más concisa y legible.</p></li><li><p>Logica Directa del Template: Para lógica que se integra directamente con el template y no requiere un control detallado del ciclo de vida del componente.</p></li></ul><p><code>&lt;script&gt;</code> estándar es útil para:</p><ul><li><p>Control Detallado: Cuando se necesita un control más detallado del ciclo de vida del componente, como en casos de uso avanzados o lógica más compleja.</p></li><li><p>Componentes Reutilizables o Complejos: En componentes reutilizables, con lógica compleja o donde se necesita más separación entre la lógica y el template.</p></li></ul>`,19),c=[o];function i(p,r){return a(),s("div",null,c)}const d=e(t,[["render",i],["__file","composition-api-con-script-setup.html.vue"]]),u=JSON.parse('{"path":"/vue/composition-api-con-script-setup.html","title":"Composition API con script setup","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ventajas de <script setup>","slug":"ventajas-de-script-setup","link":"#ventajas-de-script-setup","children":[]},{"level":2,"title":"Características principales de <script setup>","slug":"caracteristicas-principales-de-script-setup","link":"#caracteristicas-principales-de-script-setup","children":[]},{"level":2,"title":"Diferencias entre <script> y <script setup>","slug":"diferencias-entre-script-y-script-setup","link":"#diferencias-entre-script-y-script-setup","children":[]}],"git":{"updatedTime":1708778239000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"vue/composition-api-con-script-setup.md"}');export{d as comp,u as data};