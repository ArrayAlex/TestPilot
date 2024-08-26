import React from 'react';

const UrlInput = ({ url, onUrlChange }) => {
  return (
    <input
      type="text"
      placeholder="http://"
      value={url}
      onChange={onUrlChange}
      className="flex-grow p-2 rounded border border-gray-600 text-white w-full max-w-[600px]"
    />
  );
};

export default UrlInput;
