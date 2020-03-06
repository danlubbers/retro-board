import React from 'react'
import PropTypes from 'prop-types';
import RetroTemplate from '../RetroTemplate/RetroTemplate'

export default function ActionItems(props) {
  return (
    <div className='actionitems-template-container'>
      <RetroTemplate 
        item={props.item}
        setItem={props.setItem}
        templateName={props.templateName || 'Action Items'}
      />
    </div>
  )
}

ActionItems.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}