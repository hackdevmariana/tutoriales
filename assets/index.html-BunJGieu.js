import{_ as s,o as n,c as a,d as e}from"./app-BTmxHlqT.js";const t={},p=e(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress"><span>VuePress</span></a></h1><h2 id="crear-proyecto" tabindex="-1"><a class="header-anchor" href="#crear-proyecto"><span>Crear proyecto</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> proyecto-vuepress
<span class="token builtin class-name">cd</span> proyecto-vuepress
<span class="token function">git</span> init
<span class="token function">npm</span> init
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next @vuepress/theme-default@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Definir los comandos para lanzar los servidores de desarrollo y de compilación en <code>package.json</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Añadir los directorios de desarrollo a <code>.gitignore</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
<span class="token builtin class-name">echo</span> <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Crear el directorio de trabajo:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token function">mkdir</span> docs/.vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Crear página de prueba:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Y el fichero de configuración <code>docs/.vuepress/config.js</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">bundler</span><span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Debemos añadir los scripts de ejecución del servidor y renderizado en <code>package.json</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ejecutar el servidor de desarrollo:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),i=[p];function o(r,c){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/vuepress/","title":"VuePress","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Crear proyecto","slug":"crear-proyecto","link":"#crear-proyecto","children":[]}],"git":{"updatedTime":1708296235000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"vuepress/README.md"}');export{d as comp,u as data};