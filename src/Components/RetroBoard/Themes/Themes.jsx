import React,  { useContext } from 'react';
import { StateContext } from '../../../context/stateContext';


export default function Themes() {

const [state, setState] = useContext(StateContext);
console.log({state})

// const setTheme = () => {
//   const stateCopy = {...state}
//   // console.log(state.theme === 'light')
//   // console.log(stateCopy.dark['background-color'])
//   let changeTheme = document.body.style.setProperty('background-color', stateCopy.dark['background-color']);
//   // console.log(changeTheme)
  
//   console.log({state})
// }

const toggleTheme = () => {
  const stateCopy = {...state}
  if(state.theme === 'light') {
    document.body.style.setProperty('background-color', stateCopy.dark['background-color']);
    let dark = [...stateCopy.filter(e => e.theme = 'dark')];
    stateCopy = dark
    console.log(dark)
    // setState(dark)
  } else {
    document.body.style.setProperty('background-color', stateCopy.light['background-color']); 
  }
}


  return (
    <div>
      <button onClick={toggleTheme}>Light / Dark</button>
    </div>
  )
}
