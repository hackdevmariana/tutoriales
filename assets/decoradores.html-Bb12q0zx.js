import{_ as n,o as a,c as s,d as e}from"./app-m9UqjcQI.js";const t={},o=e(`<h1 id="decoradores" tabindex="-1"><a class="header-anchor" href="#decoradores"><span>Decoradores</span></a></h1><p>Un decorador en Python es una función que toma otra función (o método) como argumento y devuelve una nueva función modificada o extendida. Los decoradores se aplican utilizando la sintaxis <code>@decorador</code> justo antes de la definición de la función que se va a decorar.</p><h2 id="sintaxis-basica-de-un-decorador" tabindex="-1"><a class="header-anchor" href="#sintaxis-basica-de-un-decorador"><span>Sintaxis básica de un decorador</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">mi_decorador</span><span class="token punctuation">(</span>funcion_original<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">nueva_funcion</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Código antes de llamar a la función original</span>
        resultado <span class="token operator">=</span> funcion_original<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token comment"># Código después de llamar a la función original</span>
        <span class="token keyword">return</span> resultado
    <span class="token keyword">return</span> nueva_funcion

<span class="token decorator annotation punctuation">@mi_decorador</span>
<span class="token keyword">def</span> <span class="token function">mi_funcion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;¡Hola, soy una función decorada!&quot;</span><span class="token punctuation">)</span>

mi_funcion<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Saber cuánto tiempo tarda una función en ejecutarse:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">medir_tiempo</span><span class="token punctuation">(</span>funcion<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        inicio <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        resultado <span class="token operator">=</span> funcion<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        fin <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>funcion<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> ejecutada en </span><span class="token interpolation"><span class="token punctuation">{</span>fin <span class="token operator">-</span> inicio<span class="token punctuation">}</span></span><span class="token string"> segundos&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> resultado
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@medir_tiempo</span>
<span class="token keyword">def</span> <span class="token function">funcion_lenta</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Función lenta ejecutada&quot;</span><span class="token punctuation">)</span>

funcion_lenta<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gestión de permisos:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">verificar_permisos</span><span class="token punctuation">(</span>funcion<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Verificar permisos aquí</span>
        <span class="token keyword">if</span> tiene_permisos<span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> funcion<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;No tienes permisos para ejecutar esta función.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@verificar_permisos</span>
<span class="token keyword">def</span> <span class="token function">funcion_protegida</span><span class="token punctuation">(</span>usuario<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Ejecutando función protegida para </span><span class="token interpolation"><span class="token punctuation">{</span>usuario<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

funcion_protegida<span class="token punctuation">(</span><span class="token string">&quot;usuario1&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiples-decoradores" tabindex="-1"><a class="header-anchor" href="#multiples-decoradores"><span>Múltiples decoradores</span></a></h2><p>Podemos aplicar múltiples decoradores a una función, y se ejecutarán en el orden inverso al que aparecen.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@decorador1</span>
<span class="token decorator annotation punctuation">@decorador2</span>
<span class="token keyword">def</span> <span class="token function">mi_funcion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Código de la función</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>En este caso, primero se aplicará <code>decorador2</code> y luego decorador1.</p><h2 id="decoradores-con-argumentos" tabindex="-1"><a class="header-anchor" href="#decoradores-con-argumentos"><span>Decoradores con argumentos</span></a></h2><p>Los decoradores también pueden aceptar argumentos, lo que permite personalizar su comportamiento. Podemos lograr esto agregando una capa adicional de funciones.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorador_con_argumentos</span><span class="token punctuation">(</span>argumento<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">decorador</span><span class="token punctuation">(</span>funcion<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Decorador con argumento: </span><span class="token interpolation"><span class="token punctuation">{</span>argumento<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            resultado <span class="token operator">=</span> funcion<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
            <span class="token keyword">return</span> resultado
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> decorador

<span class="token decorator annotation punctuation">@decorador_con_argumentos</span><span class="token punctuation">(</span><span class="token string">&quot;Hola, soy un argumento&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">funcion_decorada</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Función decorada ejecutada&quot;</span><span class="token punctuation">)</span>

funcion_decorada<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ejemplo-practico-decorador-que-registra-las-llamadas-a-una-funcion" tabindex="-1"><a class="header-anchor" href="#ejemplo-practico-decorador-que-registra-las-llamadas-a-una-funcion"><span>Ejemplo práctico: decorador que registra las llamadas a una función</span></a></h2><p>Un decorador que registre las llamadas a una función es una función que toma como argumento otra función y devuelve una nueva función que envuelve la función original con un código que registra la hora, los argumentos y el resultado de cada llamada. Podemos utilizarlo, por ejemplo, para resgistrar en logs las llamadas funciones.</p><p>Su código podría ser así:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">registrar_llamadas</span><span class="token punctuation">(</span>funcion<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">envoltura</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        hora <span class="token operator">=</span> time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%H:%M:%S&quot;</span><span class="token punctuation">)</span>
        resultado <span class="token operator">=</span> funcion<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>hora<span class="token punctuation">}</span></span><span class="token string"> - Se llamó a </span><span class="token interpolation"><span class="token punctuation">{</span>funcion<span class="token punctuation">.</span>__name__<span class="token punctuation">}</span></span><span class="token string"> con </span><span class="token interpolation"><span class="token punctuation">{</span>args<span class="token punctuation">}</span></span><span class="token string"> y </span><span class="token interpolation"><span class="token punctuation">{</span>kwargs<span class="token punctuation">}</span></span><span class="token string"> y devolvió </span><span class="token interpolation"><span class="token punctuation">{</span>resultado<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> resultado
    <span class="token keyword">return</span> envoltura

<span class="token decorator annotation punctuation">@registrar_llamadas</span>
<span class="token keyword">def</span> <span class="token function">sumar</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b

sumar<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Devolverá algo así:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>23:29:42 - Se llamó a sumar con (3, 4) y {} y devolvió 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>En este ejemplo, el decorador <code>registrar_llamadas</code> toma como argumento la función <code>sumar</code> y devuelve una nueva función envoltura que ejecuta la función <code>sumar</code> y además imprime un mensaje con la información de la llamada. El decorador se aplica a la función <code>sumar</code> usando la sintaxis <code>@registrar_llamadas</code> antes de la definición de la función.</p><h2 id="decoradores-integrados" tabindex="-1"><a class="header-anchor" href="#decoradores-integrados"><span>Decoradores integrados</span></a></h2><p>Los decoradores integrados en Python son aquellos que están incorporados dentro del lenguaje y que se usan para crear patrones de diseño concretos o desarrollar funcionalidades específicas. Algunos de los decoradores integrados más comunes son:</p><h3 id="staticmethod" tabindex="-1"><a class="header-anchor" href="#staticmethod"><span>@staticmethod</span></a></h3><p>Este decorador se usa para definir un método estático dentro de una clase. Un método estático es aquel que no recibe el argumento <code>self</code> ni el argumento <code>cls</code>, y que no depende del estado de la instancia o de la clase. Un método estático se puede llamar directamente desde la clase o desde una instancia de la clase, y se comporta como una función normal.</p><p>Por ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Calculadora</span><span class="token punctuation">:</span>
  <span class="token decorator annotation punctuation">@staticmethod</span>
  <span class="token keyword">def</span> <span class="token function">sumar</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos llamar al método estático desde la clase:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>Calculadora<span class="token punctuation">.</span>sumar<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Que devuelve:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O podemos llamar al método estático desde una instancia de la clase:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>c <span class="token operator">=</span> Calculadora<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>sumar<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Que devuelve:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="classmethod" tabindex="-1"><a class="header-anchor" href="#classmethod"><span>@classmethod</span></a></h3><p>Este decorador se usa para definir un método de clase dentro de una clase. Un método de clase es aquel que recibe el argumento cls, que representa la clase en sí misma, y que puede acceder o modificar los atributos o métodos de la clase. Un método de clase se puede llamar directamente desde la clase o desde una instancia de la clase, y se suele usar como un constructor alternativo.</p><p>Por ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Persona</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nombre<span class="token punctuation">,</span> edad<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>nombre <span class="token operator">=</span> nombre
        self<span class="token punctuation">.</span>edad <span class="token operator">=</span> edad
    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">desde_cadena</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> cadena<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Creamos una instancia de la clase a partir de una cadena con el formato &quot;nombre-edad&quot;:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>nombre<span class="token punctuation">,</span> edad <span class="token operator">=</span> cadena<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> cls<span class="token punctuation">(</span>nombre<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>edad<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>De nuevo, podemos llamar al método de clase desde la clase</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>p1 <span class="token operator">=</span> Persona<span class="token punctuation">.</span>desde_cadena<span class="token punctuation">(</span><span class="token string">&quot;Ana-25&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>nombre<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>edad<span class="token punctuation">)</span> <span class="token comment"># Ana 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>O llamar al método de clase desde una instancia de la clase:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>p2 <span class="token operator">=</span> Persona<span class="token punctuation">(</span><span class="token string">&quot;Luis&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
p3 <span class="token operator">=</span> p2<span class="token punctuation">.</span>desde_cadena<span class="token punctuation">(</span><span class="token string">&quot;Pedro-40&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p3<span class="token punctuation">.</span>nombre<span class="token punctuation">,</span> p3<span class="token punctuation">.</span>edad<span class="token punctuation">)</span> <span class="token comment"># Pedro 40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="property" tabindex="-1"><a class="header-anchor" href="#property"><span>@property</span></a></h3><p>Este decorador se usa para definir una propiedad dentro de una clase. Una propiedad es un atributo que se accede o modifica mediante un método <code>getter</code> o <code>setter</code>, que se definen con los decoradores <code>@property</code> y <code>@property.setter</code> respectivamente.</p><p>Una propiedad permite controlar el acceso y la validación de los datos de una instancia de la clase, y se usa como si fuera un atributo normal.</p><p>Por ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Circulo</span><span class="token punctuation">:</span>
<span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> radio<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>radio <span class="token operator">=</span> radio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Calculamos el área del círculo como una propiedad de solo lectura:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@property</span>
<span class="token keyword">def</span> <span class="token function">area</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>radio <span class="token operator">**</span> <span class="token number">2</span>

<span class="token decorator annotation punctuation">@property</span>
<span class="token keyword">def</span> <span class="token function">diametro</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> self<span class="token punctuation">.</span>radio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Validamos y modificamos el diámetro del círculo, y actualizamos el radio:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@diametro<span class="token punctuation">.</span>setter</span>
<span class="token keyword">def</span> <span class="token function">diametro</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> valor<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> valor <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;El diámetro debe ser positivo&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>radio <span class="token operator">=</span> valor <span class="token operator">/</span> <span class="token number">2</span>

Creamos una instancia de la clase<span class="token punctuation">:</span>

\`\`\` py
c <span class="token operator">=</span> Circulo<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Y accedemos a las propiedades:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>area<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>diametro<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Que nos devolverá:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>78.5
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Podemos modificar la propiedad:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>c<span class="token punctuation">.</span>diametro <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>radio<span class="token punctuation">)</span> <span class="token comment"># 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Y nos devolverá:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,63),p=[o];function c(i,l){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","decoradores.html.vue"]]),r=JSON.parse('{"path":"/python/decoradores.html","title":"Decoradores","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Sintaxis básica de un decorador","slug":"sintaxis-basica-de-un-decorador","link":"#sintaxis-basica-de-un-decorador","children":[]},{"level":2,"title":"Múltiples decoradores","slug":"multiples-decoradores","link":"#multiples-decoradores","children":[]},{"level":2,"title":"Decoradores con argumentos","slug":"decoradores-con-argumentos","link":"#decoradores-con-argumentos","children":[]},{"level":2,"title":"Ejemplo práctico: decorador que registra las llamadas a una función","slug":"ejemplo-practico-decorador-que-registra-las-llamadas-a-una-funcion","link":"#ejemplo-practico-decorador-que-registra-las-llamadas-a-una-funcion","children":[]},{"level":2,"title":"Decoradores integrados","slug":"decoradores-integrados","link":"#decoradores-integrados","children":[{"level":3,"title":"@staticmethod","slug":"staticmethod","link":"#staticmethod","children":[]},{"level":3,"title":"@classmethod","slug":"classmethod","link":"#classmethod","children":[]},{"level":3,"title":"@property","slug":"property","link":"#property","children":[]}]}],"git":{"updatedTime":1709828489000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/decoradores.md"}');export{d as comp,r as data};