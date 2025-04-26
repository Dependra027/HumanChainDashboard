import React, { useState } from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import { initialIncidents } from '../data/mockIncidents';
import FilterBar from './FilterBar';
import IncidentList from './IncidentList';
import NewIncidentForm from './NewIncidentForm';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddIncident = (newIncident: Omit<Incident, 'id'>) => {
    const newId = Math.max(...incidents.map(i => i.id), 0) + 1;
    setIncidents(prev => [
      { ...newIncident, id: newId },
      ...prev
    ]);
  };

  const handleChangeSeverity = (filter: SeverityFilter) => {
    setSeverityFilter(filter);
  };

  const handleChangeSort = (order: SortOrder) => {
    setSortOrder(order);
  };

  const openNewIncidentForm = () => {
    setIsFormVisible(true);
  };

  const closeNewIncidentForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <FilterBar
        severityFilter={severityFilter}
        sortOrder={sortOrder}
        onChangeSeverity={handleChangeSeverity}
        onChangeSort={handleChangeSort}
        onOpenNewIncidentForm={openNewIncidentForm}
      />
      
      <IncidentList 
        incidents={incidents}
        severityFilter={severityFilter}
        sortOrder={sortOrder}
      />
      
      <NewIncidentForm 
        onAddIncident={handleAddIncident}
        onClose={closeNewIncidentForm}
        isVisible={isFormVisible}
      />
    </div>
  );
};

export default Dashboard;