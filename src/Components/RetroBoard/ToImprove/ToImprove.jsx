import React from 'react'
import PropTypes from 'prop-types';
import RetroTemplate from '../RetroTemplate/RetroTemplate'

export default function ToImprove(props) {
  return (
    <>
      <div className='template-card'>
        <h1 className='template-name'>{props.templateName}</h1>
        <div className='toimprove-template-container'>
          
        <button className='add-item' onClick={props.newItem}>&#43;</button>
        
          <RetroTemplate 
            item={props.item}
            setItem={props.setItem}
            newItem={props.newItem}
            updateItem={props.updateItem}
            deleteItem={props.deleteItem}
            templateName={props.templateName || 'To Improve'}
          />
        </div>
      </div>
    </>
  )
}

ToImprove.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}