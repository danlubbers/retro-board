import React from 'react'
import PropTypes from 'prop-types';

export default function RetroTemplate(props) {
console.log({props})
  return (
    <div className='template-card'>
      <h1 className='template-name'>{props.templateName}</h1>

        <button className='add-item'>&#43;</button>

        {props.item.map((list, idx) => {
          return (
            <ul key={`List ul - ${idx}`}>
              <li key={`List li - ${idx}`}>{list}</li>
            </ul>
          )
        })}

        <div className='delete-arrow-container'>
          <button>&lt;</button>
          <button>&times;</button>
          <button>&gt;</button>
        </div>
        
    
    </div>
  )
}

RetroTemplate.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}
