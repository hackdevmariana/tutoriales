import{_ as n,o as a,c as e,d as s}from"./app-BDdN4Qr1.js";const t={},o=s(`<h1 id="cambiar-la-nitidez-en-python-con-pillow" tabindex="-1"><a class="header-anchor" href="#cambiar-la-nitidez-en-python-con-pillow"><span>Cambiar la nitidez en Python con PILLOW</span></a></h1><p>Para cambiar la nitidez de una imagen en Python con <code>PILLOW</code>, debemos abrir una imagen con la clase <code>Image</code> de <code>PILLOW</code>, crear un objeto de mejora de nitidez con <code>Sharpness()</code> y modificar su valor.</p><p>Con el método <code>Sharpness()</code>, 1.0 es el valor original, &lt;1.0 reduce el brillo, &gt;1.0 lo aumenta.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image<span class="token punctuation">,</span> ImageEnhance
img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;path/to/image.jpg&#39;</span><span class="token punctuation">)</span>
enhancer <span class="token operator">=</span> ImageEnhance<span class="token punctuation">.</span>Sharpness<span class="token punctuation">(</span>img<span class="token punctuation">)</span>
sharp_image <span class="token operator">=</span> enhancer<span class="token punctuation">.</span>enhance<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span>
sharp_image<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;path/to/sharp_image.jpg&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function p(c,l){return a(),e("div",null,i)}const d=n(t,[["render",p],["__file","nitidez.html.vue"]]),u=JSON.parse('{"path":"/python/pillow/nitidez.html","title":"Cambiar la nitidez en Python con PILLOW","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/pillow/nitidez.md"}');export{d as comp,u as data};