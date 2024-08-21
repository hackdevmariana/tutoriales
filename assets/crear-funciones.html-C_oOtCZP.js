import{_ as n,o as a,c as s,d as e}from"./app-D7qG6kHZ.js";const c={},o=e(`<h1 id="crear-funciones" tabindex="-1"><a class="header-anchor" href="#crear-funciones"><span>Crear funciones</span></a></h1><p>Definir la función:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>calcular_cuadrado <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  resultado <span class="token operator">&lt;-</span> x<span class="token operator">^</span><span class="token number">2</span>
  return<span class="token punctuation">(</span>resultado<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usar la función:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>cuadrado_de_cuatro <span class="token operator">&lt;-</span> calcular_cuadrado<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
print<span class="token punctuation">(</span>cuadrado_de_cuatro<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Imprime: 16</p><p>En este ejemplo, <code>calcular_cuadrado</code> es el nombre de la función, <code>x</code> es el argumento, y resultado es el valor que se retorna.</p><h2 id="documentar-funciones" tabindex="-1"><a class="header-anchor" href="#documentar-funciones"><span>Documentar funciones</span></a></h2><p>Documentar tus funciones en R es esencial para que tanto nosotros como programadores como otras personas puedan entender y utilizar el código correctamente.</p><p>Algunos pasos y consejos para documentar las funciones:</p><p><strong>Comentarios descriptivos</strong>: Utilizaremos comentarios claros y descriptivos al principio de la función para explicar qué hace, cómo se usa y qué parámetros espera. Los comentarios en R se añaden con el símbolo <code>#</code>:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token comment"># Esta función calcula el cuadrado de un número</span>
<span class="token comment"># Parámetros:</span>
<span class="token comment">#   x: Un número</span>
<span class="token comment"># Devuelve:</span>
<span class="token comment">#   El cuadrado de x</span>
calcular_cuadrado <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token operator">^</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Documentación en bloque</strong>: Para funciones más complejas, consideraremos usar un bloque de comentarios al principio de la función para proporcionar una descripción más detallada, incluyendo ejemplos de uso:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token comment"># Calcular Cuadrado</span>
<span class="token comment">#</span>
<span class="token comment"># Esta función toma un número como entrada y devuelve su cuadrado.</span>
<span class="token comment">#</span>
<span class="token comment"># Args:</span>
<span class="token comment">#   x: Un número (numeric).</span>
<span class="token comment">#</span>
<span class="token comment"># Returns:</span>
<span class="token comment">#   El cuadrado de x (numeric).</span>
<span class="token comment">#</span>
<span class="token comment"># Examples:</span>
<span class="token comment">#   calcular_cuadrado(4) # devuelve 16</span>
<span class="token comment">#</span>
calcular_cuadrado <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token operator">^</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Roxygen2 para paquetes</strong>: Si estamos desarrollando un paquete en R, podemos usar <code>Roxygen2</code>, que es una herramienta de documentación que permite escribir la documentación junto al código y luego la convierte en archivos <code>.Rd</code> que R puede interpretar.</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token comment">#&#39; Calcular Cuadrado</span>
<span class="token comment">#&#39;</span>
<span class="token comment">#&#39; @param x Un número.</span>
<span class="token comment">#&#39; @return El cuadrado de x.</span>
<span class="token comment">#&#39; @examples</span>
<span class="token comment">#&#39; calcular_cuadrado(4) # devuelve 16</span>
calcular_cuadrado <span class="token operator">&lt;-</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x<span class="token operator">^</span><span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Luego, podemos usar <code>devtools::document()</code> para generar la documentación del paquete.</p>`,17),r=[o];function t(l,i){return a(),s("div",null,r)}const p=n(c,[["render",t],["__file","crear-funciones.html.vue"]]),u=JSON.parse('{"path":"/r/crear-funciones.html","title":"Crear funciones","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Documentar funciones","slug":"documentar-funciones","link":"#documentar-funciones","children":[]}],"git":{"updatedTime":1715763058000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"r/crear-funciones.md"}');export{p as comp,u as data};
