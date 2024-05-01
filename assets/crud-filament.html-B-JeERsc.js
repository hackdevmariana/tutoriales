import{_ as e,o as a,c as s,d as n}from"./app-DG5hvf-a.js";const l={},r=n(`<h1 id="crear-un-crud-con-filamentphp" tabindex="-1"><a class="header-anchor" href="#crear-un-crud-con-filamentphp"><span>Crear un CRUD con FilamentPHP</span></a></h1><p>Vamos a ver cómo crear un CRUD con FilamentPHP con una tabla llamada test_news en la que tengamos unas noticias de prueba.</p><h2 id="crear-modelo" tabindex="-1"><a class="header-anchor" href="#crear-modelo"><span>Crear modelo</span></a></h2><h2 id="crear-las-vistas-en-el-panel-de-control" tabindex="-1"><a class="header-anchor" href="#crear-las-vistas-en-el-panel-de-control"><span>Crear las vistas en el panel de control</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code>php artisan make<span class="token punctuation">:</span>filament<span class="token operator">-</span>resource TestNews <span class="token operator">--</span>generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto nos genera automáticamente:</p><ul><li><p>el fichero <code>app/Filament/Resources/TestNewsResource.php</code></p></li><li><p>el directorio <code>app/Filament/Resources/TestNewsResource/Pages</code></p></li></ul><p>con los ficheros:</p><ul><li><p><code>app/Filament/Resources/TestNewsResource/Pages/CreateTestNews.php</code></p></li><li><p><code>app/Filament/Resources/TestNewsResource/Pages/EditTestNews.php</code></p></li><li><p><code>app/Filament/Resources/TestNewsResource/Pages/ListTestNews.php</code></p></li></ul><p>Y una entrada en el menú de Filament que indica &quot;Test News&quot;.</p>`,10),t=[r];function o(c,i){return a(),s("div",null,t)}const d=e(l,[["render",o],["__file","crud-filament.html.vue"]]),u=JSON.parse('{"path":"/laravel/crud-filament.html","title":"Crear un CRUD con FilamentPHP","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Crear modelo","slug":"crear-modelo","link":"#crear-modelo","children":[]},{"level":2,"title":"Crear las vistas en el panel de control","slug":"crear-las-vistas-en-el-panel-de-control","link":"#crear-las-vistas-en-el-panel-de-control","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"laravel/crud-filament.md"}');export{d as comp,u as data};
