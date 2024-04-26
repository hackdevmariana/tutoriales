import{_ as n,o as s,c as a,d as e}from"./app-DELkFWxI.js";const t={},p=e(`<h1 id="crear-modelo-en-laravel" tabindex="-1"><a class="header-anchor" href="#crear-modelo-en-laravel"><span>Crear modelo en Laravel</span></a></h1><p>Vamos a crear un modelo para una API con Laravel y un dashboard con FilamentPHP de noticias de prueba llamdado <code>testnews</code> con los siguientes campos (añadiremos los campos innecesarios <code>width</code> y <code>height</code> como si cometiéramos un error al crear la tabla en la base de datos para luego ver cómo solucionar este posible error tan habitual):</p><ul><li><p>image</p></li><li><p>width</p></li><li><p>height</p></li><li><p>title</p></li><li><p>abstract</p></li><li><p>content</p></li><li><p>author</p></li><li><p>date</p></li></ul><p>Primero, crearemos el modelo con el comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan make:model TestNews <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Esto creará un nuevo archivo PHP en el directorio <code>app/Models</code> llamado <code>TestNews.php</code>, que será el modelo para la entidad <code>TestNews</code>. La bandera <code>-m</code> genera el fichero de migración.</p><p>Por defecto, el nuevo fichero <code>TestNews.php</code> será algo así:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class TestNews extends Model
{
    use HasFactory;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y, la migración, algo así:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(&#39;test_news&#39;, function (Blueprint $table) {
            $table-&gt;id();
            $table-&gt;timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(&#39;test_news&#39;);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Abrimos el archivo de migración generado en <code>database/migrations</code> y definimos los campos a crear:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(&#39;news&#39;, function (Blueprint $table) {
            $table-&gt;id();
            $table-&gt;string(&#39;image&#39;);
            $table-&gt;integer(&#39;width&#39;);
            $table-&gt;integer(&#39;height&#39;);
            $table-&gt;string(&#39;title&#39;);
            $table-&gt;text(&#39;abstract&#39;);
            $table-&gt;longText(&#39;content&#39;);
            $table-&gt;string(&#39;author&#39;);
            $table-&gt;timestamp(&#39;date&#39;)-&gt;nullable();
            $table-&gt;timestamps();
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(&#39;test_news&#39;);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ejecutamos la migración para crear la tabla en la base de datos con los campos definidos:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para definir los campos del modelo, abriremos el archivo <code>app/Models/TestNews.php</code> y definiremos los campos del modelo en el método <code>fillable</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class TestNews extends Model
{
    use HasFactory;

    protected $fillable = [
        &#39;image&#39;,
        &#39;width&#39;,
        &#39;height&#39;,
        &#39;title&#39;,
        &#39;abstract&#39;,
        &#39;content&#39;,
        &#39;author&#39;,
        &#39;date&#39;,
    ];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>También podemos definir las reglas de validación, relaciones con otros modelos, accesors, mutators y otros métodos útiles en este archivo.</p><p>Al haber definido como campos <code>$fillable</code>, pueden ser asignados en masa.</p><h2 id="crear-el-recurso-de-filament" tabindex="-1"><a class="header-anchor" href="#crear-el-recurso-de-filament"><span>Crear el recurso de Filament</span></a></h2><p>Usaremos el comando de Filament para generar un recurso que permitirá administrar las noticias de prueba en el dashboard:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan make:filament-resource TestNewsResource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Editamos el recurso generado en <code>app/Filament/Resources/TestNewsResource.php</code> para definir los campos que se mostrarán en el formulario y en la tabla del dashboard quedando algo así:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Filament<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>TestNewsResource<span class="token punctuation">\\</span>Pages</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>TestNews</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Form</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Resources<span class="token punctuation">\\</span>Resource</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Tables</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Tables<span class="token punctuation">\\</span>Table</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Tables<span class="token punctuation">\\</span>Columns<span class="token punctuation">\\</span>TextColumn</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>RichEditor</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>TextInput</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>Textarea</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>FileUpload</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Forms<span class="token punctuation">\\</span>Components<span class="token punctuation">\\</span>DateTimePicker</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Filament<span class="token punctuation">\\</span>Tables<span class="token punctuation">\\</span>Columns<span class="token punctuation">\\</span>ImageColumn</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestNewsResource</span> <span class="token keyword">extends</span> <span class="token class-name">Resource</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token class-name static-context">TestNews</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token operator">?</span><span class="token keyword type-hint">string</span> <span class="token variable">$navigationIcon</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;heroicon-o-rectangle-stack&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">form</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Form</span> <span class="token variable">$form</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Form</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$form</span>
            <span class="token operator">-&gt;</span><span class="token function">schema</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name static-context">FileUpload</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextInput</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;width&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextInput</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;height&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextInput</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">Textarea</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;abstract&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">RichEditor</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextInput</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;author&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">DateTimePicker</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;date&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">table</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Table</span> <span class="token variable">$table</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Table</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$table</span>
            <span class="token operator">-&gt;</span><span class="token function">columns</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name static-context">ImageColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;width&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;height&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;abstract&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;author&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name static-context">TextColumn</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;date&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">filters</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token comment">//</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>

            <span class="token operator">-&gt;</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name class-name-fully-qualified static-context">Tables<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>EditAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token operator">-&gt;</span><span class="token function">bulkActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                <span class="token class-name class-name-fully-qualified static-context">Tables<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>BulkActionGroup</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
                    <span class="token class-name class-name-fully-qualified static-context">Tables<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>DeleteBulkAction</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getRelations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token comment">//</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;index&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Pages<span class="token punctuation">\\</span>ListTestNews</span><span class="token operator">::</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;create&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Pages<span class="token punctuation">\\</span>CreateTestNews</span><span class="token operator">::</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/create&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;edit&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">Pages<span class="token punctuation">\\</span>EditTestNews</span><span class="token operator">::</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/{record}/edit&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crear-la-vista-para-la-api" tabindex="-1"><a class="header-anchor" href="#crear-la-vista-para-la-api"><span>Crear la vista para la API</span></a></h2><p>Una vez que hayamos definido el modelo en Laravel y configurado los campos en FilamentPHP, podemos crear las rutas y controladores necesarios en Laravel para exponer una API que permita a los clientes consumir los datos de las noticias. Esto generalmente implica definir rutas en <code>routes/api.php</code> y controladores que manejen las solicitudes HTTP y devuelvan respuestas JSON.</p><p>Por ejemplo, podríamos tener rutas como:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test-news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">TestNewsController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test-news/{id}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">TestNewsController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;show&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test-news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">TestNewsController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;store&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test-news/{id}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">TestNewsController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;update&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test-news/{id}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">TestNewsController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;destroy&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y un controlador <code>TestNewsController</code> que maneje estas rutas y realice operaciones en el modelo <code>TestNews</code> para devolver respuestas JSON:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>TestNews</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestNewsController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token variable">$news</span> <span class="token operator">=</span> <span class="token class-name static-context">TestNews</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$news</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token variable">$newsItem</span> <span class="token operator">=</span> <span class="token class-name static-context">TestNews</span><span class="token operator">::</span><span class="token function">findOrFail</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$newsItem</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Métodos para crear, actualizar y eliminar noticias...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="borrar-campos-de-la-tabla" tabindex="-1"><a class="header-anchor" href="#borrar-campos-de-la-tabla"><span>Borrar campos de la tabla</span></a></h2><p>Hemos puesto en la tabla dos campos erróneos: width y height. Así que los queremos borrar. Lo podemos hacer mediante una migración de base de datos.</p><p>Creamos una nueva migración utilizando el comando:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan make:migration remove_width_and_height_from_testnews_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>y utilizando el método <code>dropColumn</code> para eliminar los campos de la tabla:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Schema</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Schema<span class="token punctuation">\\</span>Blueprint</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Migrations<span class="token punctuation">\\</span>Migration</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">DropWidthAndHeightColumnsFromTestNewsTable</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the migrations.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test_news&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">dropColumn</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;width&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;height&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Reverse the migrations.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test_news&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;width&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;height&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y ejecutando la migración:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="anadir-campos-a-la-tabla" tabindex="-1"><a class="header-anchor" href="#anadir-campos-a-la-tabla"><span>Añadir campos a la tabla</span></a></h2><p>Si necesitamos añadir nuevos campos a la tabla en la base de datos, podemos hacerlo creando una nueva migración y utilizando el método <code>addColumn</code> para añadir los campos necesarios a la tabla.</p><h2 id="alta-masiva-de-datos" tabindex="-1"><a class="header-anchor" href="#alta-masiva-de-datos"><span>Alta masiva de datos</span></a></h2><p>Si necesitamos insertar una gran cantidad de datos en la tabla de noticias de prueba, podemos hacerlo utilizando el sistema de semillas de Laravel.</p><p>Creamos un archivo de semilla en el directorio <code>database/seeders</code> y utilizamos el modelo <code>TestNews</code> para crear y guardar los registros de noticias de prueba en la base de datos:</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token keyword">namespace</span> <span class="token package">Database<span class="token punctuation">\\</span>Seeders</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>TestNews</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Seeder</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestNewsSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token class-name static-context">TestNews</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token string single-quoted-string">&#39;image&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ruta/a/imagen.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Título de la noticia&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;abstract&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Resumen de la noticia&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;content&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Contenido de la noticia&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;author&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Autor de la noticia&#39;</span><span class="token punctuation">,</span>
      <span class="token string single-quoted-string">&#39;date&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos añadir más noticias aquí o iterar sobre un array.</p>`,44),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","crear-modelo.html.vue"]]),d=JSON.parse('{"path":"/laravel/crear-modelo.html","title":"Crear modelo en Laravel","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Crear el recurso de Filament","slug":"crear-el-recurso-de-filament","link":"#crear-el-recurso-de-filament","children":[]},{"level":2,"title":"Crear la vista para la API","slug":"crear-la-vista-para-la-api","link":"#crear-la-vista-para-la-api","children":[]},{"level":2,"title":"Borrar campos de la tabla","slug":"borrar-campos-de-la-tabla","link":"#borrar-campos-de-la-tabla","children":[]},{"level":2,"title":"Añadir campos a la tabla","slug":"anadir-campos-a-la-tabla","link":"#anadir-campos-a-la-tabla","children":[]},{"level":2,"title":"Alta masiva de datos","slug":"alta-masiva-de-datos","link":"#alta-masiva-de-datos","children":[]}],"git":{"updatedTime":1714171961000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"laravel/crear-modelo.md"}');export{r as comp,d as data};
