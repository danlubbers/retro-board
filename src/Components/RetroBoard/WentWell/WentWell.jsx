import React from 'react'
import PropTypes from 'prop-types';
import RetroTemplate from '../RetroTemplate/RetroTemplate'

export default function WentWell(props) {
  return (
    <div className='wentwell-template-container'>
      <RetroTemplate 
        item={props.item}
        setItem={props.setItem}
        newItem={props.newItem}
        deleteItem={props.deleteItem}
        templateName={props.templateName || 'Went Well'}
      />
    </div>
  )
}

WentWell.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}