import React from 'react';
import logo from './logo.svg';
import './App.css';

import C25 from './comp/c25';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C25/>                                                                
      </header>
    </div>
  );
}

export default App;
//c6-4