import React from 'react';
import logo from './logo.svg';
import './App.css';

import C32 from './comp/c32';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C32/>                                                                
      </header>
    </div>
  );
}

export default App;
//c6-4