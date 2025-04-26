import React from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import IncidentCard from './IncidentCard';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: SeverityFilter;
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  severityFilter, 
  sortOrder 
}) => {
  // Apply filters
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  // Apply sorting
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    
    return sortOrder === 'newest' 
      ? dateB - dateA // newest first
      : dateA - dateB; // oldest first
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No incidents match your current filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;