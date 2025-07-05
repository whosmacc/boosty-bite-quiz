import { 
  MenuItem, 
  DrinkItem, 
  SweetItem, 
  menuItems, 
  drinkItems, 
  sweetItems, 
  breadTypes, 
  sizes, 
  generateDiscountCode,
  quizQuestions 
} from '@/data/quizData';

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
  drink: string;
  drinkEmoji: string;
} => {
  console.log('Calculating result with answers:', answers);
  
  // Calculate category scores based on user answers
  const categoryScores = calculateCategoryScores(answers);
  console.log('Category scores:', categoryScores);
  
  // Determine meal type preference from question 4
  const mealType = getMealTypePreference(answers, categoryScores);
  console.log('Preferred meal type:', mealType);
  
  // Filter menu items by meal type
  let availableItems = menuItems.filter(item => item.type === mealType);
  
  // Filter by selected ingredients if any were chosen (question 7)
  const selectedIngredients = answers['7'] || [];
  if (selectedIngredients.length > 0) {
    const itemsWithIngredients = availableItems.filter(item => 
      item.ingredients.some(ingredient => selectedIngredients.includes(ingredient))
    );
    
    // Use filtered items if we found matches, otherwise use all items of the type
    if (itemsWithIngredients.length > 0) {
      availableItems = itemsWithIngredients;
    }
  }
  
  // Score and rank available items
  const scoredItems = availableItems.map(item => ({
    item,
    score: calculateItemScore(item, categoryScores)
  })).sort((a, b) => b.score - a.score);
  
  console.log('Top scored items:', scoredItems.slice(0, 3));
  
  // Select the best matching item
  const selectedItem = scoredItems[0]?.item || availableItems[0];
  
  // Determine size based on meal type and hunger level
  const size = getSizePreference(categoryScores, mealType);
  
  // Determine bread type (only for sandwiches)
  const breadType = selectedItem.type === 'sandwich' ? getBreadPreference(answers, categoryScores) : null;
  
  // Select drink
  const selectedDrink = selectDrink(categoryScores, answers);
  
  // Build meal name with full details
  let mealName = '';
  if (size && selectedItem.type !== 'wrap') {
    mealName += `${size.charAt(0).toUpperCase() + size.slice(1)} `;
  }
  mealName += selectedItem.name;
  if (breadType && breadType !== 'white' && selectedItem.type === 'sandwich') {
    mealName += ` on ${breadType.charAt(0).toUpperCase() + breadType.slice(1)}`;
  }
  
  // Get meal emoji
  const mealEmoji = getMealEmoji(selectedItem.type);
  
  return {
    meal: mealName,
    description: selectedItem.description,
    emoji: mealEmoji,
    discountCode: generateDiscountCode(),
    drink: selectedDrink.name,
    drinkEmoji: selectedDrink.emoji
  };
};

const calculateCategoryScores = (answers: UserAnswers): CategoryScores => {
  const scores: CategoryScores = {};
  
  // Process each answer and add points
  Object.entries(answers).forEach(([questionId, selectedOptions]) => {
    const question = quizQuestions.find(q => q.id === parseInt(questionId));
    if (!question) return;
    
    selectedOptions.forEach(optionId => {
      const option = question.options.find(opt => opt.id === optionId);
      if (!option) return;
      
      // Add points from this option to category scores
      Object.entries(option.points).forEach(([category, points]) => {
        scores[category] = (scores[category] || 0) + points;
      });
    });
  });
  
  return scores;
};

const getMealTypePreference = (answers: UserAnswers, scores: CategoryScores): 'sandwich' | 'salad' | 'wrap' => {
  // Check explicit meal type preference from question 4
  const mealTypeAnswer = answers['4']?.[0];
  
  if (mealTypeAnswer === 'sandwich') return 'sandwich';
  if (mealTypeAnswer === 'wrap') return 'wrap';
  if (mealTypeAnswer === 'salad') return 'salad';
  
  // Fall back to category-based logic if no explicit answer
  const healthyScore = (scores.healthy || 0) + (scores.fresh || 0);
  const comfortScore = (scores.comfort || 0) + (scores.indulgent || 0);
  const grabAndGoScore = scores.grab_and_go || 0;
  
  if (healthyScore >= 4 && healthyScore > comfortScore) {
    return grabAndGoScore >= 2 ? 'wrap' : 'salad';
  } else if (grabAndGoScore >= 3) {
    return 'wrap';
  } else {
    return 'sandwich';
  }
};

const getSizePreference = (scores: CategoryScores, mealType: string): string | null => {
  // Wraps don't have size options
  if (mealType === 'wrap') return null;
  
  // Salads have Mini and Regular only
  if (mealType === 'salad') {
    return scores.portion_large >= 3 ? 'regular' : 'mini';
  }
  
  // Sandwiches have Small, Medium, Large
  if (scores.portion_large >= 3) return 'large';
  if (scores.portion_small >= 3) return 'small';
  return 'medium';
};

const getBreadPreference = (answers: UserAnswers, scores: CategoryScores): string => {
  // Check explicit bread preference from question 5
  const breadAnswer = answers['5']?.[0];
  
  if (breadAnswer === 'white') return 'white';
  if (breadAnswer === 'brown') return 'brown';
  if (breadAnswer === 'sourdough') return 'sourdough';
  if (breadAnswer === 'none') return 'no bread';
  
  // Fall back to scoring
  if (scores.bread_sourdough >= 3) return 'sourdough';
  if (scores.bread_brown >= 3) return 'brown';
  if (scores.bread_none >= 3) return 'no bread';
  return 'white';
};

const getMealEmoji = (mealType: string): string => {
  switch (mealType) {
    case 'sandwich':
      return '🥪';
    case 'salad':
      return '🥗';
    case 'wrap':
      return '🌯';
    default:
      return '🥪';
  }
};

const calculateItemScore = (item: MenuItem, userScores: CategoryScores): number => {
  let score = 0;
  
  // Score based on matching categories
  Object.entries(item.categoryScores).forEach(([category, itemPoints]) => {
    const userPoints = userScores[category] || 0;
    score += itemPoints * userPoints;
  });
  
  return score;
};

const selectDrink = (scores: CategoryScores, answers: UserAnswers): DrinkItem => {
  // Check explicit drink preference from question 8
  const drinkAnswer = answers['8']?.[0];
  
  let preferredType: 'coffee' | 'juice' | 'smoothie' = 'coffee';
  
  if (drinkAnswer === 'coffee' || scores.drink_coffee >= 5) {
    preferredType = 'coffee';
  } else if (drinkAnswer === 'juice' || scores.drink_juice >= 5) {
    preferredType = Math.random() > 0.5 ? 'juice' : 'smoothie';
  } else if (drinkAnswer === 'surprise') {
    // Choose based on other preferences
    const healthyScore = (scores.healthy || 0) + (scores.fresh || 0);
    const energyScore = scores.energy || 0;
    
    if (healthyScore > energyScore) {
      preferredType = Math.random() > 0.5 ? 'juice' : 'smoothie';
    } else {
      preferredType = 'coffee';
    }
  }
  
  // Filter drinks by preferred type
  const availableDrinks = drinkItems.filter(drink => drink.type === preferredType);
  
  // Score drinks based on user preferences
  const scoredDrinks = availableDrinks.map(drink => ({
    drink,
    score: drink.tags.reduce((acc, tag) => acc + (scores[tag] || 0), 0)
  })).sort((a, b) => b.score - a.score);
  
  return scoredDrinks[0]?.drink || drinkItems[0];
};

// Optional: Function to select a sweet treat based on preferences
export const selectSweet = (scores: CategoryScores): SweetItem | null => {
  const sweetScore = scores.sweet || 0;
  const indulgentScore = scores.indulgent || 0;
  const celebratoryScore = scores.celebratory || 0;
  
  // Only suggest sweets if user shows sweet preferences
  if (sweetScore + indulgentScore + celebratoryScore < 3) {
    return null;
  }
  
  // Score sweets based on user preferences
  const scoredSweets = sweetItems.map(sweet => ({
    sweet,
    score: sweet.tags.reduce((acc, tag) => acc + (scores[tag] || 0), 0)
  })).sort((a, b) => b.score - a.score);
  
  return scoredSweets[0]?.sweet || null;
};
