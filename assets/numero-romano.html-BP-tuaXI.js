import{_ as e,o as n,c as i,d as a}from"./app-CH7PZLbB.js";const r={},o=a(`<h1 id="convertir-un-numero-arabigo-a-numero-romano-en-php" tabindex="-1"><a class="header-anchor" href="#convertir-un-numero-arabigo-a-numero-romano-en-php"><span>Convertir un número arábigo a número romano en PHP</span></a></h1><p>Para convertir un número arábigo a número romano en PHP, crearemos un array asociativo que mapee los números romanos a sus valores correspondientes.</p><p>Mientras el número a convertir sea mayor que 0, recorremos el mapa de conversión con un bucle <code>while</code>.</p><p>Si el número es mayor o igual al valor actual del mapa, restaremos ese valor del número y añadiremos el símbolo romano correspondiente a la cadena que generamos con el número romano y que devolveremos al final de la función.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  function numeroARomano($numero) {
    $mapa = [
      &#39;M&#39; =&gt; 1000,
      &#39;CM&#39; =&gt; 900,
      &#39;D&#39; =&gt; 500,
      &#39;CD&#39; =&gt; 400,
      &#39;C&#39; =&gt; 100,
      &#39;XC&#39; =&gt; 90,
      &#39;L&#39; =&gt; 50,
      &#39;XL&#39; =&gt; 40,
      &#39;X&#39; =&gt; 10,
      &#39;IX&#39; =&gt; 9,
      &#39;V&#39; =&gt; 5,
      &#39;IV&#39; =&gt; 4,
      &#39;I&#39; =&gt; 1
    ];

    $romano = &#39;&#39;;

    while ($numero &gt; 0) {
      foreach ($mapa as $rom =&gt; $val) {
        if ($numero &gt;= $val) {
          $numero -= $val;
          $romano .= $rom;
          break;
        }
      }
    }
    return $romano;
  }


  $numero = 1994;
  echo numeroARomano($numero);
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, devolverá <code>MCMXCIV</code>.</p>`,6),s=[o];function l(d,m){return n(),i("div",null,s)}const c=e(r,[["render",l],["__file","numero-romano.html.vue"]]),t=JSON.parse('{"path":"/php/numero-romano.html","title":"Convertir un número arábigo a número romano en PHP","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/numero-romano.md"}');export{c as comp,t as data};
