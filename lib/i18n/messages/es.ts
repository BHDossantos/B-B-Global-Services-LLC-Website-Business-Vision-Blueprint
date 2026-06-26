import type { Messages } from "./en";

// Catálogo de mensajes en español (español neutro/internacional). Refleja la
// estructura de en.ts con los valores traducidos. Cualquier clave ausente en
// este idioma recurre al inglés, por lo que el sitio nunca muestra una cadena
// rota o vacía.

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export const es: Widen<Messages> = {
  nav: {
    services: "Servicios",
    solutions: "Soluciones",
    industries: "Industrias",
    pricing: "Precios",
    caseStudies: "Casos de Éxito",
    insights: "Perspectivas",
    about: "Nosotros",
    contact: "Contacto",
    global: "Entrega Global",
  },
  cta: {
    bookConsultation: "Agenda una Consultoría",
    exploreServices: "Explora los Servicios",
    freeHealthCheck: "Diagnóstico Tecnológico Gratuito",
    talkToTeam: "Habla con Nuestro Equipo",
    requestAssessment: "Solicita una Evaluación",
    viewAllServices: "Ver todos los servicios",
    learnMore: "Saber más",
    getStarted: "Comenzar",
    scheduleConsultation: "Programa una Consultoría",
    readArticle: "Leer artículo",
    startFreeCheck: "Inicia el Diagnóstico Gratuito",
  },
  trust: ["Consultoría gratuita", "Sin compromiso", "Respuesta en 1 día hábil"],
  hero: {
    headlinePre: "Tecnología que va",
    headlineHighlight: "De la Idea a las Operaciones",
    sub: "B&B Global Services ayuda a las empresas a diseñar, construir, proteger, desplegar, soportar y recuperar soluciones tecnológicas críticas en software, cloud, DevOps, ciberseguridad, IA, servicios gestionados y continuidad del negocio.",
    lifecycleTitle: "El Ciclo de Vida Tecnológico",
    fromIdea: "Idea",
    toOps: "Operaciones Confiables",
    trustLine:
      "Un socio global y remote-first con experiencia empresarial en cloud, DevOps, SRE, IA, entrega de aplicaciones, ciberseguridad, plataformas de datos y resiliencia operativa — con alcance en todo el mundo.",
  },
  lifecycle: ["Idea", "Diseño", "Construcción", "Protección", "Despliegue", "Operación", "Recuperación", "Optimización"],
  home: {
    problemEyebrow: "El Verdadero Problema",
    problemTitle:
      "La mayoría de las empresas no tienen un problema de tecnología. Tienen un problema de ejecución.",
    problemBody:
      "Las empresas están bajo presión para avanzar más rápido, reducir las interrupciones, mejorar la seguridad, modernizar sistemas, adoptar IA, controlar los costos de cloud y dar soporte a sus usuarios sin aumentar el caos operativo. B&B Global Services aporta la estrategia, la ingeniería, las operaciones y el modelo de soporte necesarios para llevar la tecnología del concepto a una ejecución confiable.",
    whatEyebrow: "Lo Que Hacemos",
    whatTitle: "Un Solo Socio para Todo el Ciclo de Vida Tecnológico",
    whatBody:
      "Desde la estrategia hasta las operaciones a largo plazo, cubrimos las disciplinas que la mayoría de las empresas tienen que integrar a través de múltiples proveedores.",
    assessEyebrow: "Herramienta Gratuita de 2 Minutos",
    assessTitle: "¿Qué tan saludable es tu tecnología?",
    assessBody:
      "Realiza el Diagnóstico Tecnológico gratuito para evaluar tu madurez en estrategia, entrega, cloud, seguridad, confiabilidad, recuperación y soporte — y recibe al instante una recomendación sobre el siguiente paso.",
    frameworkEyebrow: "El Marco de Entrega de B&B",
    frameworkTitle: "Marco De la Idea a las Operaciones",
    frameworkBody:
      "Un modelo repetible que lleva la tecnología del concepto a operaciones confiables y con soporte — y la mejora continuamente.",
    industriesEyebrow: "Industrias",
    industriesTitle: "Diseñado para Organizaciones Entre el IT Básico y la Gran Consultoría",
    industriesBody:
      "Atendemos a organizaciones demasiado complejas para un proveedor de IT básico, pero que necesitan un socio más flexible, práctico y accesible que una gran consultora global.",
    globalEyebrow: "Entrega Global",
    globalTitle: "Un Socio Global, con Entrega Remota",
    globalBody:
      "Desde nuestras bases en Boston y Roma, prestamos servicio en todo el mundo — con operaciones follow-the-sun, cloud multirregional y una entrega que respeta las necesidades regionales de datos y cumplimiento.",
    whyEyebrow: "Por Qué B&B Global Services",
    whyTitle: "Experiencia Empresarial. Ejecución Práctica. Soporte a Largo Plazo.",
    featuredEyebrow: "Soluciones Destacadas",
    featuredTitle: "Proyectos Orientados a Resultados",
    featuredBody: "Formas claras y empaquetadas de empezar — cada una alineada con un resultado de negocio real.",
    caseEyebrow: "Casos de Éxito",
    caseTitle: "Resultados Reales",
    caseBody:
      "Ejemplos anonimizados extraídos de nuestra experiencia de entrega en grandes empresas y el mercado medio.",
    faqEyebrow: "Preguntas Frecuentes",
    faqTitle: "Preguntas Comunes",
    finalTitle: "¿Listo para Pasar de las Ideas Tecnológicas a una Ejecución Confiable?",
    finalBody:
      "Ya sea que necesites construir una aplicación, modernizar tu cloud, mejorar la ciberseguridad, dar soporte a tu personal o crear un plan de recuperación ante desastres, B&B Global Services puede ayudarte a pasar de la visión a la ejecución.",
  },
  footer: {
    services: "Servicios",
    solutions: "Soluciones",
    company: "Empresa",
    serviceAreas: "Áreas de servicio:",
    rights: "Todos los derechos reservados.",
    newsletterTitle: "Perspectivas tecnológicas prácticas, sin exageraciones",
    newsletterBody:
      "Reflexiones útiles y ocasionales sobre estrategia, cloud, seguridad y resiliencia para empresas en crecimiento.",
    subscribe: "Suscribirse",
    emailPlaceholder: "tu@empresa.com",
    privacy: "Política de Privacidad",
    terms: "Términos del Servicio",
  },
  switcher: { label: "Idioma" },
};
