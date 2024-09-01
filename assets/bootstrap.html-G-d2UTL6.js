import{_ as a,o as s,c as n,d as t}from"./app-YhSTaNML.js";const e={},o=t(`<h1 id="uso-de-bootstrap-en-proyectos-nuxt" tabindex="-1"><a class="header-anchor" href="#uso-de-bootstrap-en-proyectos-nuxt"><span>Uso de Bootstrap en proyectos Nuxt</span></a></h1><p>Instalación:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En caso de que fallara la instalación, podemos forzarla con:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> bootstrap --legacy-peer-deps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lo que añadirá automáticamente al fichero <code>package.json</code> algo así:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bootstrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.3.3&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para poder usar bootstrap en nuestro proyecto Nuxt, debemos añadir las siguientes líneas al fichero nuxt.config.js:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;bootstrap/dist/css/bootstrap.min.css&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">scripts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;bootstrap/dist/js/bootstrap.min.js&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para comprobar que todo ha funcionado bien, podemos escribir en <code>pages/index.vue</code>:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hola, mundo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y lanzar el servidor de desarrollo:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),p=[o];function l(c,i){return s(),n("div",null,p)}const u=a(e,[["render",l],["__file","bootstrap.html.vue"]]),d=JSON.parse('{"path":"/nuxt/bootstrap.html","title":"Uso de Bootstrap en proyectos Nuxt","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1708684081000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/bootstrap.md"}');export{u as comp,d as data};