import React from 'react';
import logo from './logo.svg';
import './App.css';

//import C01 from './comp/c01';
//import C02 from './comp/c02';
//import C03 from './comp/c03';
import C05 from './comp/c05';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do something!
        </p>
        <C05/>
      </header>
      
    </div>
  );
}

export default App;
