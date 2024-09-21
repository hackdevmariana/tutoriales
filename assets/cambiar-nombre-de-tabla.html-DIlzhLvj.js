import{_ as e,o as a,c as n,d as i}from"./app-C1gUIOpz.js";const r={},l=i(`<h1 id="cambiar-el-nombre-de-una-tabla-en-laravel" tabindex="-1"><a class="header-anchor" href="#cambiar-el-nombre-de-una-tabla-en-laravel"><span>Cambiar el nombre de una tabla en Laravel</span></a></h1><p>Para cambiar el nombre de una tabla en Laravel, podemos realizar una migración para renombrar la tabla existente.</p><h2 id="crear-la-migracion" tabindex="-1"><a class="header-anchor" href="#crear-la-migracion"><span>Crear la migración</span></a></h2><p>Para crear una nueva migración, utilizamos el comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan make:migration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En esta migración, en la que queremos cambiar el nombre de una tabla, utilizaremos el método <code>rename</code> para cambiar el nombre de la tabla.</p><p>Ejecutaremos el siguiente comando en la terminal:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan make:migration rename_test_news_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Abrimos el archivo de migración recién creado en el directorio <code>database/migrations</code> y utilizamos el método <code>rename</code> para cambiar el nombre de la tabla:</p><div class="language-PHP line-numbers-mode" data-ext="PHP" data-title="PHP"><pre class="language-PHP"><code>use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

class RenameTestNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::rename(&#39;news&#39;, &#39;test_news&#39;);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::rename(&#39;test_news&#39;, &#39;news&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ejecutamos la migración con el siguiente comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto renombrará la tabla <code>news</code> a <code>test_news</code> en la base de datos.</p>`,13),s=[l];function d(c,m){return a(),n("div",null,s)}const o=e(r,[["render",d],["__file","cambiar-nombre-de-tabla.html.vue"]]),b=JSON.parse('{"path":"/laravel/cambiar-nombre-de-tabla.html","title":"Cambiar el nombre de una tabla en Laravel","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Crear la migración","slug":"crear-la-migracion","link":"#crear-la-migracion","children":[]}],"git":{"updatedTime":1714171939000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/cambiar-nombre-de-tabla.md"}');export{o as comp,b as data};
