import{_ as e,o as a,c as n,d as l}from"./app-B8vg3PFh.js";const s={},i=l(`<h1 id="como-devolver-multiples-valores-a-traves-de-una-funcion" tabindex="-1"><a class="header-anchor" href="#como-devolver-multiples-valores-a-traves-de-una-funcion"><span>Cómo devolver múltiples valores a través de una función</span></a></h1><p>Una función en PHP puede devolver múltiples valores utilizando un array o una lista.</p><h2 id="usando-un-array" tabindex="-1"><a class="header-anchor" href="#usando-un-array"><span>Usando un array</span></a></h2><p>Podemos devolver un array que contenga los valores que queramos retornar:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  function obtenerValores() {
    $valor1 = &quot;Hola&quot;;
    $valor2 = &quot;Mundo&quot;;
    return array($valor1, $valor2);
  }

  list($saludo, $lugar) = obtenerValores();
  echo $saludo . &quot; &quot; . $lugar;
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usando-una-lista-sintaxis-de-php-7-1" tabindex="-1"><a class="header-anchor" href="#usando-una-lista-sintaxis-de-php-7-1"><span>Usando una Lista (Sintaxis de PHP 7.1+)</span></a></h2><p>A partir de PHP 7.1, podemos usar la sintaxis de lista para devolver múltiples valores:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php
  function obtenerValores() {
  $valor1 = &quot;Hola&quot;;
  $valor2 = &quot;Mundo&quot;;
  return [$valor1, $valor2];
  }

  [$saludo, $lugar] = obtenerValores();
  echo $saludo . &quot; &quot; . $lugar; // Hola Mundo
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[i];function t(d,o){return a(),n("div",null,r)}const v=e(s,[["render",t],["__file","return-multiple.html.vue"]]),c=JSON.parse('{"path":"/php/return-multiple.html","title":"Cómo devolver múltiples valores a través de una función","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Usando un array","slug":"usando-un-array","link":"#usando-un-array","children":[]},{"level":2,"title":"Usando una Lista (Sintaxis de PHP 7.1+)","slug":"usando-una-lista-sintaxis-de-php-7-1","link":"#usando-una-lista-sintaxis-de-php-7-1","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/return-multiple.md"}');export{v as comp,c as data};
