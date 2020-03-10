import React, { useState } from 'react'
import WentWell from './WentWell/WentWell';
import ToImprove from './ToImprove/ToImprove';
import ActionItems from './ActionItems/ActionItems';

export default function RetroBoard() {

  const [wentWell, setWentWell] = useState(['Went Well 1', 'Went Well 2'])
  const [toImprove, setToImprove] = useState(['To Improve 1', 'To Improve 2'])
  const [actionItem, setActionItem] = useState(['Action Item 1', 'Action Item 2'])
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

  // Delete Item 
  const deleteWentWellItem = idx => setWentWell(wentWell.filter((item, currentIdx) => currentIdx !== idx));
  const deleteToImproveItem = idx => setToImprove(toImprove.filter((item, currentIdx) => currentIdx !== idx));
  const deleteActionItem = idx => setActionItem(actionItem.filter((item, currentIdx) => currentIdx !== idx));
  

  return (
    <div className='retroboard-container'>
      <h1 className='retroboard-title'>RETROBOARD</h1>
      <div className='retrotemplate-container'>
        <WentWell 
          item={wentWell}
          setItem={setWentWell}
          newItem={newWentWellItem}
          updateItem={updateWentWellItem}
          deleteItem={deleteWentWellItem}
          templateName={templateName || 'Went Well'}

        />
        <ToImprove 
          item={toImprove}
          setItem={setToImprove}
          newItem={newToImproveItem}
          updateItem={updateToImproveItem}
          deleteItem={deleteToImproveItem}
          templateName={templateName || 'To Improve'}
        />

        <ActionItems 
          item={actionItem}
          setItem={setActionItem}
          newItem={newActionItem}
          updateItem={updateActionItem}
          deleteItem={deleteActionItem}
          templateName={templateName || 'Action Items'}
        />
  
      </div>
    </div>
  )
}


