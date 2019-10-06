import React from 'react';
import logo from './logo.svg';
import './App.css';

import C09 from './comp/c09';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C09/>
      </header>
      
    </div>
  );
}

export default App;
