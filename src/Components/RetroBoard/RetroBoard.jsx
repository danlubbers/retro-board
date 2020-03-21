import React from 'react'
import RetroTemplate from './RetroTemplate/RetroTemplate';

export default function RetroBoard() {

  // const [wentWell, setWentWell] = useState([''])
  // const [toImprove, setToImprove] = useState([''])
  // const [actionItem, setActionItem] = useState([''])

  // New Items
  // const newWentWellItem = () => setWentWell([...wentWell, '']);
  // const newToImproveItem = () => setToImprove([...toImprove, ''])
  // const newActionItem = () => setActionItem([...actionItem, ''])    

  // Update Item List
  // const updateWentWellItem = (userInput, idx) => {
  //     const newWentWellItems = [...wentWell];
  //     newWentWellItems[idx] = userInput;
  //     setWentWell(newWentWellItems);
  // }

  // const updateToImproveItem = (userInput, idx) => {
  //     const newToImproveItems = [...toImprove];
  //     newToImproveItems[idx] = userInput;
  //     setToImprove(newToImproveItems);
  // }

  // const updateActionItem = (userInput, idx) => {
  //     const newActionItems = [...actionItem];
  //     newActionItems[idx] = userInput;
  //     setActionItem(newActionItems);
  // }

  // // Move Item to the Left 
  // const moveLeftWentWell = idx => {
  //   setActionItem([...actionItem, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteWentWellItem(idx);
  // } 

  // const moveLeftToImprove = idx => {
  //   setWentWell([...wentWell, toImprove.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteToImproveItem(idx);
  // } 

  // const moveLeftActionItem = idx => {
  //   setToImprove([...toImprove, actionItem.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteActionItem(idx);
  // } 

  // // Delete Item 
  // const deleteWentWellItem = idx => setWentWell(wentWell.filter((item, currentIdx) => currentIdx !== idx));

  // const deleteToImproveItem = idx => setToImprove(toImprove.filter((item, currentIdx) => currentIdx !== idx));

  // const deleteActionItem = idx => setActionItem(actionItem.filter((item, currentIdx) => currentIdx !== idx));

  // // Move Item to the Right
  // const moveRightWentWell = idx => {
  //   setToImprove([...toImprove, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteWentWellItem(idx);
  // } 
  // const moveRightToImprove = idx => {
  //   setActionItem([...actionItem, toImprove.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteToImproveItem(idx);
  // } 
  // const moveRightActionItem = idx => {
  //   setWentWell([...wentWell, actionItem.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteActionItem(idx);
  // } 

  return (
    
      <div className='retroboard-container'>
        <h1 className='retroboard-title'>RETROBOARD</h1>
        <div className='retrotemplate-container'>
          <RetroTemplate
            color={'#009588'}
            title={'Went Well'}
            templateName={'wentWell'}
          />

          <RetroTemplate
            color={'#E91D63'}
            title={'To Improve'}
            templateName={'toImprove'}
            />

          {/* <RetroTemplate 
            color={'#9C29B0'}
            title={'Action Items'}
            templateName={'actionItems'}
          /> */}
    
        </div>
      </div>
  
  )
}


