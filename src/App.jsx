// App.jsx
import React from 'react';
import MainDash from './MainDash.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainDash />
    </div>
  );
}

export default App;
