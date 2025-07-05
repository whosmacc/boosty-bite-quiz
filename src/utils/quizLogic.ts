
import { MenuItem, menuItems, generateDiscountCode } from '@/data/quizData';

interface UserAnswers {
  [questionId: string]: string[];
}

interface CategoryScores {
  [category: string]: number;
}

export const calculateResult = (answers: UserAnswers): {
  meal: string;
  description: string;
  emoji: string;
  discountCode: string;
} => {
  // Calculate category scores based on user answers
  const categoryScores: CategoryScores = {};
  
  Object.values(answers).flat().forEach(answerId => {
    // This would normally reference the actual question data to get points
    // For now, we'll use a simplified scoring system
    console.log('Processing answer:', answerId);
  });

  // Find ingredients user selected (from question 3)
  const selectedIngredients = answers['3'] || [];
  
  // Filter menu items that contain at least one selected ingredient
  let availableItems = menuItems;
  if (selectedIngredients.length > 0) {
    availableItems = menuItems.filter(item => 
      item.ingredients.some(ingredient => selectedIngredients.includes(ingredient))
    );
  }

  // If no items match ingredients, use all items
  if (availableItems.length === 0) {
    availableItems = menuItems;
  }

  // For now, return a random item from available items
  // In production, this would use the scoring algorithm
  const selectedItem = availableItems[Math.floor(Math.random() * availableItems.length)];
  
  return {
    meal: selectedItem.name,
    description: selectedItem.description,
    emoji: selectedItem.emoji,
    discountCode: generateDiscountCode()
  };
};

// Advanced scoring algorithm (placeholder for full implementation)
export const calculateCategoryScores = (answers: UserAnswers): CategoryScores => {
  const scores: CategoryScores = {};
  
  // This would implement the full point-based scoring system
  // Each answer would add points to various categories
  // The meal with the highest total score in user's preferred categories wins
  
  return scores;
};
