import{_ as n,o as a,c as e,d as s}from"./app-l11uwJ41.js";const o={},t=s(`<h1 id="cambiar-el-puerto-del-servidor-de-desarrollo-de-nuxt" tabindex="-1"><a class="header-anchor" href="#cambiar-el-puerto-del-servidor-de-desarrollo-de-nuxt"><span>Cambiar el puerto del servidor de desarrollo de Nuxt</span></a></h1><p>Para cambiar el puerto de ejecución al ejecutar npm run dev en un proyecto de Nuxt, puedes usar la opción <code>--port</code> o <code>-p</code> seguida del número de puerto deseado:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev -- <span class="token parameter variable">-p</span> <span class="token number">3001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto ejecutará la aplicación Nuxt en el puerto 3001 en lugar del puerto predeterminado (3000).</p><h2 id="en-fichero-de-configuracion" tabindex="-1"><a class="header-anchor" href="#en-fichero-de-configuracion"><span>En fichero de configuración</span></a></h2><p>Para evitar tener que escribir el puerto cada vez que ejecutemos el servidor, podemos configurar el puerto en el archivo de configuración de Nuxt (<code>nuxt.config.js</code> o <code>nuxt.config.ts</code>).</p><p>En nuxt.config.js:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3001</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En nuxt.config.ts:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NuxtConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxt/types&#39;</span>

<span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> NuxtConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3001</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>O, más simple, para poder incluir más configuraciones, como activar las <code>devtools</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NuxtConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxt/types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3001</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">devtools</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Con esta configuración, al ejecutar <code>npm run dev</code>, la aplicación Nuxt se iniciará en el puerto especificado en la configuración.</p>`,13),r=[t];function p(i,c){return a(),e("div",null,r)}const d=n(o,[["render",p],["__file","puerto-servidor.html.vue"]]),u=JSON.parse('{"path":"/nuxt/puerto-servidor.html","title":"Cambiar el puerto del servidor de desarrollo de Nuxt","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"En fichero de configuración","slug":"en-fichero-de-configuracion","link":"#en-fichero-de-configuracion","children":[]}],"git":{"updatedTime":1712510786000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/puerto-servidor.md"}');export{d as comp,u as data};