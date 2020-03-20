import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState([])
 

  return (
    <StateContext.Provider value={[state, setState]}>
      { children }
    </StateContext.Provider>
  )
}