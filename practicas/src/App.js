import React from 'react';
import logo from './logo.svg';
import './App.css';

import C14 from './comp/c14';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C14/>                                                                
      </header>
    </div>
  );
}

export default App;
//c6-4