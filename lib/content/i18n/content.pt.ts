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
    "fintech-insurance-platforms": {
      title: "Lançar um Produto de Fintech ou Seguros",
      audience: "Fintechs, seguradoras, credoras, bancos e times de serviços financeiros.",
      summary:
        "Construa e opere plataformas de pagamentos, crédito, banking e seguros com a segurança e os controles que os reguladores exigem.",
      body: "Produtos financeiros e de seguros têm um nível de exigência mais alto: movimentação de dinheiro, dados sensíveis de clientes, trilhas de auditoria e reguladores atentos. Ajudamos fintechs, seguradoras, credoras e times de serviços financeiros a projetar, construir, proteger e operar plataformas à altura dessa exigência — de pagamentos e fluxos de crédito a sistemas de apólices, sinistros e subscrição — com prontidão para compliance e confiabilidade incorporadas desde o primeiro dia.",
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
      name: "Serviços Financeiros, Fintech & Seguros",
      cardDescription:
        "Plataformas confiáveis e seguras para bancos, fintechs e seguradoras — com os controles que o setor financeiro regulado exige.",
      title: "Consultoria de Tecnologia para Serviços Financeiros, Fintechs e Seguros",
      intro:
        "Em serviços financeiros e seguros, confiança é o produto — e confiança depende de tecnologia segura, confiável e bem governada. Ajudamos bancos, credoras, assessorias, fintechs, seguradoras e insurtechs a entregar e operar plataformas à altura do que reguladores e clientes esperam.",
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
      "Construção de Plataformas de Fintech & Seguros",
      "Integração de Pagamentos & Sistemas Core",
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
          "Saúde, serviços financeiros, fintech, seguros, SaaS e tecnologia, serviços profissionais, mercado imobiliário e gestão de propriedades, hotelaria e hospitalidade, pequenas e médias empresas e empresas de portfólio de private equity.",
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
  caseStudies: {
    "enterprise-observability-transformation": {
      title: "Transformação de Observability em Escala Enterprise",
      industry: "Grande empresa de saúde",
      challenge:
        "Indisponibilidades recorrentes e resposta lenta a incidentes em um cenário de monitoramento fragmentado, sem uma fonte única de verdade.",
      approach:
        "Avaliamos a stack de observability, definimos SLOs/SLIs e padronizamos telemetria, dashboards e alertas entre as equipes.",
      solution:
        "Implementamos observability unificada com alertas acionáveis, runbooks de plantão e um processo de gestão de incidentes.",
      outcome:
        "Detecção e resolução mais rápidas, menos incidentes com impacto no cliente e responsabilidade operacional mais clara.",
    },
    "cloud-delivery-modernization": {
      title: "Modernização da Entrega em Cloud",
      industry: "Organização enterprise de SaaS",
      challenge:
        "Implantações manuais e ambientes inconsistentes atrasavam os releases e introduziam riscos.",
      approach:
        "Projetamos um modelo de entrega cloud-native com infraestrutura como código e ambientes padronizados.",
      solution:
        "Construímos pipelines de CI/CD, provisionamento automatizado e governança de releases com testes incorporados.",
      outcome:
        "Releases dramaticamente mais rápidos e seguros e um caminho repetível do commit à produção.",
    },
    "data-platform-reliability-program": {
      title: "Programa de Confiabilidade da Plataforma de Dados",
      industry: "Organização enterprise de dados",
      challenge:
        "Pipelines de dados pouco confiáveis e responsabilidades indefinidas corroíam a confiança em relatórios críticos para o negócio.",
      approach:
        "Mapeamos os fluxos de dados, definimos metas de confiabilidade e instrumentamos os pipelines de ponta a ponta.",
      solution:
        "Introduzimos monitoramento, verificações de qualidade de dados e processos de incidentes para a plataforma de dados.",
      outcome:
        "Maior confiabilidade dos pipelines e confiança renovada nos produtos de dados em toda a empresa.",
    },
    "cicd-devsecops-implementation": {
      title: "Implementação de CI/CD e DevSecOps",
      industry: "Empresa de tecnologia de médio porte",
      challenge:
        "A segurança era um portão de fim de ciclo que atrasava os releases e revelava problemas tarde demais.",
      approach:
        "Incorporamos a segurança ao pipeline de entrega com portões automatizados e responsabilidade compartilhada.",
      solution:
        "Implementamos varredura de segurança no CI/CD, gestão de secrets, melhorias de IAM e um fluxo de remediação.",
      outcome:
        "Achados de segurança detectados mais cedo, remediação mais rápida e releases que saem seguros por padrão.",
    },
    "business-continuity-disaster-recovery-program": {
      title: "Programa de Continuidade de Negócios e Recuperação de Desastres",
      industry: "Organização de serviços regulados",
      challenge:
        "A ausência de um plano de recuperação testado e de RTO/RPO definidos deixava o negócio exposto a interrupções.",
      approach:
        "Definimos objetivos de recuperação, documentamos runbooks e validamos os backups contra cenários reais.",
      solution:
        "Entregamos um programa de BCDR com runbooks, exercícios de simulação e uma cadência de testes de recuperação.",
      outcome:
        "Uma capacidade de recuperação testada e defensável e confiança executiva na resiliência.",
    },
    "office-technology-managed-support-setup": {
      title: "Estruturação de Tecnologia do Escritório e Suporte Gerenciado",
      industry: "Firma de serviços profissionais em crescimento",
      challenge:
        "Uma mudança de escritório e o crescimento do quadro de pessoal superaram o suporte de TI improvisado e o onboarding.",
      approach:
        "Projetamos um modelo de suporte, um processo de ativos e um padrão de tecnologia para o escritório.",
      solution:
        "Entregamos implantação de dispositivos, IMAC, configuração de rede, service desk e relatórios mensais.",
      outcome:
        "Uma mudança de escritório tranquila, onboarding mais rápido e uma equipe confiável e bem atendida.",
    },
    "ai-enabled-application-mvp": {
      title: "MVP de Aplicação com IA",
      industry: "Empresa de serviços de médio porte",
      challenge:
        "Fluxos de trabalho manuais e repetitivos limitavam a capacidade e atrasavam a resposta ao cliente.",
      approach:
        "Identificamos oportunidades de automação de alto valor e definimos o escopo de um MVP focado.",
      solution:
        "Construímos uma aplicação com IA, com revisão humana (human-in-the-loop) e governança clara.",
      outcome:
        "Menos esforço manual, respostas mais rápidas e uma base para uma adoção de IA mais ampla.",
    },
    "generative-ai-knowledge-assistant": {
      title: "Assistente de Conhecimento com IA Generativa",
      industry: "Firma de serviços profissionais",
      challenge:
        "Consultores gastavam horas buscando documentos, metodologias e projetos anteriores dispersos, atrasando respostas a clientes e gerando respostas inconsistentes entre as equipes.",
      approach:
        "Mapeamos o conhecimento interno de alto valor da firma, definimos limites de confiança e acesso e estruturamos um assistente com RAG (retrieval-augmented generation) fundamentado apenas em fontes aprovadas.",
      solution:
        "Construímos um assistente de IA generativa com RAG, citações, revisão humana para respostas sensíveis e um modelo de governança de IA cobrindo acesso, avaliação e monitoramento.",
      outcome:
        "Menos tempo caçando documentos, respostas a clientes mais rápidas e consistentes e uma base governada em que a firma confia o suficiente para expandir.",
    },
  },
  insights: {
    "idea-to-operations": {
      title: "Por Que a Maioria das Empresas Tem um Problema de Entrega, Não de Tecnologia",
      excerpt:
        "A lacuna entre ideias de tecnologia e operações confiáveis raramente é sobre ferramentas — é sobre entrega. Veja como fechá-la.",
      category: "Estratégia",
    },
    "devsecops-for-mid-market": {
      title: "DevSecOps para o Mid-Market: Segurança Sem Perder Velocidade",
      excerpt:
        "Incorporar segurança à entrega não precisa atrasar os releases. Um caminho prático para pipelines seguros por padrão.",
      category: "Segurança",
    },
    "bcdr-that-actually-works": {
      title: "Continuidade de Negócios Que Realmente Funciona Quando Você Precisa",
      excerpt:
        "Um plano de recuperação que você nunca testou é um palpite. Como definir RTO/RPO e comprovar sua resiliência.",
      category: "Resiliência",
    },
    "ai-readiness": {
      title: "Prontidão para IA: Por Onde Empresas de Médio Porte Deveriam Realmente Começar",
      excerpt:
        "Deixe o hype de lado. Uma abordagem fundamentada para identificar oportunidades de IA com ROI real e risco gerenciável.",
      category: "IA",
    },
    "fractional-cto-guide": {
      title: "Quando (e Por Que) Contratar um CTO Fracionado",
      excerpt:
        "Um CTO em tempo integral é uma grande aposta para uma empresa em crescimento. Veja como saber quando a liderança fracionada é a jogada mais inteligente.",
      category: "Estratégia",
    },
    "cloud-cost-optimization": {
      title: "Otimização de Custos de Cloud: Pare de Pagar Demais Sem Perder Ritmo",
      excerpt:
        "As faturas de cloud crescem em silêncio. Uma abordagem prática para cortar desperdício sem sacrificar confiabilidade ou velocidade.",
      category: "Cloud",
    },
    "managed-it-vs-in-house": {
      title: "TI Gerenciada vs. Equipe Interna: Como Empresas de Médio Porte Devem Decidir",
      excerpt:
        "A resposta certa raramente é tudo ou nada. Um framework para decidir o que manter internamente e o que delegar.",
      category: "TI Gerenciada",
    },
    "legacy-system-modernization": {
      title: "Modernizando Sistemas Legados Sem Apostar o Negócio",
      excerpt:
        "Reescritas do tipo big bang fracassam mais do que dão certo. Como modernizar os sistemas dos quais você depende sem essa aposta.",
      category: "Operações",
    },
    "ai-automation-roi": {
      title: "Onde a Automação com IA Realmente Compensa nas Operações de Médio Porte",
      excerpt:
        "O ROI da automação com IA é real, mas apenas em lugares específicos. Como encontrar os fluxos de trabalho que valem a pena automatizar primeiro.",
      category: "IA",
    },
    "generative-ai-for-business": {
      title: "IA Generativa para Negócios: Casos de Uso Reais Além do Chatbot",
      excerpt:
        "O caso de uso da manchete raramente é o mais valioso. Onde a IA generativa conquista seu lugar em operações reais — com as salvaguardas que a tornam segura para lançar.",
      category: "IA",
    },
    "modern-data-stack": {
      title: "Construindo uma Stack de Dados Moderna Que Justifica Seu Custo",
      excerpt:
        "Uma stack de dados moderna é fácil de montar e fácil de superdimensionar. Como projetar uma que produza decisões confiáveis em vez de uma pilha cara de ferramentas.",
      category: "Dados",
    },
    "digital-transformation-roadmap": {
      title: "Como Construir um Roadmap de Transformação Digital Que Sobreviva à Realidade",
      excerpt:
        "A maioria dos roadmaps de transformação fica ótima no slide e desmorona ao encontrar a entrega. Como construir um que sequencie valor, sobreviva às mudanças e realmente saia do papel.",
      category: "Estratégia",
    },
    "cybersecurity-for-mid-market": {
      title: "Cibersegurança para o Mid-Market: Uma Lista Prática de Prioridades",
      excerpt:
        "Você não pode fazer tudo de uma vez, e não precisa. Uma lista fundamentada e ordenada do trabalho de segurança que realmente reduz riscos para uma empresa em crescimento.",
      category: "Segurança",
    },
    "cloud-migration-guide": {
      title: "Migração para a Cloud Sem Histórias de Terror",
      excerpt:
        "As migrações conquistam sua má fama por serem apressadas e mal planejadas. Uma abordagem pragmática que move workloads com segurança, controla custos e evita os desastres de sempre.",
      category: "Cloud",
    },
  },
};
