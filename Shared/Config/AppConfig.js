"use strict";
/* Fuente única de identidad institucional para Fixelar Web. */
window.FIXELAR_APP = Object.freeze({
  name: "Fixelar",
  description: "Soluciones tecnológicas, desarrollo de software, aplicaciones y automatizaciones para empresas que quieren avanzar con claridad.",
  logoFull: "../../../Assets/Logos/ImagotipoClaro.png",
  logoCompact: "../../../Assets/Logos/Logo.png",
  theme: {
    primary: "#02ab4c",
    primaryHover: "#02ab4c",
    primaryLight: "#62ec1e",
    primarySoft: "#f2f1f1",
    onPrimary: "#FFFFFF",
    backgroundStart: "#071426",
    backgroundMiddle: "#0B1E3F",
    backgroundEnd: "#071426",
    sidebarStart: "#071426",
    sidebarEnd: "#0B1E3F",
    title: "#FFFFFF",
    accentText: "#62ec1e", /*primaryLight*/
    accentLight: "#96e66d",
    mutedText: "#AFC4DE"
  },
  typography: "Inter",
  hero: {
    eyebrow: "SOLUCIONES TECNOLÓGICAS PARA EMPRESAS QUE AVANZAN",
    title: "Tecnología que convierte tus ideas en crecimiento.",
    message: "Desarrollamos soluciones digitales, software, aplicaciones y automatizaciones que ayudan a las empresas a trabajar mejor y crecer con claridad.",
    primaryAction: "Solicita una asesoría",
    secondaryAction: "Explora nuestras soluciones"
  },
  navigation: ["Inicio", "Soluciones", "Servicios", "Aplicaciones", "Cómo funciona", "Nosotros", "Contacto"],
  services: [
    { name: "Soluciones tecnológicas", slug: "soluciones-tecnologicas", description: "Diseñamos soluciones digitales alineadas con los objetivos, procesos y oportunidades de cada empresa.", icon: "fa-lightbulb" },
    { name: "Desarrollo web", slug: "desarrollo-web", description: "Creamos sitios web profesionales, responsive y preparados para convertir visitas en oportunidades.", icon: "fa-globe" },
    { name: "Desarrollo de software", slug: "desarrollo-software", description: "Construimos software a medida para resolver procesos específicos y mejorar la operación.", icon: "fa-code" },
    { name: "Desarrollo de apps", slug: "desarrollo-apps", description: "Convertimos ideas y procesos en aplicaciones claras, útiles y preparadas para crecer.", icon: "fa-mobile-screen-button" },
    { name: "Automatizaciones", slug: "automatizaciones", description: "Reducimos tareas repetitivas, errores y tiempos operativos mediante automatización.", icon: "fa-gears" },
    { name: "Asesoría tecnológica", slug: "asesoria-tecnologica", description: "Te ayudamos a priorizar necesidades y tomar mejores decisiones tecnológicas.", icon: "fa-compass" },
    { name: "Impulso para empresas", slug: "impulso-para-empresas", description: "Combinamos estrategia, diseño y desarrollo para impulsar la evolución digital de tu empresa.", icon: "fa-arrow-trend-up" }
  ],
  applications: [
    { name: "Kentro", category: "Control empresarial", description: "Una base clara para la operación y las decisiones de tu empresa.", icon: "fa-building", accent: "#62ec1e" },
    { name: "Food", category: "Negocios de comida", description: "Una solución pensada para el ritmo de restaurantes y negocios de comida.", icon: "fa-utensils", accent: "#ffb547" },
    { name: "Vet", category: "Gestión veterinaria", description: "Tecnología cercana para acompañar el cuidado y la gestión veterinaria.", icon: "fa-paw", accent: "#70c9ff" },
    { name: "Barber", category: "Barberías", description: "Organiza la experiencia de tu barbería desde una visión simple.", icon: "fa-scissors", accent: "#d39bff" },
    { name: "Agro", category: "Gestión agrícola", description: "Claridad para operaciones agrícolas que crecen con propósito.", icon: "fa-wheat-awn", accent: "#9bd36a" }
  ]
});
