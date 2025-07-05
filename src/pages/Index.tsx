
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';
import DesktopBlock from '@/components/DesktopBlock';
import { quizQuestions } from '@/data/quizData';
import { calculateResult } from '@/utils/quizLogic';

type Screen = 'desktop-block' | 'welcome' | 'question' | 'result';

interface UserAnswers {
  [questionId: string]: string[];
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState(quizQuestions);

  // Check if user is on mobile device
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setCurrentScreen('desktop-block');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const shouldSkipQuestion = (questionId: number, answers: UserAnswers): boolean => {
    // Skip bread question (id: 5) if not sandwich
    if (questionId === 5) {
      const mealTypeAnswer = answers['4']?.[0];
      return mealTypeAnswer !== 'sandwich';
    }
    
    // Skip size-related logic could be added here if needed
    // For now, we'll handle size in the result calculation
    
    return false;
  };

  const getFilteredQuestions = (answers: UserAnswers) => {
    return quizQuestions.filter(question => !shouldSkipQuestion(question.id, answers));
  };

  const handleStart = () => {
    setCurrentScreen('question');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFilteredQuestions(quizQuestions);
  };

  const handleAnswer = (selectedOptions: string[]) => {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedOptions
    };
    setUserAnswers(newAnswers);

    // Update filtered questions based on new answers
    const updatedFilteredQuestions = getFilteredQuestions(newAnswers);
    setFilteredQuestions(updatedFilteredQuestions);

    // Find next question index in the updated filtered list
    const currentQuestionInFiltered = updatedFilteredQuestions.findIndex(q => q.id === currentQuestion.id);
    
    if (currentQuestionInFiltered < updatedFilteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionInFiltered + 1);
    } else {
      // Calculate result and show result screen
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);
      setCurrentScreen('result');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setCurrentScreen('welcome');
    }
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setResult(null);
    setFilteredQuestions(quizQuestions);
  };

  if (currentScreen === 'desktop-block') {
    return <DesktopBlock />;
  }

  return (
    <div className="mobile-only">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {currentScreen === 'question' && (
        <QuestionScreen
          question={filteredQuestions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={filteredQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          isLastQuestion={currentQuestionIndex === filteredQuestions.length - 1}
        />
      )}
      
      {currentScreen === 'result' && result && (
        <ResultScreen
          result={result}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Index;
