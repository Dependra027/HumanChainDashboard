import React from 'react';

interface SeverityBadgeProps {
  severity: 'Low' | 'Medium' | 'High';
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getBadgeClasses = () => {
    switch (severity) {
      case 'Low':
        return 'bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900 ring-green-100 dark:ring-green-900/50';
      case 'Medium':
        return 'bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900 ring-amber-100 dark:ring-amber-900/50';
      case 'High':
        return 'bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900 ring-red-100 dark:ring-red-900/50';
      default:
        return 'bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-900 ring-gray-100 dark:ring-gray-900/50';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ring-1 ring-opacity-50 ${getBadgeClasses()} transition-all duration-200`}>
      {severity}
    </span>
  );
};

export default SeverityBadge;