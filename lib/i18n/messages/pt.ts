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
  switcher: { label: "Idioma" },
};
