import{_ as a,o as e,c as n,d as s}from"./app-DMNSRmh9.js";const o={},l=s(`<h1 id="guardar-el-resultado-de-stable-diffusion-en-google-colab" tabindex="-1"><a class="header-anchor" href="#guardar-el-resultado-de-stable-diffusion-en-google-colab"><span>Guardar el resultado de Stable Diffusion en Google Colab</span></a></h1><p>Pasos a seguir:</p><ol><li><p>Generar la imagen utilizando el modelo de Stable Diffusion en un notebook de Google Colab.</p></li><li><p>Guardar la imagen localmente en el sistema de archivos temporal de Google Colab utilizando el siguiente código:</p></li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image

image<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;resultado.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Si queremos descargar la imagen en el equipo local, podemos usar el siguiente código:</li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> google<span class="token punctuation">.</span>colab <span class="token keyword">import</span> files

files<span class="token punctuation">.</span>download<span class="token punctuation">(</span><span class="token string">&#39;resultado.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Para guardar en Google Drive, primero debemos montar Google Drive en Colab:</li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> google<span class="token punctuation">.</span>colab <span class="token keyword">import</span> drive
drive<span class="token punctuation">.</span>mount<span class="token punctuation">(</span><span class="token string">&#39;/content/drive&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Y, luego, podemos guardar la imagen en un directorio específico de Google Drive:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>image<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;/content/drive/My Drive/resultado.png&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),t=[l];function i(d,r){return e(),n("div",null,t)}const c=a(o,[["render",i],["__file","guardar-en-colab.html.vue"]]),u=JSON.parse('{"path":"/stablediffusion/guardar-en-colab.html","title":"Guardar el resultado de Stable Diffusion en Google Colab","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"stablediffusion/guardar-en-colab.md"}');export{c as comp,u as data};