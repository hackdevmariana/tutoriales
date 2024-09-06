import{_ as e,o as n,c as a,d as s}from"./app-VK9RvX41.js";const i={},l=s(`<h1 id="autocompletar-con-youcompleteme" tabindex="-1"><a class="header-anchor" href="#autocompletar-con-youcompleteme"><span>Autocompletar con YouCompleteMe</span></a></h1><h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion"><span>Instalación</span></a></h2><p>Añadir al <code>~/.vimrc</code>:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>plug#begin()
Plug &#39;Valloric/YouCompleteMe&#39;
plug#end()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Para compilar el plugin, hace falta tener Go y Java:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> golang-go
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> default-jre
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> default-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Una vez instalados, hay que ir al directorio donde está el plugin y complilarlo:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.vim/plugged/YouCompleteMe
python3 install.py <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="anadir-ultisnip-y-supertab" tabindex="-1"><a class="header-anchor" href="#anadir-ultisnip-y-supertab"><span>Añadir UltiSnip y SuperTab</span></a></h3><p>Añadir al <code>~/.vimrc</code>:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>plug#begin()
Plug &#39;Valloric/YouCompleteMe&#39;
Plug &#39;SirVer/ultisnips&#39;
Plug &#39;ervandew/supertab&#39;
plug#end()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ejecutar:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>:PlugInstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>YouCompleteMe</code> y <code>UltiSnips</code> son dos complementos que se pueden integrar para tener completado de texto y de snippets con el tabulador. Sin embargo, a veces pueden causar un error de sincronización que haga que UltiSnips falle.</p><p>Para evitar este error, puedes usar el complemento <code>SuperTab</code>, que permite usar el tabulador para diferentes tipos de completado. Puedes instalar <code>SuperTab</code> con el comando <code>Plug &#39;ervandew/supertab&#39;</code> en el <code>.vimrc</code>, y luego ejecutar <code>:PlugInstall</code>. Después, puedes añadir estas líneas en el <code>.vimrc</code> para asignar el tabulador a <code>YouCompleteMe</code> y <code>UltiSnips</code>:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>let g:ycm_key_list_select_completion = [&#39;&lt;Tab&gt;&#39;, &#39;&lt;Down&gt;&#39;]
let g:ycm_key_list_previous_completion = [&#39;&lt;S-Tab&gt;&#39;, &#39;&lt;Up&gt;&#39;]
let g:SuperTabDefaultCompletionType = &#39;&lt;C-n&gt;&#39;
let g:UltiSnipsExpandTrigger = &quot;&lt;tab&gt;&quot;
let g:UltiSnipsJumpForwardTrigger = &quot;&lt;tab&gt;&quot;
let g:UltiSnipsJumpBackwardTrigger = &quot;&lt;s-tab&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creacion-de-snippets" tabindex="-1"><a class="header-anchor" href="#creacion-de-snippets"><span>Creación de snippets</span></a></h2><p>Para crear tus propios snippets con UltiSnips, debes crear un archivo con la extensión .snippets en el directorio ~/.vim/UltiSnips. El nombre del archivo debe coincidir con el tipo de archivo para el que quieres crear los snippets. Por ejemplo, si quieres crear snippets para Python, el archivo debe llamarse python.snippets. Dentro del archivo, puedes usar la sintaxis de UltiSnips para definir tus snippets.</p><div class="language-snippets line-numbers-mode" data-ext="snippets" data-title="snippets"><pre class="language-snippets"><code>snippet def &quot;Function with docstring&quot; b
def \${1:function_name}(\${2:parameters}):
    &quot;&quot;&quot;\${3:Docstring for $1}

    \${4:More details}
    &quot;&quot;&quot;
    \${0:# function body}
endsnippet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Este snippet se activa cuando escribes &quot;def&quot; y pulsas el tabulador. Te insertará el código de una función con un docstring, y te permitirá editar los campos que tiene. Puedes usar el tabulador para saltar entre los campos y <code>Shift</code> + <code>Tab</code> para volver al anterior. También puedes usar <code>Ctrl</code> + <code>J</code> y <code>Ctrl</code> + <code>K</code> para lo mismo.</p><p>Por ejemplo, si quieres crear una función que calcule el área de un círculo, puedes escribir &quot;def&quot; y pulsar tabulador, y luego escribir &quot;area&quot;, tabulador, &quot;radius&quot;, tabulador, &quot;Calculate the area of a circle&quot;, tabulador, &quot;The area is given by pi times radius squared&quot;, tabulador, y el código que quieras dentro de la función. El resultado sería algo así:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>radius<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Calculate the area of a circle

    The area is given by pi times radius squared
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> math<span class="token punctuation">.</span>pi <span class="token operator">*</span> radius <span class="token operator">**</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si queremos añadir nuevos snippets, sólo tenemos que añadir bloques de código entre <code>snippet</code> y <code>endsnippet</code>:</p><div class="language-snippets line-numbers-mode" data-ext="snippets" data-title="snippets"><pre class="language-snippets"><code>snippet def &quot;Function with docstring&quot; b
def \${1:function_name}(\${2:parameters}):
        &quot;&quot;&quot;\${3:Docstring for $1}

        \${4:More details}
        &quot;&quot;&quot;
        \${0:# function body}
endsnippet

snippet class &quot;Class with docstring and constructor&quot; b
class \${1:ClassName}(\${2:object}):
        &quot;&quot;&quot;\${3:Docstring for $1}&quot;&quot;&quot;

        def __init__(self, \${4:parameters}):
                \${5:# constructor body}

                \${0:# class body}
endsnippet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snippets-avanzados" tabindex="-1"><a class="header-anchor" href="#snippets-avanzados"><span>snippets avanzados</span></a></h2><p>Si queremos escribir el nombre de la variable una sola vez, podemos usar una expresión de Python entre \` para asignar el valor del primer campo a una variable y luego usarla en el resto del snippet:</p><div class="language-snippets line-numbers-mode" data-ext="snippets" data-title="snippets"><pre class="language-snippets"><code>snippet vue &quot;Vue component&quot; b
\`!p snip.rv = t[1]\`
&lt;template&gt;
&lt;div&gt;
\${1:&lt;!-- template content --&gt;}
&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name: &#39;\`!p snip.rv\`&#39;,
data() {
return {
\${2:/* data properties */}
};
},
methods: {
\${3:/* methods */}
},
\${0:/* other options */}
};
&lt;/script&gt;
endsnippet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>De esta forma, cuando escribamos el nombre del componente en el primer campo, se guardará en la variable snip.rv y se usará en el bloque <code>&lt;script&gt;</code>.</p><p>Si queremos usar un número indeterminado de variables, podemos usar la opción r en el snippet para indicar que el contenido se evalúa como una expresión regular. De esta forma, podemos usar grupos de captura para repetir el mismo patrón varias veces.</p><p>Por ejemplo:</p><div class="language-snippets line-numbers-mode" data-ext="snippets" data-title="snippets"><pre class="language-snippets"><code>snippet props &quot;Vue props&quot; r
props: {
\`!p
import re
m = re.search(r&#39;(\\w+): (\\w+)(, )?&#39;, t[1])
if m:
snip.rv = m.group(0)
while m:
snip.rv += &quot;\\n  &quot; + m.group(1) + &quot;: {\\n    type: &quot; + m.group(2) + &quot;,\\n    \${1:/* other options */}\\n  }&quot; + m.group(3)
m = re.search(r&#39;(\\w+): (\\w+)(, )?&#39;, t[1], m.end())
\`
}
endsnippet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>De esta forma, cuando escribamos una lista de propiedades separadas por comas en el primer campo, se generarán los objetos correspondientes con el tipo y las opciones que queramos. Por ejemplo, si escribimos name: String, age: Number, se generará lo siguiente:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>props: {
name: String,
age: Number
name: {
type: String,
/* other options */
},
age: {
type: Number,
/* other options */
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),t=[l];function d(r,o){return n(),a("div",null,t)}const c=e(i,[["render",d],["__file","autocompletado.html.vue"]]),p=JSON.parse('{"path":"/vi/autocompletado.html","title":"Autocompletar con YouCompleteMe","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Instalación","slug":"instalacion","link":"#instalacion","children":[{"level":3,"title":"Añadir UltiSnip y SuperTab","slug":"anadir-ultisnip-y-supertab","link":"#anadir-ultisnip-y-supertab","children":[]}]},{"level":2,"title":"Creación de snippets","slug":"creacion-de-snippets","link":"#creacion-de-snippets","children":[]},{"level":2,"title":"snippets avanzados","slug":"snippets-avanzados","link":"#snippets-avanzados","children":[]}],"git":{"updatedTime":1710371051000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":2}]},"filePathRelative":"vi/autocompletado.md"}');export{c as comp,p as data};
