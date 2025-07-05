
// Quiz questions with point-based scoring system
export interface Question {
  id: number;
  question: string;
  type: 'single' | 'multiple';
  maxSelections?: number;
  options: Array<{
    id: string;
    text: string;
    tags: string[];
    points: Record<string, number>;
  }>;
}

export interface MenuItem {
  id: string;
  name: string;
  type: 'sandwich' | 'salad' | 'wrap';
  price: number;
  description: string;
  tags: string[];
  categoryScores: Record<string, number>;
  ingredients: string[];
  emoji: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  type: 'coffee' | 'juice' | 'smoothie';
  price: number;
  tags: string[];
  emoji: string;
}

export interface SweetItem {
  id: string;
  name: string;
  price: number;
  tags: string[];
  emoji: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "How hungry are you feeling right now?",
    type: 'single',
    options: [
      {
        id: 'light',
        text: '🥗 Light snack - just a little something',
        tags: ['light'],
        points: { portion_small: 3, healthy: 2, grab_and_go: 1 }
      },
      {
        id: 'normal',
        text: '🥪 Normal hunger - regular meal please',
        tags: ['normal'],
        points: { portion_medium: 3, comfort: 1 }
      },
      {
        id: 'starving',
        text: '🍔 Starving - I need something filling!',
        tags: ['hearty'],
        points: { portion_large: 3, hearty: 2, comfort: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "What's your current mood today?",
    type: 'single',
    options: [
      {
        id: 'chill',
        text: '😌 Chill & Relaxed',
        tags: ['chill'],
        points: { comfort: 3, fresh: 1, relaxed: 2 }
      },
      {
        id: 'productive',
        text: '⚡ Productive & Focused',
        tags: ['productive'],
        points: { energy: 3, grab_and_go: 2, healthy: 1 }
      },
      {
        id: 'celebratory',
        text: '🎉 Celebratory & Indulgent',
        tags: ['celebratory'],
        points: { indulgent: 3, sweet: 2, comfort: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "Any specific cravings hitting you?",
    type: 'single',
    options: [
      {
        id: 'salty',
        text: '🧂 Salty & Savory',
        tags: ['salty'],
        points: { salty: 3, comfort: 2 }
      },
      {
        id: 'sweet',
        text: '🍯 Sweet & Satisfying',
        tags: ['sweet'],
        points: { sweet: 3, indulgent: 2 }
      },
      {
        id: 'fresh',
        text: '🌱 Fresh & Clean',
        tags: ['fresh'],
        points: { fresh: 3, healthy: 2 }
      },
      {
        id: 'spicy',
        text: '🌶️ Spicy & Bold',
        tags: ['spicy'],
        points: { spicy: 3, energy: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "What's calling your name today?",
    type: 'single',
    options: [
      {
        id: 'sandwich',
        text: '🥪 Classic Sandwich',
        tags: ['sandwich'],
        points: { sandwich_preference: 5, comfort: 1 }
      },
      {
        id: 'wrap',
        text: '🌯 Fresh Wrap',
        tags: ['wrap'],
        points: { wrap_preference: 5, grab_and_go: 2 }
      },
      {
        id: 'salad',
        text: '🥗 Healthy Salad',
        tags: ['salad'],
        points: { salad_preference: 5, healthy: 3, fresh: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "If you're going for bread, what sounds good?",
    type: 'single',
    options: [
      {
        id: 'white',
        text: '🍞 White Bread - classic choice',
        tags: ['white_bread'],
        points: { bread_white: 3, comfort: 1 }
      },
      {
        id: 'brown',
        text: '🥖 Brown Bread - wholesome vibes',
        tags: ['brown_bread'],
        points: { bread_brown: 3, healthy: 2 }
      },
      {
        id: 'sourdough',
        text: '🥖 Sourdough - tangy and artisanal',
        tags: ['sourdough'],
        points: { bread_sourdough: 3, indulgent: 1 }
      },
      {
        id: 'no_bread',
        text: '🚫 Skip the bread',
        tags: ['no_bread'],
        points: { bread_none: 3, healthy: 2, fresh: 1 }
      }
    ]
  },
  {
    id: 6,
    question: "How much time do you have to enjoy your meal?",
    type: 'single',
    options: [
      {
        id: 'grab_go',
        text: '🏃‍♂️ Grab & Go - I\'m in a rush',
        tags: ['quick'],
        points: { grab_and_go: 3, energy: 1 }
      },
      {
        id: 'relaxed',
        text: '☕ Relaxed Break - I can sit and enjoy',
        tags: ['relaxed'],
        points: { relaxed: 3, comfort: 2, indulgent: 1 }
      },
      {
        id: 'desk',
        text: '💻 Eat at Desk - working lunch',
        tags: ['desk'],
        points: { grab_and_go: 2, energy: 2, practical: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "Pick up to 3 ingredients that make you happy:",
    type: 'multiple',
    maxSelections: 3,
    options: [
      {
        id: 'avocado',
        text: '🥑 Avocado',
        tags: ['avocado'],
        points: { healthy: 2, fresh: 2, indulgent: 1 }
      },
      {
        id: 'tuna',
        text: '🐟 Tuna',
        tags: ['tuna'],
        points: { healthy: 2, salty: 1 }
      },
      {
        id: 'chicken',
        text: '🐔 Chicken',
        tags: ['chicken'],
        points: { energy: 2, hearty: 2 }
      },
      {
        id: 'cheese',
        text: '🧀 Cheese',
        tags: ['cheese'],
        points: { comfort: 3, indulgent: 2, salty: 1 }
      },
      {
        id: 'hummus',
        text: '🫘 Hummus',
        tags: ['hummus'],
        points: { healthy: 3, fresh: 1 }
      },
      {
        id: 'bacon',
        text: '🥓 Bacon',
        tags: ['bacon'],
        points: { indulgent: 3, salty: 3, comfort: 2 }
      },
      {
        id: 'prawns',
        text: '🦐 Prawns',
        tags: ['prawns'],
        points: { indulgent: 2, fresh: 1 }
      },
      {
        id: 'egg',
        text: '🥚 Egg',
        tags: ['egg'],
        points: { comfort: 2, hearty: 1 }
      }
    ]
  },
  {
    id: 8,
    question: "What drink would complete your meal?",
    type: 'single',
    options: [
      {
        id: 'coffee',
        text: '☕ Coffee - need that energy boost',
        tags: ['coffee'],
        points: { drink_coffee: 5, energy: 2 }
      },
      {
        id: 'juice',
        text: '🧃 Fresh Juice - healthy and refreshing',
        tags: ['juice'],
        points: { drink_juice: 5, healthy: 2, fresh: 1 }
      },
      {
        id: 'surprise',
        text: '🎲 Surprise Me - I trust your choice',
        tags: ['surprise'],
        points: { drink_surprise: 3, indulgent: 1 }
      }
    ]
  }
];

export const menuItems: MenuItem[] = [
  // Classic Sandwiches
  {
    id: 'all-america',
    name: 'All America',
    type: 'sandwich',
    price: 5.25,
    description: 'Filet americain, egg, red onion, capers',
    tags: ['comfort', 'salty', 'hearty'],
    categoryScores: { comfort: 3, salty: 2, hearty: 2 },
    ingredients: ['egg'],
    emoji: '🥪'
  },
  {
    id: 'honey-ham',
    name: 'Honey Ham',
    type: 'sandwich',
    price: 5.25,
    description: 'Ham, cucumber, arugula, honey mustard dressing',
    tags: ['comfort', 'fresh', 'sweet'],
    categoryScores: { comfort: 2, fresh: 2, sweet: 1 },
    ingredients: [],
    emoji: '🥪'
  },
  {
    id: 'easy-italian',
    name: 'Easy Italian',
    type: 'sandwich',
    price: 5.25,
    description: 'Buffalo mozzarella, roma tomatoes, baby spinach, pesto dressing',
    tags: ['fresh', 'healthy', 'cheese'],
    categoryScores: { fresh: 3, healthy: 2, indulgent: 1 },
    ingredients: ['cheese'],
    emoji: '🥪'
  },
  {
    id: 'mr-tuna',
    name: 'Mr. Tuna',
    type: 'sandwich',
    price: 5.25,
    description: 'Homemade tuna salad, roma tomatoes, cucumber',
    tags: ['healthy', 'fresh', 'salty'],
    categoryScores: { healthy: 3, fresh: 2, salty: 1 },
    ingredients: ['tuna'],
    emoji: '🥪'
  },
  {
    id: 'brielicious',
    name: 'Brielicious',
    type: 'sandwich',
    price: 5.25,
    description: 'Brie, caramelized walnuts, arugula, honey mustard dressing',
    tags: ['indulgent', 'sweet', 'cheese'],
    categoryScores: { indulgent: 3, sweet: 2, comfort: 1 },
    ingredients: ['cheese'],
    emoji: '🥪'
  },
  {
    id: 'classic-eggs',
    name: 'Classic Eggs',
    type: 'sandwich',
    price: 5.25,
    description: 'Egg salad, roma tomatoes, mixed lettuce',
    tags: ['comfort', 'hearty', 'fresh'],
    categoryScores: { comfort: 3, hearty: 2, fresh: 1 },
    ingredients: ['egg'],
    emoji: '🥪'
  },

  // Deluxe Sandwiches
  {
    id: 'truffle-delight',
    name: 'Truffle Delight',
    type: 'sandwich',
    price: 6.25,
    description: 'Roast beef, parmesan, arugula, truffle dressing',
    tags: ['indulgent', 'salty', 'hearty'],
    categoryScores: { indulgent: 3, salty: 2, hearty: 3 },
    ingredients: ['cheese'],
    emoji: '🥪'
  },
  {
    id: 'boosty-blt',
    name: 'Boosty BLT',
    type: 'sandwich',
    price: 6.25,
    description: 'Aged cheese, egg, crispy bacon, roma tomatoes, arugula, aioli dressing',
    tags: ['comfort', 'indulgent', 'salty'],
    categoryScores: { comfort: 3, indulgent: 2, salty: 3 },
    ingredients: ['cheese', 'egg', 'bacon'],
    emoji: '🥪'
  },
  {
    id: 'nochicken-curry',
    name: 'NoChicken Curry',
    type: 'sandwich',
    price: 6.25,
    description: 'Vegan chicken curry, roasted chickpeas, bell pepper, baby spinach',
    tags: ['healthy', 'spicy', 'fresh'],
    categoryScores: { healthy: 3, spicy: 2, fresh: 2 },
    ingredients: [],
    emoji: '🥪'
  },
  {
    id: 'hummus-sandwich',
    name: 'Hummus',
    type: 'sandwich',
    price: 6.25,
    description: 'Hummus, grilled zucchini, bell pepper, pine nuts, arugula, pesto dressing',
    tags: ['healthy', 'fresh', 'comfort'],
    categoryScores: { healthy: 3, fresh: 3, comfort: 1 },
    ingredients: ['hummus'],
    emoji: '🥪'
  },
  {
    id: 'smashing-avocado',
    name: 'Smashing Avocado',
    type: 'sandwich',
    price: 6.25,
    description: 'Avocado, goat cheese, mixed lettuce, honey mustard dressing',
    tags: ['healthy', 'fresh', 'indulgent'],
    categoryScores: { healthy: 3, fresh: 2, indulgent: 2 },
    ingredients: ['avocado', 'cheese'],
    emoji: '🥪'
  },

  // Super Deluxe Sandwiches
  {
    id: 'crunchy-chicken',
    name: 'Crunchy Chicken',
    type: 'sandwich',
    price: 7.25,
    description: 'Grilled chicken, bacon, avocado, romaine lettuce, mustard mayonnaise',
    tags: ['hearty', 'indulgent', 'comfort'],
    categoryScores: { hearty: 3, indulgent: 2, comfort: 2 },
    ingredients: ['chicken', 'bacon', 'avocado'],
    emoji: '🥪'
  },
  {
    id: 'super-salmon',
    name: 'Super Salmon',
    type: 'sandwich',
    price: 7.25,
    description: 'Smoked salmon, cream cheese, capers, red onion, mixed lettuce, honey mustard dressing',
    tags: ['indulgent', 'fresh', 'salty'],
    categoryScores: { indulgent: 3, fresh: 2, salty: 1 },
    ingredients: ['cheese'],
    emoji: '🥪'
  },
  {
    id: 'classic-club',
    name: 'Classic Club',
    type: 'sandwich',
    price: 7.25,
    description: 'Turkey, crispy bacon, roma tomatoes, egg, romaine lettuce, aioli dressing',
    tags: ['comfort', 'hearty', 'indulgent'],
    categoryScores: { comfort: 3, hearty: 3, indulgent: 2 },
    ingredients: ['bacon', 'egg'],
    emoji: '🥪'
  },
  {
    id: 'spicy-chicken',
    name: 'Spicy Chicken',
    type: 'sandwich',
    price: 7.25,
    description: 'Spicy chicken, roma tomatoes, baby spinach, aioli dressing',
    tags: ['spicy', 'hearty', 'energy'],
    categoryScores: { spicy: 3, hearty: 2, energy: 2 },
    ingredients: ['chicken'],
    emoji: '🥪'
  },
  {
    id: 'korean-bbq-chicken',
    name: 'Korean BBQ Chicken',
    type: 'sandwich',
    price: 7.25,
    description: 'Korean-spiced chicken, sweet-sour cucumber, bean sprouts, fried onions, baby spinach, sweet garlic dressing',
    tags: ['spicy', 'indulgent', 'energy'],
    categoryScores: { spicy: 3, indulgent: 2, energy: 2 },
    ingredients: ['chicken'],
    emoji: '🥪'
  },

  // Salads
  {
    id: 'korean-bbq-salad',
    name: 'Korean BBQ Chicken Salad',
    type: 'salad',
    price: 12.50,
    description: 'Korean-spiced chicken, sweet-sour cucumber, bell pepper, bean sprouts, carrot, fried onions, mixed lettuce, sweet garlic dressing',
    tags: ['healthy', 'spicy', 'fresh'],
    categoryScores: { healthy: 3, spicy: 3, fresh: 2 },
    ingredients: ['chicken'],
    emoji: '🥗'
  },
  {
    id: 'greek-veggie',
    name: 'Greek Veggie',
    type: 'salad',
    price: 11.95,
    description: 'Grilled zucchini, bell pepper, red onion, olives, feta, walnuts, roma tomatoes, romaine lettuce, pesto dressing',
    tags: ['healthy', 'fresh', 'cheese'],
    categoryScores: { healthy: 3, fresh: 3, indulgent: 1 },
    ingredients: ['cheese'],
    emoji: '🥗'
  },
  {
    id: 'grilled-chicken-caesar',
    name: 'Grilled Chicken Caesar',
    type: 'salad',
    price: 12.75,
    description: 'Grilled chicken, crispy bacon, parmesan, roma tomatoes, corn, egg, croutons, romaine lettuce, aioli dressing',
    tags: ['hearty', 'comfort', 'indulgent'],
    categoryScores: { hearty: 3, comfort: 2, indulgent: 2 },
    ingredients: ['chicken', 'bacon', 'cheese', 'egg'],
    emoji: '🥗'
  },
  {
    id: 'grilled-prawn-avocado',
    name: 'Grilled Prawn & Avocado',
    type: 'salad',
    price: 14.50,
    description: 'Grilled prawns, avocado, cashew nuts, carrot, chickpeas, bean sprouts, baby spinach, Asian dressing',
    tags: ['healthy', 'fresh', 'indulgent'],
    categoryScores: { healthy: 3, fresh: 3, indulgent: 2 },
    ingredients: ['prawns', 'avocado'],
    emoji: '🥗'
  },

  // Wraps
  {
    id: 'nochicken-curry-wrap',
    name: 'NoChicken Curry Wrap',
    type: 'wrap',
    price: 9.50,
    description: 'Vegan chicken curry, cashew nuts, bell pepper, roasted chickpeas, sweet potato, baby spinach, vegan aioli dressing',
    tags: ['healthy', 'spicy', 'grab_and_go'],
    categoryScores: { healthy: 3, spicy: 2, grab_and_go: 2 },
    ingredients: [],
    emoji: '🌯'
  },
  {
    id: 'korean-bbq-wrap',
    name: 'Korean BBQ Chicken Wrap',
    type: 'wrap',
    price: 11.25,
    description: 'Korean-spiced chicken, sweet-sour cucumber, bean sprouts, bell pepper, fried onions, mixed lettuce, sweet garlic dressing',
    tags: ['spicy', 'grab_and_go', 'energy'],
    categoryScores: { spicy: 3, grab_and_go: 3, energy: 2 },
    ingredients: ['chicken'],
    emoji: '🌯'
  },
  {
    id: 'plant-power-wrap',
    name: 'Plant Power',
    type: 'wrap',
    price: 9.75,
    description: 'Hummus, avocado, roma tomatoes, carrot, roasted pumpkin seeds, mixed lettuce, roasted bell pepper dressing',
    tags: ['healthy', 'fresh', 'grab_and_go'],
    categoryScores: { healthy: 3, fresh: 3, grab_and_go: 2 },
    ingredients: ['hummus', 'avocado'],
    emoji: '🌯'
  },
  {
    id: 'salmon-avocado-wrap',
    name: 'Salmon & Avocado Wrap',
    type: 'wrap',
    price: 12.25,
    description: 'Smoked salmon, avocado, sweet-sour cucumber, red onion, mixed lettuce, aioli dressing',
    tags: ['healthy', 'indulgent', 'fresh'],
    categoryScores: { healthy: 2, indulgent: 3, fresh: 2 },
    ingredients: ['avocado'],
    emoji: '🌯'
  }
];

export const drinkItems: DrinkItem[] = [
  // Coffee drinks
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    type: 'coffee',
    price: 3.50,
    tags: ['energy', 'comfort'],
    emoji: '☕️'
  },
  {
    id: 'latte',
    name: 'Latte Macchiato',
    type: 'coffee',
    price: 4.00,
    tags: ['energy', 'indulgent'],
    emoji: '☕️'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    type: 'coffee',
    price: 2.50,
    tags: ['energy', 'grab_and_go'],
    emoji: '☕️'
  },

  // Fresh juices and smoothies
  {
    id: 'detox-popeye',
    name: 'Detox Popeye Smoothie',
    type: 'smoothie',
    price: 4.25,
    tags: ['healthy', 'fresh', 'energy'],
    emoji: '🥤'
  },
  {
    id: 'mango-tango',
    name: 'Mango Tango Smoothie',
    type: 'smoothie',
    price: 4.25,
    tags: ['sweet', 'fresh', 'indulgent'],
    emoji: '🥤'
  },
  {
    id: 'orange-juice',
    name: 'Fresh Orange Juice',
    type: 'juice',
    price: 3.75,
    tags: ['fresh', 'healthy', 'energy'],
    emoji: '🧃'
  },
  {
    id: 'apple-juice',
    name: 'Apple Juice',
    type: 'juice',
    price: 3.50,
    tags: ['fresh', 'sweet'],
    emoji: '🧃'
  }
];

export const sweetItems: SweetItem[] = [
  {
    id: 'chocolate-chip-cookie',
    name: 'Chocolate Chip Cookie',
    price: 2.30,
    tags: ['sweet', 'indulgent', 'comfort'],
    emoji: '🍪'
  },
  {
    id: 'croissant',
    name: 'Croissant',
    price: 2.10,
    tags: ['comfort', 'indulgent'],
    emoji: '🥐'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    price: 2.10,
    tags: ['sweet', 'indulgent', 'comfort'],
    emoji: '🥐'
  },
  {
    id: 'boosty-signature-cake',
    name: 'Boosty Signature Cake',
    price: 4.25,
    tags: ['sweet', 'indulgent', 'celebratory'],
    emoji: '🍰'
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    price: 4.50,
    tags: ['sweet', 'indulgent', 'comfort'],
    emoji: '🍰'
  }
];

export const breadTypes = ['white', 'brown', 'dark_brown', 'sourdough'];
export const sizes = ['small', 'medium', 'large'];

export const generateDiscountCode = (): string => {
  const codes = ['BOOSTY5', 'FRESH5', 'LUNCH5', 'TASTY5', 'YUMMY5', 'HAPPY5'];
  return codes[Math.floor(Math.random() * codes.length)];
};
