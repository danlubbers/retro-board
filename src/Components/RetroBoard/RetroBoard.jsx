import React, { useContext } from 'react'
import RetroTemplate from './RetroTemplate/RetroTemplate';
import { StateContext } from '../../context/stateContext';

export default function RetroBoard(props) {

const [state, setState] = useContext(StateContext);

const newItem = () => {  
    const stateCopy = {...state};
    const id = stateCopy[props.templateName].length > 0
    ? parseInt(stateCopy[props.templateName][stateCopy[props.templateName].length - 1].id) + 1 : 0;
    stateCopy[props.templateName] = [...stateCopy[props.templateName], 
    {
      id: id,
      text: '', 
      thumbsUp: 0,
      thumbsDown: 0
    }]
    setState(stateCopy);
    // setArrIndex(arrIndex + 1)
    console.log(stateCopy[props.templateName].id)
  }
  // console.log(state)


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
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>

            <button className='add-item' onClick={newItem}>&#43;</button>

          {state[props.templateName].map((item, idx) => {

           return ( 
             <div className='item-container' key={idx}>

              <RetroTemplate
                color={props.color}
                title={props.title}
                templateName={props.templateName}
                key={idx}
                item={item}
              /> 
              
              </div>  
           )
          })
        }
          </div>
        </div>         
      </>  
  )
}


