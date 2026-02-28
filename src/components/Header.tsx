import React from 'react';
import { ChevronLeft, MoreVertical, Info } from 'lucide-react';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightAction?: 'more' | 'info';
}

export const Header: React.FC<HeaderProps> = ({ title, onBack, rightAction }) => {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center p-4 justify-between max-w-md mx-auto">
        <div className="flex size-10 shrink-0 items-center justify-start">
          {onBack && (
            <button onClick={onBack} className="text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
              <ChevronLeft size={24} />
            </button>
          )}
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center truncate">
          {title}
        </h2>
        <div className="flex size-10 shrink-0 items-center justify-end">
          {rightAction === 'more' && (
            <button className="text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 p-2 rounded-full transition-colors">
              <MoreVertical size={24} />
            </button>
          )}
          {rightAction === 'info' && (
            <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
              <Info size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
