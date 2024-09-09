import{_ as a,o as n,c as e,d as s}from"./app-QU-JfZW_.js";const t={},o=s(`<h1 id="recortar-imagenes-con-python-y-pillow" tabindex="-1"><a class="header-anchor" href="#recortar-imagenes-con-python-y-pillow"><span>Recortar imágenes con Python y PILLOW</span></a></h1><p>Importar PILLOW y las clases Image e ImageFilter:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image<span class="token punctuation">,</span> ImageFilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Abrir una imagen existente:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;path/to/image.jpg&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Crear el desenfoque en la imagen:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>img_blurred <span class="token operator">=</span> imagen<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>ImageFilter<span class="token punctuation">.</span>BLUR<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Guardar la imagen recortada:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>img_blurred<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;path/to/new_image.jpg&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),p=[o];function i(l,r){return n(),e("div",null,p)}const d=a(t,[["render",i],["__file","blur.html.vue"]]),u=JSON.parse('{"path":"/python/pillow/blur.html","title":"Recortar imágenes con Python y PILLOW","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/pillow/blur.md"}');export{d as comp,u as data};
