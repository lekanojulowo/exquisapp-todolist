import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Exquis Todo App 
        </h1>
        <ul>
          <li>Study JavaScript</li>
          <li>Go Gym</li>
          <li>Take time to pray</li>
          <li>Learn to appreciate</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
