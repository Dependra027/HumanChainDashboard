import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border transition-all duration-200 hover:shadow-md ${isExpanded ? 'border-blue-100 dark:border-blue-900' : 'border-gray-100 dark:border-gray-700'}`}>
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <SeverityBadge severity={incident.severity} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{incident.title}</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={14} className="text-gray-400 dark:text-gray-500" />
              <span>Reported: {formatDate(incident.reported_at)}</span>
            </div>
          </div>
          <button
            onClick={toggleExpand}
            className={`flex items-center justify-center text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              isExpanded 
                ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/70' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
            aria-expanded={isExpanded}
            aria-controls={`incident-details-${incident.id}`}
          >
            <span className="mr-2">{isExpanded ? 'Hide Details' : 'View Details'}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
      
      <div 
        id={`incident-details-${incident.id}`}
        className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Description:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{incident.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IncidentCard;