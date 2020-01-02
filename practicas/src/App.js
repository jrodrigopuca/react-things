import React from 'react';
import logo from './logo.svg';
import './App.css';

import C19 from './comp/c19';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C19/>                                                                
      </header>
    </div>
  );
}

export default App;
//c6-4