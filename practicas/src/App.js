import React from 'react';
import logo from './logo.svg';
import './App.css';

import C17 from './comp/c17';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C17/>                                                                
      </header>
    </div>
  );
}

export default App;
//c6-4