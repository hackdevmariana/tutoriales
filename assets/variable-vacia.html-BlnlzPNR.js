import{_ as e,o as a,c as i,d as n}from"./app-g6bageYi.js";const s={},l=n(`<h1 id="como-saber-en-php-si-una-variable-esta-vacia" tabindex="-1"><a class="header-anchor" href="#como-saber-en-php-si-una-variable-esta-vacia"><span>Cómo saber en PHP si una variable está vacía</span></a></h1><p>Para saber si una variable está vacía en PHP, podemos usar la función <code>empty()</code>. Esta función verifica si una variable está vacía, lo que incluye los siguientes casos:</p><p>• La variable no está definida.</p><p>• La variable es <code>null</code>.</p><p>• La variable es una cadena vacía (<code>&quot;&quot;</code>).</p><p>• La variable es un array vacío (<code>[]</code>).</p><p>• La variable es false.</p><p>• La variable es 0 (entero o cadena).</p><h2 id="ejemplo-de-uso-de-empty" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso-de-empty"><span>Ejemplo de Uso de empty()</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  $variable1 = &quot;&quot;;
  $variable2 = null;
  $variable3 = [];
  $variable4 = false;
  $variable5 = 0;

  if (empty($variable1)) {
    echo &quot;variable1 está vacía\\n&quot;;
  }

  if (empty($variable2)) {
    echo &quot;variable2 está vacía\\n&quot;;
  }

  if (empty($variable3)) {
    echo &quot;variable3 está vacía\\n&quot;;
  }

  if (empty($variable4)) {
    echo &quot;variable4 está vacía\\n&quot;;
  }

  if (empty($variable5)) {
    echo &quot;variable5 está vacía\\n&quot;;
  }
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usando-isset-y-trim" tabindex="-1"><a class="header-anchor" href="#usando-isset-y-trim"><span>Usando isset() y trim()</span></a></h2><p>A veces, es útil combinar <code>isset()</code> y <code>trim()</code> para verificar si una variable está definida y no es una cadena vacía o sólo espacios en blanco:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  $variable = &quot;   &quot;;

  if (isset($variable) &amp;&amp; trim($variable) === &quot;&quot;) {
    echo &quot;La variable está vacía o solo contiene espacios en blanco\\n&quot;;
  }
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="diferencias-entre-empty-e-isset" tabindex="-1"><a class="header-anchor" href="#diferencias-entre-empty-e-isset"><span>Diferencias entre empty() e isset()</span></a></h2><p>• <code>empty()</code>: Verifica si una variable está vacía según los criterios mencionados.</p><p>• <code>isset()</code>: Verifica si una variable está definida y no es <code>null</code>.</p><h3 id="ejemplo-comparativo" tabindex="-1"><a class="header-anchor" href="#ejemplo-comparativo"><span>Ejemplo Comparativo</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  $variable = &quot;&quot;;

  if (empty($variable)) {
    echo &quot;La variable está vacía\\n&quot;;
  }

  if (isset($variable)) {
    echo &quot;La variable está definida\\n&quot;;
  }
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Se imprimirán ambas cadenas.</p>`,19),d=[l];function t(r,v){return a(),i("div",null,d)}const o=e(s,[["render",t],["__file","variable-vacia.html.vue"]]),u=JSON.parse('{"path":"/php/variable-vacia.html","title":"Cómo saber en PHP si una variable está vacía","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplo de Uso de empty()","slug":"ejemplo-de-uso-de-empty","link":"#ejemplo-de-uso-de-empty","children":[]},{"level":2,"title":"Usando isset() y trim()","slug":"usando-isset-y-trim","link":"#usando-isset-y-trim","children":[]},{"level":2,"title":"Diferencias entre empty() e isset()","slug":"diferencias-entre-empty-e-isset","link":"#diferencias-entre-empty-e-isset","children":[{"level":3,"title":"Ejemplo Comparativo","slug":"ejemplo-comparativo","link":"#ejemplo-comparativo","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/variable-vacia.md"}');export{o as comp,u as data};
