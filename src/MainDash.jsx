import React, { useState } from 'react';
import RequestComponent from './RequestComponent.jsx';
import MethodSelector from './MethodSelector.jsx';
import UrlInput from './UrlInput.jsx';
import ResponseDisplay from './ResponseDisplay.jsx';
import './styles.css';

function MainDash() {
  const [selectedOption, setSelectedOption] = useState('GET');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState(null);
  const [spinner, setSpinner] = useState(false); // Spinner state

  const handleMethodChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleRequest = (result) => {
    setResponse(result);
    setSpinner(false); // Stop the spinner after the request completes
  };

  const handleRequestInitiation = () => {
    setSpinner(true); // Start the spinner when request starts
  };

  return (
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[65vw] pt-48 px-4 py-4 text-white flex flex-col items-center space-y-4">
        {/* Inline Container */}
        <div className="flex items-center space-x-4">
          <MethodSelector
              selectedOption={selectedOption}
              onMethodChange={handleMethodChange}
          />
          <UrlInput
              url={url}
              onUrlChange={handleUrlChange}
          />
          <RequestComponent
              method={selectedOption}
              url={url}
              onRequest={handleRequest}
              onRequestInitiation={handleRequestInitiation} // Pass callback to start spinner
          />
        </div>
        {/* Show Spinner or Response */}
        {spinner ? (
            <div className="spinner"></div> // Display the spinner
        ) : (
            <ResponseDisplay response={response} />
        )}
      </div>
  );
}

export default MainDash;
