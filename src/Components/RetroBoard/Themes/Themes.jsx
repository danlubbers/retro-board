import React,  { useState, useContext } from 'react';
import { StateContext } from '../../../context/stateContext';


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
        <button className="toggle-btn dark" onClick={toggleTheme}>Dark</button> :
        <button className="toggle-btn light" onClick={toggleTheme}>Light</button>
      }
    </div>
  )
}
