import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRubleSign } from '@fortawesome/free-solid-svg-icons'

export default function WentWell(props) {
  console.log({props})
  
  return (
    <>
      <div className='template-card'>
        <h1 className='template-name'>{props.templateName}</h1>
        <div className='wentwell-template-container'>
          
        <button className='add-item' onClick={props.newItem}>&#43;</button>

        <div className='item-container'>
          {props.item.map((item, idx) => {
            return (
              <div key={`List ul - ${idx}`} className='individual-items individual-went-well'>
                <input 
                  type='text'
                  value={item}
                  placeholder='Type a task...'
                  aria-label='Type a task...'
                  onChange={e => props.updateItem(e.target.value, idx)}  
                />
                
                  <div className='delete-arrow-container'>
                    <button className='item-btn' onClick={_=> props.moveItemleft(idx)}>&lt;</button>
                    <button className='item-btn' onClick={_=> props.deleteItem(idx)}>&times;</button>
                    <button className='item-btn' onClick={_=> props.moveItemRight(idx)}>&gt;</button>
                  </div>
                  <div className='font-awesome-container'>
                    <button className='font-awesome-icon'><FontAwesomeIcon icon={faThumbsUp} color='white' size='2x'/></button>
                  </div>
              </div>
            )
          })}
        </div>
        
          {/* <RetroTemplate 
            item={props.item}
            setItem={props.setItem}
            newItem={props.newItem}
            updateItem={props.updateItem}
            deleteItem={props.deleteItem}
            templateName={props.templateName || 'Went Well'}
          /> */}
        </div>
      </div>
    </>
  )
}

WentWell.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  newItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  moveItemRight: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}