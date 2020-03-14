import React from 'react'
import PropTypes from 'prop-types';
import LikeButton from '../LikeButton/LikeButton';

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

                <div className='font-awesome-container'>                
                  <LikeButton idx={idx}/>
                </div>
                
                  <div className='delete-arrow-container'>
                    <button className='item-btn' onClick={_=> props.moveItemLeft(idx)}>&lt;</button>
                    <button className='item-btn' onClick={_=> props.deleteItem(idx)}>&times;</button>
                    <button className='item-btn' onClick={_=> props.moveItemRight(idx)}>&gt;</button>
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

WentWell.propTypes = {
  item: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  newItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  moveItemLeft: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  moveItemRight: PropTypes.func.isRequired,
  templateName: PropTypes.string.isRequired
}