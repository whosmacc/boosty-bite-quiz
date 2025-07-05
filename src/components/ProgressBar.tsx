
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2", className)}>
      <div 
        className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
