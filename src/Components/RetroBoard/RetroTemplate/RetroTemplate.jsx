import React,  { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
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
    }
    console.log(state)

  // Update Item List
  const updateText = (textValue) => {
    const stateCopy = {...state};
    console.log(textValue);
    // console.log({stateCopy})
    // console.log(stateCopy[props.templateName])
    stateCopy[props.templateName] = [...stateCopy[props.templateName], {
      text: textValue
    }]
    
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
                     onChange={e => updateText(e.target.value)}  
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
