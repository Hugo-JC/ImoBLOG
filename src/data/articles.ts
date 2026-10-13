export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: number;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: string[];
};

export const categories = [
  "Todos",
  "Comprar",
  "Arrendar",
  "Investir",
  "Crédito habitação",
  "Legislação",
  "Tendências",
  "Avaliação",
];

export const articles: Article[] = [
  {
    slug: "comprar-ou-arrendar",
    category: "Comprar",
    title: "Comprar ou arrendar: como decidir sem arrependimentos",
    excerpt:
      "Os critérios que realmente pesam na decisão, explicados passo a passo.",
    readTime: 6,
    author: "Equipa ImoBlog",
    date: "2026-10-08",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Casa contemporânea rodeada de vegetação",
    featured: true,
    body: [
      "Escolher entre comprar e arrendar uma casa não é apenas uma questão de prestação mensal. É uma decisão que depende dos teus planos, da estabilidade financeira e da forma como imaginas os próximos anos.",
      "Começa por comparar o custo total. Na compra, considera a entrada, impostos, manutenção e despesas de financiamento. No arrendamento, inclui a renda, caução, encargos e a flexibilidade que ganhas ao não assumir um compromisso de longo prazo.",
      "Pensa também no horizonte temporal. Se precisas de mobilidade ou ainda estás a descobrir onde queres viver, arrendar pode dar-te liberdade. Se procuras estabilidade e tens condições para suportar os custos, comprar pode fazer sentido.",
      "Não existe uma resposta universal. O melhor caminho é aquele que protege o teu orçamento e se adapta à tua vida — não aquele que parece ser o mais esperado.",
    ],
  },
  {
    slug: "taxa-fixa-variavel-mista",
    category: "Crédito habitação",
    title: "Taxa fixa, variável ou mista? O guia simples",
    excerpt:
      "Percebe as diferenças antes de falares com o banco e compara os riscos.",
    readTime: 8,
    author: "Equipa ImoBlog",
    date: "2026-10-05",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Maquete de uma casa sobre uma mesa",
    body: [
      "A taxa de juro influencia o custo do crédito e o valor das prestações. Antes de escolher, é importante compreender como cada modalidade funciona e quais os riscos que estás disposto a assumir.",
      "Com uma taxa fixa, a taxa acordada mantém-se durante o período definido. Com uma taxa variável, a prestação pode subir ou descer de acordo com o indexante e as condições do contrato. Uma taxa mista combina um período inicial fixo com um período variável.",
      "Pede simulações comparáveis e confirma com a instituição financeira todas as comissões, seguros, condições e cenários possíveis. Uma prestação inicial mais baixa não significa necessariamente um custo total inferior.",
    ],
  },
  {
    slug: "primeiro-investimento-imobiliario",
    category: "Investir",
    title: "Primeiro investimento imobiliário: por onde começar",
    excerpt:
      "Os conceitos essenciais para quem está a dar os primeiros passos.",
    readTime: 7,
    author: "Equipa ImoBlog",
    date: "2026-10-02",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Edifícios residenciais numa cidade",
    body: [
      "Investir em imóveis exige pesquisa, planeamento e uma visão realista dos custos. Antes de procurar uma propriedade, define o teu objetivo: rendimento de arrendamento, valorização futura ou utilização própria.",
      "Analisa a localização, a procura, o estado do imóvel e as despesas recorrentes. Inclui períodos sem inquilino, manutenção, impostos e eventuais obras na tua estimativa.",
      "Nunca tomes uma decisão apenas com base numa promessa de valorização. Compara cenários e procura aconselhamento profissional quando precisares de avaliar implicações legais ou financeiras.",
    ],
  },
  {
    slug: "contrato-arrendamento",
    category: "Legislação",
    title: "Contrato de arrendamento: o que ler antes de assinar",
    excerpt:
      "As cláusulas que mais geram dúvidas, explicadas em linguagem clara.",
    readTime: 5,
    author: "Equipa ImoBlog",
    date: "2026-09-28",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Documentos e caderno sobre uma mesa de trabalho",
    body: [
      "Um contrato deve deixar claras as condições acordadas entre as partes. Lê com atenção a identificação dos intervenientes, a descrição do imóvel, o prazo, o valor, a forma de pagamento e as responsabilidades de cada parte.",
      "Confirma também as regras sobre caução, reparações, renovação, denúncia e entrega do imóvel. Se alguma cláusula não for clara, pede esclarecimentos antes de assinar.",
      "As regras variam conforme o país e a legislação aplicável. Este artigo é informativo e não substitui aconselhamento jurídico adequado ao teu caso.",
    ],
  },
  {
    slug: "sinais-do-mercado-imobiliario",
    category: "Tendências",
    title: "Como ler os sinais do mercado imobiliário",
    excerpt: "Indicadores que ajudam a perceber para onde o mercado caminha.",
    readTime: 6,
    author: "Equipa ImoBlog",
    date: "2026-09-24",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Fachadas de edifícios modernos vistos de baixo",
    body: [
      "O mercado imobiliário é influenciado por vários fatores: oferta disponível, procura, crédito, emprego, infraestruturas e evolução demográfica. Nenhum indicador, isoladamente, conta toda a história.",
      "Observa a evolução dos preços anunciados, o tempo que os imóveis permanecem no mercado e a diferença entre os valores pedidos e os valores efetivamente negociados, quando esses dados estiverem disponíveis.",
      "Compara sempre períodos e zonas semelhantes. Uma tendência nacional pode não refletir o que está a acontecer num bairro ou numa cidade específica.",
    ],
  },
  {
    slug: "calcular-valor-imovel",
    category: "Avaliação",
    title: "Como se calcula o valor de um imóvel",
    excerpt: "Localização, estado, área e comparáveis: o que entra na conta.",
    readTime: 9,
    author: "Equipa ImoBlog",
    date: "2026-09-19",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Interior luminoso de uma habitação contemporânea",
    body: [
      "O valor de um imóvel resulta de vários elementos. A localização, a área, a distribuição dos espaços, o estado de conservação e os serviços próximos podem influenciar o interesse dos compradores.",
      "Uma forma comum de obter uma referência inicial é comparar imóveis semelhantes na mesma zona. As diferenças de estado, dimensão, acessibilidade e características devem ser consideradas com cuidado.",
      "Os preços anunciados não são necessariamente preços de venda. Para uma avaliação rigorosa, considera dados fiáveis e, quando necessário, recorre a um profissional qualificado.",
    ],
  },
];
