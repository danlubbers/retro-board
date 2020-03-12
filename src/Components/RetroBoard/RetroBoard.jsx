import React, { useState } from 'react'
import WentWell from './WentWell/WentWell';
import ToImprove from './ToImprove/ToImprove';
import ActionItems from './ActionItems/ActionItems';

export default function RetroBoard() {

  const [wentWell, setWentWell] = useState([''])
  const [toImprove, setToImprove] = useState([''])
  const [actionItem, setActionItem] = useState([''])
  const [templateName, setTemplateName] = useState('') ;

  // New Items
  const newWentWellItem = () => setWentWell([...wentWell, '']);
  const newToImproveItem = () => setToImprove([...toImprove, ''])
  const newActionItem = () => setActionItem([...actionItem, ''])    

  // Update Item List
  const updateWentWellItem = (userInput, idx) => {
      const newWentWellItems = [...wentWell];
      newWentWellItems[idx] = userInput;
      setWentWell(newWentWellItems);
  }

  const updateToImproveItem = (userInput, idx) => {
      const newToImproveItems = [...toImprove];
      newToImproveItems[idx] = userInput;
      setToImprove(newToImproveItems);
  }

  const updateActionItem = (userInput, idx) => {
      const newActionItems = [...actionItem];
      newActionItems[idx] = userInput;
      setActionItem(newActionItems);
  }

  // Move Item to the Left 
  const moveLeftWentWell = idx => {
    setActionItem([...actionItem, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteWentWellItem(idx);
  } 

  const moveLeftToImprove = idx => {
    setWentWell([...wentWell, toImprove.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteToImproveItem(idx);
  } 

  const moveLeftActionItem = idx => {
    setToImprove([...toImprove, actionItem.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteActionItem(idx);
  } 

  // Delete Item 
  const deleteWentWellItem = idx => setWentWell(wentWell.filter((item, currentIdx) => currentIdx !== idx));

  const deleteToImproveItem = idx => setToImprove(toImprove.filter((item, currentIdx) => currentIdx !== idx));

  const deleteActionItem = idx => setActionItem(actionItem.filter((item, currentIdx) => currentIdx !== idx));

  // Move Item to the Right
  const moveRightWentWell = idx => {
    setToImprove([...toImprove, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteWentWellItem(idx);
  } 
  const moveRightToImprove = idx => {
    setActionItem([...actionItem, toImprove.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteToImproveItem(idx);
  } 
  const moveRightActionItem = idx => {
    setWentWell([...wentWell, actionItem.filter((item, currentIdx) => currentIdx === idx ? item : null)])
    deleteActionItem(idx);
  } 
  
  console.log({wentWell})
  return (
    <div className='retroboard-container'>
      <h1 className='retroboard-title'>RETROBOARD</h1>
      <div className='retrotemplate-container'>
        <WentWell 
          item={wentWell}
          setItem={setWentWell}
          newItem={newWentWellItem}
          updateItem={updateWentWellItem}
          moveItemleft={moveLeftWentWell}
          deleteItem={deleteWentWellItem}
          moveItemRight={moveRightWentWell}
          templateName={templateName || 'Went Well'}

        />
        <ToImprove 
          item={toImprove}
          setItem={setToImprove}
          newItem={newToImproveItem}
          updateItem={updateToImproveItem}
          moveItemleft={moveLeftToImprove}
          deleteItem={deleteToImproveItem}
          moveItemRight={moveRightToImprove}
          templateName={templateName || 'To Improve'}
        />

        <ActionItems 
          item={actionItem}
          setItem={setActionItem}
          newItem={newActionItem}
          updateItem={updateActionItem}
          moveItemleft={moveLeftActionItem}
          deleteItem={deleteActionItem}
          moveItemRight={moveRightActionItem}
          templateName={templateName || 'Action Items'}
        />
  
      </div>
    </div>
  )
}


