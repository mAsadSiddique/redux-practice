import React from 'react';
import CounterInput from './Components/CounterInput';
import CounterOutput from './Components/CounterOutput';

import './App.css';

function App() {
  return (
    <div className="App">
      <CounterOutput />
      <CounterInput />
    </div>
  );
}

export default App;
