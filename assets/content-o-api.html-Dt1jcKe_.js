import{_ as n,o as a,c as s,d as t}from"./app-B7GFNN2_.js";const e={},o=t(`<h1 id="uso-de-nuxt-content-y-si-no-existiese-un-fichero-acceso-a-una-api" tabindex="-1"><a class="header-anchor" href="#uso-de-nuxt-content-y-si-no-existiese-un-fichero-acceso-a-una-api"><span>Uso de Nuxt Content y, si no existiese un fichero, acceso a una API</span></a></h1><p>Ejemplo:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Renderiza el contenido si está disponible --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nuxt-content</span> <span class="token attr-name">:document</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Mensaje o componente alternativo si el contenido no está disponible --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>El contenido no está disponible.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">asyncData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> $content<span class="token punctuation">,</span> params<span class="token punctuation">,</span> $axios <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// Intenta cargar el archivo de contenido local</span>
          <span class="token keyword">const</span> localContent <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">$content</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> localContent <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Si el archivo no existe, carga los datos de una API externa</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> $axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://mi-api.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>params<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Maneja errores de la API aquí</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error al cargar los datos de la API:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este componente, <code>asyncData</code> intenta primero cargar un archivo de contenido local utilizando <code>$content</code>. Si falla (por ejemplo, si el archivo no existe), entonces atrapa el error y hace una solicitud a una API externa con <code>$axios</code>. Si la solicitud a la API también falla, se maneja el error y se muestra un mensaje alternativo.</p><p>Este es un patrón común para manejar contenido dinámico en aplicaciones Nuxt, permitiendo proporcionar una experiencia de usuario fluida incluso cuando algunos datos no están disponibles localmente.</p><p>Antes de usar este componente, demos reemplazar <code>https://mi-api.com/</code> con la URL de una API real y manejar los errores según sea necesario para la aplicación.</p><h2 id="importacion-de-modulos" tabindex="-1"><a class="header-anchor" href="#importacion-de-modulos"><span>Importación de módulos</span></a></h2><p>En <code>Nuxt.js</code>, no necesitamos importar explícitamente <code>axios</code> o <code>@nuxt/content</code> en cada archivo donde los usemos, siempre y cuando hayamos configurado estos módulos correctamente en el fichero <code>nuxt.config.js</code>.</p><p>Para <code>axios</code>, debes asegurarte de que el módulo <code>@nuxtjs/axios</code> esté instalado y configurado en el proyecto.</p><p>Un ejemplo de cómo podría ser un <code>nuxt.config.js</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;@nuxtjs/axios&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">axios</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Configuración de Axios aquí</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Una vez configurado, podemos usar <code>this.$axios</code> en los componentes y páginas sin necesidad de importarlo.</p><p>Para <code>@nuxt/content</code>, si hemos instalado el módulo y lo hemos agregado al fichero <code>nuxt.config.js</code>, podemos acceder a la función <code>$content</code> directamente en el contexto de las funciones <code>asyncData</code> o <code>fetch</code> sin importaciones adicionales.</p><p>Un ejemplo de cómo agregar <code>@nuxt/content</code> a la configuración:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;@nuxt/content&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Con estas configuraciones, ambos módulos estarán disponibles globalmente en la aplicación Nuxt, y podemos utilizarlos en los componentes y páginas como se muestra en el primer ejemplo.</p>`,16),p=[o];function c(i,l){return a(),s("div",null,p)}const r=n(e,[["render",c],["__file","content-o-api.html.vue"]]),d=JSON.parse('{"path":"/nuxt/content-o-api.html","title":"Uso de Nuxt Content y, si no existiese un fichero, acceso a una API","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Importación de módulos","slug":"importacion-de-modulos","link":"#importacion-de-modulos","children":[]}],"git":{"updatedTime":1712310723000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/content-o-api.md"}');export{r as comp,d as data};