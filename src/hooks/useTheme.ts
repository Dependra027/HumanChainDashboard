import { useState, useEffect } from 'react';
import { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Force a repaint to ensure the background color updates
    body.style.backgroundColor = theme === 'dark' ? '#111827' : '#f9fafb';
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}