
import React from 'react';
import { cn } from '@/lib/utils';

interface OptionButtonProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({ 
  children, 
  selected = false, 
  onClick, 
  disabled = false,
  className 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "option-button w-full p-4 rounded-2xl text-left font-medium transition-all duration-200",
        "border-2 shadow-sm active:shadow-none",
        selected 
          ? "border-orange-500 bg-orange-50 text-orange-700 shadow-lg selected" 
          : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-25",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default OptionButton;
