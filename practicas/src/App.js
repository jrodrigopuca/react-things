import React from 'react';
import logo from './logo.svg';
import './App.css';
import C43 from './comp/c43.jsx'   ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C43/>                                                              
      </header>
    </div>
  );
}

export default App;