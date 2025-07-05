
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ResultScreenProps {
  result: {
    meal: string;
    description: string;
    emoji: string;
    discountCode: string;
  };
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation on mount
    setShowConfetti(true);
    
    // Reset confetti after animation
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-sm w-full text-center animate-fade-in-up">
        {/* Success Icon */}
        <div className="mb-8 animate-bounce-in">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Your Perfect Match!
          </h1>
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-200 mb-8 animate-scale-in">
          <div className="mb-6">
            <div className="text-6xl mb-4">{result.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {result.meal}
            </h2>
            <p className="text-gray-600 text-base">
              {result.description}
            </p>
          </div>

          {/* Discount Section */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-6 border border-orange-200">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold text-orange-700">Special Offer</span>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Show this to our staff and get 5% off your order
            </p>
            <div className="bg-white rounded-xl p-3 border-2 border-dashed border-orange-300">
              <code className="text-orange-600 font-bold text-lg tracking-wider">
                {result.discountCode}
              </code>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button
            onClick={onRestart}
            className="w-full py-4 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Try Another Quiz
          </Button>
          
          <button
            onClick={() => {
              // Share functionality could be added here
              console.log('Share result');
            }}
            className="w-full py-3 text-base font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            Share My Result
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-32 right-8 w-2 h-2 bg-yellow-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-6 w-4 h-4 bg-orange-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 right-12 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default ResultScreen;
