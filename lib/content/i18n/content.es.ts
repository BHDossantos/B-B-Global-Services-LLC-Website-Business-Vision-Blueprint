// ES content overlay — translated fields keyed by slug.
// Filled by translation; anything missing falls back to English.
import type { ContentOverlay } from "./types";

export const esContent: ContentOverlay = {
  services: {
    "strategy-advisory": {
      title: "Estrategia y Asesoría",
      headline: "Estrategia y Asesoría Tecnológica",
      summary:
        "Evaluaciones, hojas de ruta y liderazgo de CTO fraccional que convierten los objetivos de negocio en un plan tecnológico ejecutable.",
    },
    "application-development": {
      title: "Desarrollo de Aplicaciones y Productos",
      headline: "Software a Medida, Apps Móviles, Plataformas SaaS y Soluciones de IA",
      summary:
        "Definimos, diseñamos, construimos, desplegamos y damos soporte a aplicaciones web, móviles, SaaS y con IA.",
    },
    "data-analytics-ai": {
      title: "Datos, Analítica e IA",
      headline: "Datos, Analítica, Machine Learning e Implementación de IA",
      summary:
        "Convierta sus datos en decisiones y productos inteligentes: desde plataformas de datos y analítica hasta machine learning, IA generativa y MLOps.",
    },
    "cloud-devops": {
      title: "Cloud, DevOps e Ingeniería de Plataformas",
      headline: "Cloud, DevOps, CI/CD e Ingeniería de Plataformas",
      summary:
        "Arquitectura cloud, infraestructura como código, CI/CD e ingeniería de plataformas en AWS, Azure y GCP.",
    },
    "devsecops-cybersecurity": {
      title: "DevSecOps y Ciberseguridad",
      headline: "Seguridad Integrada en la Entrega",
      summary:
        "DevSecOps, gestión de identidades, gestión de vulnerabilidades y preparación para el cumplimiento normativo, integradas en todo el ciclo de entrega.",
    },
    "reliability-bcdr": {
      title: "Confiabilidad, Operaciones y BCDR",
      headline: "Confiabilidad, Resiliencia y Continuidad del Negocio",
      summary:
        "Observabilidad, prácticas de SRE, gestión de incidentes y recuperación ante desastres probada que mantienen en marcha los sistemas de misión crítica.",
    },
    "managed-it-imac": {
      title: "IMAC y Servicios Tecnológicos Gestionados",
      headline: "Instalaciones, Traslados, Altas, Cambios y Soporte IT Gestionado",
      summary:
        "Despliegue de dispositivos, mesa de servicio, soporte de redes y operaciones gestionadas para un equipo de trabajo productivo y bien respaldado.",
    },
  },
  solutions: {
    "build-my-app": {
      title: "Crear Mi Aplicación",
      summary:
        "Convierta una idea en un producto funcional: web, móvil, SaaS o con IA.",
      audience: "Fundadores, dueños de negocio y equipos internos.",
      body: "¿Tiene una idea pero necesita un equipo que la convierta en un producto real? B&B Global Services le ayuda a definir, diseñar, construir, desplegar y dar soporte a aplicaciones web, móviles, SaaS y con IA.",
    },
    "modernize-my-technology": {
      title: "Modernizar Mi Tecnología",
      summary:
        "Pase de plataformas heredadas y procesos manuales a una tecnología moderna, segura y automatizada.",
      audience: "Empresas con sistemas obsoletos.",
      body: "Ayudamos a las organizaciones a pasar de plataformas heredadas, procesos manuales y sistemas frágiles a una tecnología cloud moderna, segura y automatizada.",
    },
    "adopt-ai": {
      title: "Adoptar IA y Analítica",
      summary:
        "Identifique las oportunidades de IA y datos con ROI real, y constrúyalas y despliéguelas de forma responsable.",
      audience: "Líderes que quieren usar la IA y los datos para lograr resultados reales.",
      body: "Deje atrás el bombo de la IA. Le ayudamos a identificar los casos de uso que realmente generan retorno, construir soluciones de IA generativa y machine learning, convertir sus datos en decisiones y desplegarlo todo con la gobernanza y el monitoreo adecuados.",
    },
    "secure-my-business": {
      title: "Proteger Mi Negocio",
      summary:
        "Integre la seguridad en aplicaciones, cloud, usuarios, procesos y operaciones.",
      audience: "Empresas preocupadas por la ciberseguridad.",
      body: "Integramos la seguridad en todas las capas del negocio: aplicaciones, cloud, usuarios, procesos y operaciones.",
    },
    "support-my-workforce": {
      title: "Dar Soporte a Mi Equipo",
      summary:
        "Soporte tecnológico práctico: configuración de dispositivos, IMAC, mesa de servicio y operaciones gestionadas.",
      audience: "Negocios que necesitan IT gestionado.",
      body: "Brindamos soporte tecnológico práctico que incluye configuración de dispositivos, IMAC, mesa de servicio, atención a usuarios, mudanzas de oficina y operaciones de IT gestionadas.",
    },
    "disaster-recovery": {
      title: "Prepararse para la Recuperación ante Desastres",
      summary:
        "Defina RTO/RPO, valide respaldos, realice ejercicios de simulación y prepárese ante cualquier interrupción.",
      audience: "Empresas sin planes de recuperación probados.",
      body: "Le ayudamos a definir RTO/RPO, crear planes de recuperación, validar respaldos, realizar ejercicios de simulación y preparar a su organización para afrontar interrupciones.",
    },
    "scale-my-team": {
      title: "Escalar Mi Equipo Tecnológico",
      summary:
        "Liderazgo fraccional, equipos de ingeniería y servicios gestionados para escalar sin un departamento interno completo.",
      audience: "Empresas en crecimiento.",
      body: "Proporcionamos liderazgo fraccional, equipos de ingeniería, entrega técnica y servicios gestionados para ayudar a las empresas a escalar sin contratar un departamento interno completo.",
    },
  },
  industries: {
    healthcare: {
      name: "Salud",
      cardDescription:
        "Tecnología segura y conforme a la normativa para sistemas clínicos y administrativos.",
      title: "Consultoría Tecnológica y Servicios Gestionados para el Sector Salud",
      intro:
        "Las organizaciones de salud manejan algunos de los riesgos más altos en tecnología: la seguridad del paciente, datos sensibles, un cumplimiento normativo estricto y tolerancia cero a las caídas. Ayudamos a los equipos clínicos y administrativos a modernizar y operar su tecnología de forma segura, sin frenar la atención.",
    },
    "financial-services": {
      name: "Servicios Financieros",
      cardDescription:
        "Plataformas confiables y seguras con los controles que exige el sector financiero regulado.",
      title: "Consultoría Tecnológica para Servicios Financieros y Fintech",
      intro:
        "En los servicios financieros, la confianza es el producto, y la confianza depende de una tecnología segura, confiable y bien gobernada. Ayudamos a bancos, entidades de crédito, asesores y fintechs a construir y operar plataformas que cumplen con el nivel que exigen los reguladores y los clientes.",
    },
    "saas-technology": {
      name: "SaaS y Tecnología",
      cardDescription:
        "Ingeniería de producto, cloud y confiabilidad para empresas de software en crecimiento.",
      title: "Ingeniería, Cloud y Confiabilidad para Empresas SaaS y Tecnológicas",
      intro:
        "Las empresas de software viven o mueren según su velocidad de entrega y su confiabilidad. Ayudamos a los negocios SaaS y tecnológicos a construir producto, modernizar el cloud, adoptar DevOps y SRE e incorporar IA, para que la ingeniería escale sin caos.",
    },
    "professional-services": {
      name: "Servicios Profesionales",
      cardDescription:
        "Aplicaciones modernas e IT gestionado para firmas basadas en el trabajo del conocimiento.",
      title: "Tecnología e IT Gestionado para Firmas de Servicios Profesionales",
      intro:
        "Las firmas de servicios profesionales se sostienen en las personas, el conocimiento y la confianza de sus clientes. Ayudamos a despachos de abogados, firmas contables, agencias y consultoras a modernizar sus herramientas, proteger los datos de sus clientes y contar con soporte IT confiable, para que el equipo se concentre en los clientes y no en la tecnología.",
    },
    "real-estate": {
      name: "Bienes Raíces y Administración de Propiedades",
      cardDescription:
        "Portales, integraciones y soporte para propiedades y equipos distribuidos.",
      title: "Tecnología para Bienes Raíces y Administración de Propiedades",
      intro:
        "El sector inmobiliario y la administración de propiedades operan a través de múltiples ubicaciones, sistemas y actores. Ayudamos a conectar propiedades, equipos y herramientas mediante portales, integraciones y soporte confiables, para que las operaciones fluyan dondequiera que haga negocios.",
    },
    hospitality: {
      name: "Hospitalidad",
      cardDescription:
        "Operaciones resilientes y tecnología en sitio para negocios de atención al huésped.",
      title: "Tecnología e IT Gestionado para el Sector de la Hospitalidad",
      intro:
        "En la hospitalidad, la tecnología es invisible cuando funciona y muy visible cuando falla. Ayudamos a hoteles, restaurantes y grupos hoteleros a mantener operaciones resilientes, implementar tecnología confiable en sitio y dar soporte a los sistemas de cara al huésped las 24 horas.",
    },
    "small-mid-sized-business": {
      name: "Pequeñas y Medianas Empresas",
      cardDescription:
        "Un solo socio de confianza para estrategia, desarrollo, seguridad y soporte continuo.",
      title: "Socio Tecnológico para Pequeñas y Medianas Empresas",
      intro:
        "Las empresas en crecimiento superan el IT básico, pero aún no están listas para una gran consultora. Somos el socio intermedio: un único equipo de confianza para estrategia, desarrollo, seguridad, confiabilidad y soporte continuo, a la medida de su etapa actual.",
    },
    "private-equity": {
      name: "Empresas de Portafolio de Private Equity",
      cardDescription:
        "Due diligence, modernización y creación de valor en todo el portafolio.",
      title: "Due Diligence Tecnológico y Creación de Valor para Private Equity",
      intro:
        "Las firmas de private equity necesitan que la tecnología sea un activo, no un pasivo, tanto en la due diligence como durante todo el periodo de inversión. Ayudamos a evaluar el riesgo tecnológico antes de cada operación y, después, a modernizar, asegurar y operar los sistemas de las empresas del portafolio para crear valor medible.",
    },
  },
  site: {
    lifecyclePhases: [
      {
        name: "Descubrimiento",
        description:
          "Entender los objetivos de negocio, los sistemas, los riesgos, los usuarios y las restricciones.",
      },
      {
        name: "Diseño",
        description:
          "Crear la arquitectura, la hoja de ruta, el plan de entrega, el modelo de seguridad y el modelo operativo.",
      },
      {
        name: "Construcción",
        description:
          "Desarrollar aplicaciones, plataformas, automatizaciones, integraciones e infraestructura.",
      },
      {
        name: "Protección",
        description:
          "Integrar DevSecOps, identidad, cumplimiento normativo, gestión de vulnerabilidades y controles de seguridad.",
      },
      {
        name: "Despliegue",
        description:
          "Implementar CI/CD, gobernanza de versiones, despliegue en cloud, pruebas y documentación.",
      },
      {
        name: "Operación",
        description:
          "Proporcionar observabilidad, soporte, gestión de incidentes, mesa de servicio, operaciones gestionadas y mejora continua.",
      },
      {
        name: "Recuperación",
        description:
          "Construir recuperación ante desastres, continuidad del negocio, validación de respaldos, runbooks, ejercicios de simulación y pruebas de recuperación.",
      },
      {
        name: "Optimización",
        description:
          "Mejorar el rendimiento, los costos, la confiabilidad, la automatización, la experiencia de usuario y los resultados de negocio.",
      },
    ],
    painPoints: [
      "Entrega de software lenta",
      "Proveedores desconectados",
      "Documentación deficiente",
      "Controles de seguridad débiles",
      "Despliegues manuales",
      "Complejidad del cloud",
      "Falta de recuperación ante desastres",
      "Sin responsables claros después del lanzamiento",
      "Mala experiencia de soporte",
      "Caídas e incidentes recurrentes",
    ],
    differentiators: [
      "No solo asesoramos. Construimos.",
      "No solo construimos. Operamos.",
      "No solo operamos. Protegemos y recuperamos.",
      "Entendemos la estrategia ejecutiva y la ingeniería práctica.",
      "Llevamos prácticas de nivel empresarial a negocios en crecimiento.",
      "Combinamos consultoría, entrega de software, cloud, ciberseguridad, IMAC y servicios gestionados.",
    ],
    featuredSolutions: [
      "Evaluación Tecnológica",
      "Construcción de Aplicaciones",
      "Evaluación de Preparación para IA",
      "Modernización de Cloud",
      "Implementación de DevSecOps",
      "Programa de Continuidad del Negocio y Recuperación ante Desastres",
      "Soporte IT Gestionado",
      "Asesoría de CTO Fraccional",
      "Configuración Tecnológica de Oficinas",
      "Evaluación de Confiabilidad de Plataformas de Datos",
    ],
    idealCustomers: [
      "Empresas medianas con 50–5,000 empleados",
      "Startups que construyen su primera plataforma seria",
      "Negocios que modernizan sistemas heredados",
      "Empresas que necesitan desarrollo de aplicaciones más soporte a largo plazo",
      "Organizaciones con brechas en cloud, seguridad o confiabilidad",
      "Firmas de private equity que evalúan o mejoran empresas de su portafolio",
      "Empresas de salud y sectores regulados que necesitan una entrega tecnológica segura",
    ],
    faqs: [
      {
        question: "¿En qué se diferencia B&B de un proveedor de IT típico o de una gran consultora?",
        answer:
          "Ayudamos a empresas que han superado el soporte IT básico pero aún no están listas para las grandes consultoras. Combinamos estrategia, entrega de software, cloud, ciberseguridad, IMAC y servicios gestionados en un solo modelo de entrega integrado — prácticas de nivel empresarial sin la complejidad ni el costo de nivel empresarial.",
      },
      {
        question: "¿Solo asesoran, o también construyen y operan?",
        answer:
          "Las tres cosas. Asesoramos, construimos, protegemos, desplegamos, operamos y recuperamos. La esencia de nuestro Marco De la Idea a las Operaciones es que un mismo socio puede llevarte del concepto a operaciones confiables y con soporte.",
      },
      {
        question: "¿Con empresas de qué tamaño trabajan?",
        answer:
          "Nos enfocamos en empresas medianas y en crecimiento — normalmente de 25 a 5,000 empleados — incluyendo startups que construyen su primera plataforma seria y empresas de portafolio de private equity.",
      },
      {
        question: "¿Cómo suelen comenzar los proyectos?",
        answer:
          "La mayoría de los proyectos comienzan con una llamada de descubrimiento y una evaluación enfocada, como nuestro Diagnóstico Tecnológico. La evaluación produce una hoja de ruta priorizada, y a partir de ahí podemos avanzar hacia la implementación y el soporte continuo.",
      },
      {
        question: "¿Ofrecen servicios gestionados continuos después de un proyecto?",
        answer:
          "Sí. Ofrecemos soporte tecnológico gestionado, mantenimiento de aplicaciones y planes recurrentes de BCDR, para que haya responsables claros y mejora continua después del lanzamiento — sin traspasos al vacío.",
      },
      {
        question: "¿Qué industrias atienden?",
        answer:
          "Salud, servicios financieros, SaaS y tecnología, servicios profesionales, bienes raíces y administración de propiedades, hospitalidad, pequeñas y medianas empresas, y empresas de portafolio de private equity.",
      },
    ],
    engagementOffers: [
      {
        name: "Diagnóstico Tecnológico",
        tagline: "Una revisión rápida de alcance fijo y una hoja de ruta de 90 días.",
        includes: [
          "Revisión del estado actual",
          "Análisis de riesgos",
          "Revisión de cloud / seguridad / aplicaciones / soporte",
          "Resumen ejecutivo",
          "Hoja de ruta de 90 días",
        ],
      },
      {
        name: "De la Idea a tu App MVP",
        tagline: "Del concepto a un producto funcional y desplegado.",
        includes: [
          "Descubrimiento",
          "UX/UI",
          "Arquitectura",
          "Desarrollo del MVP",
          "Despliegue",
          "Soporte básico",
        ],
      },
      {
        name: "Soporte Tecnológico Gestionado",
        tagline: "Soporte continuo, dimensionado según tu equipo y tus sistemas.",
        includes: [
          "Soporte a usuarios",
          "Soporte de dispositivos",
          "IMAC",
          "Coordinación con proveedores",
          "Reportes mensuales",
          "Supervisión básica de seguridad y respaldos",
        ],
      },
    ],
  },
};
