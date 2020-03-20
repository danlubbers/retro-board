import React from 'react';
import './App.scss';
import RetroBoard from './Components/RetroBoard/RetroBoard';
import { StateProvider } from './context/stateContext';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <RetroBoard />
      </div>
    </StateProvider>
 
  );
}

export default App;
