import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
      thumbsDown: 0,
      boardName: props.templateName
    }]
    setState(stateCopy);

    console.log(stateCopy[props.templateName].id)
  }
  // console.log(state)


  // // Move Item to the Left 
  // const moveLeftWentWell = idx => {
  //   setActionItem([...actionItem, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteWentWellItem(idx);
  // } 



  // // Move Item to the Right
  // const moveRightWentWell = idx => {
  //   setToImprove([...toImprove, wentWell.filter((item, currentIdx) => currentIdx === idx ? item : null)])
  //   deleteWentWellItem(idx);
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
                  idx={idx}
                  item={item}
                /> 
                
              </div>  
            )
          })}
          </div>
        </div>         
      </>  
  )
}

RetroBoard.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired
}


