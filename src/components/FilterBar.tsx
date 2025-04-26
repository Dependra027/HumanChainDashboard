import React from 'react';
import { SeverityFilter, SortOrder } from '../types';
import { Filter, SortAsc, SortDesc, AlertTriangle } from 'lucide-react';

interface FilterBarProps {
  severityFilter: SeverityFilter;
  sortOrder: SortOrder;
  onChangeSeverity: (filter: SeverityFilter) => void;
  onChangeSort: (order: SortOrder) => void;
  onOpenNewIncidentForm: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  severityFilter,
  sortOrder,
  onChangeSeverity,
  onChangeSort,
  onOpenNewIncidentForm,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
      <div className="flex flex-col xs:flex-row gap-4 w-full sm:w-auto">
        <div className="flex items-center">
          <label htmlFor="severity-filter" className="sr-only">Filter by severity</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Filter size={16} className="text-gray-500 dark:text-gray-400" />
            </div>
            <select
              id="severity-filter"
              value={severityFilter}
              onChange={(e) => onChangeSeverity(e.target.value as SeverityFilter)}
              className="pl-10 py-2.5 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 dark:text-gray-100 transition-colors"
            >
              <option value="All">All Severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort-order" className="sr-only">Sort by date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {sortOrder === 'newest' ? (
                <SortDesc size={16} className="text-gray-500 dark:text-gray-400" />
              ) : (
                <SortAsc size={16} className="text-gray-500 dark:text-gray-400" />
              )}
            </div>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={(e) => onChangeSort(e.target.value as SortOrder)}
              className="pl-10 py-2.5 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 dark:text-gray-100 transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
      
      <button
        onClick={onOpenNewIncidentForm}
        className="text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center gap-2 transition-colors w-full sm:w-auto justify-center shadow-sm"
      >
        <AlertTriangle size={16} />
        Report New Incident
      </button>
    </div>
  );
};

export default FilterBar;