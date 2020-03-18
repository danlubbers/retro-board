import React,  { useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);

  // console.log({props})
  
  // New Items
  const newItem = () => {  
      const stateCopy = {...state};
      stateCopy[props.templateName] = [...stateCopy[props.templateName], {
        text: '', 
        thumbsUp: 0,
        thumbsDown: 0
      }]
      setState(stateCopy);

      console.log(stateCopy)
  }

  // Update Item List
  const updateItem = (userInput, idx) => {
    console.log(userInput, idx)
    const stateCopy = {...state};
    stateCopy[props.templateName][idx] = [...stateCopy[props.templateName],  {
      text: userInput
    }]
    setState(stateCopy)
    console.log(stateCopy)
  }

  return (
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>
            
          <button className='add-item' onClick={newItem}>&#43;</button>

            <div className='item-container' >
              {Object.values(state[props.templateName]).map((item, idx) => {
                return (
                  <div key={`List ul - ${idx}`} className='individual-items' style={{backgroundColor: props.color}}>
                    <input 
                      type='text'
                      value={item.text}
                      placeholder='Type a task...'
                      aria-label='Type a task...'
                      onChange={e => updateItem(e.target.value, idx)}  
                    />
                    <h1>{item.text}</h1>
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
        </div>
        </> 
  )
}

RetroTemplate.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired
}
