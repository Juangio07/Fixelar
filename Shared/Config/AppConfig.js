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
    { name: "Nodix", category: "Software de inventario", description: "Control de inventario para mantener la operación organizada y avanzar con claridad.", logo: "../../../Assets/Logos/Nodix/Logo.png", icon: "fa-boxes-stacked", accent: "#62ec1e" },
    { name: "Kentro", category: "Control empresarial", description: "Una base clara para la operación y las decisiones de tu empresa.", logo: "../../../Assets/Logos/Kentro/Logo.png", icon: "fa-building", accent: "#ffb547" },
    { name: "MiPlata", category: "Finanzas personales", description: "Una forma sencilla de organizar y entender mejor tus finanzas personales.", logo: "../../../Assets/Logos/MiPlata/Logo.png", icon: "fa-wallet", accent: "#70c9ff" },
    { name: "Agro", category: "Sistema agropecuario", description: "Una solución de prueba para organizar y acompañar la gestión agropecuaria.", icon: "fa-wheat-awn", accent: "#9bd36a" },
    { name: "Vet", category: "Sistema de veterinaria", description: "Una solución de prueba para apoyar la gestión de servicios veterinarios.", icon: "fa-paw", accent: "#d39bff" }
  ]
});
