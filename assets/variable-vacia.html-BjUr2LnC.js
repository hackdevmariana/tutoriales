import{_ as e,o as a,c as i,d as n}from"./app-DV0J3Pn5.js";const l={},s=n(`<h1 id="como-saber-en-php-si-una-variable-esta-vacia" tabindex="-1"><a class="header-anchor" href="#como-saber-en-php-si-una-variable-esta-vacia"><span>Cómo saber en PHP si una variable está vacía</span></a></h1><p>Para saber si una variable está vacía en PHP, podemos usar la función <code>empty()</code>. Esta función verifica si una variable está vacía, lo que incluye los siguientes casos:</p><p>• La variable no está definida.</p><p>• La variable es null.</p><p>• La variable es una cadena vacía (&quot;&quot;).</p><p>• La variable es un array vacío ([]).</p><p>• La variable es false.</p><p>• La variable es 0 (entero o cadena).</p><h2 id="ejemplo-de-uso-de-empty" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-uso-de-empty"><span>Ejemplo de Uso de empty()</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),v=[s];function d(r,t){return a(),i("div",null,v)}const o=e(l,[["render",d],["__file","variable-vacia.html.vue"]]),u=JSON.parse('{"path":"/php/variable-vacia.html","title":"Cómo saber en PHP si una variable está vacía","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplo de Uso de empty()","slug":"ejemplo-de-uso-de-empty","link":"#ejemplo-de-uso-de-empty","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/variable-vacia.md"}');export{o as comp,u as data};
