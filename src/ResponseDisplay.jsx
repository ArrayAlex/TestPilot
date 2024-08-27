import React from 'react';

const ResponseDisplay = ({ response }) => {
    if (!response) {
        return null; // No response to display
    }

    // Parse JSON content if it's a stringified JSON
    let parsedContent;
    try {
        parsedContent = JSON.parse(response.responseContent);
    } catch (e) {
        parsedContent = response.responseContent; // If it's not JSON, display it as-is
    }

    // Determine color based on response time
    let responseTimeColor = 'text-green-500'; // Default to green for fast responses
    if (response.responseTime > 500 && response.responseTime <= 1000) {
        responseTimeColor = 'text-yellow-500'; // Yellow for moderate responses
    } else if (response.responseTime > 1000) {
        responseTimeColor = 'text-red-500'; // Red for slow responses
    }

    return (
        <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded">
            {/* Response Time Display */}
            <div className={`mb-2 ${responseTimeColor}`}>
                <strong>Response Time:</strong> {response.responseTime} ms
            </div>

            {/* HTTPS Redirect Information */}
            <div className={`mb-2 ${response.isHttpsRedirect ? 'text-green-500' : 'text-red-500'}`}>
                <strong>HTTPS Redirect:</strong> {response.isHttpsRedirect ? 'Yes' : 'No'}
            </div>

            {/* Response Headers Display */}
            <div className="mb-2">
                <strong>Response Headers:</strong>
                <pre className="text-white bg-gray-800 p-3 rounded overflow-x-auto">
                    {JSON.stringify(response.headers, null, 2)} {/* Pretty-print headers */}
                </pre>
            </div>

            {/* Response Content Display */}
            <h3 className="text-white">Response Content:</h3>
            <pre className="text-white bg-gray-800 p-3 rounded overflow-x-auto">
                {JSON.stringify(parsedContent, null, 2)} {/* Pretty-print JSON */}
            </pre>
        </div>
    );
};

export default ResponseDisplay;
