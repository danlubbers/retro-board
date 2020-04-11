import React,  { useState, useContext } from 'react';
import { StateContext } from '../../../context/stateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Themes() {
  
  const [state, setState] = useContext(StateContext);
  const [dark] = useState({
    'color': 'rgb(100, 56, 23)',
    'background-color': 'rgb(25, 25, 25)',
  });
  const [light] = useState({
    'background-color': 'rgb(250, 250, 250)'
  });
  
  
const toggleTheme = () => {
  const stateCopy = {...state};

  if(state.theme === 'light') {
    document.body.style.setProperty('background-color', dark['background-color']);
    // document.body.style.setProperty('h1', dark['color']);
    let darkTheme = stateCopy['theme'] = 'dark';
    stateCopy['theme'] = darkTheme;
    setState(stateCopy);
  } else {
    document.body.style.setProperty('background-color', light['background-color']); 
    let lightTheme = stateCopy['theme'] = 'light';
    stateCopy['theme'] = lightTheme;
    setState(stateCopy);
  }
}

  return (
    <div>
      {state.theme === 'light' ?
        <button className="toggle-btn dark" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} size='2x' style={{color: 'rgb(75, 75, 75)'}}/>
        </button> :
        <button className="toggle-btn light" onClick={toggleTheme}>
          <FontAwesomeIcon icon={faSun} size='2x' style={{color: 'rgb(230, 230, 230)'}}/>
        </button>
      }
    </div>
  )
}
