import{_ as a,o as n,c as s,d as e}from"./app-B0sjeEf7.js";const t={},o=e(`<h1 id="leer-datos-de-una-api-con-r" tabindex="-1"><a class="header-anchor" href="#leer-datos-de-una-api-con-r"><span>Leer datos de una API con R</span></a></h1><p>Para leer datos de una API con R, podemos seguir estos pasos generales, aunque puede que la API tenga una estructura o datos específicos, por lo que tendremos que adaptar estos pasos a las necesidades de cada proyecto.</p><p>Necesitemos instalar y cargar los paquetes <code>httr</code> para realizar peticiones HTTP y <code>jsonlite</code> para procesar datos en formato JSON, que es común en las APIs.</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>install.packages<span class="token punctuation">(</span><span class="token string">&quot;httr&quot;</span><span class="token punctuation">)</span>
library<span class="token punctuation">(</span>httr<span class="token punctuation">)</span>
install.packages<span class="token punctuation">(</span><span class="token string">&quot;jsonlite&quot;</span><span class="token punctuation">)</span>
library<span class="token punctuation">(</span>jsonlite<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Utilizaremos la función <code>GET()</code> de <code>httr</code> para realizar una petición GET a la API:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>respuesta <span class="token operator">&lt;-</span> GET<span class="token punctuation">(</span><span class="token string">&quot;https://api.ejemplo.com/datos&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Necesitaremos convertir la respuesta a un formato que podamos manejar en R, como un dataframe. Si la respuesta es en JSON, podemos usar <code>fromJSON()</code> de <code>jsonlite</code>.</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>datos <span class="token operator">&lt;-</span> fromJSON<span class="token punctuation">(</span>rawToChar<span class="token punctuation">(</span>respuesta<span class="token operator">$</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ahora que tenemos los datos en R, podemos manipularlos como cualquier otro dataframe, utilizando funciones de <code>dplyr</code> o cualquier otra herramienta de manipulación de datos que prefiramos.</p><p>Un ejemplo completo de leer datos de una API y convertirlos en un dataframe:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token comment"># Cargar los paquetes necesarios</span>
library<span class="token punctuation">(</span>httr<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>jsonlite<span class="token punctuation">)</span>

<span class="token comment"># Realizar la petición GET</span>
respuesta <span class="token operator">&lt;-</span> GET<span class="token punctuation">(</span><span class="token string">&quot;https://api.ejemplo.com/datos&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Verificar que la petición fue exitosa</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>status_code<span class="token punctuation">(</span>respuesta<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># Convertir la respuesta en JSON a un dataframe</span>
  datos <span class="token operator">&lt;-</span> fromJSON<span class="token punctuation">(</span>rawToChar<span class="token punctuation">(</span>respuesta<span class="token operator">$</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment"># Hacer algo con los datos</span>
  print<span class="token punctuation">(</span>head<span class="token punctuation">(</span>datos<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  print<span class="token punctuation">(</span>paste<span class="token punctuation">(</span><span class="token string">&quot;Error en la petición:&quot;</span><span class="token punctuation">,</span> status_code<span class="token punctuation">(</span>respuesta<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),p=[o];function c(i,l){return n(),s("div",null,p)}const u=a(t,[["render",c],["__file","leer-api.html.vue"]]),d=JSON.parse('{"path":"/r/leer-api.html","title":"Leer datos de una API con R","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"r/leer-api.md"}');export{u as comp,d as data};
