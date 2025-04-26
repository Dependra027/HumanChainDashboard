import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onChange }) => {
  return (
    <button
      onClick={() => onChange(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun size={20} className="text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;