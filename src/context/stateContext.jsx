import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(
    {
      wentWell: [],
      toImprove: [],
      actionItems: [],
      theme: 'light',
      light: {
        'background-color': 'rgb(230, 230, 230)'
      },
      dark: {
        'background-color': 'rgb(50, 50, 50)'
      }
    }
  );

  return (
    <StateContext.Provider value={[state, setState]} >
      { children }
    </StateContext.Provider>
  )
}