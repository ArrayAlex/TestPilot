import React from 'react';

function RequestComponent({ method, url, onRequest }) {
  const handleRequest = async () => {
    try {
      const response = await fetch('http://localhost:5087/request/call', { // Adjust the URL to match your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ method, url, body: method === 'GET' ? null : JSON.stringify({ key: 'value' }) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      onRequest(result);
    } catch (error) {
      console.error('Error during request:', error);
      onRequest({ error: 'Request failed' });
    }
  };

  return (
    <button
      onClick={handleRequest}
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Submit
    </button>
  );
}

export default RequestComponent;
