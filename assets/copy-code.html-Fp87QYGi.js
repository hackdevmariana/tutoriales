import{_ as s,r as o,o as t,c as p,a as n,e,b as c,d as i}from"./app-DI-VIS3S.js";const l={},d=n("h1",{id:"boton-de-copiar-codigo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#boton-de-copiar-codigo"},[n("span",null,"Botón de copiar código")])],-1),r=n("p",null,[e("Con el plugin "),n("strong",null,"copy-code2"),e(".")],-1),u={href:"https://plugin-copy-code2.vuejs.press/",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>Instalación:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-plugin-copy-code2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Importar el plugin al comienzo del config.js:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> copyCodePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-copy-code2&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Añadir al final, justo después del <code>}),</code> de cierre del <code>theme: defaultTheme({</code> y el <code>}</code> final:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">copyCodePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Opcionalmente, podemos indicar parámetros entre las llaves de la llamada al plugin.</p>`,7);function v(g,k){const a=o("ExternalLinkIcon");return t(),p("div",null,[d,r,n("p",null,[n("a",u,[e("https://plugin-copy-code2.vuejs.press/"),c(a)])]),m])}const b=s(l,[["render",v],["__file","copy-code.html.vue"]]),f=JSON.parse('{"path":"/vuepress/copy-code.html","title":"Botón de copiar código","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1708296977000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"vuepress/copy-code.md"}');export{b as comp,f as data};
