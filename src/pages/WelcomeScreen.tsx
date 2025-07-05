
import React from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center justify-center p-6 animate-fade-in-up">
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-sm">
        {/* Logo */}
        <div className="mb-12 animate-bounce-in">
          <img 
            src="/src/assets/logo.svg" 
            alt="BoostyLite Logo" 
            className="w-32 h-auto"
          />
        </div>

        {/* Welcome Text */}
        <div className="mb-16 animate-scale-in">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to BoostyLite
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Take our quick quiz and discover your perfect meal recommendation with a special discount!
          </p>
        </div>
      </div>

      {/* Start Button */}
      <div className="w-full max-w-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <Button
          onClick={onStart}
          className="w-full py-4 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Start Quiz
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-32 right-8 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-6 w-4 h-4 bg-orange-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default WelcomeScreen;
