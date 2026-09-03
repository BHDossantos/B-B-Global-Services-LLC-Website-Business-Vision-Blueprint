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
};
