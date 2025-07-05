
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

  const handleStart = () => {
    setCurrentScreen('question');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };

  const handleAnswer = (selectedOptions: string[]) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedOptions
    };
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
          question={quizQuestions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
          onBack={handleBack}
          isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
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
