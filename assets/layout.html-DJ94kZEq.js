import{_ as a,o as n,c as e,d as s}from"./app-C1Aj3akT.js";const t={},o=s(`<h1 id="uso-de-layouts" tabindex="-1"><a class="header-anchor" href="#uso-de-layouts"><span>Uso de layouts</span></a></h1><p>Podemos crear un layout creando un fichero <code>.vue</code> en el directorio <code>/layouts</code>.</p><p>O podemos crearlo con el CLI:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nuxi <span class="token function">add</span> layout miLayout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para usar un layout por defecto en todas las páginas, a menos que especifiquemos lo contrario, el layout se debe llamar <code>layouts/default.vue</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nuxi <span class="token function">add</span> layout default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="estructura-del-layout" tabindex="-1"><a class="header-anchor" href="#estructura-del-layout"><span>Estructura del layout</span></a></h2><p>Para crear un layout personalizado en Nuxt, en la carpeta <code>layouts/</code> del proyecto Nuxt, crearemos un nuevo archivo <code>.vue</code>. Por ejemplo, <code>layouts/custom.vue</code>.</p><p>Podemos crearlo con:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nuxi <span class="token function">add</span> layout custom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Dentro de este fichero, definimos la estructura HTML que deseemos para el layout.</p><p>Debemos asegurarnos de incluir un <code>&lt;slot /&gt;</code> donde se renderizarán las páginas.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- La estructura del layout --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uso-de-un-layout-especifico-en-una-pagina" tabindex="-1"><a class="header-anchor" href="#uso-de-un-layout-especifico-en-una-pagina"><span>Uso de un layout específico en una página</span></a></h2><p>Para usar un layout específico en un componente de Nuxt, primero, debemos tener un archivo de layout en la carpeta <code>layouts/</code> del proyecto Nuxt.</p><p>Por ejemplo, si queremos crear un layout llamado <code>custom</code>, deberíamos tener un archivo <code>layouts/custom.vue</code>.</p><p>En el componente de página donde queremos usar el layout, debemos establecer la propiedad <code>layout</code> en el script de configuración de la página:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>El contenido de la página se mostrará dentro del <code>&lt;slot /&gt;</code> del fiechero layout especificado.</p><p>Hay que asegurarse de que el layout tenga un elemento raíz único y un <code>&lt;slot /&gt;</code> para el contenido de la página.</p><p>Si se especifica un layout, Nuxt usará el layout por defecto <code>layouts/default.vue</code>.</p><h2 id="pagina-sin-layout" tabindex="-1"><a class="header-anchor" href="#pagina-sin-layout"><span>Página sin layout</span></a></h2><p>Para usar un layout por defecto en una aplicación Nuxt pero excluirlo en páginas específicas como la página de inicio o login, podemos tener un layout por defecto definido en <code>layouts/default.vue</code>. Este layout se aplicará automáticamente a todas las páginas que no especifiquen otro layout.</p><p>En las páginas donde no queramos usar ningún layout, como la página de inicio o login, debemos establecer la propiedad layout en el script de configuración de la página con el valor <code>false</code>.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="la-funcion-setpagelayout" tabindex="-1"><a class="header-anchor" href="#la-funcion-setpagelayout"><span>La función setPageLayout</span></a></h2><p>La función <code>setPageLayout</code> es una función de utilidad en Nuxt que permite cambiar dinámicamente el layout de una página.</p><p>Esto es especialmente útil cuando necesitamos cambiar el layout basado en ciertas condiciones o eventos, como un cambio en el estado de autenticación del usuario o una respuesta a una acción del usuario.</p><p>Para usar <code>setPageLayout</code>, normalmente lo llamaríamos dentro de la función <code>setup</code> de un componente de página o en un middleware de ruta, dependiendo de las necesidades específicas.</p><p>Un ejemplo de cómo podríamos usar <code>setPageLayout</code> para cambiar a un layout llamado &#39;custom&#39;:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> setPageLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;nuxt/app&#39;</span>

  <span class="token keyword">function</span> <span class="token function">enableCustomLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setPageLayout</span><span class="token punctuation">(</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este ejemplo, <code>enableCustomLayout</code> es una función que podemos llamar, por ejemplo, en respuesta a un evento de clic para cambiar el layout actual al layout &#39;custom&#39;.</p><p>Recordemos que el nombre del layout debe coincidir con el nombre de un archivo <code>.vue</code> en el directorio layouts.</p>`,33),l=[o];function c(p,i){return n(),e("div",null,l)}const d=a(t,[["render",c],["__file","layout.html.vue"]]),r=JSON.parse('{"path":"/nuxt/layout.html","title":"Uso de layouts","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Estructura del layout","slug":"estructura-del-layout","link":"#estructura-del-layout","children":[]},{"level":2,"title":"Uso de un layout específico en una página","slug":"uso-de-un-layout-especifico-en-una-pagina","link":"#uso-de-un-layout-especifico-en-una-pagina","children":[]},{"level":2,"title":"Página sin layout","slug":"pagina-sin-layout","link":"#pagina-sin-layout","children":[]},{"level":2,"title":"La función setPageLayout","slug":"la-funcion-setpagelayout","link":"#la-funcion-setpagelayout","children":[]}],"git":{"updatedTime":1712515949000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/layout.md"}');export{d as comp,r as data};
