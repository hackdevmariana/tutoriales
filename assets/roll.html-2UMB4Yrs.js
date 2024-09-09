import{_ as n,o as a,c as e,d as s}from"./app-CQ9AcGqD.js";const o={},t=s(`<h1 id="efecto-roll-en-python-con-g-mic" tabindex="-1"><a class="header-anchor" href="#efecto-roll-en-python-con-g-mic"><span>Efecto roll en Python con G&#39;MIC</span></a></h1><p>El parámetro <code>-roll</code> de <code>convert</code> en <code>ImageMagick</code> se utiliza para desplazar una imagen horizontal y/o verticalmente. Este desplazamiento es cíclico, lo que significa que las partes de la imagen que se desplazan fuera de los bordes reaparecen en el lado opuesto.</p><p><code>G&#39;MIC</code> tiene una función directa para hacer un desplazamiento cíclico como <code>-roll</code>, a diferencia de <code>PILLOW</code>.</p><p>Veamos cómo usarlo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> gmic

<span class="token comment"># Cargar la imagen</span>
img <span class="token operator">=</span> gmic<span class="token punctuation">.</span>GmicImage<span class="token punctuation">(</span><span class="token string">&quot;path/to/image.jpg&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Aplicar el desplazamiento cíclico</span>
gmic<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;roll 100,50&quot;</span><span class="token punctuation">,</span> img<span class="token punctuation">)</span>

<span class="token comment"># Guardar la imagen resultante</span>
img<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;path/to/new_image.jpg&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(i,p){return a(),e("div",null,c)}const d=n(o,[["render",l],["__file","roll.html.vue"]]),u=JSON.parse(`{"path":"/python/gmic/roll.html","title":"Efecto roll en Python con G'MIC","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/gmic/roll.md"}`);export{d as comp,u as data};
