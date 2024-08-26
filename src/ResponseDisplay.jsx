import React from 'react';

const ResponseDisplay = ({ response }) => {
  return (
    response && (
      <div className="mt-4 p-2 bg-gray-700 border border-gray-600 rounded">
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    )
  );
};

export default ResponseDisplay;
