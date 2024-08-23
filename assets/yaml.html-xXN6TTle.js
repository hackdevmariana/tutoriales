import{_ as n,o as a,c as s,d as e}from"./app-DV2Cx1Lv.js";const t={},o=e(`<h1 id="leer-variables-de-un-fichero-yaml" tabindex="-1"><a class="header-anchor" href="#leer-variables-de-un-fichero-yaml"><span>Leer variables de un fichero yaml</span></a></h1><p>Necesitaremos instalar el módulo <code>yaml-loader</code> en el proyecto. Lo podemos hacer con <code>npm</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev yaml-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O la librería <code>js-yaml</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> js-yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Después, debemos configurar Nuxt en el fichero <code>nuxt.config.ts</code> para usar <code>yaml-loader</code> para los archivos locales:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NuxtConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nuxt/types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">config</span><span class="token operator">:</span> NuxtConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Otras configuraciones de Nuxt...</span>

  <span class="token literal-property property">buildModules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// Otros módulos...</span>
    <span class="token string">&#39;@nuxt/typescript-build&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Agregar regla para cargar archivos YAML</span>
      config<span class="token punctuation">.</span>module<span class="token operator">!</span><span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ya?ml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;yaml-loader&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leer-el-fichero-completo" tabindex="-1"><a class="header-anchor" href="#leer-el-fichero-completo"><span>Leer el fichero completo</span></a></h2><p>Para leer el fichero completo, dentro del <code>script setup</code> o método <code>asyncData</code> de <code>script</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> doc <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">queryContent</span><span class="token punctuation">(</span><span class="token string">&#39;data/projects&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="acceso-a-variables" tabindex="-1"><a class="header-anchor" href="#acceso-a-variables"><span>Acceso a variables</span></a></h2><p>Para acceder a variables específicas de un archivo YAML en Nuxt, podemos importar el archivo y luego acceder a las propiedades deseadas directamente:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Importa el módulo fs para leer archivos</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Importa la librería yaml para parsear el archivo YAML</span>
<span class="token keyword">const</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;js-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Lee el archivo YAML</span>
<span class="token keyword">const</span> fileContents <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./locales/miArchivo.yaml&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Parsea el contenido del archivo</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> yaml<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>fileContents<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Accede a las variables específicas</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> data<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
<span class="token keyword">const</span> image <span class="token operator">=</span> data<span class="token punctuation">.</span>image<span class="token punctuation">;</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> data<span class="token punctuation">.</span>content<span class="token punctuation">;</span>

<span class="token comment">// Ahora puedes usar las variables &#39;title&#39;, &#39;image&#39; y &#39;content&#39; como necesites</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> image<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="leer-conjuntos-de-datos" tabindex="-1"><a class="header-anchor" href="#leer-conjuntos-de-datos"><span>Leer conjuntos de datos</span></a></h2><p>Podemos almacenar conjuntos de datos en un fichero YAML:</p><div class="language-YML line-numbers-mode" data-ext="YML" data-title="YML"><pre class="language-YML"><code>datos:
  - titulo: &quot;Conjunto de datos 1&quot;
    descripcion: &quot;Este es el primer conjunto de datos.&quot;
    enlace: &quot;https://ejemplo.com/1&quot;
    imagen: &quot;imagen1.jpg&quot;

  - titulo: &quot;Conjunto de datos 2&quot;
    descripcion: &quot;Este es el segundo conjunto de datos.&quot;
    enlace: &quot;https://ejemplo.com/2&quot;
    imagen: &quot;imagen2.jpg&quot;

  - titulo: &quot;Conjunto de datos 3&quot;
    descripcion: &quot;Este es el tercer conjunto de datos.&quot;
    enlace: &quot;https://ejemplo.com/3&quot;
    imagen: &quot;imagen3.jpg&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y leerlos desde un componente:</p><div class="language-HTML line-numbers-mode" data-ext="HTML" data-title="HTML"><pre class="language-HTML"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;div v-for=&quot;(dato, index) in datos&quot; :key=&quot;index&quot;&gt;
      &lt;h2&gt;{{ dato.titulo }}&lt;/h2&gt;
      &lt;p&gt;{{ dato.descripcion }}&lt;/p&gt;
      &lt;a :href=&quot;dato.enlace&quot;&gt;{{ dato.enlace }}&lt;/a&gt;
      &lt;img :src=&quot;dato.imagen&quot; alt=&quot;Imagen&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import yaml from &#39;js-yaml&#39;;
import fs from &#39;fs&#39;;

export default {
  data() {
    return {
      datos: []
    };
  },
  mounted() {
    const datosYAML = fs.readFileSync(&#39;datos.yaml&#39;, &#39;utf8&#39;);

    this.datos = yaml.load(datosYAML);
  }
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="escribir-un-yaml" tabindex="-1"><a class="header-anchor" href="#escribir-un-yaml"><span>Escribir un yaml</span></a></h2><p>Para escribir un archivo YAML en Nuxt, debemos crear previamente la estructura de datos que necesitamos.</p><p>Por ejemplo, <code>miArchivo.yaml</code>:</p><div class="language-YML line-numbers-mode" data-ext="YML" data-title="YML"><pre class="language-YML"><code>title: &quot;Mi Título&quot;
image: &quot;mi-imagen.jpg&quot;
content: &quot;Este es el contenido.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Guardamos este archivo en el directorio del proyecto donde sea accesible, como <code>static/</code> o <code>assets/</code>.</p><p>Utilizamos el módulo <code>fs</code> (File System) de Node.js para escribir en el archivo.</p><p>Aquí, un ejemplo de cómo hacerlo en un método o acción de Nuxt:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> yaml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;js-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Suponiendo que tienes un objeto de datos para escribir en YAML</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Nuevo Título&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;nueva-imagen.jpg&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;Nuevo contenido.&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Convierte el objeto de datos a una cadena YAML</span>
<span class="token keyword">const</span> yamlStr <span class="token operator">=</span> yaml<span class="token punctuation">.</span><span class="token function">dump</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Escribe la cadena YAML en el archivo</span>
fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;ruta/a/miArchivo.yaml&#39;</span><span class="token punctuation">,</span> yamlStr<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-yaml-y-yaml-loader" tabindex="-1"><a class="header-anchor" href="#js-yaml-y-yaml-loader"><span>js-yaml y yaml-loader</span></a></h2><p>Las bibliotecas js-yaml y yaml-loader son herramientas que se utilizan para trabajar con archivos YAML en proyectos de JavaScript, pero tienen propósitos ligeramente diferentes y se usan en contextos distintos:</p><ul><li><p><strong>js-yaml</strong>: Es una librería de Node.js que permite parsear y serializar datos en formato YAML. Se puede utilizar tanto en aplicaciones del lado del servidor como en herramientas de línea de comandos. Es útil para leer archivos YAML y convertirlos en objetos JavaScript, o viceversa, convertir objetos JavaScript en cadenas YAML para su almacenamiento o transmisión.</p></li><li><p><strong>yaml-loader</strong>: Es un loader para Webpack que permite importar archivos YAML como módulos dentro de aplicaciones web. Cuando se usa con Webpack, <code>yaml-loader</code> convierte los datos YAML en JSON, lo que facilita su integración con el ecosistema de módulos de JavaScript. Es especialmente útil en el contexto del desarrollo de aplicaciones web, donde se necesita incluir archivos de configuración YAML como parte del paquete de la aplicación.</p></li></ul><p>En resumen, <code>js-yaml</code> es una librería general para parsear y serializar YAML en aplicaciones Node.js, mientras que <code>yaml-loader</code> es específico para proyectos que usan Webpack, permitiendo importar archivos YAML directamente en el código fuente de una aplicación web.</p>`,30),i=[o];function l(c,p){return a(),s("div",null,i)}const d=n(t,[["render",l],["__file","yaml.html.vue"]]),u=JSON.parse('{"path":"/nuxt/yaml.html","title":"Leer variables de un fichero yaml","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Leer el fichero completo","slug":"leer-el-fichero-completo","link":"#leer-el-fichero-completo","children":[]},{"level":2,"title":"Acceso a variables","slug":"acceso-a-variables","link":"#acceso-a-variables","children":[]},{"level":2,"title":"Leer conjuntos de datos","slug":"leer-conjuntos-de-datos","link":"#leer-conjuntos-de-datos","children":[]},{"level":2,"title":"Escribir un yaml","slug":"escribir-un-yaml","link":"#escribir-un-yaml","children":[]},{"level":2,"title":"js-yaml y yaml-loader","slug":"js-yaml-y-yaml-loader","link":"#js-yaml-y-yaml-loader","children":[]}],"git":{"updatedTime":1712402241000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"nuxt/yaml.md"}');export{d as comp,u as data};
