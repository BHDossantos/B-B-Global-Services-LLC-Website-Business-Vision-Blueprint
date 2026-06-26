import type { Messages } from "./en";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export const it: Widen<Messages> = {
  nav: {
    services: "Servizi",
    solutions: "Soluzioni",
    industries: "Settori",
    pricing: "Prezzi",
    caseStudies: "Casi di successo",
    insights: "Approfondimenti",
    about: "Chi siamo",
    contact: "Contatti",
    global: "Delivery globale",
  },
  cta: {
    bookConsultation: "Prenota una consulenza",
    exploreServices: "Scopri i servizi",
    freeHealthCheck: "Check-up tecnologico gratuito",
    talkToTeam: "Parla con il nostro team",
    requestAssessment: "Richiedi un assessment",
    viewAllServices: "Vedi tutti i servizi",
    learnMore: "Scopri di più",
    getStarted: "Inizia ora",
    scheduleConsultation: "Fissa una consulenza",
    readArticle: "Leggi l'articolo",
    startFreeCheck: "Avvia il check-up gratuito",
  },
  trust: ["Consulenza gratuita", "Nessun impegno", "Risposta entro 1 giorno lavorativo"],
  hero: {
    headlinePre: "Delivery tecnologico",
    headlineHighlight: "dall'idea alle operazioni",
    sub: "B&B Global Services aiuta le aziende a progettare, sviluppare, proteggere, rilasciare, supportare e ripristinare soluzioni tecnologiche mission-critical su software, cloud, DevOps, cybersecurity, AI, managed services e business continuity.",
    lifecycleTitle: "Il ciclo di vita della tecnologia",
    fromIdea: "Idea",
    toOps: "Operazioni affidabili",
    trustLine:
      "Un partner globale e remote-first con esperienza enterprise su cloud, DevOps, SRE, AI, application delivery, cybersecurity, piattaforme dati e resilienza operativa — con delivery in tutto il mondo.",
  },
  lifecycle: ["Idea", "Progettazione", "Sviluppo", "Sicurezza", "Rilascio", "Operatività", "Ripristino", "Ottimizzazione"],
  home: {
    problemEyebrow: "Il vero problema",
    problemTitle:
      "La maggior parte delle aziende non ha un problema tecnologico. Ha un problema di delivery.",
    problemBody:
      "Le aziende sono sotto pressione per muoversi più rapidamente, ridurre i disservizi, migliorare la sicurezza, modernizzare i sistemi, adottare l'AI, controllare i costi del cloud e supportare gli utenti senza aumentare il caos operativo. B&B Global Services porta la strategia, l'ingegneria, le operazioni e il modello di supporto necessari a trasformare la tecnologia da concept a esecuzione affidabile.",
    whatEyebrow: "Cosa facciamo",
    whatTitle: "Un unico partner per l'intero ciclo di vita della tecnologia",
    whatBody:
      "Dalla strategia alle operazioni di lungo periodo, copriamo le competenze che la maggior parte delle aziende è costretta a mettere insieme affidandosi a più fornitori.",
    assessEyebrow: "Strumento gratuito, 2 minuti",
    assessTitle: "Quanto è in salute la tua tecnologia?",
    assessBody:
      "Fai il Check-up Tecnologico gratuito per valutare la tua maturità su strategia, delivery, cloud, sicurezza, affidabilità, ripristino e supporto — e ottieni subito il prossimo passo consigliato.",
    frameworkEyebrow: "Il framework di delivery di B&B",
    frameworkTitle: "Framework dall'idea alle operazioni",
    frameworkBody:
      "Un modello ripetibile che porta la tecnologia dal concept a operazioni affidabili e supportate — e continua a migliorarla.",
    industriesEyebrow: "Settori",
    industriesTitle: "Pensato per le organizzazioni tra l'IT di base e la grande consulenza",
    industriesBody:
      "Serviamo organizzazioni troppo complesse per un fornitore IT di base, ma che hanno bisogno di un partner più flessibile, pragmatico e accessibile rispetto a una grande società di consulenza globale.",
    globalEyebrow: "Delivery globale",
    globalTitle: "Un partner globale, con delivery da remoto",
    globalBody:
      "Dalle nostre sedi di Boston e Roma operiamo in tutto il mondo — con modello follow-the-sun, cloud multi-region e delivery che rispetta i requisiti regionali di dati e compliance.",
    whyEyebrow: "Perché B&B Global Services",
    whyTitle: "Competenza enterprise. Esecuzione pragmatica. Supporto di lungo periodo.",
    featuredEyebrow: "Soluzioni in evidenza",
    featuredTitle: "Progetti orientati ai risultati",
    featuredBody: "Modi chiari e pacchettizzati per iniziare — ciascuno collegato a un risultato di business concreto.",
    caseEyebrow: "Casi di successo",
    caseTitle: "Risultati sul campo",
    caseBody:
      "Esempi anonimizzati tratti dalla nostra esperienza di delivery in ambito enterprise e mid-market.",
    faqEyebrow: "FAQ",
    faqTitle: "Domande frequenti",
    finalTitle: "Pronto a passare dalle idee tecnologiche a un'esecuzione affidabile?",
    finalBody:
      "Che tu debba sviluppare un'applicazione, modernizzare il cloud, rafforzare la cybersecurity, supportare il tuo personale o creare un piano di disaster recovery, B&B Global Services ti aiuta a passare dalla visione all'esecuzione.",
  },
  footer: {
    services: "Servizi",
    solutions: "Soluzioni",
    company: "Azienda",
    serviceAreas: "Aree di servizio:",
    rights: "Tutti i diritti riservati.",
    newsletterTitle: "Approfondimenti tecnologici concreti, senza hype",
    newsletterBody:
      "Spunti utili e occasionali su strategia, cloud, sicurezza e resilienza per le aziende in crescita.",
    subscribe: "Iscriviti",
    emailPlaceholder: "tu@azienda.com",
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
  },
  switcher: { label: "Lingua" },
};
