// Overlay de conteúdo em português (Brasil) — campos traduzidos indexados por slug.
// Qualquer campo ausente recorre ao inglês como fallback.
import type { ContentOverlay } from "./types";

export const ptContent: ContentOverlay = {
  services: {
    "strategy-advisory": {
      title: "Estratégia & Consultoria",
      headline: "Estratégia e Consultoria em Tecnologia",
      summary:
        "Diagnósticos, roadmaps e liderança de CTO fracionado que transformam objetivos de negócio em um plano de tecnologia executável.",
    },
    "application-development": {
      title: "Desenvolvimento de Aplicações & Produtos",
      headline: "Software Sob Medida, Apps Mobile, Plataformas SaaS e Soluções de IA",
      summary:
        "Definimos, projetamos, construímos, implantamos e sustentamos aplicações web, mobile, SaaS e com IA.",
    },
    "data-analytics-ai": {
      title: "Dados, Analytics & IA",
      headline: "Dados, Analytics, Machine Learning e Implementação de IA",
      summary:
        "Transforme dados em decisões e produtos inteligentes — de plataformas de dados e analytics a machine learning, IA generativa e MLOps.",
    },
    "cloud-devops": {
      title: "Cloud, DevOps & Engenharia de Plataforma",
      headline: "Cloud, DevOps, CI/CD e Engenharia de Plataforma",
      summary:
        "Arquitetura cloud, infraestrutura como código, CI/CD e engenharia de plataforma em AWS, Azure e GCP.",
    },
    "devsecops-cybersecurity": {
      title: "DevSecOps & Cibersegurança",
      headline: "Segurança Incorporada à Entrega",
      summary:
        "DevSecOps, gestão de identidades, gestão de vulnerabilidades e preparação para compliance integrados a todo o ciclo de entrega.",
    },
    "reliability-bcdr": {
      title: "Confiabilidade, Operações & BCDR",
      headline: "Confiabilidade, Resiliência e Continuidade de Negócios",
      summary:
        "Observabilidade, práticas de SRE, gestão de incidentes e recuperação de desastres testada para manter sistemas de missão crítica no ar.",
    },
    "managed-it-imac": {
      title: "IMAC & Serviços Gerenciados de Tecnologia",
      headline: "Instalação, Movimentação, Adição, Alteração e Suporte de TI Gerenciado",
      summary:
        "Implantação de dispositivos, service desk, suporte de rede e operações gerenciadas para uma equipe produtiva e bem atendida.",
    },
  },
  solutions: {
    "build-my-app": {
      title: "Construir Meu App",
      audience: "Fundadores, empresários e equipes internas.",
      summary:
        "Transforme uma ideia em um produto funcional — web, mobile, SaaS ou com IA.",
      body: "Tem uma ideia, mas precisa de um time para transformá-la em um produto funcional? A B&B Global Services ajuda a definir, projetar, construir, implantar e sustentar aplicações web, mobile, SaaS e com IA.",
    },
    "modernize-my-technology": {
      title: "Modernizar Minha Tecnologia",
      audience: "Empresas com sistemas defasados.",
      summary:
        "Saia de plataformas legadas e processos manuais para uma tecnologia moderna, segura e automatizada.",
      body: "Ajudamos organizações a migrar de plataformas legadas, processos manuais e sistemas frágeis para uma tecnologia moderna em cloud, segura e automatizada.",
    },
    "adopt-ai": {
      title: "Adotar IA & Analytics",
      audience: "Líderes que querem usar IA e dados para gerar resultados reais.",
      summary:
        "Identifique as oportunidades de IA e dados com ROI real e coloque-as em produção de forma responsável.",
      body: "Vá além do hype da IA. Ajudamos você a identificar os casos de uso que realmente geram retorno, construir soluções de IA generativa e machine learning, transformar seus dados em decisões e implantar tudo com governança e monitoramento adequados.",
    },
    "secure-my-business": {
      title: "Proteger Meu Negócio",
      audience: "Empresas preocupadas com cibersegurança.",
      summary:
        "Incorpore segurança em aplicações, cloud, usuários, processos e operações.",
      body: "Incorporamos segurança em aplicações, cloud, usuários, processos e operações.",
    },
    "support-my-workforce": {
      title: "Dar Suporte à Minha Equipe",
      audience: "Empresas que precisam de TI gerenciada.",
      summary:
        "Suporte de tecnologia na prática: configuração de dispositivos, IMAC, service desk e operações gerenciadas.",
      body: "Oferecemos suporte de tecnologia na prática, incluindo configuração de dispositivos, IMAC, service desk, atendimento ao usuário, mudanças de escritório e operações de TI gerenciadas.",
    },
    "disaster-recovery": {
      title: "Preparar-se para Recuperação de Desastres",
      audience: "Empresas sem planos de recuperação testados.",
      summary:
        "Defina RTO/RPO, valide backups, conduza exercícios de simulação e prepare-se para interrupções.",
      body: "Ajudamos a definir RTO/RPO, criar planos de recuperação, validar backups, conduzir exercícios de simulação e preparar sua organização para interrupções.",
    },
    "scale-my-team": {
      title: "Escalar Meu Time de Tecnologia",
      audience: "Empresas em crescimento.",
      summary:
        "Liderança fracionada, times de engenharia e serviços gerenciados para escalar sem montar um departamento interno completo.",
      body: "Oferecemos liderança fracionada, times de engenharia, entrega técnica e serviços gerenciados para ajudar empresas a escalar sem contratar um departamento interno completo.",
    },
  },
  industries: {
    "healthcare": {
      name: "Saúde",
      cardDescription:
        "Entrega de tecnologia segura e em conformidade para sistemas clínicos e administrativos.",
      title: "Consultoria de Tecnologia e Serviços Gerenciados para o Setor de Saúde",
      intro:
        "Organizações de saúde lidam com o que há de mais crítico em tecnologia: segurança do paciente, dados sensíveis, compliance rigoroso e tolerância zero a indisponibilidade. Ajudamos equipes clínicas e administrativas a modernizar e operar a tecnologia com segurança — sem atrasar o atendimento.",
    },
    "financial-services": {
      name: "Serviços Financeiros",
      cardDescription:
        "Plataformas confiáveis e seguras, com os controles que o setor financeiro regulado exige.",
      title: "Consultoria de Tecnologia para Serviços Financeiros e Fintechs",
      intro:
        "Em serviços financeiros, confiança é o produto — e confiança depende de tecnologia segura, confiável e bem governada. Ajudamos bancos, credoras, assessorias e fintechs a entregar e operar plataformas à altura do que reguladores e clientes esperam.",
    },
    "saas-technology": {
      name: "SaaS & Tecnologia",
      cardDescription:
        "Engenharia de produto, cloud e confiabilidade para empresas de software em crescimento.",
      title: "Engenharia, Cloud e Confiabilidade para Empresas de SaaS e Tecnologia",
      intro:
        "Empresas de software vivem ou morrem pela velocidade de entrega e pela confiabilidade. Ajudamos negócios de SaaS e tecnologia a construir produto, modernizar a cloud, adotar DevOps e SRE e incorporar IA — para que a engenharia escale sem caos.",
    },
    "professional-services": {
      name: "Serviços Profissionais",
      cardDescription:
        "Aplicações modernas e TI gerenciada para firmas movidas a trabalho intelectual.",
      title: "Tecnologia e TI Gerenciada para Firmas de Serviços Profissionais",
      intro:
        "Firmas de serviços profissionais funcionam à base de pessoas, conhecimento e confiança dos clientes. Ajudamos escritórios de advocacia, contabilidades, agências e consultorias a modernizar suas ferramentas, proteger dados de clientes e contar com suporte de TI confiável — para que o time foque nos clientes, não na tecnologia.",
    },
    "real-estate": {
      name: "Mercado Imobiliário & Gestão de Propriedades",
      cardDescription:
        "Portais, integrações e suporte para propriedades e equipes distribuídas.",
      title: "Tecnologia para o Mercado Imobiliário e Gestão de Propriedades",
      intro:
        "O mercado imobiliário e a gestão de propriedades operam em múltiplas localidades, sistemas e partes interessadas. Ajudamos a conectar propriedades, equipes e ferramentas com portais, integrações e suporte confiáveis — para que a operação flua onde quer que você faça negócios.",
    },
    "hospitality": {
      name: "Hotelaria & Hospitalidade",
      cardDescription:
        "Operações resilientes e tecnologia local para negócios voltados ao hóspede.",
      title: "Tecnologia e TI Gerenciada para Hotelaria e Hospitalidade",
      intro:
        "Na hospitalidade, a tecnologia é invisível quando funciona e muito visível quando falha. Ajudamos hotéis, restaurantes e grupos de hospitalidade a manter operações resilientes, implantar tecnologia local confiável e sustentar sistemas voltados ao hóspede 24 horas por dia.",
    },
    "small-mid-sized-business": {
      name: "Pequenas e Médias Empresas",
      cardDescription:
        "Um único parceiro de confiança para estratégia, desenvolvimento, segurança e suporte contínuo.",
      title: "Parceiro de Tecnologia para Pequenas e Médias Empresas",
      intro:
        "Empresas em crescimento superam a TI básica, mas ainda não precisam de uma consultoria gigante. Somos o parceiro intermediário: um único time de confiança para estratégia, desenvolvimento, segurança, confiabilidade e suporte contínuo — no tamanho certo para o seu momento.",
    },
    "private-equity": {
      name: "Empresas de Portfólio de Private Equity",
      cardDescription:
        "Due diligence, modernização e geração de valor em todo o portfólio.",
      title: "Due Diligence de Tecnologia e Geração de Valor para Private Equity",
      intro:
        "Fundos de private equity precisam que a tecnologia seja um ativo, não um passivo — na diligência e ao longo de todo o período de investimento. Ajudamos a avaliar o risco tecnológico antes do negócio e, depois, a modernizar, proteger e operar os sistemas das empresas do portfólio para gerar valor mensurável.",
    },
  },
  site: {
    lifecyclePhases: [
      {
        name: "Descobrir",
        description:
          "Entender objetivos de negócio, sistemas, riscos, usuários e restrições.",
      },
      {
        name: "Projetar",
        description:
          "Criar a arquitetura, o roadmap, o plano de entrega, o modelo de segurança e o modelo operacional.",
      },
      {
        name: "Construir",
        description:
          "Desenvolver aplicações, plataformas, automações, integrações e infraestrutura.",
      },
      {
        name: "Proteger",
        description:
          "Incorporar DevSecOps, gestão de identidades, compliance, gestão de vulnerabilidades e controles de segurança.",
      },
      {
        name: "Implantar",
        description:
          "Implementar CI/CD, governança de releases, implantação em cloud, testes e documentação.",
      },
      {
        name: "Operar",
        description:
          "Prover observabilidade, suporte, gestão de incidentes, service desk, operações gerenciadas e melhoria contínua.",
      },
      {
        name: "Recuperar",
        description:
          "Estruturar recuperação de desastres, continuidade de negócios, validação de backups, runbooks, exercícios de simulação e testes de recuperação.",
      },
      {
        name: "Otimizar",
        description:
          "Melhorar performance, custos, confiabilidade, automação, experiência do usuário e resultados de negócio.",
      },
    ],
    painPoints: [
      "Entrega de software lenta",
      "Fornecedores desconectados",
      "Documentação precária",
      "Controles de segurança frágeis",
      "Implantações manuais",
      "Complexidade da cloud",
      "Falta de recuperação de desastres",
      "Nenhum responsável claro após o lançamento",
      "Experiência de suporte ruim",
      "Indisponibilidades e incidentes recorrentes",
    ],
    differentiators: [
      "Não apenas aconselhamos. Nós construímos.",
      "Não apenas construímos. Nós operamos.",
      "Não apenas operamos. Nós protegemos e recuperamos.",
      "Entendemos de estratégia executiva e de engenharia na prática.",
      "Levamos práticas de nível enterprise a empresas em crescimento.",
      "Combinamos consultoria, entrega de software, cloud, cibersegurança, IMAC e serviços gerenciados.",
    ],
    featuredSolutions: [
      "Avaliação de Tecnologia",
      "Construção de Aplicações",
      "Avaliação de Prontidão para IA",
      "Modernização de Cloud",
      "Implementação de DevSecOps",
      "Programa de Continuidade de Negócios & Recuperação de Desastres",
      "Suporte de TI Gerenciado",
      "Consultoria de CTO Fracionado",
      "Estruturação de Tecnologia do Escritório",
      "Avaliação de Confiabilidade da Plataforma de Dados",
    ],
    idealCustomers: [
      "Empresas de médio porte com 50 a 5.000 colaboradores",
      "Startups construindo sua primeira plataforma de verdade",
      "Empresas modernizando sistemas legados",
      "Empresas que precisam de desenvolvimento de apps e suporte de longo prazo",
      "Organizações com lacunas em cloud, segurança ou confiabilidade",
      "Fundos de private equity avaliando ou aprimorando empresas do portfólio",
      "Empresas de saúde e de setores regulados que exigem entrega de tecnologia segura",
    ],
    faqs: [
      {
        question:
          "Como a B&B se diferencia de um provedor de TI típico ou de uma grande consultoria?",
        answer:
          "Ajudamos empresas que superaram a TI básica, mas ainda não precisam de consultorias gigantes. Combinamos estratégia, entrega de software, cloud, cibersegurança, IMAC e serviços gerenciados em um único modelo de entrega integrado — práticas de nível enterprise sem a complexidade nem o custo enterprise.",
      },
      {
        question: "Vocês apenas aconselham, ou também constroem e operam?",
        answer:
          "As três coisas. Aconselhamos, construímos, protegemos, implantamos, operamos e recuperamos. A essência do nosso Framework da Ideia à Operação é que o mesmo parceiro leva você do conceito a operações confiáveis e bem suportadas.",
      },
      {
        question: "Com empresas de que porte vocês trabalham?",
        answer:
          "Focamos em empresas de médio porte e em crescimento — normalmente de 25 a 5.000 colaboradores — incluindo startups construindo sua primeira plataforma de verdade e empresas de portfólio de private equity.",
      },
      {
        question: "Como os projetos normalmente começam?",
        answer:
          "A maioria dos projetos começa com uma conversa de descoberta e uma avaliação focada, como o nosso Diagnóstico de Tecnologia. A avaliação gera um roadmap priorizado e, a partir dele, podemos avançar para a implementação e o suporte contínuo.",
      },
      {
        question:
          "Vocês oferecem serviços gerenciados contínuos após um projeto?",
        answer:
          "Sim. Oferecemos suporte de tecnologia gerenciado, manutenção de aplicações e contratos recorrentes de BCDR, garantindo responsabilidade clara e melhoria contínua após o lançamento — sem entregas no vácuo.",
      },
      {
        question: "Quais setores vocês atendem?",
        answer:
          "Saúde, serviços financeiros, SaaS e tecnologia, serviços profissionais, mercado imobiliário e gestão de propriedades, hotelaria e hospitalidade, pequenas e médias empresas e empresas de portfólio de private equity.",
      },
    ],
    engagementOffers: [
      {
        name: "Diagnóstico de Tecnologia",
        tagline: "Uma revisão rápida, de escopo fechado, com roadmap de 90 dias.",
        includes: [
          "Revisão do estado atual",
          "Análise de riscos",
          "Revisão de cloud / segurança / aplicações / suporte",
          "Sumário executivo",
          "Roadmap de 90 dias",
        ],
      },
      {
        name: "Da Ideia ao MVP",
        tagline: "Do conceito a um produto funcional e implantado.",
        includes: [
          "Descoberta",
          "UX/UI",
          "Arquitetura",
          "Desenvolvimento do MVP",
          "Implantação",
          "Suporte básico",
        ],
      },
      {
        name: "Suporte de Tecnologia Gerenciado",
        tagline: "Suporte contínuo, dimensionado para o seu time e seus sistemas.",
        includes: [
          "Suporte ao usuário",
          "Suporte a dispositivos",
          "IMAC",
          "Coordenação de fornecedores",
          "Relatórios mensais",
          "Supervisão básica de segurança e backups",
        ],
      },
    ],
  },
};
