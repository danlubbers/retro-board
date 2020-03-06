import React from 'react'
import PropTypes from 'prop-types';

export default function RetroTemplate(props) {
console.log({props})
  return (
    <div className='template-card'>
      <h1 className='template-name'>{props.templateName}</h1>

        <button className='add-item' onClick={props.newItem}>&#43;</button>
        <div className='item-container'>
          {props.item.map((item, idx) => {
            return (
              <div key={`List ul - ${idx}`} className='individual-items'>
                <input 
                  value={item}
                  placeholder='Type a task...'
                  aria-label='Type a task...'
                  onChange={e => props.updateItem(e.target.value, idx)}  />
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
  )
}

RetroTemplate.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}
