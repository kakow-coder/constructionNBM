export const products = [
  {
    id: 1,
    name: "Cimento Portland CP-II-E-32",
    category: "Cimento e Argamassa",
    price: 24.90,
    originalPrice: 29.90,
    image: "https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/Untitled%20folder/cimento_portland.jpg",
    description: "Cimento Portland composto com escória, ideal para obras em geral. Saco de 50kg.",
    specifications: {
      "Peso": "50kg",
      "Tipo": "CP-II-E-32",
      "Aplicação": "Obras em geral",
      "Marca": "Votorantim"
    },
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Tijolo Baiano 19x19x29",
    category: "Tijolos e Blocos",
    price: 0.85,
    image: "/src/assets/images/produtos/tijolo_baiano.jpg",
    description: "Tijolo baiano de qualidade superior, ideal para alvenaria de vedação.",
    specifications: {
      "Dimensões": "19x19x29cm",
      "Material": "Cerâmica",
      "Aplicação": "Alvenaria de vedação",
      "Resistência": "Alta"
    },
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: 3,
    name: "Tijolo 8 Furos (11,5x19x19)",
    category: "Tijolos e Blocos",
    price: 0.75,
    image: "/src/assets/images/produtos/tijolo_8_furos.jpg",
    description: "Tijolo cerâmico com 8 furos, excelente isolamento térmico e acústico.",
    specifications: {
      "Dimensões": "11,5x19x19cm",
      "Furos": "8",
      "Material": "Cerâmica",
      "Aplicação": "Alvenaria estrutural"
    },
    inStock: true,
    rating: 4.7,
    reviews: 124
  },
  {
    id: 4,
    name: "Kit Ferramentas Básicas",
    category: "Ferramentas",
    price: 189.90,
    originalPrice: 249.90,
    image: "/src/assets/images/produtos/ferramentas_variadas.jpg",
    description: "Kit completo com as principais ferramentas para construção civil.",
    specifications: {
      "Itens": "15 peças",
      "Material": "Aço carbono",
      "Garantia": "12 meses",
      "Marca": "Tramontina"
    },
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: "Maleta de Ferramentas Profissional",
    category: "Ferramentas",
    price: 299.90,
    image: "/src/assets/images/produtos/ferramentas_maleta.jpg",
    description: "Maleta completa com ferramentas profissionais para construção.",
    specifications: {
      "Itens": "50 peças",
      "Material": "Aço inox",
      "Maleta": "Resistente",
      "Marca": "Stanley"
    },
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 6,
    name: "Tinta Acrílica Premium 18L",
    category: "Tintas e Vernizes",
    price: 159.90,
    originalPrice: 189.90,
    image: "/src/assets/images/produtos/tinta_azul.jpg",
    description: "Tinta acrílica premium, alta cobertura e durabilidade. Galão de 18 litros.",
    specifications: {
      "Volume": "18 litros",
      "Tipo": "Acrílica",
      "Cobertura": "120m²",
      "Marca": "Coral"
    },
    inStock: true,
    rating: 4.7,
    reviews: 142
  },
  {
    id: 7,
    name: "Tinta Supermax Látex",
    category: "Tintas e Vernizes",
    price: 89.90,
    image: "/src/assets/images/produtos/tinta_supermax.png",
    description: "Tinta látex econômica com boa cobertura. Galão de 3,6 litros.",
    specifications: {
      "Volume": "3,6 litros",
      "Tipo": "Látex",
      "Cobertura": "40m²",
      "Marca": "Supermax"
    },
    inStock: true,
    rating: 4.3,
    reviews: 98
  },
  {
    id: 8,
    name: "Kit Material Elétrico Completo",
    category: "Materiais Elétricos",
    price: 249.90,
    image: "/src/assets/images/produtos/material_eletrico_variado.png",
    description: "Kit completo com materiais elétricos para instalações residenciais.",
    specifications: {
      "Itens": "Fios, disjuntores, tomadas",
      "Voltagem": "110V/220V",
      "Certificação": "INMETRO",
      "Marca": "Pial Legrand"
    },
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 9,
    name: "Material Elétrico Econômico",
    category: "Materiais Elétricos",
    price: 129.90,
    originalPrice: 159.90,
    image: "/src/assets/images/produtos/material_eletrico_economia.jpg",
    description: "Kit básico de materiais elétricos com excelente custo-benefício.",
    specifications: {
      "Itens": "Básicos essenciais",
      "Voltagem": "110V/220V",
      "Certificação": "INMETRO",
      "Marca": "Steck"
    },
    inStock: true,
    rating: 4.4,
    reviews: 134
  },
  {
    id: 10,
    name: "Kit Hidráulico Completo",
    category: "Materiais Hidráulicos",
    price: 199.90,
    image: "/src/assets/images/produtos/material_hidraulico_completa.jpg",
    description: "Kit completo com tubos, conexões e registros para instalações hidráulicas.",
    specifications: {
      "Material": "PVC",
      "Diâmetros": "20mm, 25mm, 32mm",
      "Pressão": "PN 12,5",
      "Marca": "Tigre"
    },
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 11,
    name: "Tubos e Conexões PVC",
    category: "Materiais Hidráulicos",
    price: 89.90,
    image: "/src/assets/images/produtos/material_hidraulico_tubos.jpg",
    description: "Conjunto de tubos e conexões PVC para água fria.",
    specifications: {
      "Material": "PVC",
      "Diâmetros": "20mm, 25mm",
      "Pressão": "PN 10",
      "Marca": "Amanco"
    },
    inStock: true,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 12,
    name: "Pisos e Revestimentos Variados",
    category: "Pisos e Revestimentos",
    price: 45.90,
    image: "/src/assets/images/produtos/pisos_revestimentos.jpg",
    description: "Cerâmica para piso e parede, diversos modelos e cores disponíveis.",
    specifications: {
      "Formato": "45x45cm",
      "Tipo": "Cerâmica esmaltada",
      "Absorção": "Baixa",
      "Marca": "Portobello"
    },
    inStock: true,
    rating: 4.6,
    reviews: 189
  }
];

export const categories = [
  {
    id: 1,
    name: "Cimento e Argamassa",
    image: "https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/logos/Untitled%20folder/cimento_portland.jpg",
    description: "Cimentos, argamassas e materiais para fundação"
  },
  {
    id: 2,
    name: "Tijolos e Blocos",
    image: "/src/assets/images/produtos/tijolo_baiano.jpg",
    description: "Tijolos cerâmicos, blocos de concreto e vedação"
  },
  {
    id: 3,
    name: "Ferramentas",
    image: "/src/assets/images/produtos/ferramentas_variadas.jpg",
    description: "Ferramentas manuais e elétricas para construção"
  },
  {
    id: 4,
    name: "Tintas e Vernizes",
    image: "/src/assets/images/produtos/tinta_azul.jpg",
    description: "Tintas, vernizes e produtos para acabamento"
  },
  {
    id: 5,
    name: "Materiais Elétricos",
    image: "/src/assets/images/produtos/material_eletrico_variado.png",
    description: "Fios, cabos, disjuntores e materiais elétricos"
  },
  {
    id: 6,
    name: "Materiais Hidráulicos",
    image: "/src/assets/images/produtos/material_hidraulico_completa.jpg",
    description: "Tubos, conexões e materiais para hidráulica"
  },
  {
    id: 7,
    name: "Pisos e Revestimentos",
    image: "/src/assets/images/produtos/pisos_revestimentos.jpg",
    description: "Cerâmicas, porcelanatos e revestimentos"
  }
];

