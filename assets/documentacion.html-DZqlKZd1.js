import{_ as n,o as e,c as s,d as a}from"./app-BsFc-4C8.js";const i={},o=a(`<h1 id="uso-de-la-documentacion-en-programas-python-mediante-docstrings" tabindex="-1"><a class="header-anchor" href="#uso-de-la-documentacion-en-programas-python-mediante-docstrings"><span>Uso de la documentación en programas Python mediante docstrings</span></a></h1><p>Los &#39;docstrings&#39; son cadenas de documentación que aparecen justo después de la declaración de una función, clase o módulo. Pueden ser accesibles a través de la función help() y son esenciales para herramientas de generación de documentación como Sphinx.</p><p>Ejemplo de docstring en una función:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">suma</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Esta función suma dos números.

    Args:
        a (int): El primer número.
        b (int): El segundo número.

    Returns:
        int: La suma de los dos números.
    &quot;&quot;&quot;</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Al principio de un módulo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
Módulo de utilidades para operaciones matemáticas.

Contiene funciones para realizar diversas operaciones matemáticas,
como suma, resta y multiplicación.
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Los docstrings en el código ayudan a generar una documentación en distintos formatos y al uso de la función <code>help()</code>, pero a la hora de programar, es muy importante el uso de nombres descriptivos. Muchas veces es más eficaz que una buena documentación.</p><p>Mal nombre de una variable:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Buen nombre de una variable:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>numero_intentos <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="funcion-help" tabindex="-1"><a class="header-anchor" href="#funcion-help"><span>Función help()</span></a></h2><p>Cuando estamos programando, podemos usar la función <code>help()</code> para mostrar la documentación de un módulo, función, clase... indicándosela como parámetro. Así pues, si escribimos:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token builtin">help</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nos devuelve algo así:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Help on built-in function print in module builtins:

print(...)
    print(value, ..., sep=&#39; &#39;, end=&#39;\\n&#39;, file=sys.stdout, flush=False)

    Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Que nos ayuda a entender el uso de esta función y los parámetros que le podemos enviar.</p><h2 id="coherencia-del-estilo-en-docstrings" tabindex="-1"><a class="header-anchor" href="#coherencia-del-estilo-en-docstrings"><span>Coherencia del estilo en docstrings:</span></a></h2><p>La coherencia en el estilo de los docstrings es crucial para mantener un código limpio y fácilmente comprensible. A continuación, se presentan algunas prácticas recomendadas para enfatizar la coherencia del estilo:</p><ul><li><p>Adherencia a las convenciones del PEP 257 para asegurar un estilo uniforme en los docstrings. Esto incluye el formato de las secciones, como &quot;Args&quot;, &quot;Returns&quot;, &quot;Raises&quot;, &quot;Examples&quot; o &quot;Note&quot;..</p></li><li><p>Elección de un estilo de formateo. Puede ser el estilo de una línea (&quot;&quot;&quot;) o de varias líneas (&#39;&#39;&#39;). La clave es ser consistente.</p></li><li><p>Hay que intenter mantener una longitud de línea uniforme en los docstrings. Esto facilita la lectura y la visualización del código. Además, se debería mantener un nivel uniforme de detalle en las descripciones para evitar inconsistencias.</p></li><li><p>Seleccionemos si usaremos mayúsculas o minúsculas para los nombres de secciones, como &quot;Args&quot; o &quot;Returns&quot;, y apliquemos esta elección de manera consistente en todos los docstrings.</p></li><li><p>Debemos ser consistentes en la documentación de parámetros y atributos. Utilicemos el mismo formato para descripciones, tipos y cualquier información adicional relevante.</p></li><li><p>Debemos realizar revisiones periódicas del código para garantizar que los nuevos docstrings sigan las mismas convenciones que los existentes. La coherencia del estilo es un esfuerzo continuo.</p></li><li><p>Consideremos el uso de herramientas automáticas, como pylint o flake8, que pueden ayudar a identificar violaciones del estilo de docstrings. Integrar estas herramientas en nuestro flujo de trabajo puede ser beneficioso.</p></li><li><p>Comuniquemos las convenciones de docstrings adoptadas dentro del equipo. Esto garantiza que todos los miembros del equipo estén en la misma página y sigan las mismas prácticas, incluyendo una sección en la documentación del proyecto que detalle las convenciones específicas de docstrings adoptadas. Esto servirá como referencia para todos los colaboradores.</p></li><li><p>Realicemos sesiones de formación y revisión del código específicamente centradas en la documentación. Esto puede ayudar a abordar preguntas y asegurar que todos comprendan y sigan las convenciones de manera efectiva.</p></li></ul><p>Siguiendo estas prácticas recomendadas, podemos garantizar que nuestros docstrings sean coherentes en estilo, facilitando la lectura y el mantenimiento del código a lo largo del tiempo.</p><h2 id="pep-257" tabindex="-1"><a class="header-anchor" href="#pep-257"><span>PEP 257</span></a></h2><p>El PEP 257 es una Propuesta de Mejora de Python (Python Enhancement Proposal) que se centra en mejorar las convenciones y estándares para la documentación mediante docstrings en Python. Los docstrings son cadenas de documentación que se utilizan para describir el propósito y el funcionamiento de módulos, clases y funciones en Python.</p><p>El PEP 257 proporciona recomendaciones sobre el formato y estilo de los docstrings, con el objetivo de mejorar la coherencia y la legibilidad de la documentación en el ecosistema de Python.</p><p>Algunos aspectos clave del PEP 257 incluyen:</p><h3 id="docstrings-para-modulos" tabindex="-1"><a class="header-anchor" href="#docstrings-para-modulos"><span>Docstrings para módulos</span></a></h3><p>Un docstring para un módulo se recomienda que esté presente y colocado al principio del archivo de módulo, antes de cualquier declaración de importación.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
Descripción del módulo.

Más detalles sobre el propósito y la funcionalidad del módulo.
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docstrings-para-clases" tabindex="-1"><a class="header-anchor" href="#docstrings-para-clases"><span>Docstrings para clases</span></a></h3><p>Un docstring para una clase se recomienda que esté presente y colocado después de la declaración de la clase.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Descripción de la clase.

    Más detalles sobre el propósito y la funcionalidad de la clase.
    &quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clase-simple-con-atributos" tabindex="-1"><a class="header-anchor" href="#clase-simple-con-atributos"><span>Clase simple con atributos</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Persona</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Clase que representa a una persona.

    Attributes:
        nombre (str): El nombre de la persona.
        edad (int): La edad de la persona.
        genero (str): El género de la persona (&#39;Hombre&#39; o &#39;Mujer&#39;).
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nombre<span class="token punctuation">,</span> edad<span class="token punctuation">,</span> genero<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor de la clase Persona.

        Args:
            nombre (str): El nombre de la persona.
            edad (int): La edad de la persona.
            genero (str): El género de la persona.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>nombre <span class="token operator">=</span> nombre
        self<span class="token punctuation">.</span>edad <span class="token operator">=</span> edad
        self<span class="token punctuation">.</span>genero <span class="token operator">=</span> genero
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clase-con-metodos-y-descripciones-detalladas" tabindex="-1"><a class="header-anchor" href="#clase-con-metodos-y-descripciones-detalladas"><span>Clase con métodos y descripciones detalladas</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Libro</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Clase que representa un libro.

    Attributes:
        titulo (str): El título del libro.
        autor (str): El autor del libro.
        paginas (int): El número de páginas del libro.

    Methods:
        obtener_info(): Devuelve una cadena con la información del libro.

    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> titulo<span class="token punctuation">,</span> autor<span class="token punctuation">,</span> paginas<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor de la clase Libro.

        Args:
            titulo (str): El título del libro.
            autor (str): El autor del libro.
            paginas (int): El número de páginas del libro.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>titulo <span class="token operator">=</span> titulo
        self<span class="token punctuation">.</span>autor <span class="token operator">=</span> autor
        self<span class="token punctuation">.</span>paginas <span class="token operator">=</span> paginas

    <span class="token keyword">def</span> <span class="token function">obtener_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Devuelve una cadena con la información del libro.

        Returns:
            str: Información del libro.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>titulo<span class="token punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>autor<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>paginas<span class="token punctuation">}</span></span><span class="token string"> páginas&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="clase-con-herencia-y-docstring-de-herencia" tabindex="-1"><a class="header-anchor" href="#clase-con-herencia-y-docstring-de-herencia"><span>Clase con herencia y docstring de herencia</span></a></h4><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Estudiante</span><span class="token punctuation">(</span>Persona<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Clase que representa a un estudiante, hereda de la clase Persona.

    Attributes:
        estudiante_id (int): El ID único del estudiante.
        calificaciones (list): Lista de calificaciones del estudiante.

    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nombre<span class="token punctuation">,</span> edad<span class="token punctuation">,</span> genero<span class="token punctuation">,</span> estudiante_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor de la clase Estudiante.

        Args:
            nombre (str): El nombre del estudiante.
            edad (int): La edad del estudiante.
            genero (str): El género del estudiante.
            estudiante_id (int): El ID único del estudiante.
        &quot;&quot;&quot;</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>nombre<span class="token punctuation">,</span> edad<span class="token punctuation">,</span> genero<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>estudiante_id <span class="token operator">=</span> estudiante_id
        self<span class="token punctuation">.</span>calificaciones <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">agregar_calificacion</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> calificacion<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Agrega una calificación a la lista de calificaciones.

        Args:
            calificacion (float): La calificación a agregar.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>calificaciones<span class="token punctuation">.</span>append<span class="token punctuation">(</span>calificacion<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docstrings-para-funciones-y-metodos" tabindex="-1"><a class="header-anchor" href="#docstrings-para-funciones-y-metodos"><span>Docstrings para funciones y métodos</span></a></h3><p>Un docstring para una función o método se recomienda que esté presente y colocado después de la declaración de la función o método.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">mi_funcion</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Descripción de la función.

    Args:
        arg1: Descripción del primer argumento.
        arg2: Descripción del segundo argumento.

    Returns:
        Descripción del valor de retorno.
    &quot;&quot;&quot;</span>
    <span class="token comment"># Cuerpo de la función</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentacion-de-clases" tabindex="-1"><a class="header-anchor" href="#documentacion-de-clases"><span>Documentación de clases</span></a></h2><p>La documentación del constructor de una clase en Python generalmente se realiza a través de un docstring ubicado en la definición del método <code>__init__</code>.</p><p>Aquí hay un ejemplo de cómo podría verse la documentación para el constructor de una clase:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Descripción de MiClase.

    Esta clase proporciona ...

    Args:
        parametro1 (tipo): Descripción del primer parámetro.
        parametro2 (tipo): Descripción del segundo parámetro.

    Attributes:
        atributo1 (tipo): Descripción del primer atributo.
        atributo2 (tipo): Descripción del segundo atributo.
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parametro1<span class="token punctuation">,</span> parametro2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Constructor de la clase MiClase.

        Args:
            parametro1 (tipo): Descripción del primer parámetro.
            parametro2 (tipo): Descripción del segundo parámetro.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>atributo1 <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># Inicializar atributo1</span>
        self<span class="token punctuation">.</span>atributo2 <span class="token operator">=</span> <span class="token boolean">None</span>  <span class="token comment"># Inicializar atributo2</span>

        <span class="token comment"># Resto del código del constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Descripción general de la clase: En el docstring de la clase (<code>MiClase</code> en este caso), se proporciona una descripción general de la clase, sus propósitos y su funcionalidad.</p></li><li><p>Descripción de parámetros y atributos: En la sección de <code>Args</code> se detallan los parámetros esperados por el constructor, y en la sección de Atributos se describen los atributos de la clase. Proporciona información sobre el tipo de cada parámetro o atributo y una breve descripción de su propósito.</p></li><li><p>Docstring del método <code>__init__</code>: Dentro del método <code>__init__</code>, también se incluye un docstring que describe los parámetros específicos del constructor y cualquier inicialización adicional que pueda ser relevante.</p></li></ul><p>Este enfoque permite que las herramientas de generación de documentación, como Sphinx, interpreten y presenten la información de manera clara y estructurada. Además, facilita a otros desarrolladores entender cómo utilizar la clase y qué parámetros se esperan.</p><h2 id="argumentos-y-atributos" tabindex="-1"><a class="header-anchor" href="#argumentos-y-atributos"><span>Argumentos y atributos</span></a></h2><p>En el contexto de Python, los términos &quot;argumentos&quot; y &quot;atributos&quot; se refieren a conceptos distintos según dónde se utilicen.</p><h3 id="argumentos" tabindex="-1"><a class="header-anchor" href="#argumentos"><span>Argumentos</span></a></h3><ul><li><p>Los &quot;argumentos&quot; son los valores que se pasan a una función o método cuando se invoca.</p></li><li><p>En el contexto de funciones, se dividen en &quot;argumentos posicionales&quot; y &quot;argumentos de palabra clave&quot;.</p></li><li><p>Los &quot;argumentos posicionales&quot; se corresponden con la posición en la que se pasan a la función. Por ejemplo:</p></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">ejemplo_funcion</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span>

ejemplo_funcion<span class="token punctuation">(</span>valor1<span class="token punctuation">,</span> valor2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Los &quot;argumentos de palabra clave&quot; se especifican con un nombre y un valor. Por ejemplo:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">ejemplo_funcion</span><span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># ...</span>

ejemplo_funcion<span class="token punctuation">(</span>arg2<span class="token operator">=</span>valor2<span class="token punctuation">,</span> arg1<span class="token operator">=</span>valor1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="atributos" tabindex="-1"><a class="header-anchor" href="#atributos"><span>Atributos</span></a></h3><ul><li><p>Los &quot;atributos&quot; son variables asociadas a un objeto en Python.</p></li><li><p>Se accede a los atributos usando la sintaxis de punto (objeto.atributo).</p></li><li><p>En el contexto de una clase, los atributos son variables que pertenecen a una instancia de la clase.</p></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">MiClase</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> atributo1<span class="token punctuation">,</span> atributo2<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>atributo1 <span class="token operator">=</span> atributo1
        self<span class="token punctuation">.</span>atributo2 <span class="token operator">=</span> atributo2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentacion-en-ingles-siempre" tabindex="-1"><a class="header-anchor" href="#documentacion-en-ingles-siempre"><span>Documentación en inglés, siempre</span></a></h2><p>En este artículo he usado el español a modo puramente ilustrativo. Para facilitar el uso de la documentación para cualquier usuario del planeta, debemos escribir la documentación en inglés.</p><p>Tal como indica el PEP 8:</p><blockquote><p>Python coders from non-English speaking countries: please write your comments in English, unless you are 120% sure that the code will never be read by people who don’t speak your language.</p></blockquote><p>Que, en español, sería:</p><blockquote><p>Para los programadores de Python de países de habla no inglesa: por favor escribe tus comentarios en inglés, a menos que estés 120% seguro que tu código jamás será leído por gente que no hable tu idioma.</p></blockquote>`,62),t=[o];function l(c,d){return e(),s("div",null,t)}const u=n(i,[["render",l],["__file","documentacion.html.vue"]]),p=JSON.parse('{"path":"/python/documentacion.html","title":"Uso de la documentación en programas Python mediante docstrings","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Función help()","slug":"funcion-help","link":"#funcion-help","children":[]},{"level":2,"title":"Coherencia del estilo en docstrings:","slug":"coherencia-del-estilo-en-docstrings","link":"#coherencia-del-estilo-en-docstrings","children":[]},{"level":2,"title":"PEP 257","slug":"pep-257","link":"#pep-257","children":[{"level":3,"title":"Docstrings para módulos","slug":"docstrings-para-modulos","link":"#docstrings-para-modulos","children":[]},{"level":3,"title":"Docstrings para clases","slug":"docstrings-para-clases","link":"#docstrings-para-clases","children":[]},{"level":3,"title":"Docstrings para funciones y métodos","slug":"docstrings-para-funciones-y-metodos","link":"#docstrings-para-funciones-y-metodos","children":[]}]},{"level":2,"title":"Documentación de clases","slug":"documentacion-de-clases","link":"#documentacion-de-clases","children":[]},{"level":2,"title":"Argumentos y atributos","slug":"argumentos-y-atributos","link":"#argumentos-y-atributos","children":[{"level":3,"title":"Argumentos","slug":"argumentos","link":"#argumentos","children":[]},{"level":3,"title":"Atributos","slug":"atributos","link":"#atributos","children":[]}]},{"level":2,"title":"Documentación en inglés, siempre","slug":"documentacion-en-ingles-siempre","link":"#documentacion-en-ingles-siempre","children":[]}],"git":{"updatedTime":1709556478000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"python/documentacion.md"}');export{u as comp,p as data};
