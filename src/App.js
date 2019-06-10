import React from 'react';
import './App.css';

import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <p>default {Date()}</p>
      <Counter />
    </div>
  );
}

export default App;
