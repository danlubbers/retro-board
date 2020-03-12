import React from 'react'
import PropTypes from 'prop-types';
import LikeButton from '../../LikeButton/LikeButton';

export default function ActionItems(props) {
  return (
    <>
      <div className='template-card'>
        <h1 className='template-name'>{props.templateName}</h1>
          <div className='actionitems-template-container'>

          <button className='add-item' onClick={props.newItem}>&#43;</button>

            <div className='item-container'>
              {props.item.map((item, idx) => {
                return (
                  <div key={`List ul - ${idx}`} className='individual-items individual-action-item'>
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
                        <LikeButton idx={idx}/>
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

ActionItems.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  newItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}