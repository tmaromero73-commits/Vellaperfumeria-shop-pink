
import type { Product } from './types';

export const allProducts: Product[] = [
    // --- MAQUILLAJE (Categoría: makeup) ---
    {
        id: 47188,
        name: "Iluminador Líquido Illuskin THE ONE",
        brand: "The ONE",
        price: 8.46,
        regularPrice: 20.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47188%2F47188_1.png",
        description: "Iluminador líquido versátil para un brillo natural o intenso. Mezclable y modulable.",
        stock: 50,
        category: 'makeup',
        tag: 'NOVEDAD',
        rating: 4.8,
        reviewCount: 42
    },
    {
        id: 46134,
        name: "BB Cream Beautifier MAX SPF 15 THE ONE",
        brand: "The ONE",
        price: 5.77,
        regularPrice: 17.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46134%2F46134_1.png",
        description: "BB Cream multifuncional que hidrata, corrige y protege. Acabado natural.",
        stock: 289,
        category: 'makeup',
        tag: 'NOVEDAD',
        rating: 4.7,
        reviewCount: 312
    },
    {
        id: 46901,
        name: "Perlas con Serum Giordani Gold - Edición Especial",
        brand: "Giordani Gold",
        price: 16.93,
        regularPrice: 35.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46901%2F46901_1.png",
        description: "Perlas bronceadoras infusionadas con serum antiedad. Edición limitada.",
        stock: 50,
        category: 'makeup',
        tag: 'NOVEDAD',
        rating: 5.0,
        reviewCount: 15
    },
    {
        id: 46940,
        name: "Stick Iluminador con Color THE ONE",
        brand: "The ONE",
        price: 7.69,
        regularPrice: 22.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46940%2F46940_1.png",
        description: "Iluminador en barra fácil de aplicar para un brillo radiante al instante.",
        stock: 80,
        category: 'makeup',
        tag: 'NOVEDAD'
    },
    {
        id: 46906,
        name: "Maquillaje Stress-Free Everlasting Sync THE ONE",
        brand: "The ONE",
        price: 8.46,
        regularPrice: 20.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46906%2F46906_1.png",
        description: "Base de maquillaje inteligente que se adapta a tu piel y al entorno. SPF 20.",
        stock: 75,
        category: 'makeup',
        tag: 'NOVEDAD'
    },
    {
        id: 42121,
        name: "Paleta de Ojos y Rostro Fabulous Beauty Giordani Gold",
        brand: "Giordani Gold",
        price: 19.24,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42121%2F42121_1.png",
        description: "Paleta todo en uno de lujo para ojos y rostro. Pigmentación intensa y sedosa.",
        stock: 40,
        category: 'makeup',
        tag: 'OFERTA'
    },
    {
        id: 42102,
        name: "Maquillaje Mineral de Larga Duración Giordani Gold",
        brand: "Giordani Gold",
        price: 13.08,
        regularPrice: 31.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42102%2F42102_1.png",
        description: "Base mineral de larga duración con cobertura completa y acabado luminoso. SPF 20.",
        stock: 60,
        category: 'makeup',
        tag: 'OFERTA'
    },
    {
        id: 41107,
        name: "Corrector y Serum Potenciador Giordani Gold",
        brand: "Giordani Gold",
        price: 8.46,
        regularPrice: 24.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41107%2FES%2F41107_1.png",
        description: "Corrector que borra imperfecciones mientras trata la piel con su serum.",
        stock: 50,
        category: 'makeup',
        tag: 'OFERTA'
    },
    {
        id: 43237,
        name: "Barra de Labios Colour Stylist Ultimate THE ONE",
        brand: "The ONE",
        price: 9.99,
        regularPrice: 16.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43237%2F43237_1.png",
        description: "Color intenso y cobertura total en una sola pasada. Acabado cremoso.",
        stock: 120,
        category: 'makeup'
    },

    // --- CUIDADO FACIAL (Categoría: skincare) ---
    {
        id: 46319,
        name: "Niacinamida 10% Power Drops Proceuticals Novage+",
        brand: "Novage+",
        price: 26.94,
        regularPrice: 57.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46319%2F46319_1.png",
        description: "Potenciador con Niacinamida para fortalecer la barrera cutánea y mejorar la textura.",
        stock: 160,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48675,
        name: "Caja de Regalo Crema Universal - Edición Especial",
        brand: "Tender Care",
        price: 13.85,
        regularPrice: 36.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48675%2F48675_1.png",
        description: "Trío de cremas universales: Grosella Negra, Original y Ciruela Dulce.",
        stock: 100,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48105,
        name: "Mascarilla Revitalizante Intensiva Noche Novage+",
        brand: "Novage+",
        price: 20.78,
        regularPrice: 39.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48105%2F48105_1.png",
        description: "Mascarilla nocturna intensiva para una piel revitalizada al despertar.",
        stock: 80,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48117,
        name: "Crema de Noche Reafirmante Royal Velvet",
        brand: "Royal Velvet",
        price: 18.47,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48117%2F48117_1.png",
        description: "Crema de noche rica en infusión de Iris Negro para reafirmar la piel madura.",
        stock: 55,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48115,
        name: "Crema de Día Reafirmante SPF 20 Royal Velvet",
        brand: "Royal Velvet",
        price: 18.47,
        regularPrice: 42.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48115%2F48115_1.png",
        description: "Crema de día reafirmante que hidrata y protege la piel.",
        stock: 12,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48114,
        name: "Cápsulas Restauradoras Novage+",
        brand: "Novage+",
        price: 32.33,
        regularPrice: 65.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48114%2F48114_1.png",
        description: "Mezcla de aceites preciosos en cápsulas monodosis para nutrir la piel.",
        stock: 8,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 48649,
        name: "Crema Universal Original - Edición Especial",
        brand: "Tender Care",
        price: 5.38,
        regularPrice: 14.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48649%2F48649_1.png",
        description: "La fórmula original icónica que suaviza y protege la piel seca.",
        stock: 727,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 45248,
        name: "Serum Even Out Optimals",
        brand: "Optimals",
        price: 13.85,
        regularPrice: 30.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45248%2F45248_1.png",
        description: "Serum que reduce la apariencia de manchas oscuras y unifica el tono.",
        stock: 317,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 45245,
        name: "Crema Hidratante Rica Even Out Optimals",
        brand: "Optimals",
        price: 10.00,
        regularPrice: 27.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_1.png",
        description: "Hidratante rica que ayuda a prevenir manchas y nutre la piel.",
        stock: 222,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 47439,
        name: "Crema Universal con Ciruela Dulce",
        brand: "Tender Care",
        price: 4.84,
        regularPrice: 14.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47439%2F47439_1.png",
        description: "Edición limitada con delicioso aroma a ciruela dulce.",
        stock: 1618,
        category: 'skincare',
        tag: 'NOVEDAD'
    },
    {
        id: 45291,
        name: "Contorno de Ojos y Labios Optimals",
        brand: "Optimals",
        price: 12.31,
        regularPrice: 24.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45291%2F45291_1.png",
        description: "Cuidado reafirmante para la delicada zona de ojos y labios.",
        stock: 436,
        category: 'skincare',
        tag: 'OFERTA'
    },
    {
        id: 44098,
        name: "Día SPF 30 Multi-Correcting Novage+",
        brand: "Novage+",
        price: 19.24,
        regularPrice: 55.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44098%2F44098_1.png",
        description: "Crema de día multi-correctora con SPF 30 contra el envejecimiento.",
        stock: 839,
        category: 'skincare',
        tag: 'OFERTA'
    },
    {
        id: 41075,
        name: "Serum Renewing Restore Novage+",
        brand: "Novage+",
        price: 29.25,
        regularPrice: 64.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41075%2F41075_1.png",
        description: "Serum renovador que mejora la elasticidad y reduce arrugas profundas.",
        stock: 664,
        category: 'skincare',
        tag: 'OFERTA'
    },
    {
        id: 34849,
        name: "Aceite Purificante Árbol de Té Love Nature",
        brand: "Love Nature",
        price: 6.54,
        regularPrice: 18.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F34849%2F34849_1.png",
        description: "Aceite concentrado para combatir imperfecciones y purificar la piel.",
        stock: 1783,
        category: 'skincare',
        tag: 'OFERTA'
    },
    {
        id: 36151,
        name: "Crema Universal Grosella Negra",
        brand: "Tender Care",
        price: 3.99,
        regularPrice: 14.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F36151%2F36151_1.png",
        description: "El bálsamo clásico con un toque afrutado de grosella negra.",
        stock: 100,
        category: 'skincare',
        tag: 'OFERTA'
    },

    // --- FRAGANCIAS (Categoría: perfume) ---
    {
        id: 48028,
        name: "Eau de Parfum Giordani Gold White",
        brand: "Giordani Gold",
        price: 22.32,
        regularPrice: 22.32,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48028%2F48028_1.png",
        description: "Fragancia luminosa que captura la esencia de la elegancia italiana.",
        stock: 45,
        category: 'perfume'
    },
    {
        id: 46801,
        name: "Eau de Parfum Divine Dark Velvet",
        brand: "Divine",
        price: 34.65,
        regularPrice: 34.65,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46801%2F46801_1.png",
        description: "Intenso, glamuroso y aterciopelado. Floral oriental para destacar.",
        stock: 28,
        category: 'perfume',
        tag: 'NOVEDAD'
    },
    {
        id: 47514,
        name: "Eau de Parfum Miss Giordani Floral",
        brand: "Giordani Gold",
        price: 29.99,
        regularPrice: 44.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47514%2F47514_1.png",
        description: "Un aroma floral sofisticado y vibrante para momentos especiales.",
        stock: 80,
        category: 'perfume',
        tag: 'OFERTA'
    },
    {
        id: 38497,
        name: "Divine Eau de Parfum",
        brand: "Divine",
        price: 26.99,
        regularPrice: 45.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F38497%2FES%2F38497_1.png",
        description: "Fragancia icónica con notas de Orquídea y Almizcle. Elegancia pura.",
        stock: 40,
        category: 'perfume',
        tag: 'OFERTA'
    },
    {
        id: 47499,
        name: "Eau de Toilette Elvie Midnight Magic",
        brand: "Elvie",
        price: 24.99,
        regularPrice: 41.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47499%2F47499_1.png",
        description: "Magia de medianoche. Aroma misterioso y encantador.",
        stock: 45,
        category: 'perfume',
        tag: 'NOVEDAD'
    },

    // --- BIENESTAR (Categoría: wellness) ---
    {
        id: 47847,
        name: "Lote Ritual Cuidado Wellosophy",
        brand: "Wellosophy",
        price: 53.89,
        regularPrice: 101.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47847%2F47847_1.png",
        description: "Rutina completa para el bienestar de tu piel desde el interior.",
        stock: 62,
        category: 'wellness',
        tag: 'SET'
    },
    {
        id: 29696,
        name: "WellnessPack Mujer",
        brand: "Wellosophy",
        price: 32.99,
        regularPrice: 46.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F29696%2F29696.png",
        description: "Suplemento diario todo en 1 con multivitaminas, minerales y omega 3.",
        stock: 50,
        category: 'wellness',
        tag: 'OFERTA'
    },

    // --- HOMBRE (Categoría: men) ---
    {
        id: 47502,
        name: "Eau de Parfum Mister Giordani Aqua",
        brand: "Giordani Gold",
        price: 29.99,
        regularPrice: 44.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47502%2F47502_1.png",
        description: "Fragancia acuática y refinada para el hombre moderno.",
        stock: 50,
        category: 'men',
        tag: 'OFERTA'
    },
    {
        id: 42490,
        name: "Eau de Parfum Ascendant Intense",
        brand: "Ascendant",
        price: 34.99,
        regularPrice: 52.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42490%2F42490_1.png",
        description: "Intensa y poderosa. Notas orientales y especiadas.",
        stock: 45,
        category: 'men'
    },

    // --- CUIDADO PERSONAL (Categoría: personal-care) ---
    {
        id: 46968,
        name: "Crema Manos y Cuerpo Milk & Honey Gold",
        brand: "Milk & Honey",
        price: 19.00,
        regularPrice: 24.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46968%2F46968_1.png",
        description: "La legendaria crema nutritiva con extractos orgánicos de leche y miel.",
        stock: 80,
        category: 'personal-care'
    },
    {
        id: 41338,
        name: "Crema de Manos Aceite de Coco",
        brand: "Love Nature",
        price: 2.99,
        regularPrice: 11.00,
        imageUrl: "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F41338%2FES%2F41338_1.png",
        description: "Nutrición intensa para manos secas con las propiedades del coco.",
        stock: 50,
        category: 'personal-care',
        tag: 'OFERTA'
    }
];
