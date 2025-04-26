import React from 'react';
import Dashboard from './components/Dashboard';
import { Shield } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-6 py-6 max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg transition-colors duration-200">
                <Shield size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">AI Safety Incident Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-200">HumanChain - Building a safer AI future</p>
              </div>
            </div>
            <ThemeToggle theme={theme} onChange={setTheme} />
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <Dashboard />
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400 max-w-4xl">
          &copy; {new Date().getFullYear()} HumanChain • AI Safety Incident Dashboard
        </div>
      </footer>
    </div>
  );
}

export default App;