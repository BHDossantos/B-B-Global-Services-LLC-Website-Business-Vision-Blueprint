import type { Messages } from "./en";

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export const pt: Widen<Messages> = {
  nav: {
    services: "Serviços",
    solutions: "Soluções",
    industries: "Setores",
    pricing: "Preços",
    caseStudies: "Cases",
    insights: "Insights",
    about: "Sobre",
    contact: "Contato",
    global: "Entrega Global",
  },
  cta: {
    bookConsultation: "Agende uma Consultoria",
    exploreServices: "Conheça os Serviços",
    freeHealthCheck: "Diagnóstico Gratuito de Tecnologia",
    talkToTeam: "Fale com Nosso Time",
    requestAssessment: "Solicite uma Avaliação",
    viewAllServices: "Ver todos os serviços",
    learnMore: "Saiba mais",
    getStarted: "Começar",
    scheduleConsultation: "Agende uma Consultoria",
    readArticle: "Ler artigo",
    startFreeCheck: "Iniciar o Diagnóstico Gratuito",
  },
  trust: ["Consultoria gratuita", "Sem compromisso", "Resposta em até 1 dia útil"],
  hero: {
    headlinePre: "Entrega de Tecnologia",
    headlineHighlight: "Da Ideia às Operações",
    sub: "A B&B Global Services ajuda empresas a projetar, construir, proteger, implantar, sustentar e recuperar soluções de tecnologia críticas em software, cloud, DevOps, cibersegurança, IA, serviços gerenciados e continuidade de negócios.",
    lifecycleTitle: "O Ciclo de Vida da Tecnologia",
    fromIdea: "Ideia",
    toOps: "Operações Confiáveis",
    trustLine:
      "Um parceiro global e remote-first com experiência corporativa em cloud, DevOps, SRE, IA, entrega de aplicações, cibersegurança, plataformas de dados e resiliência operacional — com atuação mundial.",
  },
  lifecycle: ["Ideia", "Design", "Construção", "Proteção", "Implantação", "Operação", "Recuperação", "Otimização"],
  home: {
    problemEyebrow: "O Verdadeiro Problema",
    problemTitle:
      "A Maioria das Empresas Não Tem um Problema de Tecnologia. Tem um Problema de Entrega.",
    problemBody:
      "As empresas estão sob pressão para acelerar, reduzir indisponibilidades, fortalecer a segurança, modernizar sistemas, adotar IA, controlar custos de cloud e dar suporte aos usuários sem aumentar o caos operacional. A B&B Global Services traz a estratégia, a engenharia, as operações e o modelo de suporte necessários para levar a tecnologia do conceito à execução confiável.",
    whatEyebrow: "O Que Fazemos",
    whatTitle: "Um Único Parceiro em Todo o Ciclo de Vida da Tecnologia",
    whatBody:
      "Da estratégia às operações de longo prazo, cobrimos as disciplinas que a maioria das empresas precisa reunir entre diversos fornecedores.",
    assessEyebrow: "Ferramenta Gratuita de 2 Minutos",
    assessTitle: "Quão saudável é a sua tecnologia?",
    assessBody:
      "Faça o Diagnóstico Gratuito de Tecnologia para avaliar sua maturidade em estratégia, entrega, cloud, segurança, confiabilidade, recuperação e suporte — e receba na hora uma recomendação do próximo passo.",
    frameworkEyebrow: "O Framework de Entrega B&B",
    frameworkTitle: "Framework Da Ideia às Operações",
    frameworkBody:
      "Um modelo repetível que leva a tecnologia do conceito a operações confiáveis e bem suportadas — e a aprimora continuamente.",
    industriesEyebrow: "Setores",
    industriesTitle: "Feito para Organizações Entre o TI Básico e a Grande Consultoria",
    industriesBody:
      "Atendemos organizações complexas demais para um provedor de TI básico, mas que precisam de um parceiro mais flexível, prático e acessível do que uma grande consultoria global.",
    globalEyebrow: "Entrega Global",
    globalTitle: "Um Parceiro Global, Entregue Remotamente",
    globalBody:
      "A partir de nossas bases em Boston e Roma, atuamos no mundo todo — com operação follow-the-sun, cloud multirregião e entrega que respeita as necessidades regionais de dados e conformidade.",
    whyEyebrow: "Por Que a B&B Global Services",
    whyTitle: "Expertise Corporativa. Execução Prática. Suporte de Longo Prazo.",
    featuredEyebrow: "Soluções em Destaque",
    featuredTitle: "Engajamentos Focados em Resultados",
    featuredBody: "Formas claras e empacotadas de começar — cada uma ligada a um resultado de negócio real.",
    caseEyebrow: "Cases",
    caseTitle: "Resultados na Prática",
    caseBody:
      "Exemplos anonimizados extraídos da experiência de entrega em grandes empresas e no mid-market.",
    faqEyebrow: "Perguntas Frequentes",
    faqTitle: "Perguntas Comuns",
    finalTitle: "Pronto para Sair das Ideias de Tecnologia e Chegar à Execução Confiável?",
    finalBody:
      "Seja para construir uma aplicação, modernizar sua cloud, fortalecer a cibersegurança, dar suporte à sua equipe ou criar um plano de recuperação de desastres, a B&B Global Services ajuda você a sair da visão e chegar à execução.",
  },
  footer: {
    services: "Serviços",
    solutions: "Soluções",
    company: "Empresa",
    serviceAreas: "Áreas de atuação:",
    rights: "Todos os direitos reservados.",
    newsletterTitle: "Insights práticos de tecnologia, sem hype",
    newsletterBody:
      "Reflexões ocasionais e úteis sobre estratégia, cloud, segurança e resiliência para empresas em crescimento.",
    subscribe: "Inscrever-se",
    emailPlaceholder: "voce@empresa.com",
    privacy: "Política de Privacidade",
    terms: "Termos de Serviço",
  },
  common: {
    home: "Início",
    mostPopular: "Mais popular",
    customQuote: "Orçamento personalizado",
    requestQuote: "Solicitar Orçamento",
    requestProposal: "Solicitar Proposta",
    requestCustomQuote: "Solicite um orçamento personalizado",
    faq: "Perguntas Frequentes",
    exploreIndustries: "Conheça os setores",
    browseSolutions: "Explorar soluções",
    viewAllCaseStudies: "Ver todos os cases",
  },
  detail: {
    service: {
      whatsIncluded: "O Que Está Incluído",
      capabilities: "Competências",
      outcomes: "Resultados",
      deliverables: "Entregáveis",
      customTitle: "Engajamento com Escopo Sob Medida",
      customBody:
        "Cada engajamento é adaptado ao seu ambiente, aos seus objetivos e ao seu orçamento. Fale com nosso time e montaremos uma proposta clara e personalizada — sem tabelas de preço padronizadas.",
      customBullets: [
        "Avaliações de escopo fixo com entregáveis definidos",
        "Precificação baseada em valor para projetos",
        "Mensalidades para serviços gerenciados",
      ],
      exploreEyebrow: "Explore",
      otherServices: "Outros Serviços",
      commonQuestions: "Perguntas Comuns",
    },
    solution: {
      whoItsFor: "Para Quem É",
      whatsIncluded: "O que está incluído",
      relatedEyebrow: "Serviços Relacionados",
      relatedTitle: "As Competências Por Trás Desta Solução",
    },
    industry: {
      challengeEyebrow: "O Desafio",
      challengeTitle: "O Que as Equipes de {name} Estão Enfrentando",
      helpEyebrow: "Como Ajudamos",
      helpTitle: "Onde Fazemos a Diferença",
      relevantEyebrow: "Serviços Mais Relevantes",
      relevantTitle: "Serviços Que Fazem a Diferença em {name}",
      moreEyebrow: "Mais Setores",
      moreTitle: "Atendemos Organizações Como a Sua",
      ctaHeadline: "Vamos Falar de Tecnologia para o Seu Negócio de {name}",
      ctaCopy:
        "Agende uma consultoria ou faça o Diagnóstico Gratuito de Tecnologia para saber onde você está e o que priorizar.",
    },
  },
  pages: {
    services: {
      eyebrow: "Serviços",
      title: "Serviços de Tecnologia em Todo o Ciclo de Vida da Entrega",
      description:
        "A B&B Global Services oferece serviços de consultoria, desenvolvimento, cloud, cibersegurança, operações, suporte e continuidade para empresas que precisam que a tecnologia funcione com segurança, confiabilidade e em escala.",
      deliverEyebrow: "Como Entregamos",
      deliverTitle: "O Framework Da Ideia às Operações",
      deliverBody:
        "Cada engajamento segue o mesmo caminho disciplinado do conceito às operações confiáveis.",
    },
    solutions: {
      eyebrow: "Soluções",
      title: "Soluções Construídas em Torno de Resultados de Negócio",
      description:
        "Nada de jargão técnico — os resultados de que você realmente precisa. Escolha o objetivo que corresponde ao seu momento atual.",
    },
    industries: {
      eyebrow: "Setores",
      title: "Setores Que Atendemos",
      description:
        "Atendemos organizações complexas demais para um provedor de TI básico, mas que precisam de um parceiro mais flexível, prático e acessível do que uma grande consultoria global.",
      whoEyebrow: "Quem Ajudamos",
      whoTitle: "Nossos Clientes Ideais",
      whoBody: "Se algum destes perfis parece com o seu, fomos feitos exatamente para a sua situação.",
    },
    pricing: {
      eyebrow: "Engajamentos & Preços",
      title: "Preços Construídos em Torno dos Seus Objetivos — Não de um Menu",
      description:
        "Cada engajamento tem escopo definido de acordo com o seu ambiente, seus objetivos e seu orçamento. Em vez de tabelas de preço padronizadas, entregamos uma proposta clara e personalizada após uma breve conversa. A maioria dos clientes começa com uma avaliação focada e depois expande para implementação e serviços gerenciados contínuos.",
      takeHealthCheck: "Faça o Diagnóstico Gratuito",
      startEyebrow: "Comece Por Aqui",
      startTitle: "Três Formas Fáceis de Começar",
      startBody:
        "Pontos de partida de baixo risco, pensados para gerar valor rápido e crescer naturalmente. Cada um é dimensionado e orçado para a sua situação.",
      howEyebrow: "Como Precificamos",
      howTitle: "Modelos de Engajamento Que Se Ajustam ao Seu Jeito de Trabalhar",
      howBody:
        "Ajustamos o modelo comercial ao trabalho — escopo fixo quando ele é claro, baseado em valor para projetos e recorrente para parcerias contínuas.",
      models: [
        {
          title: "Avaliações de escopo fixo",
          body: "Revisões claras e com prazo definido, com entregáveis estabelecidos — como o Diagnóstico de Tecnologia — para que você saiba exatamente o que vai receber e quanto custa antes de começarmos.",
        },
        {
          title: "Projetos baseados em valor",
          body: "Construção de aplicações, modernização de cloud e programas de segurança dimensionados e precificados por resultados e complexidade — não por estimativas de horas.",
        },
        {
          title: "Mensalidades & serviços gerenciados",
          body: "Engajamentos mensais previsíveis para TI gerenciada, manutenção de aplicações, BCDR e liderança fracionada — dimensionados para a sua equipe e seus sistemas.",
        },
      ],
      deliverEyebrow: "O Que Entregamos",
      deliverTitle: "Serviços em Todo o Ciclo de Vida",
      deliverBody:
        "Explore qualquer serviço para conhecer os detalhes — e depois fale com nosso time para um preço adequado ao seu escopo.",
      ctaHeadline: "Vamos Montar um Orçamento em Torno dos Seus Objetivos",
      ctaCopy:
        "Faça o Diagnóstico Gratuito de Tecnologia ou agende uma conversa rápida — recomendaremos o ponto de partida certo e entregaremos uma proposta clara e personalizada.",
      ctaButton: "Fale com um Especialista",
    },
    about: {
      eyebrow: "Sobre",
      title: "Construída por Quem Opera, Não Apenas por Consultores",
      description:
        "A B&B Global Services nasceu para ajudar empresas a fechar a lacuna entre ideias de tecnologia e a execução operacional real — com entrega remota para clientes no mundo todo a partir de nossas bases em Boston e Roma.",
      approachEyebrow: "Nossa Abordagem",
      approachTitle: "Reunimos as Disciplinas",
      approachBody:
        "Muitas empresas sabem aconselhar. Algumas sabem construir. Outras sabem dar suporte. Nós reunimos essas disciplinas para que as organizações avancem mais rápido, reduzam riscos, aumentem a confiabilidade e extraiam mais valor da tecnologia.",
      visionLabel: "Visão",
      visionBody:
        "Ser o parceiro de entrega de tecnologia de confiança para empresas em crescimento, ajudando-as a projetar, construir, proteger, operar e aprimorar continuamente os sistemas que impulsionam o seu futuro.",
      missionLabel: "Missão",
      missionBody:
        "Ajudar organizações a transformar ideias de tecnologia em soluções de negócio seguras, escaláveis, confiáveis e bem suportadas por meio de estratégia, engenharia, cloud, cibersegurança, operações e serviços gerenciados.",
      founderEyebrow: "Fundador",
      founderTitle: "Experiência Profunda e Mão na Massa",
      founderRole: "Fundador & Principal",
      founderBio:
        "Bruno Dossantos traz uma experiência profunda em engenharia de cloud, DevOps, SRE, entrega de aplicações, IA, plataformas de dados, cibersegurança, continuidade de negócios e operações corporativas. Sua trajetória inclui liderar times de tecnologia, construir plataformas, modernizar sistemas, sustentar ambientes de missão crítica e ajudar organizações a aprimorar a entrega da estratégia ao suporte.",
      expertise: [
        "Engenharia de cloud",
        "DevOps & SRE",
        "Entrega de aplicações",
        "IA & plataformas de dados",
        "Cibersegurança & DevSecOps",
        "Continuidade de negócios",
        "Operações corporativas",
        "Serviços gerenciados",
      ],
      deliverEyebrow: "Como Entregamos",
      deliverTitle: "O Framework Da Ideia às Operações",
    },
    insights: {
      eyebrow: "Insights",
      title: "Pensamento Prático, Sem Hype",
      description:
        "Perspectivas sobre estratégia de tecnologia, entrega, segurança, resiliência e IA para empresas em crescimento.",
      minRead: "min de leitura",
      allInsights: "Todos os insights",
      moreInsights: "Mais insights",
      applyTitle: "Pronto para colocar isso em prática?",
      applyBody:
        "Agende uma consultoria e aplicaremos isso aos seus sistemas, objetivos e restrições.",
    },
    caseStudies: {
      eyebrow: "Cases",
      title: "Resultados na Prática",
      description:
        "Exemplos anonimizados extraídos da experiência de entrega em grandes empresas e no mid-market. Nunca citamos empregadores anteriores — usamos expressões como 'grande empresa de saúde' ou 'organização enterprise de SaaS'.",
      // Ordem fixa: desafio, abordagem, solução, resultado.
      sections: [
        { label: "Desafio", question: "Qual era o problema?" },
        { label: "Abordagem", question: "O que a B&B fez." },
        { label: "Solução", question: "O que foi implementado." },
        { label: "Resultado", question: "O que melhorou?" },
      ],
      challengeLabel: "Desafio:",
      outcomeLabel: "Resultado:",
      noteLabel: "Nota:",
      noteBody:
        "As identidades dos clientes são anonimizadas. Nunca citamos empregadores ou clientes anteriores sem aprovação por escrito.",
      moreEyebrow: "Mais",
      moreTitle: "Outros Cases",
      read: "Ler",
      readFullStory: "Leia a história completa",
      ctaHeadline: "Quer Resultados Como Estes para o Seu Negócio?",
      ctaCopy:
        "Vamos conversar sobre seus objetivos, sistemas e restrições — e traçar um caminho de onde você está até operações confiáveis.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Agende uma Conversa de Descoberta",
      description:
        "Solicite um orçamento ou uma consultoria e nosso time fará contato sobre sua solicitação — por telefone, e-mail ou mensagem de texto, caso você informe seu número. Seja para construir uma aplicação, modernizar a cloud, fortalecer a segurança, dar suporte à sua equipe ou se preparar para recuperação de desastres — vamos conversar.",
      bookDirectTitle: "Prefere agendar diretamente?",
      bookDirectBody: "Escolha um horário que funcione para você e chegaremos preparados.",
      bookOnCalendly: "Agendar no Calendly",
      hqLine: "Sede: {hq} — atendendo clientes no mundo todo",
      capabilityTitle: "Declaração de competências",
      capabilityBody:
        "Um resumo de uma página com nossas competências, diferenciais e modelos de engajamento — pronto para compartilhar com o seu time.",
      viewDownload: "Ver & Baixar",
      easyWaysTitle: "Formas Fáceis de Começar",
      bookInstantlyEyebrow: "Agende Agora",
      pickTimeTitle: "Escolha um Horário Que Funcione para Você",
      pickTimeBody:
        "Reserve um horário para uma conversa de descoberta de 30 minutos e chegaremos preparados para falar sobre os seus objetivos.",
    },
  },
  legal: {
    eyebrow: "Jurídico",
    privacyTitle: "Política de Privacidade",
    privacyDescription: "Como tratamos suas informações. Em vigor desde {date}.",
    termsTitle: "Termos de Serviço",
    termsDescription: "Os termos que regem o uso deste site. Em vigor desde {date}.",
  },
  form: {
    name: "Nome",
    company: "Empresa",
    email: "E-mail",
    phone: "Telefone",
    companySize: "Porte da empresa",
    serviceNeeded: "Serviço necessário",
    budgetRange: "Faixa de orçamento",
    timeline: "Prazo",
    message: "Mensagem",
    select: "Selecione…",
    employees: "funcionários",
    services: [
      "Estratégia & Consultoria",
      "Desenvolvimento de Aplicações & Produtos",
      "Cloud, DevOps & Engenharia de Plataforma",
      "DevSecOps & Cibersegurança",
      "Confiabilidade, Operações & BCDR",
      "IMAC & Serviços Gerenciados de Tecnologia",
      "Ainda não sei",
    ],
    budgets: [
      "Menos de US$ 10.000",
      "US$ 10.000–25.000",
      "US$ 25.000–100.000",
      "US$ 100.000–250.000",
      "Acima de US$ 250.000",
      "Serviços gerenciados mensais",
    ],
    timelines: ["Imediatamente", "1–3 meses", "3–6 meses", "Mais de 6 meses", "Apenas explorando"],
    messagePlaceholder: "Conte-nos sobre seus objetivos, seus sistemas e o problema que gostaria de resolver.",
    submit: "Agendar uma Conversa de Descoberta",
    sending: "Enviando…",
    errorGeneric: "Algo deu errado.",
    successTitle: "Obrigado — entraremos em contato em breve.",
    successBody:
      "Um membro do nosso time fará contato em até um dia útil — por telefone, e-mail ou mensagem de texto — para agendar sua conversa de descoberta.",
    smsConsent:
      "Ao fornecer seu número de telefone e enviar este formulário, você concorda em receber ligações e mensagens de texto da B&B Global Services LLC sobre sua solicitação. A frequência das mensagens varia. Podem ser aplicadas tarifas de mensagens e dados. Responda STOP para cancelar ou HELP para obter ajuda.",
    consent:
      "Ao enviar, você concorda em ser contatado sobre sua solicitação. Respeitamos sua privacidade e nunca compartilhamos suas informações.",
    privacyPolicy: "Política de Privacidade",
    termsOfService: "Termos de Serviço",
  },
  switcher: { label: "Idioma" },
};
