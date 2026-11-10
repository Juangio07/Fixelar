# Progreso de Fixelar Web

## 1. Resumen del proyecto

Fixelar Web es el sitio institucional de la empresa Fixelar. Presenta la identidad de marca, la familia de aplicaciones y la información general de contacto y acceso futuro.

El proyecto es una web estática basada en HTML, CSS y JavaScript. No funciona como aplicación de escritorio y no contiene Electron, IPC, Login operativo, AppShell ni módulos de negocio.

## 2. Estado actual

La web institucional está implementada en la rama `sec` y sincronizada con `origin/sec`. Se incorporó una primera optimización de posicionamiento y propuesta comercial sin cambiar la identidad visual base.

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

**2026-11-10** — Se aplicó la primera optimización institucional y SEO: nueva propuesta de valor, servicios tecnológicos, metadatos, Schema.org, animaciones sutiles y soporte de movimiento reducido. Se verificaron sintaxis, diff y carga HTTP de la entrada, estilos, scripts y assets.
