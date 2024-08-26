// MethodSelector.jsx
import React from 'react';

const MethodSelector = ({ selectedOption, onMethodChange }) => {
  const getOptionTextColor = (option) => {
    switch (option) {
      case 'POST':
        return 'text-orange-500';
      case 'GET':
        return 'text-green-500';
      case 'PUT':
        return 'text-yellow-500';
      case 'DELETE':
        return 'text-red-500';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="relative">
      <select
        value={selectedOption}
        onChange={onMethodChange}
        className={`p-2 rounded bg-gray-700 border border-gray-600 text-white ${getOptionTextColor(selectedOption)}`}
      >
        <option value="POST" className="text-orange-500">POST</option>
        <option value="GET" className="text-green-500">GET</option>
        <option value="PUT" className="text-yellow-500">PUT</option>
        <option value="DELETE" className="text-red-500">DELETE</option>
      </select>
    </div>
  );
};

export default MethodSelector;
