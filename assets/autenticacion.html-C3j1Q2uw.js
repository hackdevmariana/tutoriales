import{_ as a,o as n,c as s,d as t}from"./app-VNw6Yj_Y.js";const e={},p=t(`<h1 id="autenticacion-de-usuarios" tabindex="-1"><a class="header-anchor" href="#autenticacion-de-usuarios"><span>Autenticación de usuarios</span></a></h1><p>Para comprobar si un usuario está registrado y logueado correctamente en un layout de Nuxt y redirigirlo según sea necesario, podemos utilizar el módulo de autenticación de Nuxt o implementar una lógica de autenticación personalizada.</p><p>Veamos cómo hacerlo con el módulo de autenticación:</p><p>Instalamos el módulo de autenticación:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @sidebase/nuxt-auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Configura el Middleware de Autenticación: Crea un middleware que verifique el estado de autenticación del usuario. Puedes hacerlo en el archivo <code>middleware/auth.js</code>.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> store<span class="token punctuation">,</span> redirect <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>loggedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el layout donde queramos realizar la comprobación, podemos utilizar el middleware de autenticación.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- Tu estructura de layout aquí --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token string">&#39;auth&#39;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function c(o,l){return n(),s("div",null,i)}const d=a(e,[["render",c],["__file","autenticacion.html.vue"]]),r=JSON.parse('{"path":"/nuxt/autenticacion.html","title":"Autenticación de usuarios","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1712612580000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/autenticacion.md"}');export{d as comp,r as data};