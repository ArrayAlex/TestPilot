import React, { useState } from 'react';
import RequestComponent from './RequestComponent.jsx';
import MethodSelector from './MethodSelector.jsx';
import UrlInput from './UrlInput.jsx';
import ResponseDisplay from './ResponseDisplay.jsx';

function MainDash() {
  const [selectedOption, setSelectedOption] = useState('GET');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const handleMethodChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleRequest = (result) => {
    setSpinner(false);  // Stop spinner after getting the response
    setResponse(result);
  };

  const handleRequestInitiation = () => {
    setSpinner(true);  // Start spinner before making the request
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
              onRequestInitiation={handleRequestInitiation}
          />
        </div>
        {spinner && <div className="text-white">Loading...</div>}
        <ResponseDisplay response={response} />
      </div>
  );
}

export default MainDash;
