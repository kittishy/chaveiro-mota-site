export interface ServiceItem {
  title: string;
  description: string;
  badge?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  h2Title: string;
  eyebrow: string;
  description: string;
  pageUrl: string;
  image: {
    webp: string;
    jpg: string;
    srcsetWebp: string;
    srcsetJpg: string;
    sizes: string;
    alt: string;
    width: number;
    height: number;
  };
  items: ServiceItem[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface StoreModule {
  id: string;
  title: string;
  description: string;
  icon: "key" | "lock" | "scissors" | "document";
  whatsappMessage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteData = {
  name: "Chaveiro Mota",
  tagline: "Chaveiro 24 horas em Joinville",
  city: "Joinville",
  state: "SC",
  neighborhood: "Jarivatuba",
  fullAddress: "Rua Agulhas Negras, 1530 — Jarivatuba, Joinville/SC",
  addressStreet: "Rua Agulhas Negras, 1530",
  addressDistrictCity: "Jarivatuba — Joinville/SC",
  phoneDisplay: "(47) 99721-7584",
  phoneRaw: "+5547997217584",
  telHref: "tel:+5547997217584",
  whatsappBaseUrl: "https://wa.me/5547997217584",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chaveiro+Mota%2C+Rua+Agulhas+Negras+1530%2C+Jarivatuba%2C+Joinville+SC",
  
  hours: {
    storeTitle: "Loja física no Jarivatuba",
    storeDays: "Segunda a sexta-feira",
    storeTimes: "09h–12h · 14h–18h",
    emergencyTitle: "Plantão emergencial móvel",
    emergencyTimes: "24 horas, todos os dias",
    storeNote: "Atendimento em balcão para cópias de chaves, afiações, xerox e foto 3×4.",
    emergencyNote: "Atendimento no local para veículos e residências em Joinville."
  },

  paymentMethods: [
    "Cartões de crédito (principais bandeiras)",
    "Cartões de débito"
  ],

  // Metadados estritos conforme SEO-PESQUISA-CHAVEIRO-MOTA.md
  seoPages: {
    home: {
      path: "/",
      h1: "Chaveiro 24 horas em Joinville",
      title: "Chaveiro 24 Horas em Joinville | Chaveiro Mota",
      description: "Chaveiro Mota em Joinville: plantão 24 horas para aberturas, chaves automotivas e fechaduras. Loja no Jarivatuba. Ligue ou fale pelo WhatsApp.",
      breadcrumb: "Início"
    },
    automotive: {
      path: "/chaveiro-automotivo-joinville/",
      h1: "Chaveiro Automotivo em Joinville",
      title: "Chaveiro Automotivo em Joinville | Chaveiro Mota",
      description: "Abertura de veículos, chaves codificadas e de presença, controles e conserto de ignição em Joinville. Consulte o Chaveiro Mota pelo WhatsApp.",
      breadcrumb: "Chaveiro Automotivo"
    },
    residential: {
      path: "/chaveiro-residencial-joinville/",
      h1: "Chaveiro Residencial em Joinville",
      title: "Chaveiro Residencial em Joinville | Chaveiro Mota",
      description: "Aberturas, troca de fechaduras, chaves residenciais, controles de portão e cofres em Joinville. Consulte o Chaveiro Mota sobre seu serviço.",
      breadcrumb: "Chaveiro Residencial"
    },
    keys: {
      path: "/copia-de-chaves-joinville/",
      h1: "Cópia de Chaves em Joinville",
      title: "Cópia de Chaves em Joinville | Chaveiro Mota",
      description: "Cópias de chaves simples, tetra, multiponto, pantográfica e canivete no Jarivatuba, Joinville. Confira endereço e horários da loja Chaveiro Mota.",
      breadcrumb: "Cópia de Chaves"
    }
  },

  hero: {
    h1: "Chaveiro 24 horas em Joinville",
    supportText: "Abertura de veículos e residências, chaves automotivas e serviços de fechaduras no Jarivatuba e em Joinville. Orçamento sem compromisso.",
    ctaWhatsappText: "Solicitar atendimento",
    ctaWhatsappMessage: "Olá! Vi o site do Chaveiro Mota e preciso de atendimento de chaveiro em Joinville.",
    ctaPhoneText: "Ligar agora",
    image: {
      webp: "/assets/images/hero-bancada-chaveiro.webp",
      jpg: "/assets/images/hero-bancada-chaveiro.jpg",
      srcsetWebp: "/assets/images/hero-bancada-chaveiro-480w.webp 480w, /assets/images/hero-bancada-chaveiro-768w.webp 768w, /assets/images/hero-bancada-chaveiro-1024w.webp 1024w, /assets/images/hero-bancada-chaveiro-1536w.webp 1536w",
      srcsetJpg: "/assets/images/hero-bancada-chaveiro-480w.jpg 480w, /assets/images/hero-bancada-chaveiro-768w.jpg 768w, /assets/images/hero-bancada-chaveiro-1024w.jpg 1024w, /assets/images/hero-bancada-chaveiro-1536w.jpg 1536w",
      sizes: "(max-width: 640px) calc(100vw - 40px), (max-width: 991px) calc(100vw - 64px), 540px",
      alt: "Bancada técnica de chaveiro com duplicadora manual de chaves e ferramentas de precisão (imagem ilustrativa)",
      width: 1536,
      height: 1024
    }
  },

  services: [
    {
      id: "chaveiro-automotivo",
      title: "Chaveiro Automotivo",
      h2Title: "Chaveiro automotivo em Joinville",
      eyebrow: "Para o seu veículo",
      description: "Atendimento no local para veículos trancados, confecção e cópia de chaves codificadas, sistemas de presença, reparo de ignição e controles.",
      pageUrl: "/chaveiro-automotivo-joinville/",
      image: {
        webp: "/assets/images/automotivo-atendimento.webp",
        jpg: "/assets/images/automotivo-atendimento.jpg",
        srcsetWebp: "/assets/images/automotivo-atendimento-480w.webp 480w, /assets/images/automotivo-atendimento-768w.webp 768w, /assets/images/automotivo-atendimento-1024w.webp 1024w, /assets/images/automotivo-atendimento-1536w.webp 1536w",
        srcsetJpg: "/assets/images/automotivo-atendimento-480w.jpg 480w, /assets/images/automotivo-atendimento-768w.jpg 768w, /assets/images/automotivo-atendimento-1024w.jpg 1024w, /assets/images/automotivo-atendimento-1536w.jpg 1536w",
        sizes: "(max-width: 640px) calc(100vw - 40px), (max-width: 991px) calc(100vw - 64px), 540px",
        alt: "Chave automotiva sobre maleta de ferramentas técnicas junto a veículo (imagem ilustrativa)",
        width: 1536,
        height: 1024
      },
      items: [
        {
          title: "Abertura de veículos",
          description: "Abertura cuidadosa de veículos trancados com a chave no interior."
        },
        {
          title: "Chaves codificadas e de presença",
          description: "Confecção, corte e programação de chaves com transponder ou presença. Consulte compatibilidade para seu veículo."
        },
        {
          title: "Controles de alarme e telecomando",
          description: "Substituição de carcaças desgastadas, troca de botões e configuração de controles."
        },
        {
          title: "Conserto de miolo de ignição",
          description: "Reparo e manutenção de cilindros de ignição travados ou desgastados."
        }
      ],
      ctaLabel: "Solicitar chaveiro automotivo",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e preciso de atendimento para veículo em Joinville."
    },
    {
      id: "chaveiro-residencial",
      title: "Chaveiro Residencial",
      h2Title: "Chaveiro residencial em Joinville",
      eyebrow: "Para a sua residência ou empresa",
      description: "Atendimento emergencial e serviços programados para portas trancadas, troca de segredos, instalação de fechaduras convencionais e eletrônicas e abertura de cofres.",
      pageUrl: "/chaveiro-residencial-joinville/",
      image: {
        webp: "/assets/images/residencial-porta.webp",
        jpg: "/assets/images/residencial-porta.jpg",
        srcsetWebp: "/assets/images/residencial-porta-480w.webp 480w, /assets/images/residencial-porta-768w.webp 768w, /assets/images/residencial-porta-1024w.webp 1024w, /assets/images/residencial-porta-1536w.webp 1536w",
        srcsetJpg: "/assets/images/residencial-porta-480w.jpg 480w, /assets/images/residencial-porta-768w.jpg 768w, /assets/images/residencial-porta-1024w.jpg 1024w, /assets/images/residencial-porta-1536w.jpg 1536w",
        sizes: "(max-width: 640px) calc(100vw - 40px), (max-width: 991px) calc(100vw - 64px), 540px",
        alt: "Porta de madeira residencial entreaberta com conjunto de fechadura convencional (imagem ilustrativa)",
        width: 1536,
        height: 1024
      },
      items: [
        {
          title: "Abertura de portas e portões",
          description: "Socorro para portas batidas, chaves esquecidas no interior ou chaves quebradas na fechadura."
        },
        {
          title: "Instalação e troca de fechaduras",
          description: "Instalação de modelos mecânicos, travas auxiliares e fechaduras digitais/eletrônicas."
        },
        {
          title: "Troca de segredos e cilindros",
          description: "Alteração de segredo interno para segurança após mudança de imóvel ou perda de chaves."
        },
        {
          title: "Abertura de cofres",
          description: "Atendimento técnico para abertura de cofres residenciais e comerciais."
        }
      ],
      ctaLabel: "Solicitar chaveiro residencial",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e preciso de atendimento residencial em Joinville."
    }
  ],

  // Serviços de Balcão e Oficina da Loja Física
  storeServices: {
    eyebrow: "Atendimento no Jarivatuba",
    title: "Serviços de Balcão e Oficina",
    description: "Cópias de chaves, troca de segredos, afiação de ferramentas, foto 3×4 e impressões rápidas na nossa loja física.",
    items: [
      {
        title: "Cópias de chaves",
        description: "Cópias de chaves residenciais simples, tetra, multiponto e lâminas automotivas."
      },
      {
        title: "Troca de segredo e reparos",
        description: "Substituição de segredos e manutenção de fechaduras e cilindros na oficina."
      },
      {
        title: "Afiação de ferramentas",
        description: "Afiação precisa de alicates, tesouras domésticas e facas."
      },
      {
        title: "Xerox e foto 3×4",
        description: "Serviços práticos de cópias de documentos, impressões e fotos 3×4."
      }
    ],
    ctaLabel: "Consultar serviços de balcão",
    whatsappMessage: "Olá! Vi o site do Chaveiro Mota e gostaria de tirar uma dúvida sobre serviços de balcão na loja."
  },

  // 4 Módulos Leves com Ícones para o Balcão da Loja Física (Preenchimento das preferências da Julia)
  storeModules: [
    {
      id: "copias",
      title: "Cópias de Chaves",
      description: "Chaves simples (Yale), tetra, multiponto, pantográfica e canivete.",
      icon: "key",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e gostaria de consultar sobre cópias de chaves no balcão da loja."
    },
    {
      id: "segredo",
      title: "Troca de Segredo",
      description: "Substituição e ajuste de segredos em miolos e fechaduras trazidos à oficina.",
      icon: "lock",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e gostaria de consultar sobre troca de segredo na loja física."
    },
    {
      id: "afiacoes",
      title: "Afiações de Ferramentas",
      description: "Afiação profissional de alicates, tesouras domésticas e facas.",
      icon: "scissors",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e gostaria de consultar sobre afiações na oficina da loja."
    },
    {
      id: "impressao",
      title: "Xerox, Impressão e Foto 3×4",
      description: "Cópias de documentos, impressões rápidas e fotos 3×4 para documentos.",
      icon: "document",
      whatsappMessage: "Olá! Vi o site do Chaveiro Mota e gostaria de consultar sobre serviços de xerox e foto 3x4."
    }
  ] as StoreModule[],

  // Orientações para solicitar atendimento
  requestGuidance: {
    title: "Para solicitar atendimento rápido",
    subtitle: "Três informações simples para agilizar o orçamento e o deslocamento do chaveiro:",
    items: [
      {
        number: "1",
        label: "Qual o serviço necessário?",
        desc: "Informe se é abertura de porta, veículo trancado, chave quebrada, troca de fechadura ou cópia."
      },
      {
        number: "2",
        label: "Onde você está em Joinville?",
        desc: "Informe o bairro ou ponto de referência para cálculo do deslocamento do plantão."
      },
      {
        number: "3",
        label: "Qual o modelo ou tipo de fechadura?",
        desc: "Para veículos, informe marca, modelo e ano. Para portas, se a fechadura é simples, tetra ou digital."
      }
    ]
  },

  faqs: [
    {
      question: "Qual é a diferença entre o plantão 24h e o horário da loja física?",
      answer: "O plantão móvel atende 24 horas todos os dias no local para urgências de fechaduras e veículos em Joinville. Já a loja física na Rua Agulhas Negras, 1530 (Jarivatuba) atende de segunda a sexta, das 09h às 12h e das 14h às 18h para serviços de balcão como cópias de chaves, afiações e foto 3×4."
    },
    {
      question: "Vocês atendem veículos de qualquer modelo?",
      answer: "Atendemos diversos modelos para abertura e confecção de chaves. Como cada fabricante possui sistemas específicos de transponder e telecomando, consulte a viabilidade informando marca, modelo e ano pelo WhatsApp."
    },
    {
      question: "Vocês realizam instalação e troca de fechaduras digitais?",
      answer: "Sim. Realizamos instalação, alinhamento técnico e substituição de fechaduras eletrônicas, digitais e mecânicas convencionais em portas residenciais e comerciais."
    },
    {
      question: "Como funciona o pagamento dos serviços?",
      answer: "Aceitamos os principais cartões de crédito e débito. Os orçamentos são informados previamente e sem compromisso pelo telefone ou WhatsApp."
    },
    {
      question: "Preciso levar a chave original para fazer uma cópia na loja?",
      answer: "Para cópias comuns de balcão, trazer a chave original garante máxima precisão no corte. Em caso de perda total de chave de veículo ou residência, realizamos o atendimento técnico no local para confecção ou abertura."
    }
  ] as FaqItem[]
};

export function buildWhatsAppUrl(message: string): string {
  return `${siteData.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
