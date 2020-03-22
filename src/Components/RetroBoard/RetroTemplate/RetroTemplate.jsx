import React,  { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState('');
  // const [arrIndex, setArrIndex] = useState(0);
  // console.log({props})
  
  const newItem = () => {  
      const stateCopy = {...state};
      const id = stateCopy[props.templateName].length;
      // console.log(id)
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
    stateCopy[props.templateName].forEach(stateItem => {
      const item = {...stateItem};
      item.id === idx ? stateItem.text = text : stateItem.text = item.text;
    })
    setState(stateCopy)
    console.log(state)
  }

  const deleteItem = () => {
    const stateCopy = {...state};
    const deleteItem = stateCopy[props.templateName].filter((stateItem, i) => {
      // const item = {...stateItem};
      console.log('current I ', i)
      console.log('delete me', stateItem)
      // console.log(stateCopy[props.templateName])
      return stateItem.id !== i;
    })
    stateCopy[props.templateName] = deleteItem;
    console.log(stateCopy)
    setState(stateCopy)
  }
  // console.log(state)


  return (
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>
            
          <button className='add-item' onClick={newItem}>&#43;</button>

            <div className='item-container'>
              {Object.values(state[props.templateName]).map((item, idx) => {
                // console.log(item.text)
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
                        <button className='item-btn' onClick={_=> deleteItem(idx)}>&times;</button>
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
