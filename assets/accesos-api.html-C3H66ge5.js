import{_ as a,o as e,c as n,d as s}from"./app-DtIHXuW6.js";const l={},t=s(`<h1 id="registrar-accesos-a-una-api-con-laravel" tabindex="-1"><a class="header-anchor" href="#registrar-accesos-a-una-api-con-laravel"><span>Registrar accesos a una API con Laravel</span></a></h1><p>Con una Laravel, incluso en una API, es posible capturar la IP del cliente y otros datos del navegador, como el idioma o el tipo de dispositivo, incluso si no tienes acceso al frontend.</p><h2 id="captura-de-la-ip-del-cliente" tabindex="-1"><a class="header-anchor" href="#captura-de-la-ip-del-cliente"><span>Captura de la IP del cliente</span></a></h2><p>Podemos capturar la IP del cliente desde el servidor en el que se procesa la solicitud de la API. La IP del cliente generalmente se encuentra en el encabezado <code>X-Forwarded-For</code> o <code>Remote_Addr</code>.</p><p>En Laravel, podemos acceder a la IP del cliente a través de la solicitud HTTP actual:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$clientIP</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="captura-del-idioma-del-navegador" tabindex="-1"><a class="header-anchor" href="#captura-del-idioma-del-navegador"><span>Captura del idioma del navegador</span></a></h2><p>Podemos obtener el idioma preferido del navegador del cliente desde el encabezado <code>Accept-Language</code> de la solicitud HTTP.</p><p>En Laravel, podemos acceder al encabezado <code>Accept-Language</code> de la solicitud HTTP actual:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token variable">$acceptLanguage</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Accept-Language&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="captura-del-dispositivo-del-cliente" tabindex="-1"><a class="header-anchor" href="#captura-del-dispositivo-del-cliente"><span>Captura del dispositivo del cliente</span></a></h2><p>El tipo de dispositivo del cliente no se puede obtener directamente desde el servidor, ya que esta información se encuentra en el agente de usuario (<code>user agent</code>) del navegador. Sin embargo, podemos usar librerías de análisis del agente de usuario para extraer esta información.</p><p>En Laravel, podemos usar la librería <code>jenssegers/agent</code> para analizar el agente de usuario:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Jenssegers<span class="token punctuation">\\</span>Agent<span class="token punctuation">\\</span>Agent</span><span class="token punctuation">;</span>

<span class="token variable">$agent</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Verificar si es un dispositivo móvil</span>
<span class="token variable">$isMobile</span> <span class="token operator">=</span> <span class="token variable">$agent</span><span class="token operator">-&gt;</span><span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),i=[t];function o(p,c){return e(),n("div",null,i)}const r=a(l,[["render",o],["__file","accesos-api.html.vue"]]),u=JSON.parse('{"path":"/laravel/accesos-api.html","title":"Registrar accesos a una API con Laravel","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Captura de la IP del cliente","slug":"captura-de-la-ip-del-cliente","link":"#captura-de-la-ip-del-cliente","children":[]},{"level":2,"title":"Captura del idioma del navegador","slug":"captura-del-idioma-del-navegador","link":"#captura-del-idioma-del-navegador","children":[]},{"level":2,"title":"Captura del dispositivo del cliente","slug":"captura-del-dispositivo-del-cliente","link":"#captura-del-dispositivo-del-cliente","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/accesos-api.md"}');export{r as comp,u as data};
