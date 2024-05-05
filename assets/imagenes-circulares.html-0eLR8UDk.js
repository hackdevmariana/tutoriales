import{_ as a,o as n,c as s,d as e}from"./app-BN2BijbB.js";const t={},p=e(`<h1 id="como-mostrar-una-imagen-circular-en-css" tabindex="-1"><a class="header-anchor" href="#como-mostrar-una-imagen-circular-en-css"><span>Cómo mostrar una imagen circular en CSS</span></a></h1><p>En este artículo vamos a ver cómo transformar cualquier imagen en una imagen circular usando sólo CSS. Esto es muy útil para crear avatares, logos, iconos y otros elementos gráficos. Veremos tres casos diferentes: imágenes cuadradas, rectangulares horizontales y rectangulares verticales.</p><h2 id="imagenes-en-html" tabindex="-1"><a class="header-anchor" href="#imagenes-en-html"><span>Imágenes en HTML</span></a></h2><p>Para mostrar una imagen en HTML, lo haremos con:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imagen.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Que nos mostrará, tal cual, la imagen. Para redondear los bordes, podemos usar las siguientes directivas:</p><ul><li><p>border-top-left-radius</p></li><li><p>border-top-right-radius</p></li><li><p>border-bottom-right-radius</p></li><li><p>border-bottom-left-radius</p></li></ul><p>O su método abrevidado:</p><ul><li>border-radius</li></ul><p>Y hay tres posibilidades en la imagen, que sea:</p><ul><li><p>cuadrada</p></li><li><p>rectangular horizontal</p></li><li><p>rectangular vertical</p></li></ul><h2 id="caso-1-imagen-cuadrada" tabindex="-1"><a class="header-anchor" href="#caso-1-imagen-cuadrada"><span>Caso 1. Imagen cuadrada</span></a></h2><p>Para mostrar circular una imagen cuadrada, usaremos la clase <code>round-square</code>:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round-square<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y, en el fichero css podemos indicar cada uno de los parámetros:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-square</span> <span class="token punctuation">{</span>
  <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
  <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
  <span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
  <span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O, de forma abreviada:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-square</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caso-2-imagen-rectangular" tabindex="-1"><a class="header-anchor" href="#caso-2-imagen-rectangular"><span>Caso 2. Imagen rectangular</span></a></h2><p>No se pueden mostrar como circular las imágenes rectangulares, por lo que tenemos que tomar una porción de la imagen de la misma altura que la anchura. Es decir, tomar como muestra, un cuadrado. Y redondear el cuadrado para convertirlo en círculo.</p><p>Si bien esto no es siempre así, si lo que queremos mostrar redondeado es una imagen de perfil, la mayoría de las imágenes de perfil rectangulares horizontales tienen como foco de atención el centro, mientras que las imágenes verticales tienen como foco de atención la parte superior de la imagen, por lo que, para estandarizar, tomaremos estas referencias.</p><p>Para convertir en circulares las imágenes rectangulares, debemos crear primero un recorte redondo en un contenedor y después, insertar la imagen ajustando la posición.</p><h3 id="caso-2-1-imagen-rectangular-horizontal" tabindex="-1"><a class="header-anchor" href="#caso-2-1-imagen-rectangular-horizontal"><span>Caso 2.1. Imagen rectangular horizontal</span></a></h3><p>Veamos cómo generar el contenedor en HTML con la imagen rectangular horizontal dentro:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round-horizontal-rectangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal-rectangle-image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y el CSS:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-horizontal-rectangle</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.round-horizontal-rectangle img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="caso-2-2-imagen-rectangular-vertical" tabindex="-1"><a class="header-anchor" href="#caso-2-2-imagen-rectangular-vertical"><span>Caso 2.2. Imagen rectangular vertical</span></a></h3><p>Veamos cómo generar el contenedor en HTML con la imagen rectangular vertical dentro:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round-vertical-rectangle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical-rectangle-image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y el CSS:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-vertical-rectangle</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.round-vertical-rectangle img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ajuste-dinamico-al-tamano-de-la-imagen" tabindex="-1"><a class="header-anchor" href="#ajuste-dinamico-al-tamano-de-la-imagen"><span>Ajuste dinámico al tamaño de la imagen</span></a></h2><p>Se podría ajustar el ancho y el alto del contenedor usando la propiedad max-width y max-height en CSS. Por ejemplo:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-horizontal-rectangle</span> <span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token property">max-width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">max-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.round-horizontal-rectangle img</span> <span class="token punctuation">{</span>
<span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto hará que el contenedor se adapte al tamaño de la imagen, pero sin superar los 200px de ancho y alto. Si la imagen es más pequeña, el contenedor se reducirá proporcionalmente.</p><p>Otra opción sería con propiedad <code>width: 100%;</code> en la imagen hace que ocupe el 100% del ancho del contenedor, y <code>height: auto;</code>, que mantiene la proporción original de la imagen.</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.round-horizontal-rectangle</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.round-horizontal-rectangle img</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Otra opción, más desarrollada, es ajustar tanto el ancho como el alto en función del tamaño de la imagen, usando JavaScript para calcular las dimensiones y aplicarlas al contenedor:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>round-horizontal-rectangle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imageContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal-rectangle-image.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> imageContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;imageContainer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> width <span class="token operator">=</span> image<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">const</span> height <span class="token operator">=</span> image<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

    imageContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> width <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    imageContainer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> height <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Crear imágenes circulares con CSS es muy fácil y rápido. Sólo necesitamos usar la propiedad <code>border-radius</code> y ajustar el tamaño y la posición de la imagen según su forma. Sólo si queremos una mayor precisión necesitaremos usar JavaScript.</p>`,41),o=[p];function l(c,i){return n(),s("div",null,o)}const u=a(t,[["render",l],["__file","imagenes-circulares.html.vue"]]),d=JSON.parse('{"path":"/css/imagenes-circulares.html","title":"Cómo mostrar una imagen circular en CSS","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Imágenes en HTML","slug":"imagenes-en-html","link":"#imagenes-en-html","children":[]},{"level":2,"title":"Caso 1. Imagen cuadrada","slug":"caso-1-imagen-cuadrada","link":"#caso-1-imagen-cuadrada","children":[]},{"level":2,"title":"Caso 2. Imagen rectangular","slug":"caso-2-imagen-rectangular","link":"#caso-2-imagen-rectangular","children":[{"level":3,"title":"Caso 2.1. Imagen rectangular horizontal","slug":"caso-2-1-imagen-rectangular-horizontal","link":"#caso-2-1-imagen-rectangular-horizontal","children":[]},{"level":3,"title":"Caso 2.2. Imagen rectangular vertical","slug":"caso-2-2-imagen-rectangular-vertical","link":"#caso-2-2-imagen-rectangular-vertical","children":[]}]},{"level":2,"title":"Ajuste dinámico al tamaño de la imagen","slug":"ajuste-dinamico-al-tamano-de-la-imagen","link":"#ajuste-dinamico-al-tamano-de-la-imagen","children":[]}],"git":{"updatedTime":1708721088000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"css/imagenes-circulares.md"}');export{u as comp,d as data};