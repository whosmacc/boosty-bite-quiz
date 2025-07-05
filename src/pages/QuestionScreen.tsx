
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import OptionButton from '@/components/OptionButton';
import ProgressBar from '@/components/ProgressBar';
import { ArrowLeft } from 'lucide-react';

interface Question {
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

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (selectedOptions: string[]) => void;
  onBack: () => void;
  isLastQuestion: boolean;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onBack,
  isLastQuestion
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (optionId: string) => {
    if (question.type === 'single') {
      setSelectedOptions([optionId]);
    } else {
      const newSelected = selectedOptions.includes(optionId)
        ? selectedOptions.filter(id => id !== optionId)
        : [...selectedOptions, optionId];
      
      // Respect max selections limit
      if (question.maxSelections && newSelected.length > question.maxSelections) {
        return;
      }
      
      setSelectedOptions(newSelected);
    }
  };

  const handleNext = () => {
    onAnswer(selectedOptions);
  };

  const isValidSelection = selectedOptions.length > 0;
  const canSelectMore = !question.maxSelections || selectedOptions.length < question.maxSelections;

  return (
    <div className="min-h-screen bg-white flex flex-col animate-fade-in-up">
      {/* Header with Progress */}
      <div className="p-6 pb-4">
        <div className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 ml-4">
            <ProgressBar current={questionIndex + 1} total={totalQuestions} />
          </div>
        </div>
        
        <div className="text-right text-sm text-gray-500 mb-2">
          {questionIndex + 1} of {totalQuestions}
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 px-6">
        <div className="animate-scale-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
            {question.question}
          </h2>

          {question.type === 'multiple' && question.maxSelections && (
            <div className="mb-6 p-3 bg-orange-50 rounded-xl border border-orange-200">
              <p className="text-sm text-orange-700">
                Select up to {question.maxSelections} options
                {selectedOptions.length > 0 && (
                  <span className="ml-2 font-medium">
                    ({selectedOptions.length}/{question.maxSelections} selected)
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {question.options.map((option, index) => (
            <div
              key={option.id}
              style={{ animationDelay: `${0.1 * index}s` }}
              className="animate-fade-in-up"
            >
              <OptionButton
                selected={selectedOptions.includes(option.id)}
                onClick={() => handleOptionClick(option.id)}
                disabled={!canSelectMore && !selectedOptions.includes(option.id)}
              >
                <span className="block text-base">{option.text}</span>
              </OptionButton>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6 pt-4">
        <Button
          onClick={handleNext}
          disabled={!isValidSelection}
          className="w-full py-4 text-lg font-semibold rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          style={{
            backgroundColor: isValidSelection ? '#F18802' : '#E5E7EB',
            color: isValidSelection ? 'white' : '#9CA3AF'
          }}
        >
          {isLastQuestion ? 'Create My Boosty Lunch' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default QuestionScreen;
