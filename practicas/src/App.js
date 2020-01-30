import React from 'react';
import logo from './logo.svg';
import './App.css';
import C42 from './comp/c42.jsx'   ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C42/>                                                              
      </header>
    </div>
  );
}

export default App;