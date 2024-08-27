import React from 'react';

function RequestComponent({ method, url, onRequest, onRequestInitiation, onError }) {
  const handleRequest = async () => {
    if (!url) {
      console.error('No URL provided');
      onError();
      return;
    }

    // Start the request initiation process (e.g., show loading spinner)
    onRequestInitiation();

    try {
      const response = await fetch('http://localhost:5087/request/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method,
          url,
          body: method === 'GET' ? null : JSON.stringify({ key: 'value' }), // Example body, adjust as needed
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response from backend:', result);
      onRequest(result);  // Call onRequest with the response result
    } catch (error) {
      console.error('Error during request:', error);
      onError();  // Call onError to handle the error state
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
