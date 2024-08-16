import{_ as n,o as a,c as s,d as e}from"./app-6Q4xxP2z.js";const p={},t=e(`<h1 id="uso-de-pillow" tabindex="-1"><a class="header-anchor" href="#uso-de-pillow"><span>Uso de Pillow</span></a></h1><p>Instalación:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> Pillow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pillow es un fork amigable de Python Imaging Library (PIL), que es una biblioteca de procesamiento de imágenes en Python. Pillow mantiene la compatibilidad con PIL y agrega varias mejoras y correcciones de errores. Aquí hay algunas características clave de Pillow:</p><ul><li><p>Manipulación de imágenes: Pillow proporciona una amplia variedad de funciones para abrir, manipular y guardar diferentes formatos de imágenes. Puede realizar operaciones básicas como recortar, redimensionar, rotar y aplicar filtros a las imágenes.</p></li><li><p>Gran cantidad de formatos de imagen soportados: Pillow admite una amplia gama de formatos de imagen, incluyendo JPEG, PNG, GIF, BMP, TIFF, y más. Puede abrir y guardar imágenes en diferentes formatos.</p></li><li><p>Procesamiento de píxeles: Permite el acceso a los datos de píxeles de una imagen para realizar manipulaciones a un nivel más detallado.</p></li><li><p>Operaciones avanzadas: Además de las operaciones básicas, Pillow admite operaciones más avanzadas como mezcla de imágenes, superposición de texto, y composición de imágenes.</p></li><li><p>Compatibilidad con Python 3: Pillow es compatible con Python 3 y ofrece una interfaz fácil de usar para trabajar con imágenes.</p></li></ul><h2 id="ejemplos-de-uso-de-pillow" tabindex="-1"><a class="header-anchor" href="#ejemplos-de-uso-de-pillow"><span>Ejemplos de uso de Pillow</span></a></h2><p>Mostrar información de una imagen:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;ejemplo.jpg&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Formato:&quot;</span><span class="token punctuation">,</span> img<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Tamaño:&quot;</span><span class="token punctuation">,</span> img<span class="token punctuation">.</span>size<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Modo:&quot;</span><span class="token punctuation">,</span> img<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mostrar una imagen:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;ejemplo.jpg&quot;</span><span class="token punctuation">)</span>

img<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cambiar el formato de una imagen:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;ejemplo.jpg&quot;</span><span class="token punctuation">)</span>

img<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;ejemplo.png&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Crear lienzo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image<span class="token punctuation">,</span> ImageDraw

canvas <span class="token operator">=</span> Image<span class="token punctuation">.</span>new<span class="token punctuation">(</span><span class="token string">&#39;RGB&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">)</span>

canvas<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;lienzo.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Escalar una imagen al 50% del tamaño original:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

imagen <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;imagen.jpg&#39;</span><span class="token punctuation">)</span>

imagen_redimensionada <span class="token operator">=</span> imagen<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token punctuation">(</span>imagen<span class="token punctuation">.</span>width <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">,</span> imagen<span class="token punctuation">.</span>height <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

imagen_redimensionada<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;imagen_redimensionada.jpg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Escribir texto en una imagen:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image<span class="token punctuation">,</span> ImageDraw<span class="token punctuation">,</span> ImageFont

imagen <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;imagen.jpg&#39;</span><span class="token punctuation">)</span>

draw <span class="token operator">=</span> ImageDraw<span class="token punctuation">.</span>Draw<span class="token punctuation">(</span>imagen<span class="token punctuation">)</span>

font <span class="token operator">=</span> ImageFont<span class="token punctuation">.</span>load_default<span class="token punctuation">(</span><span class="token punctuation">)</span>

draw<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;Hola, Mundo!&quot;</span><span class="token punctuation">,</span> font<span class="token operator">=</span>font<span class="token punctuation">,</span> fill<span class="token operator">=</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>

imagen<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;imagen_con_texto.jpg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[t];function i(l,c){return a(),s("div",null,o)}const r=n(p,[["render",i],["__file","pillow.html.vue"]]),d=JSON.parse('{"path":"/python/pillow.html","title":"Uso de Pillow","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ejemplos de uso de Pillow","slug":"ejemplos-de-uso-de-pillow","link":"#ejemplos-de-uso-de-pillow","children":[]}],"git":{"updatedTime":1709075144000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/pillow.md"}');export{r as comp,d as data};