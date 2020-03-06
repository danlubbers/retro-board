import React from 'react'
import PropTypes from 'prop-types';
import RetroTemplate from '../RetroTemplate/RetroTemplate'

export default function ToImprove(props) {
  return (
    <div className='toimprove-template-container'>
      <RetroTemplate 
        item={props.item}
        setItem={props.setItem}
        templateName={props.templateName || 'To Improve'}
      />
    </div>
  )
}

ToImprove.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}