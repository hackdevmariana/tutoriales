import{_ as n,o as a,c as s,d as t}from"./app-BSXY0MLb.js";const e={},p=t(`<h1 id="efecto-roll-en-python-con-pillow" tabindex="-1"><a class="header-anchor" href="#efecto-roll-en-python-con-pillow"><span>Efecto roll en Python con PILLOW</span></a></h1><p>El parámetro <code>-roll</code> de <code>convert</code> en <code>ImageMagick</code> se utiliza para desplazar una imagen horizontal y/o verticalmente. Este desplazamiento es cíclico, lo que significa que las partes de la imagen que se desplazan fuera de los bordes reaparecen en el lado opuesto.</p><p><code>Pillow</code> no tiene una función directa para hacer un desplazamiento cíclico como <code>-roll</code>, pero se puede lograr un efecto similar usando las funciones de recorte y pegado.</p><p>Veamos un ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

<span class="token keyword">def</span> <span class="token function">roll</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> delta_x<span class="token punctuation">,</span> delta_y<span class="token punctuation">)</span><span class="token punctuation">:</span>
  xsize<span class="token punctuation">,</span> ysize <span class="token operator">=</span> image<span class="token punctuation">.</span>size

  delta_x <span class="token operator">=</span> delta_x <span class="token operator">%</span> xsize
  delta_y <span class="token operator">=</span> delta_y <span class="token operator">%</span> ysize

  <span class="token keyword">if</span> delta_x<span class="token punctuation">:</span>
    part1 <span class="token operator">=</span> image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> delta_x<span class="token punctuation">,</span> ysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
    part2 <span class="token operator">=</span> image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span>delta_x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> xsize<span class="token punctuation">,</span> ysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>paste<span class="token punctuation">(</span>part1<span class="token punctuation">,</span> <span class="token punctuation">(</span>xsize <span class="token operator">-</span> delta_x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>paste<span class="token punctuation">(</span>part2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> delta_y<span class="token punctuation">:</span>
    part1 <span class="token operator">=</span> image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> xsize<span class="token punctuation">,</span> delta_y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    part2 <span class="token operator">=</span> image<span class="token punctuation">.</span>crop<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> delta_y<span class="token punctuation">,</span> xsize<span class="token punctuation">,</span> ysize<span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>paste<span class="token punctuation">(</span>part1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> ysize <span class="token operator">-</span> delta_y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    image<span class="token punctuation">.</span>paste<span class="token punctuation">(</span>part2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> image

<span class="token comment"># Cargar la imagen</span>
imagen <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;ruta/a/tu/imagen.jpg&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Aplicar el desplazamiento</span>
imagen_desp <span class="token operator">=</span> roll<span class="token punctuation">(</span>imagen<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment"># Guardar la imagen resultante</span>
imagen_desp<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&quot;ruta/a/tu/imagen_desp.jpg&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","roll.html.vue"]]),d=JSON.parse('{"path":"/python/pillow/roll.html","title":"Efecto roll en Python con PILLOW","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/pillow/roll.md"}');export{r as comp,d as data};
