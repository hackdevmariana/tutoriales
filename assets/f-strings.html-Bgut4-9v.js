import{_ as n,o as s,c as a,d as e}from"./app-CgV8IxxG.js";const t={},p=e(`<h1 id="f-strings" tabindex="-1"><a class="header-anchor" href="#f-strings"><span>f-strings</span></a></h1><p>Las <code>f-strings</code>, o <code>formatted string literals</code>, son una forma eficiente y legible de interpolar y formatear cadenas en Python. Introducidas en Python 3.6, permiten incluir expresiones dentro de cadenas de texto usando llaves {} y un prefijo f o F antes de las comillas.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>nombre <span class="token operator">=</span> <span class="token string">&quot;Juan&quot;</span>
edad <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Me llamo </span><span class="token interpolation"><span class="token punctuation">{</span>nombre<span class="token punctuation">}</span></span><span class="token string"> y tengo </span><span class="token interpolation"><span class="token punctuation">{</span>edad<span class="token punctuation">}</span></span><span class="token string"> años.&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Salida:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Me llamo Juan y tengo <span class="token number">30</span> años.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Las f-strings también permiten evaluar expresiones dentro de las llaves:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>num1 <span class="token operator">=</span> <span class="token number">10</span>
num2 <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;La suma de </span><span class="token interpolation"><span class="token punctuation">{</span>num1<span class="token punctuation">}</span></span><span class="token string"> y </span><span class="token interpolation"><span class="token punctuation">{</span>num2<span class="token punctuation">}</span></span><span class="token string"> es </span><span class="token interpolation"><span class="token punctuation">{</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Salida:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>La suma de <span class="token number">10</span> y <span class="token number">5</span> es <span class="token number">15</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Podemos usar especificadores de formato para controlar la presentación de los valores:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>pi <span class="token operator">=</span> <span class="token number">3.14159</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;El valor de pi es aproximadamente </span><span class="token interpolation"><span class="token punctuation">{</span>pi<span class="token punctuation">:</span><span class="token format-spec">.2f</span><span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Salida:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>El valor de pi es aproximadamente <span class="token number">3.14</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),o=[p];function i(l,r){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","f-strings.html.vue"]]),u=JSON.parse('{"path":"/python/f-strings.html","title":"f-strings","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"python/f-strings.md"}');export{d as comp,u as data};