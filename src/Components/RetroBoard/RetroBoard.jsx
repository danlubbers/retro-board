import React, { useState } from 'react'
import WentWell from './WentWell/WentWell';
import ToImprove from './ToImprove/ToImprove';
import ActionItems from './ActionItems/ActionItems';

export default function RetroBoard() {

  const [wentWell, setWentWell] = useState(['Test 1', 'Test 2'])
  const [toImprove, setToImprove] = useState([])
  const [actionItems, setActionItems] = useState([])
  const [templateName, setTemplateName] = useState('') ;

  const newItem = () => {
    if(wentWell) {
    setWentWell([...wentWell, '']);
    } 
    if(toImprove) {
      setToImprove([...toImprove, 'Test'])
    }
  }

  const updateItem = (userInput, idx) => {
      const newWentWellItems = [...wentWell];
      newWentWellItems[idx] = userInput;
      setWentWell(newWentWellItems);
    
  }

  const deleteItem = idx => {
    setWentWell(wentWell.filter((item, currentIdx) => currentIdx !== idx));
  }

  return (
    <div className='retroboard-container'>
      <h1 className='retroboard-title'>RETROBOARD</h1>
      <div className='retrotemplate-container'>
        <WentWell 
          item={wentWell}
          setItem={setWentWell}
          newItem={newItem}
          updateItem={updateItem}
          deleteItem={deleteItem}
          templateName={templateName || 'Went Well'}

        />
        <ToImprove 
          item={toImprove}
          setItem={setToImprove}
          newItem={newItem}
          updateItem={updateItem}
          deleteItem={deleteItem}
          templateName={templateName || 'To Improve'}
        />
        <ActionItems 
          item={actionItems}
          setItem={setActionItems}
          templateName={templateName || 'Action Items'}
        />
  
      </div>
    </div>
  )
}


