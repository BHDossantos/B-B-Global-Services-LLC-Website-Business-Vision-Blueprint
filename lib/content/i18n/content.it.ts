// IT content overlay — translated fields keyed by slug.
// Filled by translation; anything missing falls back to English.
import type { ContentOverlay } from "./types";

export const itContent: ContentOverlay = {
  services: {
    "strategy-advisory": {
      title: "Strategia e Advisory",
      headline: "Strategia e Advisory Tecnologica",
      summary:
        "Assessment, roadmap e leadership da Fractional CTO che trasformano gli obiettivi di business in un piano tecnologico concretamente attuabile.",
    },
    "application-development": {
      title: "Sviluppo Applicazioni e Prodotti",
      headline: "Software su Misura, App Mobile, Piattaforme SaaS e Soluzioni IA",
      summary:
        "Definiamo, progettiamo, sviluppiamo, rilasciamo e supportiamo applicazioni web, mobile, SaaS e basate sull'IA.",
    },
    "data-analytics-ai": {
      title: "Dati, Analytics e IA",
      headline: "Dati, Analytics, Machine Learning e Implementazione dell'IA",
      summary:
        "Trasformiamo i dati in decisioni e prodotti intelligenti — dalle piattaforme dati e analytics fino a machine learning, IA generativa e MLOps.",
    },
    "cloud-devops": {
      title: "Cloud, DevOps e Platform Engineering",
      headline: "Cloud, DevOps, CI/CD e Platform Engineering",
      summary:
        "Architetture cloud, Infrastructure as Code, CI/CD e platform engineering su AWS, Azure e GCP.",
    },
    "devsecops-cybersecurity": {
      title: "DevSecOps e Cybersecurity",
      headline: "La Sicurezza Integrata nella Delivery",
      summary:
        "DevSecOps, gestione delle identità, vulnerability management e preparazione alla compliance, integrati lungo tutto il ciclo di delivery.",
    },
    "reliability-bcdr": {
      title: "Affidabilità, Operations e BCDR",
      headline: "Affidabilità, Resilienza e Continuità Operativa",
      summary:
        "Observability, pratiche SRE, gestione degli incidenti e disaster recovery testato per mantenere sempre operativi i sistemi mission-critical.",
    },
    "managed-it-imac": {
      title: "IMAC e Servizi Tecnologici Gestiti",
      headline: "Install, Move, Add, Change e Supporto IT Gestito",
      summary:
        "Deployment dei dispositivi, service desk, supporto di rete e operations gestite per una forza lavoro produttiva e sempre assistita.",
    },
  },
  solutions: {
    "build-my-app": {
      title: "Sviluppa la Tua App",
      summary:
        "Trasforma un'idea in un prodotto funzionante: web, mobile, SaaS o basato sull'IA.",
      audience: "Founder, imprenditori, team interni.",
      body: "Hai un'idea ma ti serve un team che la trasformi in un prodotto funzionante? B&B Global Services ti aiuta a definire, progettare, sviluppare, rilasciare e supportare applicazioni web, mobile, SaaS e basate sull'IA.",
    },
    "modernize-my-technology": {
      title: "Modernizza la Tua Tecnologia",
      summary:
        "Passa da piattaforme legacy e processi manuali a una tecnologia moderna, sicura e automatizzata.",
      audience: "Aziende con sistemi obsoleti.",
      body: "Aiutiamo le organizzazioni a passare da piattaforme legacy, processi manuali e sistemi fragili a una tecnologia moderna basata sul cloud, sicura e automatizzata.",
    },
    "adopt-ai": {
      title: "Adotta IA e Analytics",
      summary:
        "Individua le opportunità di IA e dati con un ROI reale, poi realizzale e portale in produzione in modo responsabile.",
      audience: "Leader che vogliono usare IA e dati per ottenere risultati concreti.",
      body: "Vai oltre l'hype dell'IA. Ti aiutiamo a identificare i casi d'uso che generano davvero valore, a costruire soluzioni di IA generativa e machine learning, a trasformare i tuoi dati in decisioni e a portare tutto in produzione con governance e monitoraggio adeguati.",
    },
    "fintech-insurance-platforms": {
      title: "Lancia un Prodotto Fintech o Assicurativo",
      summary:
        "Costruisci e gestisci piattaforme di pagamenti, credito, banking e assicurazioni con la sicurezza e i controlli richiesti dai regolatori.",
      audience: "Fintech, compagnie assicurative, istituti di credito, banche e team dei servizi finanziari.",
      body: "I prodotti finanziari e assicurativi richiedono standard più elevati: movimentazione di denaro, dati sensibili dei clienti, tracciabilità degli audit e regolatori sempre attenti. Aiutiamo fintech, assicurazioni, istituti di credito e team dei servizi finanziari a progettare, sviluppare, proteggere e gestire piattaforme all'altezza di questi standard — dai pagamenti ai flussi di credito fino ai sistemi di polizze, sinistri e underwriting — con compliance readiness e affidabilità integrate fin dal primo giorno.",
    },
    "secure-my-business": {
      title: "Proteggi la Tua Azienda",
      summary:
        "Integra la sicurezza in applicazioni, cloud, utenti, processi e operations.",
      audience: "Aziende preoccupate per la cybersecurity.",
      body: "Integriamo la sicurezza in applicazioni, cloud, utenti, processi e operations.",
    },
    "support-my-workforce": {
      title: "Supporta il Tuo Team",
      summary:
        "Supporto tecnologico concreto: configurazione dei dispositivi, IMAC, service desk e operations gestite.",
      audience: "Aziende che necessitano di IT gestito.",
      body: "Forniamo supporto tecnologico concreto: configurazione dei dispositivi, IMAC, service desk, assistenza agli utenti, traslochi di ufficio e gestione delle operations IT.",
    },
    "disaster-recovery": {
      title: "Preparati al Disaster Recovery",
      summary:
        "Definisci RTO/RPO, valida i backup, conduci esercitazioni tabletop e preparati a gestire le interruzioni.",
      audience: "Aziende senza piani di ripristino testati.",
      body: "Ti aiutiamo a definire RTO/RPO, creare piani di ripristino, validare i backup, condurre esercitazioni tabletop e preparare la tua organizzazione ad affrontare le interruzioni.",
    },
    "scale-my-team": {
      title: "Fai Crescere il Tuo Team Tecnologico",
      summary:
        "Leadership fractional, team di ingegneri e servizi gestiti per crescere senza un intero reparto interno.",
      audience: "Aziende in crescita.",
      body: "Forniamo leadership fractional, team di ingegneri, delivery tecnica e servizi gestiti per aiutare le aziende a crescere senza dover assumere un intero reparto interno.",
    },
  },
  industries: {
    "healthcare": {
      name: "Sanità",
      cardDescription:
        "Tecnologia sicura e conforme per sistemi clinici e amministrativi.",
      title: "Consulenza Tecnologica e Servizi Gestiti per la Sanità",
      intro:
        "Le organizzazioni sanitarie affrontano alcune delle sfide tecnologiche più delicate: sicurezza dei pazienti, dati sensibili, requisiti di conformità stringenti e tolleranza zero per i fermi di sistema. Aiutiamo i team clinici e amministrativi a modernizzare e gestire la tecnologia in totale sicurezza — senza rallentare l'assistenza.",
    },
    "financial-services": {
      name: "Servizi Finanziari, Fintech & Assicurazioni",
      cardDescription:
        "Piattaforme affidabili e sicure per banche, fintech e assicurazioni — con i controlli richiesti dalla finanza regolamentata.",
      title: "Consulenza Tecnologica per Servizi Finanziari, Fintech e Assicurazioni",
      intro:
        "Nei servizi finanziari e assicurativi la fiducia è il prodotto — e la fiducia dipende da una tecnologia sicura, affidabile e ben governata. Aiutiamo banche, istituti di credito, consulenti, fintech, compagnie assicurative e insurtech a realizzare e gestire piattaforme all'altezza delle aspettative di regolatori e clienti.",
    },
    "saas-technology": {
      name: "SaaS e Tecnologia",
      cardDescription:
        "Product engineering, cloud e affidabilità per software company in crescita.",
      title: "Engineering, Cloud e Affidabilità per Aziende SaaS e Tecnologiche",
      intro:
        "Le software company vivono o muoiono di velocità di rilascio e affidabilità. Aiutiamo le aziende SaaS e tecnologiche a sviluppare il prodotto, modernizzare il cloud, adottare DevOps e SRE e integrare l'IA — così l'engineering scala senza caos.",
    },
    "professional-services": {
      name: "Servizi Professionali",
      cardDescription:
        "Applicazioni moderne e IT gestito per studi e società basati sul lavoro intellettuale.",
      title: "Tecnologia e IT Gestito per Studi e Società di Servizi Professionali",
      intro:
        "Gli studi professionali si fondano su persone, competenze e fiducia dei clienti. Aiutiamo studi legali, commercialisti, agenzie e società di consulenza a modernizzare gli strumenti, proteggere i dati dei clienti e ottenere un supporto IT affidabile — così il team può concentrarsi sui clienti, non sulla tecnologia.",
    },
    "real-estate": {
      name: "Real Estate e Property Management",
      cardDescription:
        "Portali, integrazioni e supporto per immobili e team distribuiti.",
      title: "Tecnologia per il Real Estate e il Property Management",
      intro:
        "Il real estate e il property management operano su molte sedi, sistemi e interlocutori diversi. Aiutiamo a connettere immobili, team e strumenti con portali, integrazioni e supporto affidabili — perché le operations funzionino senza intoppi ovunque facciate business.",
    },
    "hospitality": {
      name: "Hospitality",
      cardDescription:
        "Operations resilienti e tecnologia on-site per le attività a contatto con gli ospiti.",
      title: "Tecnologia e IT Gestito per l'Hospitality",
      intro:
        "Nell'hospitality la tecnologia è invisibile quando funziona e molto visibile quando si ferma. Aiutiamo hotel, ristoranti e gruppi alberghieri a garantire operations resilienti, configurare una tecnologia on-site affidabile e supportare i sistemi rivolti agli ospiti 24 ore su 24.",
    },
    "small-mid-sized-business": {
      name: "Piccole e Medie Imprese",
      cardDescription:
        "Un unico partner di fiducia per strategia, sviluppo, sicurezza e supporto continuativo.",
      title: "Il Partner Tecnologico delle Piccole e Medie Imprese",
      intro:
        "Le aziende in crescita superano i limiti dell'IT di base, ma non sono ancora pronte per una grande società di consulenza. Noi siamo il partner intermedio: un unico team di fiducia per strategia, sviluppo, sicurezza, affidabilità e supporto continuativo — su misura per la fase in cui vi trovate.",
    },
    "private-equity": {
      name: "Società in Portafoglio di Private Equity",
      cardDescription:
        "Due diligence, modernizzazione e creazione di valore in tutto il portafoglio.",
      title: "Due Diligence Tecnologica e Creazione di Valore per il Private Equity",
      intro:
        "I fondi di private equity hanno bisogno che la tecnologia sia un asset, non un rischio — in fase di due diligence e per tutta la durata dell'investimento. Aiutiamo a valutare il rischio tecnologico prima delle operazioni, per poi modernizzare, mettere in sicurezza e gestire i sistemi delle società in portafoglio, creando valore misurabile.",
    },
  },
  site: {
    lifecyclePhases: [
      {
        name: "Scoperta",
        description:
          "Comprendere obiettivi di business, sistemi, rischi, utenti e vincoli.",
      },
      {
        name: "Progettazione",
        description:
          "Definire architettura, roadmap, piano di delivery, modello di sicurezza e modello operativo.",
      },
      {
        name: "Sviluppo",
        description:
          "Realizzare applicazioni, piattaforme, automazioni, integrazioni e infrastruttura.",
      },
      {
        name: "Sicurezza",
        description:
          "Integrare DevSecOps, gestione delle identità, compliance, vulnerability management e controlli di sicurezza.",
      },
      {
        name: "Rilascio",
        description:
          "Implementare CI/CD, governance dei rilasci, deployment cloud, testing e documentazione.",
      },
      {
        name: "Gestione",
        description:
          "Garantire observability, supporto, gestione degli incidenti, service desk, operations gestite e miglioramento continuo.",
      },
      {
        name: "Ripristino",
        description:
          "Costruire disaster recovery, business continuity, validazione dei backup, runbook, esercitazioni tabletop e test di ripristino.",
      },
      {
        name: "Ottimizzazione",
        description:
          "Migliorare performance, costi, affidabilità, automazione, esperienza utente e risultati di business.",
      },
    ],
    painPoints: [
      "Rilasci software lenti",
      "Fornitori scollegati tra loro",
      "Documentazione carente",
      "Controlli di sicurezza deboli",
      "Deployment manuali",
      "Complessità del cloud",
      "Assenza di disaster recovery",
      "Nessuna ownership chiara dopo il lancio",
      "Esperienza di supporto scadente",
      "Interruzioni e incidenti ricorrenti",
    ],
    differentiators: [
      "Non ci limitiamo a consigliare. Costruiamo.",
      "Non ci limitiamo a costruire. Gestiamo.",
      "Non ci limitiamo a gestire. Proteggiamo e ripristiniamo.",
      "Conosciamo la strategia executive e l'ingegneria sul campo.",
      "Portiamo pratiche di livello enterprise alle aziende in crescita.",
      "Uniamo consulenza, delivery software, cloud, cybersecurity, IMAC e managed services.",
    ],
    featuredSolutions: [
      "Assessment Tecnologico",
      "Realizzazione di Applicazioni",
      "Assessment di Preparazione all'IA",
      "Realizzazione di Piattaforme Fintech e Assicurative",
      "Integrazione di Pagamenti e Sistemi Core",
      "Modernizzazione Cloud",
      "Implementazione DevSecOps",
      "Programma di Business Continuity e Disaster Recovery",
      "Supporto IT Gestito",
      "Advisory da Fractional CTO",
      "Allestimento Tecnologico dell'Ufficio",
      "Assessment di Affidabilità della Piattaforma Dati",
    ],
    idealCustomers: [
      "Aziende di medie dimensioni con 50–5.000 dipendenti",
      "Startup che costruiscono la loro prima vera piattaforma",
      "Aziende che modernizzano sistemi legacy",
      "Aziende che necessitano di sviluppo applicativo e supporto a lungo termine",
      "Organizzazioni con lacune su cloud, sicurezza o affidabilità",
      "Fondi di private equity che valutano o migliorano le società in portafoglio",
      "Realtà sanitarie e aziende regolamentate che richiedono una delivery tecnologica sicura",
    ],
    faqs: [
      {
        question:
          "In cosa B&B è diversa da un tipico fornitore IT o da una grande società di consulenza?",
        answer:
          "Aiutiamo le aziende che hanno superato i limiti del supporto IT di base ma non sono pronte per le grandi società di consulenza. Uniamo strategia, delivery software, cloud, cybersecurity, IMAC e managed services in un unico modello di delivery integrato — pratiche di livello enterprise senza complessità e costi enterprise.",
      },
      {
        question: "Vi limitate a consigliare, o sviluppate e gestite anche?",
        answer:
          "Tutte e tre le cose. Consigliamo, sviluppiamo, mettiamo in sicurezza, rilasciamo, gestiamo e ripristiniamo. Il senso del nostro framework dall'idea alle operazioni è proprio questo: lo stesso partner può accompagnarti dal concept fino a operations affidabili e supportate.",
      },
      {
        question: "Con aziende di che dimensioni lavorate?",
        answer:
          "Ci concentriamo sul mid-market e sulle aziende in crescita — in genere da 25 a 5.000 dipendenti — incluse le startup che costruiscono la loro prima vera piattaforma e le società in portafoglio di fondi di private equity.",
      },
      {
        question: "Come iniziano di solito gli incarichi?",
        answer:
          "La maggior parte degli incarichi inizia con una discovery call e un assessment mirato, come il nostro Check-up Tecnologico. L'assessment produce una roadmap con priorità chiare, dopo la quale possiamo passare all'implementazione e al supporto continuativo.",
      },
      {
        question: "Offrite managed services continuativi dopo un progetto?",
        answer:
          "Sì. Offriamo supporto tecnologico gestito, manutenzione applicativa e retainer BCDR, così dopo il lancio ci sono un'ownership chiara e un miglioramento continuo — nessun passaggio di consegne nel vuoto.",
      },
      {
        question: "Quali settori servite?",
        answer:
          "Sanità, servizi finanziari, fintech, assicurazioni, SaaS e tecnologia, servizi professionali, real estate e property management, hospitality, piccole e medie imprese e società in portafoglio di private equity.",
      },
    ],
    engagementOffers: [
      {
        name: "Check-up Tecnologico",
        tagline: "Una revisione rapida a perimetro fisso e una roadmap a 90 giorni.",
        includes: [
          "Analisi dello stato attuale",
          "Analisi dei rischi",
          "Revisione di cloud / sicurezza / applicazioni / supporto",
          "Executive summary",
          "Roadmap a 90 giorni",
        ],
      },
      {
        name: "Dall'Idea all'App MVP",
        tagline: "Dal concept a un prodotto funzionante e rilasciato.",
        includes: [
          "Discovery",
          "UX/UI",
          "Architettura",
          "Sviluppo dell'MVP",
          "Deployment",
          "Supporto di base",
        ],
      },
      {
        name: "Supporto Tecnologico Gestito",
        tagline: "Supporto continuativo, dimensionato sul tuo team e sui tuoi sistemi.",
        includes: [
          "Supporto agli utenti",
          "Supporto ai dispositivi",
          "IMAC",
          "Coordinamento dei fornitori",
          "Reportistica mensile",
          "Supervisione di base di sicurezza e backup",
        ],
      },
    ],
  },
  caseStudies: {
    "enterprise-observability-transformation": {
      title: "Trasformazione dell'Observability Enterprise",
      industry: "Grande realtà sanitaria enterprise",
      challenge:
        "Interruzioni ricorrenti e risposta agli incidenti lenta in un panorama di monitoraggio frammentato, senza un'unica fonte di verità.",
      approach:
        "Abbiamo analizzato lo stack di observability, definito SLO/SLI e standardizzato telemetria, dashboard e alerting tra i team.",
      solution:
        "Abbiamo implementato un'observability unificata con alerting azionabile, runbook per la reperibilità e un processo di gestione degli incidenti.",
      outcome:
        "Tempi di rilevamento e risoluzione più rapidi, meno incidenti con impatto sui clienti e una ownership operativa più chiara.",
    },
    "cloud-delivery-modernization": {
      title: "Modernizzazione della Delivery Cloud",
      industry: "Organizzazione SaaS enterprise",
      challenge:
        "Deployment manuali e ambienti incoerenti rallentavano i rilasci e introducevano rischi.",
      approach:
        "Abbiamo progettato un modello di delivery cloud-native con Infrastructure as Code e ambienti standardizzati.",
      solution:
        "Abbiamo costruito pipeline CI/CD, provisioning automatizzato e governance dei rilasci con testing integrato.",
      outcome:
        "Rilasci decisamente più rapidi e sicuri e un percorso ripetibile dal commit alla produzione.",
    },
    "data-platform-reliability-program": {
      title: "Programma di Affidabilità della Piattaforma Dati",
      industry: "Organizzazione dati enterprise",
      challenge:
        "Pipeline dati inaffidabili e ownership poco chiara erodevano la fiducia in una reportistica critica per il business.",
      approach:
        "Abbiamo mappato i flussi di dati, definito obiettivi di affidabilità e strumentato le pipeline end-to-end.",
      solution:
        "Abbiamo introdotto monitoraggio, controlli di qualità dei dati e processi di gestione degli incidenti per la piattaforma dati.",
      outcome:
        "Maggiore affidabilità delle pipeline e rinnovata fiducia nei prodotti dati in tutta l'azienda.",
    },
    "cicd-devsecops-implementation": {
      title: "Implementazione di CI/CD e DevSecOps",
      industry: "Azienda tecnologica mid-market",
      challenge:
        "La sicurezza era un controllo tardivo che ritardava i rilasci e faceva emergere i problemi troppo tardi.",
      approach:
        "Abbiamo integrato la sicurezza nella pipeline di delivery con controlli automatizzati e ownership condivisa.",
      solution:
        "Abbiamo implementato scansioni di sicurezza in CI/CD, gestione dei secrets, miglioramenti IAM e un workflow di remediation.",
      outcome:
        "Vulnerabilità individuate prima, remediation più rapida e rilasci sicuri by default.",
    },
    "business-continuity-disaster-recovery-program": {
      title: "Programma di Business Continuity e Disaster Recovery",
      industry: "Organizzazione di servizi regolamentati",
      challenge:
        "L'assenza di un piano di ripristino testato e di RTO/RPO definiti lasciava l'azienda esposta alle interruzioni.",
      approach:
        "Abbiamo definito gli obiettivi di ripristino, documentato i runbook e validato i backup su scenari reali.",
      solution:
        "Abbiamo consegnato un programma BCDR con runbook, esercitazioni tabletop e una cadenza regolare di test di ripristino.",
      outcome:
        "Una capacità di ripristino testata e difendibile, e la fiducia degli executive nella resilienza dell'azienda.",
    },
    "office-technology-managed-support-setup": {
      title: "Allestimento Tecnologico dell'Ufficio e Supporto Gestito",
      industry: "Studio di servizi professionali in crescita",
      challenge:
        "Un trasloco di sede e la crescita dell'organico avevano superato le capacità di un supporto IT e di un onboarding gestiti in modo estemporaneo.",
      approach:
        "Abbiamo progettato un modello di supporto, un processo di gestione degli asset e uno standard tecnologico per l'ufficio.",
      solution:
        "Abbiamo fornito deployment dei dispositivi, IMAC, configurazione della rete, service desk e reportistica mensile.",
      outcome:
        "Un trasloco senza intoppi, onboarding più rapido e una forza lavoro affidabile e ben supportata.",
    },
    "ai-enabled-application-mvp": {
      title: "MVP di Applicazione Potenziata dall'AI",
      industry: "Azienda di servizi mid-market",
      challenge:
        "Flussi di lavoro manuali e ripetitivi limitavano la capacità operativa e rallentavano le risposte ai clienti.",
      approach:
        "Abbiamo individuato le opportunità di automazione ad alto valore e definito il perimetro di un MVP mirato.",
      solution:
        "Abbiamo costruito un'applicazione potenziata dall'AI con revisione human-in-the-loop e una governance chiara.",
      outcome:
        "Meno lavoro manuale, tempi di risposta più rapidi e una base solida per un'adozione più ampia dell'AI.",
    },
    "generative-ai-knowledge-assistant": {
      title: "Assistente di Conoscenza basato su AI Generativa",
      industry: "Studio di servizi professionali",
      challenge:
        "I consulenti passavano ore a cercare tra documenti sparsi, metodologie e progetti passati, rallentando le risposte ai clienti e generando risposte incoerenti tra i team.",
      approach:
        "Abbiamo mappato la conoscenza interna ad alto valore dello studio, definito i confini di fiducia e di accesso e delineato un assistente retrieval-augmented (RAG) ancorato esclusivamente a fonti approvate.",
      solution:
        "Abbiamo costruito un assistente di AI generativa RAG con citazioni, revisione human-in-the-loop per le risposte sensibili e un modello di governance dell'AI che copre accessi, valutazione e monitoraggio.",
      outcome:
        "Meno tempo speso a cercare documenti, risposte ai clienti più rapide e coerenti e una base governata di cui lo studio si fida abbastanza da estenderla.",
    },
  },
  insights: {
    "idea-to-operations": {
      title: "Perché la maggior parte delle aziende ha un problema di delivery, non un problema tecnologico",
      excerpt:
        "Il divario tra le idee tecnologiche e operazioni affidabili raramente riguarda gli strumenti — riguarda la delivery. Ecco come colmarlo.",
      category: "Strategia",
    },
    "devsecops-for-mid-market": {
      title: "DevSecOps per il mid-market: sicurezza senza rallentamenti",
      excerpt:
        "Integrare la sicurezza nella delivery non deve rallentare i rilasci. Un percorso concreto verso pipeline sicure by default.",
      category: "Sicurezza",
    },
    "bcdr-that-actually-works": {
      title: "Una business continuity che funziona davvero quando serve",
      excerpt:
        "Un piano di ripristino mai testato è una scommessa. Come definire RTO/RPO e dimostrare la tua resilienza.",
      category: "Resilienza",
    },
    "ai-readiness": {
      title: "Preparazione all'AI: da dove dovrebbero davvero partire le aziende mid-market",
      excerpt:
        "Lascia perdere l'hype. Un approccio concreto per individuare le opportunità di AI con un ROI reale e un rischio gestibile.",
      category: "AI",
    },
    "fractional-cto-guide": {
      title: "Quando (e perché) affidarsi a un Fractional CTO",
      excerpt:
        "Un CTO a tempo pieno è una grande scommessa per un'azienda in crescita. Ecco come capire quando la leadership fractional è la scelta più intelligente.",
      category: "Strategia",
    },
    "cloud-cost-optimization": {
      title: "Ottimizzazione dei costi cloud: smetti di pagare troppo senza rallentare",
      excerpt:
        "Le bollette del cloud crescono in silenzio. Un approccio concreto per tagliare gli sprechi senza sacrificare affidabilità o velocità.",
      category: "Cloud",
    },
    "managed-it-vs-in-house": {
      title: "IT gestito o team interno: come dovrebbero decidere le aziende mid-market",
      excerpt:
        "La risposta giusta raramente è tutto o niente. Un framework per decidere cosa tenere in casa e cosa affidare all'esterno.",
      category: "IT Gestito",
    },
    "legacy-system-modernization": {
      title: "Modernizzare i sistemi legacy senza scommettere l'azienda",
      excerpt:
        "Le riscritture big-bang falliscono più spesso di quanto riescano. Come modernizzare i sistemi da cui dipendi senza azzardi.",
      category: "Operations",
    },
    "ai-automation-roi": {
      title: "Dove l'automazione con l'AI ripaga davvero nelle operations mid-market",
      excerpt:
        "Il ROI dell'automazione con l'AI è reale, ma solo in punti specifici. Come trovare i flussi di lavoro da automatizzare per primi.",
      category: "AI",
    },
    "generative-ai-for-business": {
      title: "AI generativa per il business: casi d'uso reali oltre il chatbot",
      excerpt:
        "Il caso d'uso da titolo raramente è quello di valore. Dove l'AI generativa si guadagna il suo posto nelle operations reali — con i guardrail che la rendono sicura da rilasciare.",
      category: "AI",
    },
    "modern-data-stack": {
      title: "Costruire un modern data stack che si guadagni il suo posto",
      excerpt:
        "Un modern data stack è facile da assemblare e facile da sovradimensionare. Come progettarne uno che produca decisioni affidabili invece di una costosa pila di strumenti.",
      category: "Dati",
    },
    "digital-transformation-roadmap": {
      title: "Come costruire una roadmap di trasformazione digitale che sopravviva alla realtà",
      excerpt:
        "La maggior parte delle roadmap di trasformazione è perfetta su una slide e crolla al contatto con la delivery. Come costruirne una che metta in sequenza il valore, sopravviva ai cambiamenti e arrivi davvero in produzione.",
      category: "Strategia",
    },
    "cybersecurity-for-mid-market": {
      title: "Cybersecurity per il mid-market: una lista di priorità concreta",
      excerpt:
        "Non puoi fare tutto insieme, e non ne hai bisogno. Una lista concreta e ordinata degli interventi di sicurezza che riducono davvero il rischio per un'azienda in crescita.",
      category: "Sicurezza",
    },
    "cloud-migration-guide": {
      title: "Migrare al cloud senza storie dell'orrore",
      excerpt:
        "Le migrazioni si guadagnano la loro cattiva fama quando sono affrettate e non pianificate. Un approccio pragmatico che sposta i workload in sicurezza, controlla i costi ed evita i soliti disastri.",
      category: "Cloud",
    },
  },
};
