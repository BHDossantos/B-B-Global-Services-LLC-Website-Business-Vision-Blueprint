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
    quote: "Cotización de Seguro",
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
    sub: "B&B Global Services ayuda a las empresas a diseñar, construir, proteger, desplegar, soportar y recuperar soluciones tecnológicas críticas en software, plataformas fintech y de seguros, datos e IA, cloud, DevOps, ciberseguridad, servicios gestionados y continuidad del negocio.",
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
    insuranceEyebrow: "Cotizaciones de Seguros",
    insuranceTitle: "¿Necesitas una Cotización de Seguro? Te Damos Seguimiento Personal.",
    insuranceBody:
      "Además de nuestro trabajo en tecnología y fintech, B&B Global Services ayuda a personas y empresas a solicitar cotizaciones e información de seguros. Tú nos cuentas qué necesitas cubrir y nos dejas tu número de teléfono; después, un miembro de nuestro equipo te contacta por llamada telefónica, mensaje de texto o correo electrónico sobre tu solicitud, y trabajamos con corredores de seguros con licencia para conseguirte opciones. La frecuencia de los mensajes varía, pueden aplicarse tarifas de mensajes y datos, y puedes responder STOP en cualquier momento para darte de baja o HELP para obtener ayuda.",
    insuranceCta: "Solicita una Cotización de Seguro",
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
  common: {
    home: "Inicio",
    mostPopular: "Más popular",
    customQuote: "Cotización personalizada",
    requestQuote: "Solicita una Cotización",
    requestProposal: "Solicita una Propuesta",
    requestCustomQuote: "Solicita una cotización personalizada",
    faq: "Preguntas Frecuentes",
    exploreIndustries: "Explora las industrias",
    browseSolutions: "Explora las soluciones",
    viewAllCaseStudies: "Ver todos los casos de éxito",
  },
  detail: {
    service: {
      whatsIncluded: "Qué Incluye",
      capabilities: "Capacidades",
      outcomes: "Resultados",
      deliverables: "Entregables",
      customTitle: "Proyectos con Alcance a tu Medida",
      customBody:
        "Cada proyecto se adapta a tu entorno, tus objetivos y tu presupuesto. Habla con nuestro equipo y prepararemos una propuesta clara y personalizada — sin tarifas genéricas iguales para todos.",
      customBullets: [
        "Evaluaciones de alcance fijo con entregables definidos",
        "Precios basados en el valor para proyectos",
        "Cuotas mensuales para servicios gestionados",
      ],
      exploreEyebrow: "Explora",
      otherServices: "Otros Servicios",
      commonQuestions: "Preguntas Comunes",
    },
    solution: {
      whoItsFor: "Para Quién Es",
      whatsIncluded: "Qué incluye",
      relatedEyebrow: "Servicios Relacionados",
      relatedTitle: "Las Capacidades Detrás de Esta Solución",
    },
    industry: {
      challengeEyebrow: "El Desafío",
      challengeTitle: "A Qué se Enfrentan los Equipos de {name}",
      helpEyebrow: "Cómo Ayudamos",
      helpTitle: "Dónde Marcamos la Diferencia",
      relevantEyebrow: "Servicios Más Relevantes",
      relevantTitle: "Servicios Que Generan Impacto en {name}",
      moreEyebrow: "Más Industrias",
      moreTitle: "Atendemos a Organizaciones Como la Tuya",
      ctaHeadline: "Hablemos de Tecnología para Tu Empresa de {name}",
      ctaCopy:
        "Agenda una consultoría o realiza el Diagnóstico Tecnológico gratuito para saber dónde estás y qué priorizar.",
    },
  },
  pages: {
    services: {
      eyebrow: "Servicios",
      title: "Servicios Tecnológicos para Todo el Ciclo de Vida de Entrega",
      description:
        "B&B Global Services ofrece servicios de asesoría, desarrollo, cloud, ciberseguridad, operaciones, soporte y continuidad para empresas que necesitan que su tecnología funcione de forma segura, confiable y a escala.",
      deliverEyebrow: "Cómo Entregamos",
      deliverTitle: "El Marco De la Idea a las Operaciones",
      deliverBody:
        "Cada proyecto sigue el mismo camino disciplinado del concepto a operaciones confiables.",
    },
    solutions: {
      eyebrow: "Soluciones",
      title: "Soluciones Construidas en Torno a Resultados de Negocio",
      description:
        "Nada de jerga técnica — los resultados que realmente necesitas. Elige el objetivo que coincide con tu situación actual.",
    },
    industries: {
      eyebrow: "Industrias",
      title: "Industrias Que Atendemos",
      description:
        "Atendemos a organizaciones demasiado complejas para un proveedor de IT básico, pero que necesitan un socio más flexible, práctico y accesible que una gran consultora global.",
      whoEyebrow: "A Quién Ayudamos",
      whoTitle: "Nuestros Clientes Ideales",
      whoBody: "Si alguno de estos perfiles se parece al tuyo, estamos hechos exactamente para tu situación.",
    },
    pricing: {
      eyebrow: "Proyectos y Precios",
      title: "Precios Construidos en Torno a Tus Objetivos — No un Menú",
      description:
        "Cada proyecto se dimensiona según tu entorno, tus objetivos y tu presupuesto. En lugar de tarifas genéricas iguales para todos, te damos una propuesta clara y personalizada tras una breve conversación. La mayoría de los clientes comienzan con una evaluación enfocada y luego avanzan hacia la implementación y los servicios gestionados continuos.",
      takeHealthCheck: "Realiza el Diagnóstico Gratuito",
      startEyebrow: "Empieza Aquí",
      startTitle: "Tres Formas Sencillas de Comenzar",
      startBody:
        "Puntos de entrada de bajo riesgo, diseñados para aportar valor rápido y crecer de forma natural. Cada uno se dimensiona y cotiza según tu situación.",
      howEyebrow: "Cómo Cotizamos",
      howTitle: "Modelos de Colaboración Que se Ajustan a Tu Forma de Trabajar",
      howBody:
        "Adaptamos el modelo comercial al trabajo — alcance fijo cuando está claro, precios basados en el valor para proyectos y modalidad recurrente para una colaboración continua.",
      models: [
        {
          title: "Evaluaciones de alcance fijo",
          body: "Revisiones claras y acotadas en el tiempo con entregables definidos — como el Diagnóstico Tecnológico — para que sepas exactamente qué recibirás y cuánto cuesta antes de empezar.",
        },
        {
          title: "Proyectos basados en el valor",
          body: "Construcción de aplicaciones, modernización de cloud y programas de seguridad dimensionados y cotizados según los resultados y la complejidad — no conjeturas por hora.",
        },
        {
          title: "Cuotas mensuales y servicios gestionados",
          body: "Compromisos mensuales predecibles para IT gestionado, mantenimiento de aplicaciones, BCDR y liderazgo fraccional — dimensionados según tu equipo y tus sistemas.",
        },
      ],
      deliverEyebrow: "Qué Entregamos",
      deliverTitle: "Servicios para Todo el Ciclo de Vida",
      deliverBody:
        "Explora cualquier servicio para conocer los detalles — y luego habla con nuestro equipo para obtener precios ajustados a tu alcance.",
      ctaHeadline: "Construyamos una Cotización en Torno a Tus Objetivos",
      ctaCopy:
        "Realiza el Diagnóstico Tecnológico gratuito o agenda una breve llamada — te recomendaremos el mejor punto de partida y te daremos una propuesta clara y personalizada.",
      ctaButton: "Habla con un Experto",
    },
    about: {
      eyebrow: "Nosotros",
      title: "Creado por Operadores, No Solo Consultores",
      description:
        "B&B Global Services nació para ayudar a las empresas a cerrar la brecha entre las ideas tecnológicas y la ejecución operativa real — con entrega remota a clientes de todo el mundo desde nuestras bases en Boston y Roma.",
      approachEyebrow: "Nuestro Enfoque",
      approachTitle: "Reunimos Todas las Disciplinas",
      approachBody:
        "Muchas empresas pueden asesorar. Algunas pueden construir. Otras pueden dar soporte. Nosotros reunimos estas disciplinas para que las organizaciones avancen más rápido, reduzcan riesgos, mejoren la confiabilidad y obtengan más valor de la tecnología.",
      visionLabel: "Visión",
      visionBody:
        "Convertirnos en el socio de confianza en entrega tecnológica para empresas en crecimiento, ayudándolas a diseñar, construir, proteger, operar y mejorar continuamente los sistemas que impulsan su futuro.",
      missionLabel: "Misión",
      missionBody:
        "Ayudar a las organizaciones a convertir sus ideas tecnológicas en soluciones de negocio seguras, escalables, confiables y con soporte, a través de estrategia, ingeniería, cloud, ciberseguridad, operaciones y servicios gestionados.",
      founderEyebrow: "Fundador",
      founderTitle: "Experiencia Profunda y Práctica",
      founderRole: "Fundador y Director Principal",
      founderBio:
        "Bruno Dossantos aporta una amplia experiencia en ingeniería de cloud, DevOps, SRE, entrega de aplicaciones, IA, plataformas de datos, ciberseguridad, continuidad del negocio y operaciones empresariales. Su trayectoria incluye liderar equipos de tecnología, construir plataformas, modernizar sistemas, dar soporte a entornos de misión crítica y ayudar a las organizaciones a mejorar su entrega desde la estrategia hasta el soporte.",
      expertise: [
        "Ingeniería de cloud",
        "DevOps y SRE",
        "Entrega de aplicaciones",
        "IA y plataformas de datos",
        "Ciberseguridad y DevSecOps",
        "Continuidad del negocio",
        "Operaciones empresariales",
        "Servicios gestionados",
      ],
      deliverEyebrow: "Cómo Entregamos",
      deliverTitle: "El Marco De la Idea a las Operaciones",
    },
    insights: {
      eyebrow: "Perspectivas",
      title: "Pensamiento Práctico, Sin Exageraciones",
      description:
        "Perspectivas sobre estrategia tecnológica, entrega, seguridad, resiliencia e IA para empresas en crecimiento.",
      minRead: "min de lectura",
      allInsights: "Todas las perspectivas",
      moreInsights: "Más perspectivas",
      applyTitle: "¿Listo para ponerlo en práctica?",
      applyBody:
        "Agenda una consultoría y lo aplicaremos a tus sistemas, tus objetivos y tus restricciones.",
    },
    caseStudies: {
      eyebrow: "Casos de Éxito",
      title: "Resultados Reales",
      description:
        "Ejemplos anonimizados extraídos de nuestra experiencia de entrega en grandes empresas y el mercado medio. Nunca nombramos a empleadores anteriores — usamos expresiones como 'gran empresa del sector salud' u 'organización SaaS empresarial'.",
      // Orden fijo: desafío, enfoque, solución, resultado.
      sections: [
        { label: "Desafío", question: "¿Qué problema existía?" },
        { label: "Enfoque", question: "Qué hizo B&B." },
        { label: "Solución", question: "Qué se implementó." },
        { label: "Resultado", question: "¿Qué mejoró?" },
      ],
      challengeLabel: "Desafío:",
      outcomeLabel: "Resultado:",
      noteLabel: "Nota:",
      noteBody:
        "Las identidades de los clientes están anonimizadas. Nunca nombramos a empleadores ni clientes anteriores sin aprobación por escrito.",
      moreEyebrow: "Más",
      moreTitle: "Otros Casos de Éxito",
      read: "Leer",
      readFullStory: "Lee la historia completa",
      ctaHeadline: "¿Quieres Resultados Como Estos para Tu Negocio?",
      ctaCopy:
        "Hablemos de tus objetivos, tus sistemas y tus restricciones — y tracemos un camino desde donde estás hasta operaciones confiables.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Programa una Llamada de Descubrimiento",
      description:
        "Solicita una cotización o consultoría y nuestro equipo te contactará sobre tu solicitud — por teléfono, correo o mensaje de texto si compartes tu número. Ya sea que estés construyendo una aplicación, modernizando tu cloud, mejorando la seguridad, dando soporte a tu personal o preparándote para la recuperación ante desastres — hablemos.",
      bookDirectTitle: "¿Prefieres reservar directamente?",
      bookDirectBody: "Elige un horario que te convenga y llegaremos preparados.",
      bookOnCalendly: "Reserva en Calendly",
      hqLine: "Sede: {hq} — atendiendo a clientes en todo el mundo",
      capabilityTitle: "Declaración de capacidades",
      capabilityBody:
        "Un resumen de una página con nuestras competencias, diferenciadores y modelos de colaboración — listo para compartir con tu equipo.",
      viewDownload: "Ver y Descargar",
      easyWaysTitle: "Formas Sencillas de Empezar",
      bookInstantlyEyebrow: "Reserva al Instante",
      pickTimeTitle: "Elige un Horario Que Te Convenga",
      pickTimeBody:
        "Reserva un espacio para una llamada de descubrimiento de 30 minutos y llegaremos preparados para conversar sobre tus objetivos.",
    },
  },
  // Flujo de solicitud de cotización de seguro. El aviso de consentimiento de
  // SMS que aparece más abajo se muestra en el momento del opt-in; el texto en
  // inglés de en.ts es el que verifican los operadores.
  quote: {
    eyebrow: "Cotizaciones de Seguros",
    title: "Solicita una Cotización de Seguro",
    description:
      "Cuéntanos qué necesitas cubrir y cómo contactarte. B&B Global Services trabaja con corredores de seguros con licencia para conseguirte una cotización, y un miembro de nuestro equipo te da seguimiento por teléfono, mensaje de texto o correo electrónico sobre tu solicitud.",
    formTitle: "Solicita tu cotización",
    formIntro: "Toma alrededor de un minuto. Sin compromiso, y tu información nunca se vende.",
    nameLabel: "Nombre",
    namePlaceholder: "Ana Martínez",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "ana@ejemplo.com",
    phoneLabel: "Número de teléfono",
    phonePlaceholder: "(555) 555-5555",
    typeLabel: "¿Para qué necesitas una cotización?",
    typeSelect: "Selecciona…",
    types: [
      "Seguro empresarial / comercial",
      "Responsabilidad civil general",
      "Responsabilidad civil profesional (E&O)",
      "Responsabilidad cibernética",
      "Seguro de propiedad",
      "Compensación para trabajadores",
      "Beneficios para empleados / salud grupal",
      "Seguro de auto",
      "Seguro de hogar",
      "Seguro de vida",
      "Otro / aún no estoy seguro",
    ],
    messageLabel: "¿Hay algo más que debamos saber? (opcional)",
    messagePlaceholder: "Montos de cobertura, fecha de renovación, aseguradora actual o cualquier otro dato que nos ayude a cotizar con precisión.",
    submit: "Solicitar Mi Cotización",
    sending: "Enviando…",
    smsConsent:
      "Al proporcionar tu número de teléfono y enviar este formulario, aceptas recibir llamadas y mensajes de texto de B&B Global Services sobre tu cotización o solicitud de seguro. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responde STOP para darte de baja o HELP para obtener ayuda.",
    legalIntro: "Lee nuestra",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos y Condiciones",
    brokerDisclosure:
      "Las cotizaciones y las coberturas de seguros se ofrecen a través de corredores de seguros con licencia con los que colaboramos. B&B Global Services no es una aseguradora.",
    successTitle: "Gracias — ya recibimos tu solicitud de cotización.",
    successBody:
      "Un miembro de nuestro equipo te contactará muy pronto por teléfono, mensaje de texto o correo electrónico sobre tu cotización de seguro. Si nos pediste que te escribiéramos por mensaje de texto, responde STOP en cualquier momento para darte de baja o HELP para obtener ayuda.",
    errorGeneric: "Algo salió mal. Vuelve a intentarlo o llámanos.",
    stepsTitle: "Cómo funciona",
    steps: [
      {
        title: "Solicitas una cotización",
        body: "Completa el formulario breve con tu nombre, correo electrónico, número de teléfono y lo que necesitas cubrir.",
      },
      {
        title: "Te damos seguimiento por llamada o mensaje de texto",
        body: "Un miembro de nuestro equipo te contacta sobre tu solicitud — por llamada telefónica, mensaje de texto o correo electrónico — para confirmar los detalles y responder tus preguntas.",
      },
      {
        title: "Recibes tu cotización",
        body: "Trabajamos con corredores de seguros con licencia para reunir opciones y luego te las explicamos paso a paso. Sin compromiso de compra.",
      },
    ],
  },
  legal: {
    eyebrow: "Legal",
    privacyTitle: "Política de Privacidad",
    privacyDescription:
      "Cómo tratamos tu información. En vigor desde el {date}.",
    termsTitle: "Términos de Servicio",
    termsDescription:
      "Los términos que rigen el uso de este sitio. En vigor desde el {date}.",
  },
  form: {
    name: "Nombre",
    company: "Empresa",
    email: "Correo electrónico",
    phone: "Teléfono",
    companySize: "Tamaño de la empresa",
    serviceNeeded: "Servicio requerido",
    budgetRange: "Rango de presupuesto",
    timeline: "Plazo",
    message: "Mensaje",
    select: "Selecciona…",
    employees: "empleados",
    // Etiquetas visibles de las opciones de los selectores. Los valores
    // enviados permanecen en inglés (ver ContactForm) para que el lead scoring
    // y los campos del CRM se mantengan estables.
    services: [
      "Estrategia y Asesoría",
      "Desarrollo de Aplicaciones y Productos",
      "Cloud, DevOps e Ingeniería de Plataformas",
      "DevSecOps y Ciberseguridad",
      "Confiabilidad, Operaciones y BCDR",
      "IMAC y Servicios Tecnológicos Gestionados",
      "Aún no estoy seguro",
    ],
    budgets: [
      "Menos de $10,000",
      "$10,000–$25,000",
      "$25,000–$100,000",
      "$100,000–$250,000",
      "Más de $250,000",
      "Servicios gestionados mensuales",
    ],
    timelines: ["De inmediato", "1–3 meses", "3–6 meses", "Más de 6 meses", "Solo explorando"],
    messagePlaceholder: "Cuéntanos sobre tus objetivos, tus sistemas y el problema que te gustaría resolver.",
    submit: "Programa una Llamada de Descubrimiento",
    sending: "Enviando…",
    errorGeneric: "Algo salió mal.",
    successTitle: "Gracias — nos pondremos en contacto muy pronto.",
    successBody:
      "Un miembro de nuestro equipo te contactará dentro de un día hábil — por teléfono, correo o mensaje de texto — para programar tu llamada de descubrimiento.",
    smsConsent:
      "Al proporcionar tu número de teléfono y enviar este formulario, aceptas recibir llamadas y mensajes de texto de B&B Global Services LLC sobre tu solicitud. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responde STOP para darte de baja o HELP para obtener ayuda.",
    consent:
      "Al enviar este formulario, aceptas que te contactemos sobre tu consulta. Respetamos tu privacidad y nunca compartimos tu información.",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
  },
  switcher: { label: "Idioma" },
};
