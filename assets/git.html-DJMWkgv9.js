import{_ as e,o as n,c as a,d as s}from"./app-D8sMTMlf.js";const i={},o=s(`<h1 id="problemas-con-git-en-la-creacion-de-un-proyecto-nuxt" tabindex="-1"><a class="header-anchor" href="#problemas-con-git-en-la-creacion-de-un-proyecto-nuxt"><span>Problemas con git en la creación de un proyecto Nuxt</span></a></h1><p>Al crear un proyecto Nuxt con el comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx create-nuxt-app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>se crea un directorio .git por defecto. Esto puede causar conflictos si ya tienes otro repositorio de git en el mismo directorio. Supongamos que queremos hacer unos componentes y, en el mismo repositorio, una página con las demos. Si tenemos una estructura como esta:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>my-project/
├── @project/
│   ├── Componente1/
│   │   └── Componente1.vue
│   ├── Componente2/
│   │   └── Componente2.vue
├── demos/
│   ├── pages/
│   │   └── index.vue  (página principal)
│   │   └── Componente1Demo.vue
│   │   └── Componente2Demo.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el directorio <code>demos</code> tendremos <code>demos/.git</code> a no ser que creemos el proyecto con el siguiente comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>npx create-nuxt-app --no-git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para crear un proyecto Nuxt sin el directorio .git.</p><p>En caso de que ya hayamos creado el proyecto y al intentar añadir los ficheros nos indique esto git:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$  <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
error: <span class="token string">&#39;demos/&#39;</span> does not have a commit checked out
fatal: adding files failed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos usar el comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para eliminar el directorio <code>.git</code> después de crear el proyecto Nuxt.</p>`,13),t=[o];function d(r,c){return n(),a("div",null,t)}const u=e(i,[["render",d],["__file","git.html.vue"]]),m=JSON.parse('{"path":"/nuxt/git.html","title":"Problemas con git en la creación de un proyecto Nuxt","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1708556532000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/git.md"}');export{u as comp,m as data};
