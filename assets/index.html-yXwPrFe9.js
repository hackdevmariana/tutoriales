import{_ as i}from"./hackertux-z8HPW_me.js";import{_ as t,r as l,o as d,c as o,a,e,b as r,d as n}from"./app-CusW1d0V.js";const c={},p=n(`<h1 id="introduccion-a-markdown" tabindex="-1"><a class="header-anchor" href="#introduccion-a-markdown"><span>Introducción a Markdown</span></a></h1><p>Markdown es un lenguaje de marcado que permite dar formato a texto plano. Se puede usar para formatear documentos web, notas, libros...</p><p>Markdown tiene una sintaxis básica y una sintaxis extendida que permiten añadir elementos como negritas, cursivas, enlaces, listas, tablas, códigos... y se puede convertir fácilmente a otros formatos como HTML, PDF, o ePub.</p><h2 id="encabezamientos" tabindex="-1"><a class="header-anchor" href="#encabezamientos"><span>Encabezamientos</span></a></h2><p>Del mismo modo que en HTML, en Markdown hay seis tipos de encabezamientos. El equivalente a h1 sería una almohadilla (#), a h2, dos almohadillas y así sucesivamente hasta seis.</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Encabezamiento 1</span>
<span class="token title important"><span class="token punctuation">##</span> Encabezamiento 2</span>
<span class="token title important"><span class="token punctuation">###</span> Encabezamiento 3</span>
<span class="token title important"><span class="token punctuation">####</span> Encabezamiento 4</span>
<span class="token title important"><span class="token punctuation">#####</span> Encabezamiento 5</span>
<span class="token title important"><span class="token punctuation">######</span> Encabezamiento 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Que genera:</p><h1 id="encabezamiento-1" tabindex="-1"><a class="header-anchor" href="#encabezamiento-1"><span>Encabezamiento 1</span></a></h1><h2 id="encabezamiento-2" tabindex="-1"><a class="header-anchor" href="#encabezamiento-2"><span>Encabezamiento 2</span></a></h2><h3 id="encabezamiento-3" tabindex="-1"><a class="header-anchor" href="#encabezamiento-3"><span>Encabezamiento 3</span></a></h3><h4 id="encabezamiento-4" tabindex="-1"><a class="header-anchor" href="#encabezamiento-4"><span>Encabezamiento 4</span></a></h4><h5 id="encabezamiento-5" tabindex="-1"><a class="header-anchor" href="#encabezamiento-5"><span>Encabezamiento 5</span></a></h5><h6 id="encabezamiento-6" tabindex="-1"><a class="header-anchor" href="#encabezamiento-6"><span>Encabezamiento 6</span></a></h6><h2 id="negritas-y-cursivas" tabindex="-1"><a class="header-anchor" href="#negritas-y-cursivas"><span>Negritas y cursivas</span></a></h2><p>Para las negritas y cursivas, podemos usar * o _ para delimitar, con un símbolo, el texto en cursiva; con dos, en negrita y, con tres, en negrita y cursiva.</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Este texto <span class="token italic"><span class="token punctuation">*</span><span class="token content">está en cursiva</span><span class="token punctuation">*</span></span>.
Este texto <span class="token bold"><span class="token punctuation">**</span><span class="token content">está en negrita</span><span class="token punctuation">**</span></span>.
Este texto <span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">está en cursiva y negrita</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Que generará:</p><p>Este texto <em>está en cursiva</em>. <br> Este texto <strong>está en negrita</strong>. <br> Este texto <em><strong>está en cursiva y negrita</strong></em>.</p><h2 id="saltos-de-linea" tabindex="-1"><a class="header-anchor" href="#saltos-de-linea"><span>Saltos de línea</span></a></h2><p>En ocasiones, si escribimos varias líneas seguidas simplemente con un salto de línea, al renderizar a determinados formatos, puede que nos genere un texto sin salto de línea. Así pues:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Línea 1
Línea 2
Línea 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Puede que nos genere algo como:</p><p>Línea 1 Línea 2 Línea 3</p><p>Para evitarlo, podemos añadir \\ al final de la línea para que genere un salto de línea en cualquier texto o formato:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Línea 1 \\
Línea 2 \\
Línea 3 \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Que sí hará los saltos de línea:</p><p>Línea 1 <br> Línea 2 <br> Línea 3</p><p>Otra opción es hacer un doble salto de línea:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Línea 1

Línea 2

Línea 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Que hará saltos de línea según lo esperado:</p><p>Línea 1</p><p>Línea 2</p><p>Línea 3</p><h2 id="listas" tabindex="-1"><a class="header-anchor" href="#listas"><span>Listas</span></a></h2><p>Igual que en HTML, podemos hacer listas ordenadas o no ordenadas en Markdown.</p><p>Para las listas ordenadas, debemos añadir la numeración manualmente:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> Elemento 1
<span class="token list punctuation">2.</span> Elemento 2
<span class="token list punctuation">3.</span> Elemento 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para generar:</p><ol><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li></ol><p>También podemos indicar subíndices, con la precaución de escribir un doble salto de línea en aquellos elementos que tengan más de un punto, como:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> Elemento 1
<span class="token list punctuation">2.</span> Elemento 2
<span class="token list punctuation">3.</span> Elemento 3
3.1. Elemento 3.1

3.1.1 Elemento 3.1.1

<span class="token list punctuation">4.</span> Elemento 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3 3.1. Elemento 3.1</li></ol><p>3.1.1 Elemento 3.1.1</p><ol start="4"><li>Elemento 4</li></ol><h2 id="citas" tabindex="-1"><a class="header-anchor" href="#citas"><span>Citas</span></a></h2><p>Para escribir una cita, usaremos <code>&gt; cita</code> y, para acabar la cita, usaremos un doble salto de línea:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> cita

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Que generará algo como:</p><blockquote><p>cita</p></blockquote><p>Porque si seguimos escribiendo sin un doble salto de línea, el intérprete de Markdown lo entenderá como parte de la cita.</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> cita
otro texto

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultado:</p><blockquote><p>cita otro texto</p></blockquote><p>Podemos sangrar más usando más símbolos de mayor que (&gt;):</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span> cita
<span class="token blockquote punctuation">&gt;&gt;</span> autor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para que genere:</p><blockquote><p>cita</p><blockquote><p>autor</p></blockquote></blockquote><h2 id="codigo" tabindex="-1"><a class="header-anchor" href="#codigo"><span>Código</span></a></h2><p>Los bloques de código se insertan entre:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    \`\`\`
    Bloque de código
    \`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para generar:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Bloque de código
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Opcionalmente, podemos incluir la extensión del lenguaje para que, si el intérprete tiene resaltado de sintaxis, pueda mostrarlo resaltado:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    \`\`\` py
    print(&quot;Hola, mundo.&quot;)
    \`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y lo mostrará con su resaltado:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hola, mundo.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>También, si el intérprete tiene resaltado de sintaxis, normalmente, aceptará también resaltar una determinada línea:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>    \`\`\` py {2}
    string = &quot;Hola, mundo.&quot;
    print(string)
    \`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mostrará:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hola, mundo.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enlaces" tabindex="-1"><a class="header-anchor" href="#enlaces"><span>Enlaces</span></a></h2><p>Para insertar un enlace en un texto, usaremos la estructura <code>[texto del enlace](http://www.pagina_de_destino.com)</code>. Por ejemplo:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>Vamos a ver un <span class="token url">[<span class="token content">enlace</span>](<span class="token url">http://www.python.org</span>)</span> a la página de Python.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Genera:</p>`,74),u={href:"http://www.python.org",target:"_blank",rel:"noopener noreferrer"},m=n(`<h2 id="imagenes" tabindex="-1"><a class="header-anchor" href="#imagenes"><span>Imágenes</span></a></h2><p>Las imágenes en Markdown, al ser ficheros externos a los que hay que enlazar, se muestran de forma muy similar a los enlaces a URLs. Entre corchetes escribiremos el texto alternativo (el que se mostrará si no renderiza la imagen) y, entre paréntesis, el enlace a la imagen:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">texto alternativo</span>](<span class="token url">/enlace/a/la/imagen.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+i+'" alt="Logo Programación en español"></p>',4);function v(b,g){const s=l("ExternalLinkIcon");return d(),o("div",null,[p,a("p",null,[e("Vamos a ver un "),a("a",u,[e("enlace"),r(s)]),e(" a la página de Python.")]),m])}const x=t(c,[["render",v],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/markdown/","title":"Introducción a Markdown","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Encabezamientos","slug":"encabezamientos","link":"#encabezamientos","children":[]},{"level":2,"title":"Encabezamiento 2","slug":"encabezamiento-2","link":"#encabezamiento-2","children":[{"level":3,"title":"Encabezamiento 3","slug":"encabezamiento-3","link":"#encabezamiento-3","children":[]}]},{"level":2,"title":"Negritas y cursivas","slug":"negritas-y-cursivas","link":"#negritas-y-cursivas","children":[]},{"level":2,"title":"Saltos de línea","slug":"saltos-de-linea","link":"#saltos-de-linea","children":[]},{"level":2,"title":"Listas","slug":"listas","link":"#listas","children":[]},{"level":2,"title":"Citas","slug":"citas","link":"#citas","children":[]},{"level":2,"title":"Código","slug":"codigo","link":"#codigo","children":[]},{"level":2,"title":"Enlaces","slug":"enlaces","link":"#enlaces","children":[]},{"level":2,"title":"Imágenes","slug":"imagenes","link":"#imagenes","children":[]}],"git":{"updatedTime":1707739538000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":2}]},"filePathRelative":"markdown/README.md"}');export{x as comp,w as data};
