import React,  { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
  console.log(state)
  // console.log({props})
  
  const newItem = () => {  
      const stateCopy = {...state};
      const id = stateCopy[props.templateName].length;
      stateCopy[props.templateName] = [...stateCopy[props.templateName], {
        id: id,
        text: '', 
        thumbsUp: 0,
        thumbsDown: 0
      }]
      setState(stateCopy);

      console.log(stateCopy) 
  }


  // Update Item List
  const updateItem = (idx) => {
    const stateCopy = {...state};
    console.log('this one', stateCopy)
    stateCopy[props.templateName].forEach((item)=>{
      const itemCopy = {...item};
      console.log('id:', item.id)
      console.log('idx:', idx)
      
        
        // : item = itemCopy;
    });
    setState(stateCopy);
    
  }


  return (
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>
            
          <button className='add-item' onClick={newItem}>&#43;</button>

            <div className='item-container' style={{backgroundColor: props.color}}>
              {Object.values(state[props.templateName]).map((item, idx) => {
                return (
                  <div key={`List ul - ${idx}`} className='individual-items'>
                    <input 
                      type='text'
                      value={item.text}
                      placeholder='Type a task...'
                      aria-label='Type a task...'
                     onChange={e => updateItem(idx)}  
                    />
              
                      <div className='delete-arrow-container'>
                        <button className='item-btn'>&lt;</button>
                        <button className='item-btn'>&times;</button>
                        <button className='item-btn'>&gt;</button>
                      </div>
                  
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </> 
  )
}

RetroTemplate.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired
}
