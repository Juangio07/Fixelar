# Progreso de Fixelar Web

## 1. Resumen del proyecto

Fixelar Web es el sitio institucional de la empresa Fixelar. Presenta la identidad de marca, la familia de aplicaciones y la información general de contacto y acceso futuro.

El proyecto es una web estática basada en HTML, CSS y JavaScript. No funciona como aplicación de escritorio y no contiene Electron, IPC, Login operativo, AppShell ni módulos de negocio.

## 2. Estado actual

La web institucional está implementada en la rama `ter` y sincronizada con `origin/ter`. Se incorporó una primera optimización de posicionamiento y propuesta comercial sin cambiar la identidad visual base.

La entrada principal actual es:

`Modulos/Inicio/Frontend/Inicio.html`

El repositorio no contiene actualmente `package.json`, `package-lock.json` ni `node_modules`. Font Awesome se carga desde CDN.

## 3. Funcionalidades completadas

- Página institucional de Fixelar con diseño responsive.
- Hero principal con mensaje de marca y llamadas a la acción.
- Navegación institucional hacia Inicio, Soluciones, Aplicaciones, Cómo funciona, Membresías, Nosotros y Contacto.
- Presentación de las aplicaciones Kentro, Food, Vet, Barber y Agro.
- Tarjeta de futuras aplicaciones.
- Sección conceptual de membresías, sin precios ni condiciones comerciales inventadas.
- Sección sobre Fixelar como empresa matriz.
- Sección de contacto mediante enlace de correo.
- Aviso de acceso futuro a las aplicaciones.
- Navbar fija durante el scroll.
- Modo oscuro como estado predeterminado.
- Modo claro con la misma composición visual y cambio al imagotipo oscuro.
- Preferencia de tema guardada en `localStorage`.
- Modal de acceso visual con Google y correo electrónico.
- Mensajes de disponibilidad futura para Google y correo; no existe autenticación real todavía.
- Favicon configurado con `Assets/Logos/Logo.png`.
- Font Awesome cargado desde CDN.
- Logos oficiales utilizados desde `Assets/Logos`.
- `FixelarBase` verificado sin modificaciones durante las últimas tareas.
- Propuesta de valor orientada a soluciones tecnológicas, desarrollo web, software, apps, automatizaciones, asesoría e impulso empresarial.
- Meta title, meta description y palabras clave principales actualizadas en la página de Inicio.
- Datos estructurados iniciales de tipo `Organization` añadidos en Inicio.
- Catálogo de servicios generado desde `AppConfig.js`.
- Animaciones de entrada al hacer scroll mediante `IntersectionObserver`.
- Soporte para `prefers-reduced-motion`.
- Fondo tecnológico con cuadrícula sutil y luz ambiental animada.
- Movimiento parallax ligero en la tarjeta principal del hero.
- Efecto tilt 3D y brillo radial interactivo en cards de servicios y aplicaciones.
- Microinteracciones de elevación y sombra en los pasos del proceso.
- Fondo de partículas conectadas mediante Canvas para reforzar la sensación de red tecnológica.
- Anillos orbitales, escaneo de luz y señal animada en el hero.
- Parallax y respuesta al puntero en la composición principal.
- Sección de aplicaciones convertida en un carrusel horizontal tipo abanico permanente: todas las cards se distribuyen a los lados y la card central queda destacada.

## 4. Funcionalidades en desarrollo

- Diseño visual del flujo de acceso preparado, pero sin conexión real con Google ni con un sistema de correo.
- Definición pendiente del sistema de autenticación y de la sesión de usuario.

## 5. Tareas pendientes

- Definir backend de autenticación.
- Crear y configurar un proyecto OAuth de Google.
- Registrar dominios y URLs de redirección autorizadas.
- Implementar validación segura de tokens en backend.
- Definir usuarios, sesiones y persistencia de cuentas.
- Conectar el botón de Google con Google Identity Services cuando existan credenciales y backend.
- Definir el flujo real de acceso por correo.
- Confirmar dominio oficial de producción y despliegue.
- Definir si las aplicaciones tendrán un acceso común o accesos independientes.
- Revisar y actualizar `FixelarGlobal.js`, que conserva selectores heredados de Login aunque no se utilizan en la web actual.
- Realizar una prueba completa en navegador con modo claro, modo oscuro, responsive, navegación, modal y carga de recursos externos.
- Crear páginas independientes para cada servicio con URLs SEO definitivas.
- Sustituir la URL relativa del logo en Schema.org por la URL absoluta cuando exista el dominio oficial.

## 6. Errores conocidos

- Google y correo muestran mensajes de disponibilidad futura; no autentican usuarios.
- El CDN de Font Awesome requiere conexión a internet. Si el CDN no está disponible, los iconos no se mostrarán.
- No existe un servidor de producción ni una URL definitiva documentada.
- No hay pruebas automatizadas configuradas después de retirar Node/Electron.
- Las rutas de recursos de la página están preparadas para la ubicación actual de `Inicio.html`; cualquier cambio de carpeta requiere revisar las rutas relativas.
- Las páginas individuales de servicios todavía no existen; por ahora los servicios se presentan dentro de Inicio.

## 7. Últimos avances

Último commit registrado: `3586fc8 docs: add project progress tracking`. Hay cambios posteriores sin commit correspondientes a la optimización SEO y comercial actual.

Cambios recientes registrados:

- Se añadió el modal visual de acceso en `Modulos/Inicio/Frontend/Inicio.html`.
- Se añadió la lógica de apertura, cierre, Google y correo en `Modulos/Inicio/Frontend/Inicio.js`.
- Se añadieron los estilos del modal en `Modulos/Inicio/Frontend/Inicio.css`.
- Se configuró el modo claro/oscuro y el cambio de imagotipo.
- Se fijó la navbar durante el scroll.
- Se configuró el favicon.
- Se sustituyó Font Awesome local por CDN y se retiraron las dependencias de Node del proyecto.
- Se actualizó la propuesta de valor del hero y el contenido de contacto.
- Se añadió la sección de servicios tecnológicos orientada a SEO.
- Se añadieron microanimaciones de aparición y accesibilidad para movimiento reducido.
- Se añadió Schema.org inicial para la organización.

## 8. Decisiones técnicas

- La entrada institucional permanece dentro de `Modulos/Inicio/Frontend`.
- La página se mantiene como una sola página institucional; no se separaron las secciones en módulos independientes porque se solicitó conservar la primera versión del diseño.
- `Shared/Config/AppConfig.js` es la fuente de identidad y contiene el nombre, descripción, tema y catálogo de aplicaciones.
- `Shared/Css/Variables.css` y `Shared/Css/Global.css` conservan los tokens y reglas compartidas.
- `Inicio.css` contiene los estilos específicos de la web institucional.
- `Inicio.js` contiene la interacción del catálogo, navegación responsive, temas y modal de acceso.
- No se deben guardar secretos, client secrets ni credenciales en el frontend o en GitHub.
- La conexión real con Google debe implementarse mediante OAuth/Google Identity Services y validación en backend.
- No se deben inventar URLs definitivas, APIs, precios, planes ni reglas comerciales.
- La rama de trabajo actual es `sec`.
- Los colores y la identidad visual existentes se mantienen como base; los servicios reutilizan tokens y componentes de la web actual.
- Las interacciones se implementan con CSS y JavaScript nativo, sin librerías adicionales para preservar rendimiento.
- Los efectos de puntero se activan únicamente en dispositivos con hover y puntero preciso; no se fuerzan en móvil.
- El Canvas y las animaciones se desactivan cuando el usuario activa `prefers-reduced-motion`.
- Las cinco apps principales permanecen visibles en un abanico fijo; la card central cambia automáticamente y también puede cambiarse con botones, arrastre o swipe. El efecto no depende del scroll.
- El carrusel de aplicaciones adapta su tamaño al móvil y mantiene cinco cards como máximo.
- Las cards de aplicaciones tienen ahora tratamiento visual de cartas de producto: fondos degradados por app, iconos amplios, patrones, bordes redondeados y mayor contraste para la card protagonista.
- La distribución del abanico es circular: siempre se muestran dos cards a la izquierda, una protagonista en el centro y dos cards a la derecha.
- Los efectos de fondo ahora tienen una variante visible para modo claro: partículas con mezcla multiplicada, cuadrícula verde/azul y halo azul ajustado al fondo claro.
- Se eliminó la sombra inferior y el resplandor fuerte de las cards de aplicaciones para integrarlas de forma más limpia con la página.
- La navegación interna ahora utiliza scroll suave, separación para la navbar fija y actualización automática del enlace activo según la sección visible.
- Los clics del menú calculan explícitamente la posición final descontando la navbar; la sección de aplicaciones redujo sus espacios para mostrar encabezado y abanico sin cortes al llegar.
- El desplazamiento de navegación se ajustó para dejar un margen visual de 40px antes del contenido de cada sección, evitando que los títulos queden pegados o tapados.
- El texto de ayuda del carrusel se separó y quedó ubicado claramente debajo de las cards.
- Cada card de aplicación puede seleccionarse directamente y pasa inmediatamente al frente como protagonista.

## 9. Próximos pasos

1. Definir la arquitectura de backend y sesiones.
2. Confirmar el dominio y los entornos local, pruebas y producción.
3. Crear el proyecto OAuth de Google y registrar las URLs autorizadas.
4. Implementar el endpoint de autenticación y validación de tokens.
5. Conectar el modal actual con el backend sin exponer secretos.
6. Definir y documentar el acceso por correo.
7. Probar navegación, temas, responsive, accesibilidad y recursos CDN.
8. Registrar cada cambio posterior en este archivo antes de cerrar la tarea.
9. Crear `sitemap.xml`, `robots.txt` y canonical cuando se confirme el dominio oficial.

## 10. Última actualización

**2026-11-13** — Se eliminó el emoji del mensaje inicial de WhatsApp porque algunos clientes lo mostraban como un rombo por incompatibilidad de codificación. El mensaje ahora usa texto limpio y se reforzó la visibilidad de los iconos del botón flotante. Se actualizó `Inicio.css` a `20261113-46`.

**2026-11-13** — Se mejoró el mensaje inicial de WhatsApp del botón flotante para que sea más cercano, profesional y orientado a conocer las soluciones de Fixelar y su aplicación al negocio. Se actualizó la versión a `Inicio.css?v=20261113-45`.

**2026-11-13** — Se configuraron los destinos reales del botón flotante: WhatsApp apunta al número `3216523359` con prefijo de Colombia y mensaje inicial, e Instagram apunta al perfil `fixelar1` proporcionado. Se actualizó la versión de estilos a `20261113-44` para refrescar la página.

**2026-11-13** — Se añadió un botón flotante fijo en la esquina inferior derecha usando `Assets/Logos/Flotante.png`. Al pulsarlo abre una card de contacto con accesos a WhatsApp e Instagram, cierre al hacer click fuera o pulsar Escape, estados accesibles y adaptación para modo claro. Las URLs actuales son genéricas porque todavía no existe un número de WhatsApp ni usuario oficial documentado; deben sustituirse antes de producción.

**2026-11-13** — Se ajustó la navegación activa para que `Contacto` permanezca resaltado al recorrer también el aviso de acceso y el footer, ya que esas áreas forman parte del cierre de contacto institucional. Se actualizó `Inicio.js` a `20261110-11`.

**2026-11-13** — Se corrigió nuevamente el cálculo del enlace activo del navbar. Ahora se selecciona la última sección cuyo inicio ya pasó el marcador visual, evitando que el estado quede pegado en una sección anterior o se pierda en los espacios entre contenidos. También se mantiene la selección de la última sección al llegar al final de la página. Se actualizó `Inicio.js` a `20261110-10`.

**2026-11-13** — Se corrigió el resaltado del navbar durante el scroll. Ahora la sección activa se determina por la sección que ocupa el marcador visual bajo la navbar, con actualización sincronizada mediante `requestAnimationFrame`, además de contemplar el final de la página y cambios de tamaño. Se actualizó `Inicio.js` a `20261110-09`.

**2026-11-13** — Se corrigió el halo amarillento que se percibía debajo del abanico de Aplicaciones. La atmósfera de fondo de `.applications` ahora utiliza únicamente tonos azules/cian con menor intensidad y desenfoque suave, conservando las cards y su movimiento. Se actualizó `Inicio.css` a `20261110-42`.

**2026-11-10** — Se suavizó la transición del abanico de aplicaciones. Las reglas `:hover` ya no reemplazan el `transform` de cada posición, evitando que una tarjeta primero suba y luego baje al cambiar de lugar. La elevación, rotación, escala y desplazamiento ahora se interpolan dentro de una sola trayectoria continua en escritorio y móvil. Se actualizó `Inicio.css` a `20261110-41`.

**2026-11-10** — Se aseguró que la web abra siempre en la posición inicial de Inicio cuando se accede sin hash, evitando que el navegador restaure una posición de scroll anterior. Se actualizó `Inicio.js` a `20261110-08`; la distribución visual del hero se mantiene sin cambios.

**2026-11-10** — Se reforzó el tratamiento holográfico de la card principal en modo claro: transparencia azul, borde luminoso, brillo exterior, marco interno y escáner con acentos azul/verde. El diseño y la composición se mantienen iguales al modo oscuro. Se actualizó `Inicio.css` a `20261110-40`.

**2026-11-10** — Se corrigió la causa del cambio de fondo visible al terminar la altura del viewport: `Global.css` establecía `body { height: 100% }`, haciendo que los degradados no cubrieran todo el documento. `Inicio.css` ahora establece `body { height: auto; min-height: 100% }` y conserva los fondos, partículas y efectos holográficos durante todo el scroll. Se actualizó la versión de estilos a `Inicio.css?v=20261110-39`.

**2026-11-10** — Se suavizó la transición inferior del hero haciendo transparentes `main` y sus secciones, evitando que aparezca un borde horizontal entre Inicio y el contenido siguiente. Se mantuvieron los degradados globales, partículas, escáner y efectos holográficos. Se actualizó la versión de `Inicio.css` a `20261110-38`.

**2026-11-10** — Se corrigió la selección directa de las cards del abanico en `Modulos/Inicio/Frontend/Inicio.js`. El click y el pointerup de una card ahora la convierten en protagonista, mientras que el arrastre horizontal continúa cambiando la secuencia sin activar accidentalmente una card. Se bloqueó la segunda activación de un doble click para evitar que la card cambie de posición durante la misma interacción. Se incorporaron los logos reales de Nodix, Kentro y MiPlata desde `Assets/Logos`, y se añadieron Agro y Vet como cards de prueba con iconos. El carrusel ahora limita visualmente el abanico a cinco cards: una central, dos a cada lado y las restantes aparecen al avanzar. Se probó una entrada orbital y se aceleró su desplazamiento reduciendo la duración y el intervalo entre cards, manteniendo una desaceleración suave y soporte para `prefers-reduced-motion`. La navegación de Inicio y los logos ahora esperan tipografías, imágenes y layout estables, usan siempre el primer eyebrow como referencia y se posicionan con una coordenada fija para evitar diferencias entre clicks. Los dobles clicks del navbar también quedan bloqueados. Se eliminaron las capas pseudo-elemento globales responsables de la cuadrícula visible en modo claro y de la línea residual; los degradados azules ahora viven directamente en el fondo fijo del `body` y se mantienen durante todo el scroll. El holograma, escáner y demás efectos de la card se conservan. Se eliminaron las líneas divisorias horizontales entre secciones. Se desactivó el rebote vertical fuera de los límites de la página. Se añadió versionado de `Inicio.css` y `Inicio.js` en `Inicio.html` para evitar que el navegador reutilice archivos cacheados. Se verificaron sintaxis, rutas de assets y diff.
