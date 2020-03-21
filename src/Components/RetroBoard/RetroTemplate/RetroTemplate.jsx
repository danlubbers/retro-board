import React,  { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState('');
  // console.log({props})
  
  const newItem = () => {  
      const stateCopy = {...state};
      const id = stateCopy[props.templateName].length;
      stateCopy[props.templateName] = [...stateCopy[props.templateName], {
        id: id,
        text: '', 
        thumbsUp: 0,
        thumbsDown: 0
      }]
      setState(stateCopy);
      // console.log(state)
    }

  const updateText = (idx) => {
    const stateCopy = {...state};
    stateCopy[props.templateName].forEach(stateItems => {
      const item = {...stateItems};
      item.id === idx ? stateItems.text = text : stateItems.text = item.text;
    })
    setState(stateCopy)
    // console.log(stateCopy)
  }


  return (
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>
            
          <button className='add-item' onClick={newItem}>&#43;</button>

            <div className='item-container'>
              {Object.values(state[props.templateName]).map((item, idx) => {
                return (
                  <div key={`List ul - ${idx}`} className='individual-items' style={{backgroundColor: props.color}}>
                    <div className='input-container'>
                      <input 
                        type='text'
                        value={state.text}
                        placeholder='Type a task...'
                        aria-label='Type a task...'
                      onChange={e => setText(e.target.value)}  
                      />
                      <button onClick={_=> updateText(idx)}>ADD</button>
                    </div>
                      <div className='delete-arrow-container'>
                        <button className='item-btn'>&lt;</button>
                        <button className='item-btn'>&times;</button>
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
