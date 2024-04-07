import{_ as o,r as t,o as r,c as i,a,e,b as l,d as s}from"./app-C1Aj3akT.js";const c={},d=s('<h1 id="etiquetado-de-partes-del-discurso" tabindex="-1"><a class="header-anchor" href="#etiquetado-de-partes-del-discurso"><span>Etiquetado de partes del discurso</span></a></h1><p>El etiquetado de partes del discurso (POS / Part Of Speech) es un proceso que consiste en asignar a cada palabra de un texto una categoría gramatical, como sustantivo, verbo, adjetivo, etc., según su definición y contexto. El etiquetado POS es útil para el análisis de texto, ya que permite identificar la estructura y el significado de las oraciones.</p><p>R es un lenguaje de programación que ofrece varias herramientas para realizar el etiquetado POS de forma automatizada. Algunos de los paquetes más populares son <strong>quanteda</strong>, <strong>tidytext</strong> y <strong>spacyr</strong>. Estos paquetes permiten cargar un corpus de texto, segmentarlo en palabras, detectar las oraciones y asignar las etiquetas POS a cada palabra. Además, ofrecen funciones para visualizar y analizar los resultados del etiquetado POS, como frecuencias, n-gramas, co-ocurrencias, etc.</p><h2 id="paquete-quanteda" tabindex="-1"><a class="header-anchor" href="#paquete-quanteda"><span>Paquete quanteda</span></a></h2>',4),u={href:"https://quanteda.io/",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>Quanteda es un paquete de R que permite realizar análisis cuantitativos de datos textuales, con funciones de procesamiento de lenguaje natural y gestión de datos textuales. Ofrece una API consistente y potente para investigadores, estudiantes y otros analistas que necesitan aplicar NLP a textos, desde documentos hasta el análisis final.</p><p>Quanteda funciona mediante la creación de objetos especiales para representar y manipular los textos, como corpus, tokens y matrices de documentos y características. Estos objetos permiten realizar operaciones como limpieza, segmentación, filtrado, ponderación, selección, agrupación, resumen y visualización de los textos.</p><p>Se puede usar el paquete quanteda para realizar análisis de sentimientos en R. Este paquete permite crear un corpus de texto, aplicar diferentes métodos de preprocesamiento, extraer características como n-gramas o tokens, y asignar valores de polaridad a cada palabra o documento. Para ello, podemos usar las funciones <code>tokens()</code> y <code>dfm()</code> para crear una matriz de documentos y términos, y luego usar la función <code>textstat_sentiment()</code> para calcular los puntajes de sentimiento usando diferentes diccionarios, como Bing, AFINN o NRC. También podemos usar la función <code>textplot_xray()</code> para visualizar las palabras clave asociadas a cada sentimiento.</p><h2 id="ejemplos-de-uso" tabindex="-1"><a class="header-anchor" href="#ejemplos-de-uso"><span>Ejemplos de uso</span></a></h2><p>Dada esta cadena:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>library<span class="token punctuation">(</span>quanteda<span class="token punctuation">)</span>

quijote <span class="token operator">&lt;-</span> <span class="token string">&quot;En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años. Era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímiles se deja entender que se llamaba «Quijana». Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad.&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos crear un corpus y tokenizar:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>quijote_corpus <span class="token operator">&lt;-</span> corpus<span class="token punctuation">(</span>text <span class="token operator">=</span> quijote<span class="token punctuation">)</span>

quijote_tokens <span class="token operator">&lt;-</span> tokens<span class="token punctuation">(</span>quijote_corpus<span class="token punctuation">,</span> what <span class="token operator">=</span> <span class="token string">&quot;word&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Contar la frecuencia de cada palabra en el texto:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>quijote_wordfreq <span class="token operator">&lt;-</span> dfm<span class="token punctuation">(</span>quijote_tokens<span class="token punctuation">,</span> tolower <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%&gt;%</span> colSums<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto crea un objeto dfm (Document-Feature Matrix) que podemos utilizar para analizar la frecuencia de palabras en el texto.</p><p>Generar n-gramas (secuencias de n palabras consecutivas):</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>quijote_ngrams <span class="token operator">&lt;-</span> tokens_ngrams<span class="token punctuation">(</span>quijote_tokens<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto dará n-gramas de dos palabras. Podemos ajustar el valor de n según las necesidades de cada proyecto.</p><p>Podemos buscar concordancias para una palabra específica en el texto:</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>quijote_concordances <span class="token operator">&lt;-</span> concordance<span class="token punctuation">(</span>quijote_tokens<span class="token punctuation">,</span> pattern <span class="token operator">=</span> <span class="token string">&quot;Mancha&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto devolverá fragmentos del texto que contienen la palabra &quot;Mancha&quot;.</p>`,17);function m(g,q){const n=t("ExternalLinkIcon");return r(),i("div",null,[d,a("p",null,[e("Web: "),a("a",u,[e("https://quanteda.io/"),l(n)])]),p])}const b=o(c,[["render",m],["__file","pos.html.vue"]]),k=JSON.parse('{"path":"/r/pos.html","title":"Etiquetado de partes del discurso","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Paquete quanteda","slug":"paquete-quanteda","link":"#paquete-quanteda","children":[]},{"level":2,"title":"Ejemplos de uso","slug":"ejemplos-de-uso","link":"#ejemplos-de-uso","children":[]}],"git":{"updatedTime":1709287747000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"r/pos.md"}');export{b as comp,k as data};