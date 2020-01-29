import React from 'react';
import logo from './logo.svg';
import './App.css';
import C40 from './comp/c40.jsx'   ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C40/>                                                              
      </header>
    </div>
  );
}

export default App;