import React from 'react'
import PropTypes from 'prop-types';

export default function RetroTemplate(props) {
console.log({props})
  return (
    <div className='template-card'>
      <h1 className='template-name'>{props.templateName}</h1>

        <button className='add-item'>&#43;</button>
        <div className='item-container'>
          {props.item.map((list, idx) => {
            return (
              <ul key={`List ul - ${idx}`}>
                <li className='individual-items' key={`List li - ${idx}`}>{list}
                  <div className='delete-arrow-container'>
                    <button className='item-btn'>&lt;</button>
                    <button className='item-btn'>&times;</button>
                    <button className='item-btn'>&gt;</button>
                  </div>
                </li>
              </ul>
            )
          })}
        </div>
        
    
    </div>
  )
}

RetroTemplate.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}
