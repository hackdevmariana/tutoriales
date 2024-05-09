import{_ as a,o as s,c as n,d as e}from"./app-Ci4PuNEr.js";const o={},t=e(`<h1 id="tablas-pivot-en-laravel" tabindex="-1"><a class="header-anchor" href="#tablas-pivot-en-laravel"><span>Tablas pivot en Laravel</span></a></h1><p>En Laravel, una tabla pivot es una tabla intermedia que se utiliza para establecer una relación de muchos a muchos entre dos modelos.</p><p>Esta tabla contiene las claves foráneas de ambos modelos y, opcionalmente, puede contener datos adicionales relacionados con la relación.</p><p>Por ejemplo, si tenemos dos modelos, <code>User</code> y <code>Role</code>, y cada usuario puede tener varios roles y cada rol puede ser asignado a varios usuarios, necesitaríamos una tabla pivot para manejar esta relación.</p><p>La tabla pivot podría llamarse <code>role_user</code> y tendría al menos dos columnas: <code>user_id</code> y <code>role_id</code>.</p><p>Aquí hay un ejemplo de cómo podríamos definir esta relación en los modelos <code>User</code> y <code>Role</code>:</p><p>En el modelo User:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">roles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En el modelo Role:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Role</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">users</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Laravel asume por convención que el nombre de la tabla pivot es el resultado de la concatenación en orden alfabético de los nombres de las tablas relacionadas en singular y en plural, separados por un guion bajo.</p><p>También asume que las claves foráneas en la tabla pivot son los nombres de las tablas relacionadas en singular seguidos por <code>_id</code>.</p><p>Si necesitásemos personalizar el nombre de la tabla pivot o los nombres de las claves foráneas, podemos hacerlo pasando argumentos adicionales al método <code>belongsToMany()</code>:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tabla_pivot_personalizada&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;clave_foranea_usuario&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;clave_foranea_rol&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Además de las claves foráneas, las tablas pivot pueden contener otros atributos que sean relevantes para la relación.</p><p>Por ejemplo, si en la relación entre <code>User</code> y <code>Role</code> queremos almacenar la fecha en la que el usuario fue asignado al rol, podríamos añadir una columna <code>assigned_at</code> a la tabla pivot.</p><p>Para trabajar con estos atributos adicionales, podemos utilizar el método <code>withPivot()</code> al definir la relación:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">roles</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsToMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Role</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withPivot</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;assigned_at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Esto permitirá acceder y manipular el valor de <code>assigned_at</code> cuando trabajemos con la relación.</p>`,19),l=[t];function p(c,i){return s(),n("div",null,l)}const d=a(o,[["render",p],["__file","tabla-pivot.html.vue"]]),u=JSON.parse('{"path":"/laravel/tabla-pivot.html","title":"Tablas pivot en Laravel","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/tabla-pivot.md"}');export{d as comp,u as data};
