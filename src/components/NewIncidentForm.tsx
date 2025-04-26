import React, { useState } from 'react';
import { Incident } from '../types';
import { X, AlertTriangle } from 'lucide-react';

interface NewIncidentFormProps {
  onAddIncident: (incident: Omit<Incident, 'id'>) => void;
  onClose: () => void;
  isVisible: boolean;
}

const NewIncidentForm: React.FC<NewIncidentFormProps> = ({ 
  onAddIncident,
  onClose,
  isVisible
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [errors, setErrors] = useState<{title?: string; description?: string}>({});

  const validateForm = () => {
    const newErrors: {title?: string; description?: string} = {};
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddIncident({
        title,
        description,
        severity,
        reported_at: new Date().toISOString()
      });
      
      setTitle('');
      setDescription('');
      setSeverity('Medium');
      setErrors({});
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md relative animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
              <AlertTriangle size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Report New Incident</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-4 py-2.5 border ${
                  errors.title 
                    ? 'border-red-500 dark:border-red-500 ring-red-50 dark:ring-red-900/50' 
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                placeholder="Enter incident title"
              />
              {errors.title && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.title}</p>}
            </div>
            
            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Severity
              </label>
              <select
                id="severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value as 'Low' | 'Medium' | 'High')}
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className={`w-full px-4 py-2.5 border ${
                  errors.description 
                    ? 'border-red-500 dark:border-red-500 ring-red-50 dark:ring-red-900/50' 
                    : 'border-gray-300 dark:border-gray-600'
                } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                placeholder="Describe the incident in detail"
              ></textarea>
              {errors.description && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.description}</p>}
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewIncidentForm;