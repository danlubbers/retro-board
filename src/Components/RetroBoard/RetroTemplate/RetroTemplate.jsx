import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function RetroTemplate(props) {

  const [state, setState] = useState(
    {
      wentWell: [],
      toImprove: [],
      actionItems: []
  },
  )

  // console.log({props})
  
  const stateCopy = {...state}
  console.log(state.wentWell)
  
  const newItem = () => {
    console.log('wentWell' === props.templateName)
    setState({...stateCopy.wentWell}, 
        {
          text: 'Test',
          thumbsUp: 5,
          thumbsDown: 0
        }
      );
    }

  return (
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='wentwell-template-container'>
            
          <button className='add-item' onClick={newItem}>&#43;</button>

            <div className='item-container'>
              {props.item.map((item, idx) => {
                return (
                  <div key={`List ul - ${idx}`} className='individual-items'>
                    <input 
                      type='text'
                      value={item}
                      placeholder='Type a task...'
                      aria-label='Type a task...'
                      onChange={e => props.updateItem(e.target.value, idx)}  
                    />
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
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  newItem: PropTypes.func,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
  templateName: PropTypes.string.isRequired
}
