import{_ as e,o as a,c as s,d as o}from"./app-CIpkooGQ.js";const d={},n=o(`<h1 id="formatear-un-usb-desde-la-consola" tabindex="-1"><a class="header-anchor" href="#formatear-un-usb-desde-la-consola"><span>Formatear un USB desde la consola</span></a></h1><p>Para formatear un usb desde la consola de GNY/Linux, podemos seguir estos pasos:</p><ol><li><p>Conectamos el pendrive al ordenador y abrimos una terminal.</p></li><li><p>Ejecutamos el comando</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lsblk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>para listar los dispositivos de almacenamiento conectados al sistema.</p><ol start="3"><li>Identificamos el dispositivo usb que deseamos formatear en la lista.</li></ol><p>Normalmente es <code>/dev/sdX</code>, donde X es una letra que varía según el orden de conexión. Por ejemplo, <code>/dev/sdb</code> o <code>/dev/sdc</code>.</p><ol start="4"><li>Desmontamos el dispositivo usb con el comando</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">umount</span> /dev/sdX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>reemplazando X por la letra correspondiente.</p><ol start="5"><li><p>Elegimos el sistema de archivos que queremos usar para formatear el usb. Podemos usar <code>vfat</code> para FAT32, <code>ntfs</code> para NTFS, <code>ext4</code> para ext4, etc. Cada sistema de archivos tiene sus ventajas y desventajas, dependiendo de la compatibilidad y el rendimiento que busquemos.</p></li><li><p>Ejecutamos el comando <code>sudo mkfs.TIPO -I /dev/sdX</code>, reemplazando TIPO por el sistema de archivos elegido y X por la letra del dispositivo usb. Por ejemplo:</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mkfs.vfat <span class="token parameter variable">-I</span> /dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> mkfs.ext4 <span class="token parameter variable">-I</span> /dev/sdc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>La opción -I sirve para ignorar la advertencia de que el dispositivo es de tamaño completo.</p><p>Cuando el proceso termine, tendremos el usb formateado con el sistema de ficheros elegido.</p>`,15),i=[n];function l(t,r){return a(),s("div",null,i)}const m=e(d,[["render",l],["__file","formatear-usb.html.vue"]]),p=JSON.parse('{"path":"/linux/formatear-usb.html","title":"Formatear un USB desde la consola","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1709597888000,"contributors":[{"name":"fernando","email":"fernando@juandemariana.org","commits":1}]},"filePathRelative":"linux/formatear-usb.md"}');export{m as comp,p as data};
