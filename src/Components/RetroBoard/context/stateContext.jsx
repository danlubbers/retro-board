import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [wentWell, setWentWell] = useState([''])
  const [toImprove, setToImprove] = useState([''])
  const [actionItem, setActionItem] = useState([''])

  return (
    <StateContext.Provider 
        wentWell={[wentWell, setWentWell]}
        toImprove={[toImprove, setToImprove]}
        actionItem={[actionItem, setActionItem]}
    >
      { children }
    </StateContext.Provider>
  )
}