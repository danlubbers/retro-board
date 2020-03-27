import React from 'react';
import './App.scss';
import RetroBoard from './Components/RetroBoard/RetroBoard';
import { StateProvider } from './context/stateContext';

function App() {
  return (
    <StateProvider>
      <div className="App">
        <div className='retroboard-container'>
          <h1 className='retroboard-title'>RETROBOARD</h1>
          <div className='retrotemplate-container'>

            <RetroBoard
              color={'#009588'}
              title={'Went Well'}
              templateName={'wentWell'}
            />

            <RetroBoard
              color={'#E91D63'}
              title={'To Improve'}
              templateName={'toImprove'}
              />

            <RetroBoard 
              color={'#9C29B0'}
              title={'Action Items'}
              templateName={'actionItems'}
            />
      
          </div>
        </div>
      </div>
    </StateProvider>
 
  );
}

export default App;
