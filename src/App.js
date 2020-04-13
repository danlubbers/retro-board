import React from 'react';
import './App.scss';
import RetroBoard from './Components/RetroBoard/RetroBoard';
// import Themes from './Components/RetroBoard/Themes/Themes';
import ToggleTheme from './Components/ToggleTheme/ToggleTheme'
import { StateProvider } from './context/stateContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalCSS';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme';



function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <StateProvider>
        <GlobalStyles />
        <div className="App">
          <div className='retroboard-container'>
            
            <header>
              {/* dummy div for grid positioning */}
              <div /> 
              <h1 className='retroboard-title'>RETROBOARD</h1>
              {/* <div className='themes'><Themes/></div> */}
              <div className='themes'><ToggleTheme theme={theme} toggleTheme={toggleTheme}/></div>
            </header>

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
    </ThemeProvider>
 
  );
}

export default App;
