
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
  description: string;
  tags: string[];
  categoryScores: Record<string, number>;
  ingredients: string[];
  emoji: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What's your vibe today?",
    type: 'single',
    options: [
      {
        id: 'comfort',
        text: '🛋️ Comfort & Cozy',
        tags: ['comfort'],
        points: { comfort: 3, hearty: 2 }
      },
      {
        id: 'fresh',
        text: '🌱 Fresh & Light',
        tags: ['fresh', 'healthy'],
        points: { fresh: 3, healthy: 2 }
      },
      {
        id: 'adventurous',
        text: '🌶️ Bold & Adventurous',
        tags: ['bold', 'spicy'],
        points: { bold: 3, spicy: 2 }
      },
      {
        id: 'classic',
        text: '⭐ Classic & Reliable',
        tags: ['classic'],
        points: { classic: 3, comfort: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "What's your drink preference?",
    type: 'single',
    options: [
      {
        id: 'coffee',
        text: '☕ Coffee (Hot or Iced)',
        tags: ['coffee'],
        points: { energizing: 2, classic: 1 }
      },
      {
        id: 'juice',
        text: '🧃 Fresh Juice',
        tags: ['fresh', 'healthy'],
        points: { fresh: 2, healthy: 2 }
      },
      {
        id: 'smoothie',
        text: '🥤 Smoothie',
        tags: ['healthy', 'fresh'],
        points: { healthy: 3, fresh: 1 }
      },
      {
        id: 'water',
        text: '💧 Just Water',
        tags: ['simple', 'healthy'],
        points: { healthy: 1, simple: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "Pick your favorite ingredients (up to 3):",
    type: 'multiple',
    maxSelections: 3,
    options: [
      {
        id: 'avocado',
        text: '🥑 Avocado',
        tags: ['healthy', 'fresh'],
        points: { healthy: 2, fresh: 1 }
      },
      {
        id: 'bacon',
        text: '🥓 Bacon',
        tags: ['comfort', 'hearty'],
        points: { comfort: 2, hearty: 2 }
      },
      {
        id: 'cheese',
        text: '🧀 Cheese',
        tags: ['comfort', 'classic'],
        points: { comfort: 1, classic: 2 }
      },
      {
        id: 'turkey',
        text: '🦃 Turkey',
        tags: ['healthy', 'protein'],
        points: { healthy: 2, protein: 2 }
      },
      {
        id: 'vegetables',
        text: '🥬 Fresh Vegetables',
        tags: ['healthy', 'fresh'],
        points: { healthy: 3, fresh: 2 }
      },
      {
        id: 'spices',
        text: '🌶️ Bold Spices',
        tags: ['bold', 'spicy'],
        points: { bold: 2, spicy: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "What size are you feeling?",
    type: 'single',
    options: [
      {
        id: 'small',
        text: '🥗 Light & Small',
        tags: ['light'],
        points: { light: 3, healthy: 1 }
      },
      {
        id: 'regular',
        text: '🥪 Regular Size',
        tags: ['standard'],
        points: { standard: 2 }
      },
      {
        id: 'large',
        text: '🍔 Large & Filling',
        tags: ['hearty', 'filling'],
        points: { hearty: 2, filling: 3 }
      }
    ]
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'all-american-large',
    name: 'Large All American',
    description: 'on sourdough bread',
    tags: ['comfort', 'classic', 'hearty'],
    categoryScores: { comfort: 3, classic: 2, hearty: 3, filling: 3 },
    ingredients: ['turkey', 'cheese', 'bacon'],
    emoji: '🥪'
  },
  {
    id: 'fresh-veggie-wrap',
    name: 'Fresh Veggie Wrap',
    description: 'with herb aioli',
    tags: ['fresh', 'healthy', 'light'],
    categoryScores: { fresh: 3, healthy: 3, light: 2 },
    ingredients: ['avocado', 'vegetables'],
    emoji: '🌯'
  },
  {
    id: 'spicy-chicken-sandwich',
    name: 'Spicy Chicken Deluxe',
    description: 'with pepper jack cheese',
    tags: ['bold', 'spicy', 'hearty'],
    categoryScores: { bold: 3, spicy: 3, hearty: 2 },
    ingredients: ['cheese', 'spices'],
    emoji: '🌶️'
  },
  {
    id: 'classic-club',
    name: 'Classic Club',
    description: 'triple-decker with crispy bacon',
    tags: ['classic', 'comfort', 'standard'],
    categoryScores: { classic: 3, comfort: 2, standard: 2 },
    ingredients: ['turkey', 'bacon', 'cheese'],
    emoji: '🥪'
  },
  {
    id: 'avocado-toast-deluxe',
    name: 'Avocado Toast Deluxe',
    description: 'with everything seasoning',
    tags: ['healthy', 'fresh', 'light'],
    categoryScores: { healthy: 3, fresh: 2, light: 3 },
    ingredients: ['avocado', 'vegetables'],
    emoji: '🥑'
  }
];

export const generateDiscountCode = (): string => {
  const codes = ['BOOSTY5', 'FRESH5', 'LUNCH5', 'TASTY5', 'YUMMY5'];
  return codes[Math.floor(Math.random() * codes.length)];
};
