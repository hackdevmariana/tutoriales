import{_ as n,o as a,c as s,d as e}from"./app-CXvoPJfF.js";const t={},i=e(`<h1 id="estructura-de-un-fichero-yaml" tabindex="-1"><a class="header-anchor" href="#estructura-de-un-fichero-yaml"><span>Estructura de un fichero YAML</span></a></h1><p>Los ficheros YAML son una forma de representar datos estructurados mediante texto plano, con una sintaxis basada en indentación, ya que YAML utiliza la indentación para estructurar los datos. La indentación es crucial y se realiza mediante espacios (no tabulaciones). Los bloques de código se definen mediante la cantidad de espacios de indentación.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">project_name</span><span class="token punctuation">:</span> <span class="token string">&quot;NombreDelProyecto&quot;</span>

<span class="token key atrule">directories</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/frontend&quot;</span>
  <span class="token key atrule">backend_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/backend&quot;</span>
  <span class="token key atrule">api_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/api&quot;</span>
  <span class="token key atrule">doc_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/doc&quot;</span>
  <span class="token key atrule">src_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/src&quot;</span>
  <span class="token key atrule">components_directory</span><span class="token punctuation">:</span> <span class="token string">&quot;ruta/directorio/components&quot;</span>

<span class="token key atrule">filenames</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend_component_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_componente_frontend&quot;</span>
  <span class="token key atrule">backend_component_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_componente_backend&quot;</span>
  <span class="token key atrule">model_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_modelo&quot;</span>
  <span class="token key atrule">urls_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_urls&quot;</span>
  <span class="token key atrule">views_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_views&quot;</span>
  <span class="token key atrule">api_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_api&quot;</span>
  <span class="token key atrule">urls_api_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_urls_api&quot;</span>
  <span class="token key atrule">tasks_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_tareas&quot;</span>
  <span class="token key atrule">celery_filename</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_celery&quot;</span>

<span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_variable_1&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;tipo_variable_1&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_variable_2&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;tipo_variable_2&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;nombre_variable_3&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;tipo_variable_3&quot;</span>
  <span class="token comment"># ... más variables</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="valores-booleanos" tabindex="-1"><a class="header-anchor" href="#valores-booleanos"><span>Valores booleanos</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">activo</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">desactivado</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listas-y-diccionarios" tabindex="-1"><a class="header-anchor" href="#listas-y-diccionarios"><span>Listas y diccionarios</span></a></h2><p>YAML admite listas y diccionarios para representar datos estructurados.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>frutas<span class="token punctuation">:</span>
  <span class="token operator">-</span> manzana
  <span class="token operator">-</span> naranja
  <span class="token operator">-</span> plátano

persona<span class="token punctuation">:</span>
  nombre<span class="token punctuation">:</span> Alice
  edad<span class="token punctuation">:</span> <span class="token number">25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comentarios" tabindex="-1"><a class="header-anchor" href="#comentarios"><span>Comentarios</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Esto es un comentario</span>
<span class="token key atrule">nombre</span><span class="token punctuation">:</span> John Doe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="referencias-y-anclajes" tabindex="-1"><a class="header-anchor" href="#referencias-y-anclajes"><span>Referencias y anclajes</span></a></h2><p>YAML permite anclar un fragmento de datos y hacer referencia a él en otro lugar del documento.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">empleado</span><span class="token punctuation">:</span> <span class="token important">&amp;empleado</span>
  <span class="token key atrule">nombre</span><span class="token punctuation">:</span> John Doe
  <span class="token key atrule">edad</span><span class="token punctuation">:</span> <span class="token number">30</span>

<span class="token key atrule">supervisor</span><span class="token punctuation">:</span>
  <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*empleado</span>
  <span class="token key atrule">cargo</span><span class="token punctuation">:</span> Gerente
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="leer-fichero-yaml-en-python" tabindex="-1"><a class="header-anchor" href="#leer-fichero-yaml-en-python"><span>Leer fichero YAML en Python</span></a></h1><p>Acceder a valores individuales:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> yaml

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;tu_archivo.yaml&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    config <span class="token operator">=</span> yaml<span class="token punctuation">.</span>safe_load<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>

path_frontend <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&#39;directories&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;frontend_directory&#39;</span><span class="token punctuation">]</span>
path_backend <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&#39;directories&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;backend_directory&#39;</span><span class="token punctuation">]</span>
<span class="token comment"># ... y así sucesivamente</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos recorrer iterables de YAML. En este ejemplo, vamos a acceder a las variables y sus tipos del primer ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> yaml

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;tu_archivo.yaml&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    config <span class="token operator">=</span> yaml<span class="token punctuation">.</span>safe_load<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">)</span>

variables <span class="token operator">=</span> config<span class="token punctuation">[</span><span class="token string">&#39;vars&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> variable <span class="token keyword">in</span> variables<span class="token punctuation">:</span>
    nombre_variable <span class="token operator">=</span> variable<span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
    tipo_variable <span class="token operator">=</span> variable<span class="token punctuation">[</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span>
    <span class="token comment"># Haz algo con la variable y su tipo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[i];function l(p,c){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/yaml/","title":"Estructura de un fichero YAML","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Valores booleanos","slug":"valores-booleanos","link":"#valores-booleanos","children":[]},{"level":2,"title":"Listas y diccionarios","slug":"listas-y-diccionarios","link":"#listas-y-diccionarios","children":[]},{"level":2,"title":"Comentarios","slug":"comentarios","link":"#comentarios","children":[]},{"level":2,"title":"Referencias y anclajes","slug":"referencias-y-anclajes","link":"#referencias-y-anclajes","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"yaml/README.md"}');export{u as comp,d as data};
