import{_ as a,o as e,c as o,d as s}from"./app-MHZFltha.js";const n={},t=s(`<h1 id="ejecutar-comandos-bash-en-google-colab" tabindex="-1"><a class="header-anchor" href="#ejecutar-comandos-bash-en-google-colab"><span>Ejecutar comandos Bash en Google Colab</span></a></h1><p>Para ejecutar comandos de la línea de comandos de Unix/Linux en Google Colab directamente desde una celda de código de Python, se utiliza la exclamación <code>(!)</code> antes de los comandos. Esto es útil para instalar paquetes, navegar por el sistema de archivos, descargar datos, entre otras tareas.</p><p>Por ejemplo, para instalar el paquete OpenCV:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span>pip <span class="token function">install</span> opencv-python-headless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O, para listar los archivos y directorios en el directorio actual:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">!</span>ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esta característica permite combinar comandos de Python y de la línea de comandos en un mismo entorno, facilitando la configuración y gestión del entorno de trabajo en Google Colab.</p>`,7),c=[t];function d(l,r){return e(),o("div",null,c)}const p=a(n,[["render",d],["__file","ejecutar-comandos.html.vue"]]),m=JSON.parse('{"path":"/colab/ejecutar-comandos.html","title":"Ejecutar comandos Bash en Google Colab","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"colab/ejecutar-comandos.md"}');export{p as comp,m as data};
