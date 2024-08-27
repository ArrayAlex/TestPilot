import React from 'react';
import './styles.css';

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
    if (response.responseTime > 200 && response.responseTime <= 1000) {
        responseTimeColor = 'text-yellow-500'; // Yellow for moderate responses
    } else if (response.responseTime > 1000) {
        responseTimeColor = 'text-red-500'; // Red for slow responses
    }

    return (
        <div className="response-display-wrapper">
            <div className="response-display-container mt-4 p-4 bg-gray-700 border border-gray-600 rounded">
                {/* Response Time Display */}
                <div className={`mb-2 ${responseTimeColor}`}>
                    <strong>Response Time:</strong> {response.responseTime} ms
                </div>

                {/* HTTPS Redirect Information */}
                <div className={`mb-4 ${response.isHttpsRedirect ? 'text-green-500' : 'text-red-500'}`}>
                    <strong>HTTPS Redirect:</strong> {response.isHttpsRedirect ? 'Yes' : 'No'}
                </div>

                {/* Response Headers Display */}
                <div className="mb-4">
                    <strong>Response Headers:</strong>
                    <div className="bg-gray-800 p-3 rounded overflow-x-auto max-h-40">
                        <pre className="text-white whitespace-pre-wrap min-w-full">
                            {JSON.stringify(response.headers, null, 2)}
                        </pre>
                    </div>
                </div>

                {/* Response Content Display */}
                <h3 className="text-white">Response Content:</h3>
                <div className="bg-gray-800 p-3 rounded overflow-x-auto max-h-80">
                    <pre className="text-white whitespace-pre-wrap min-w-full">
                        {typeof parsedContent === 'string'
                            ? parsedContent
                            : JSON.stringify(parsedContent, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ResponseDisplay;
