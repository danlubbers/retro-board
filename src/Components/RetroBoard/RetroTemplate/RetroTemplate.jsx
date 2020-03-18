import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function RetroTemplate(props) {

  const [state, setState] = useState(
    {
      wentWell: [],
      toImprove: [],
      actionItems: []
    }
  )

  // console.log({props})
  
  
  const newItem = () => {  
      const stateCopy = {...state};
      stateCopy[props.templateName] = [...stateCopy[props.templateName], {
        text: '', 
        thumbsUp: 0,
        thumbsDown: 0
      }]
      setState(stateCopy);

  }
  console.log(state)

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
                      onChange={e => props.updateItem(e.target.value, idx)}  
                    />
                    <h1>{item.text}</h1>
                      <div className='delete-arrow-container'>
                        <button className='item-btn'>&lt;</button>
                        <button className='item-btn' onClick={_=> props.deleteItem(idx)}>&times;</button>
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
  newItem: PropTypes.func,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
  templateName: PropTypes.string.isRequired
}
