import{_ as e,o as t,c as n,d as o}from"./app-CDgko24z.js";const a={},i=o(`<h1 id="acceder-a-elementos-en-una-lista-multidimensional" tabindex="-1"><a class="header-anchor" href="#acceder-a-elementos-en-una-lista-multidimensional"><span>Acceder a elementos en una lista multidimensional</span></a></h1><p>Para acceder a un elemento específico en un array multidimensional en PHP, necesitamos especificar las claves de cada nivel del array.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

$productos = array(
  array(&quot;nombre&quot; =&gt; &quot;Bolígrafo&quot;, &quot;precio&quot; =&gt; 0.75, &quot;cantidad&quot; =&gt; 100),
  array(&quot;nombre&quot; =&gt; &quot;Cuaderno&quot;, &quot;precio&quot; =&gt; 2.50, &quot;cantidad&quot; =&gt; 50),
  array(&quot;nombre&quot; =&gt; &quot;Borrador&quot;, &quot;precio&quot; =&gt; 0.50, &quot;cantidad&quot; =&gt; 200)
);

$precioCuaderno = $productos[1][&quot;precio&quot;];

echo &quot;El precio del cuaderno es: &quot; . $precioCuaderno;
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, <code>$productos</code> es un array multidimensional. Para acceder al precio del segundo producto (Cuaderno), utilizamos <code>$productos[1][&quot;precio&quot;]</code>. Aquí, <code>1</code> es el índice del segundo array dentro de <code>$productos</code>, y <code>&quot;precio&quot;</code> es la clave del valor que queremos obtener.</p><p>Si trabajamos con un array tridimensional, el acceso sería similar pero con un nivel adicional de claves. Por ejemplo:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

$almacen = array(
  &quot;Sección 1&quot; =&gt; array(
    &quot;Estante 1&quot; =&gt; array(&quot;Producto A&quot;, &quot;Producto B&quot;),
    &quot;Estante 2&quot; =&gt; array(&quot;Producto C&quot;, &quot;Producto D&quot;)
  ),
  &quot;Sección 2&quot; =&gt; array(
    &quot;Estante 1&quot; =&gt; array(&quot;Producto E&quot;, &quot;Producto F&quot;),
    &quot;Estante 2&quot; =&gt; array(&quot;Producto G&quot;, &quot;Producto H&quot;)
  )
);

$producto = $almacen[&quot;Sección 1&quot;][&quot;Estante 2&quot;][0];

echo &quot;El primer producto del Estante 2 en la Sección 1 es: &quot; . $producto;
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este caso, <code>[&quot;Sección 1&quot;][&quot;Estante 2&quot;][0]</code> nos lleva al primer producto del Estante 2 en la Sección 1.</p>`,7),d=[i];function u(l,r){return t(),n("div",null,d)}const c=e(a,[["render",u],["__file","acceder-elementos-lista-multidimensional.html.vue"]]),m=JSON.parse('{"path":"/php/acceder-elementos-lista-multidimensional.html","title":"Acceder a elementos en una lista multidimensional","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/acceder-elementos-lista-multidimensional.md"}');export{c as comp,m as data};
