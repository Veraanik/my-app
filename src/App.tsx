import React from 'react';
import './App.css';
import HeloWorld from "./Components/Helo World";
import Familia from "./Components/Familia";
function App() {
  return (
    <div className="App">'

      <header className="App-header">
        <HeloWorld></HeloWorld>
        <Familia></Familia>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
