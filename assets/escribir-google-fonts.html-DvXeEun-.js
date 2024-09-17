import{_ as n,o as a,c as s,d as t}from"./app-N90AGE-i.js";const e={},o=t(`<h1 id="escribir-en-una-imagen-con-php-usando-tipografias-de-google-fonts" tabindex="-1"><a class="header-anchor" href="#escribir-en-una-imagen-con-php-usando-tipografias-de-google-fonts"><span>Escribir en una imagen con PHP usando tipografías de Google Fonts</span></a></h1><p>Para permitir que los usuarios elijan una tipografía de <code>Google Fonts</code> y generen imágenes desde una aplicación web sin necesidad de descargar las tipografías, podemos combinar la carga dinámica de fuentes con la generación de imágenes en el servidor.</p><p>Para ello, utilizaremos la <code>API</code> de <code>Google Fonts</code> para obtener la URL de la fuente seleccionada por el usuario y la extensión <code>GD</code> de <code>PHP</code> para crear la imagen y escribir el texto con la tipografía descargada. Nos ayudaremos de <code>file_get_contents</code> para descargar la fuente temporalmente.</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">downloadFont</span><span class="token punctuation">(</span><span class="token variable">$fontUrl</span><span class="token punctuation">,</span> <span class="token variable">$fontPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$fontData</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$fontUrl</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token variable">$fontPath</span><span class="token punctuation">,</span> <span class="token variable">$fontData</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$fontUrl</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;https://fonts.googleapis.com/css2?family=Roboto:wght@400&amp;display=swap&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$fontPath</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;path/to/temp/font.ttf&quot;</span><span class="token punctuation">;</span>
<span class="token function">downloadFont</span><span class="token punctuation">(</span><span class="token variable">$fontUrl</span><span class="token punctuation">,</span> <span class="token variable">$fontPath</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$img</span> <span class="token operator">=</span> <span class="token function">imagecreatetruecolor</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$bg_color</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">imagefilledrectangle</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token variable">$bg_color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$text_color</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$font_path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;path/to/temp/font.ttf&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Hola, mundo!&quot;</span><span class="token punctuation">;</span>

<span class="token function">imagettftext</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token variable">$text_color</span><span class="token punctuation">,</span> <span class="token variable">$font_path</span><span class="token punctuation">,</span> <span class="token variable">$text</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">imagejpeg</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;output.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">unlink</span><span class="token punctuation">(</span><span class="token variable">$font_path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elegir-la-tipografia-de-un-listado-en-html" tabindex="-1"><a class="header-anchor" href="#elegir-la-tipografia-de-un-listado-en-html"><span>Elegir la tipografía de un listado en HTML</span></a></h2>`,5),p=[o];function l(c,i){return a(),s("div",null,p)}const r=n(e,[["render",l],["__file","escribir-google-fonts.html.vue"]]),d=JSON.parse('{"path":"/php/imagenes/escribir-google-fonts.html","title":"Escribir en una imagen con PHP usando tipografías de Google Fonts","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Elegir la tipografía de un listado en HTML","slug":"elegir-la-tipografia-de-un-listado-en-html","link":"#elegir-la-tipografia-de-un-listado-en-html","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"php/imagenes/escribir-google-fonts.md"}');export{r as comp,d as data};