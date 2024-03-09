import{_ as i,o as e,c as a,d as s}from"./app-DadNv8_z.js";const r={},n=s(`<h1 id="comprimir-y-descomprimir-ficheros-zip" tabindex="-1"><a class="header-anchor" href="#comprimir-y-descomprimir-ficheros-zip"><span>Comprimir y descomprimir ficheros zip</span></a></h1><p>Comprimir varios ficheros en un solo fiecho <code>.zip</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">zip</span> ficherocomprimido.zip fichero1.txt fichero2.txt fichero3.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Comprimir todos los ficheros de directorio actual, sin incluir subdirectorios:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">zip</span> ficheros.zip *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Comprimir un directorio completo incluyendo subdirectorios:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">zip</span> <span class="token parameter variable">-r</span> directoriocomprimido.zip /path/to/directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Descomprimir un fichero <code>.zip</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">unzip</span> fichero.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),o=[n];function c(d,t){return e(),a("div",null,o)}const l=i(r,[["render",c],["__file","zip.html.vue"]]),m=JSON.parse('{"path":"/linux/zip.html","title":"Comprimir y descomprimir ficheros zip","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1709943328000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"linux/zip.md"}');export{l as comp,m as data};
