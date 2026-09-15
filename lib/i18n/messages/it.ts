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
  common: {
    home: "Home",
    mostPopular: "Il più richiesto",
    customQuote: "Preventivo personalizzato",
    requestQuote: "Richiedi un preventivo",
    requestProposal: "Richiedi una proposta",
    requestCustomQuote: "Richiedi un preventivo personalizzato",
    faq: "FAQ",
    exploreIndustries: "Scopri i settori",
    browseSolutions: "Esplora le soluzioni",
    viewAllCaseStudies: "Vedi tutti i casi di successo",
  },
  detail: {
    service: {
      whatsIncluded: "Cosa include",
      capabilities: "Competenze",
      outcomes: "Risultati",
      deliverables: "Deliverable",
      customTitle: "Progetti su misura",
      customBody:
        "Ogni progetto è calibrato sul tuo ambiente, sui tuoi obiettivi e sul tuo budget. Parla con il nostro team e prepareremo una proposta chiara e personalizzata — niente listini standard uguali per tutti.",
      customBullets: [
        "Assessment a perimetro fisso con deliverable definiti",
        "Pricing basato sul valore per i progetti",
        "Canoni mensili per i managed services",
      ],
      exploreEyebrow: "Scopri",
      otherServices: "Altri servizi",
      commonQuestions: "Domande frequenti",
    },
    solution: {
      whoItsFor: "A chi si rivolge",
      whatsIncluded: "Cosa include",
      relatedEyebrow: "Servizi correlati",
      relatedTitle: "Le competenze dietro questa soluzione",
    },
    industry: {
      challengeEyebrow: "La sfida",
      challengeTitle: "Le sfide che i team del settore {name} devono affrontare",
      helpEyebrow: "Come possiamo aiutarti",
      helpTitle: "Dove facciamo la differenza",
      relevantEyebrow: "I servizi più rilevanti",
      relevantTitle: "I servizi che fanno la differenza nel settore {name}",
      moreEyebrow: "Altri settori",
      moreTitle: "Serviamo organizzazioni come la tua",
      ctaHeadline: "Parliamo di tecnologia per la tua azienda nel settore {name}",
      ctaCopy:
        "Prenota una consulenza o fai il Check-up Tecnologico gratuito per capire a che punto sei e a cosa dare priorità.",
    },
  },
  pages: {
    services: {
      eyebrow: "Servizi",
      title: "Servizi tecnologici lungo l'intero ciclo di delivery",
      description:
        "B&B Global Services offre servizi di advisory, sviluppo, cloud, cybersecurity, operations, supporto e continuità operativa per le aziende che hanno bisogno di una tecnologia sicura, affidabile e scalabile.",
      deliverEyebrow: "Come lavoriamo",
      deliverTitle: "Il framework dall'idea alle operazioni",
      deliverBody:
        "Ogni progetto segue lo stesso percorso rigoroso, dal concept a operazioni affidabili.",
    },
    solutions: {
      eyebrow: "Soluzioni",
      title: "Soluzioni costruite intorno ai risultati di business",
      description:
        "Niente gergo tecnico — solo i risultati di cui hai davvero bisogno. Scegli l'obiettivo che corrisponde alla tua situazione attuale.",
    },
    industries: {
      eyebrow: "Settori",
      title: "I settori che serviamo",
      description:
        "Serviamo organizzazioni troppo complesse per un fornitore IT di base, ma che hanno bisogno di un partner più flessibile, pragmatico e accessibile rispetto a una grande società di consulenza globale.",
      whoEyebrow: "Chi aiutiamo",
      whoTitle: "I nostri clienti ideali",
      whoBody: "Se ti riconosci in uno di questi profili, siamo il partner giusto per la tua situazione.",
    },
    pricing: {
      eyebrow: "Progetti e prezzi",
      title: "Prezzi costruiti intorno ai tuoi obiettivi — non un listino",
      description:
        "Ogni progetto è dimensionato sul tuo ambiente, sui tuoi obiettivi e sul tuo budget. Invece di prezzi standard uguali per tutti, ti forniamo una proposta chiara e personalizzata dopo una breve conversazione. La maggior parte dei clienti inizia con un assessment mirato, per poi estendere il lavoro all'implementazione e ai managed services continuativi.",
      takeHealthCheck: "Fai il check-up gratuito",
      startEyebrow: "Inizia da qui",
      startTitle: "Tre modi semplici per iniziare",
      startBody:
        "Punti di ingresso a basso rischio, pensati per generare valore rapidamente e crescere in modo naturale. Ognuno viene dimensionato e quotato in base alla tua situazione.",
      howEyebrow: "Come definiamo i prezzi",
      howTitle: "Modelli di collaborazione adatti al tuo modo di lavorare",
      howBody:
        "Adattiamo il modello commerciale al tipo di lavoro — perimetro fisso dove è ben definito, pricing basato sul valore per i progetti e canone ricorrente per le collaborazioni continuative.",
      models: [
        {
          title: "Assessment a perimetro fisso",
          body: "Analisi chiare e con tempi definiti, con deliverable precisi — come il Check-up Tecnologico — così sai esattamente cosa otterrai e quanto costa prima di iniziare.",
        },
        {
          title: "Progetti basati sul valore",
          body: "Sviluppo di applicazioni, modernizzazione del cloud e programmi di sicurezza dimensionati e quotati in base a risultati e complessità — non a stime orarie approssimative.",
        },
        {
          title: "Canoni mensili e managed services",
          body: "Collaborazioni mensili prevedibili per IT gestito, manutenzione applicativa, BCDR e leadership frazionale — dimensionate sul tuo team e sui tuoi sistemi.",
        },
      ],
      deliverEyebrow: "Cosa offriamo",
      deliverTitle: "Servizi lungo l'intero ciclo di vita",
      deliverBody:
        "Esplora ogni servizio nel dettaglio — poi parla con il nostro team per un prezzo su misura del tuo perimetro.",
      ctaHeadline: "Costruiamo un preventivo intorno ai tuoi obiettivi",
      ctaCopy:
        "Fai il Check-up Tecnologico gratuito o prenota una breve call — ti consiglieremo il punto di partenza più adatto e ti forniremo una proposta chiara e personalizzata.",
      ctaButton: "Parla con un esperto",
    },
    about: {
      eyebrow: "Chi siamo",
      title: "Creata da chi opera sul campo, non solo da consulenti",
      description:
        "B&B Global Services è nata per aiutare le aziende a colmare il divario tra le idee tecnologiche e la loro reale esecuzione operativa — con delivery da remoto per clienti in tutto il mondo dalle nostre sedi di Boston e Roma.",
      approachEyebrow: "Il nostro approccio",
      approachTitle: "Uniamo le competenze",
      approachBody:
        "Molte aziende sanno consigliare. Alcune sanno costruire. Altre sanno dare supporto. Noi uniamo queste competenze perché le organizzazioni possano muoversi più rapidamente, ridurre i rischi, migliorare l'affidabilità e ottenere più valore dalla tecnologia.",
      visionLabel: "Visione",
      visionBody:
        "Diventare il partner di fiducia per il delivery tecnologico delle aziende in crescita, aiutandole a progettare, sviluppare, proteggere, gestire e migliorare continuamente i sistemi che alimentano il loro futuro.",
      missionLabel: "Missione",
      missionBody:
        "Aiutare le organizzazioni a trasformare le idee tecnologiche in soluzioni di business sicure, scalabili, affidabili e supportate, attraverso strategia, ingegneria, cloud, cybersecurity, operations e managed services.",
      founderEyebrow: "Il fondatore",
      founderTitle: "Esperienza profonda e sul campo",
      founderRole: "Fondatore e Principal",
      founderBio:
        "Bruno Dossantos porta un'esperienza profonda su cloud engineering, DevOps, SRE, application delivery, AI, piattaforme dati, cybersecurity, business continuity e operazioni enterprise. Il suo percorso include la guida di team tecnologici, la costruzione di piattaforme, la modernizzazione di sistemi, il supporto ad ambienti mission-critical e l'aiuto alle organizzazioni nel migliorare il delivery, dalla strategia al supporto.",
      expertise: [
        "Cloud engineering",
        "DevOps e SRE",
        "Application delivery",
        "AI e piattaforme dati",
        "Cybersecurity e DevSecOps",
        "Business continuity",
        "Operazioni enterprise",
        "Managed services",
      ],
      deliverEyebrow: "Come lavoriamo",
      deliverTitle: "Il framework dall'idea alle operazioni",
    },
    insights: {
      eyebrow: "Approfondimenti",
      title: "Pensiero concreto, senza hype",
      description:
        "Punti di vista su strategia tecnologica, delivery, sicurezza, resilienza e AI per le aziende in crescita.",
      minRead: "min di lettura",
      allInsights: "Tutti gli approfondimenti",
      moreInsights: "Altri approfondimenti",
      applyTitle: "Pronto a metterlo in pratica?",
      applyBody:
        "Prenota una consulenza e lo applicheremo ai tuoi sistemi, ai tuoi obiettivi e ai tuoi vincoli.",
    },
    caseStudies: {
      eyebrow: "Casi di successo",
      title: "Risultati sul campo",
      description:
        "Esempi anonimizzati tratti dalla nostra esperienza di delivery in ambito enterprise e mid-market. Non nominiamo mai i datori di lavoro precedenti — usiamo espressioni come 'grande realtà sanitaria enterprise' o 'organizzazione SaaS enterprise'.",
      // Fixed order: challenge, approach, solution, outcome.
      sections: [
        { label: "La sfida", question: "Qual era il problema?" },
        { label: "L'approccio", question: "Cosa ha fatto B&B." },
        { label: "La soluzione", question: "Cosa è stato implementato." },
        { label: "Il risultato", question: "Cosa è migliorato?" },
      ],
      challengeLabel: "Sfida:",
      outcomeLabel: "Risultato:",
      noteLabel: "Nota:",
      noteBody:
        "Le identità dei clienti sono anonimizzate. Non nominiamo mai datori di lavoro o clienti precedenti senza autorizzazione scritta.",
      moreEyebrow: "Altro",
      moreTitle: "Altri casi di successo",
      read: "Leggi",
      readFullStory: "Leggi la storia completa",
      ctaHeadline: "Vuoi risultati come questi per la tua azienda?",
      ctaCopy:
        "Parliamo dei tuoi obiettivi, dei tuoi sistemi e dei tuoi vincoli — e tracciamo un percorso da dove sei oggi fino a operazioni affidabili.",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Fissa una discovery call",
      description:
        "Che tu stia sviluppando un'app, modernizzando il cloud, rafforzando la sicurezza, supportando il tuo personale o preparandoti al disaster recovery — parliamone.",
      bookDirectTitle: "Preferisci prenotare direttamente?",
      bookDirectBody: "Scegli l'orario che preferisci e arriveremo preparati.",
      bookOnCalendly: "Prenota su Calendly",
      hqLine: "Sede centrale: {hq} — al servizio di clienti in tutto il mondo",
      capabilityTitle: "Capability statement",
      capabilityBody:
        "Una panoramica in una pagina delle nostre competenze, dei nostri elementi distintivi e dei modelli di collaborazione — pronta da condividere con il tuo team.",
      viewDownload: "Visualizza e scarica",
      easyWaysTitle: "Modi semplici per iniziare",
      bookInstantlyEyebrow: "Prenota subito",
      pickTimeTitle: "Scegli l'orario che preferisci",
      pickTimeBody:
        "Prenota una discovery call di 30 minuti: arriveremo preparati per parlare dei tuoi obiettivi.",
    },
  },
  form: {
    name: "Nome",
    company: "Azienda",
    email: "Email",
    phone: "Telefono",
    companySize: "Dimensione dell'azienda",
    serviceNeeded: "Servizio richiesto",
    budgetRange: "Fascia di budget",
    timeline: "Tempistiche",
    message: "Messaggio",
    select: "Seleziona…",
    employees: "dipendenti",
    // Display labels for select options. The submitted values stay in English
    // (see ContactForm) so lead scoring and CRM fields remain stable.
    services: [
      "Strategia e advisory",
      "Sviluppo di applicazioni e prodotti",
      "Cloud, DevOps e platform engineering",
      "DevSecOps e cybersecurity",
      "Affidabilità, operations e BCDR",
      "IMAC e servizi tecnologici gestiti",
      "Non lo so ancora",
    ],
    budgets: [
      "Meno di $10.000",
      "$10.000–$25.000",
      "$25.000–$100.000",
      "$100.000–$250.000",
      "Oltre $250.000",
      "Managed services mensili",
    ],
    timelines: ["Subito", "1–3 mesi", "3–6 mesi", "Oltre 6 mesi", "Sto solo esplorando"],
    messagePlaceholder: "Raccontaci i tuoi obiettivi, i tuoi sistemi e il problema che vorresti risolvere.",
    submit: "Fissa una discovery call",
    sending: "Invio in corso…",
    errorGeneric: "Si è verificato un errore.",
    successTitle: "Grazie — ti ricontatteremo a breve.",
    successBody:
      "Un membro del nostro team ti ricontatterà entro un giorno lavorativo per fissare la tua discovery call.",
    consent:
      "Inviando il modulo, accetti di essere contattato in merito alla tua richiesta. Rispettiamo la tua privacy e non condividiamo mai le tue informazioni.",
  },
  switcher: { label: "Lingua" },
};
