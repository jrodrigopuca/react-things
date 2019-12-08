import React from 'react';
import logo from './logo.svg';
import './App.css';

import C11 from './comp/c11';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C11/>
      </header>
      
    </div>
  );
}

export default App;
//c6-3