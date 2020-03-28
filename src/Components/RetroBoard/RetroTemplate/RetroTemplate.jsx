import React,  { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';
import LikeButton from '../LikeButton/LikeButton';

export default function RetroTemplate(props) {
console.log({props})
  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState(props.item.text);
  const [showText, setShowText] = useState(false);

  const updateText = () => {
    const stateCopy = {...state};
    stateCopy[props.templateName].forEach(stateItem => {
      const item = {...stateItem};
      item.id === props.item.id ? stateItem.text = text : stateItem = item;
    })
    setState(stateCopy)
    setShowText(true)
  }

  const deleteItem = () => {
    const stateCopy = {...state};
    const deleteItem = stateCopy[props.templateName].filter(stateItem => stateItem.id !== props.item.id);
    stateCopy[props.templateName] = deleteItem;
    setState(stateCopy)
  }
  console.log(state)


  const moveItemRight = (idx) => {
    const stateCopy = {...state};

    let moveIdx = stateCopy[props.templateName][idx];
    console.log(moveIdx)
    // const filterTask = stateCopy[props.templateName].filter(stateItem => {
    //   return stateItem.id === props.item.id
    // })
  
    if(props.templateName === 'wentWell') {
      stateCopy['wentWell'].splice(moveIdx, 1)
      stateCopy['toImprove'].push(moveIdx)
    }
    
    if(props.templateName === 'toImprove') {
      stateCopy['toImprove'].splice(moveIdx, 1)
      stateCopy['actionItems'].push(moveIdx)  
    }

    if(props.templateName === 'actionItems') {
      stateCopy['actionItems'].splice(moveIdx, 1)
      stateCopy['wentWell'].push(moveIdx)      
    }

    setState(stateCopy)
    console.log({state})
  }

  return (
      <>               
            <div className='item-container'>
             
                  <div key={`List ul - ${props.idx}`} className='individual-items' style={{backgroundColor: props.color}}>
                    {!showText 
                      ? <div className='input-container'>                  
                          <input 
                          key={`Input ${props.idx}`}
                          type='text'
                          value={text}
                          placeholder='Type a task...'
                          aria-label='Type a task...'
                          onChange={e => setText(e.target.value)}  
                        />
                        <button onClick={updateText}>ADD</button>
                        </div>
                      : <h4>{props.item.text}</h4>
                    }

                     <div className='font-awesome-container'>
                      <LikeButton idx={props.idx} templateName={props.templateName} item={props.item}/>
                    </div>

                      <div className='delete-arrow-container'>
                        <button className='item-btn'>&lt;</button>
                        <button className='item-btn' 
                        onClick={deleteItem}
                        >&times;</button>
                        <button className='item-btn' onClick={_=> moveItemRight(props.idx)}>&gt;</button>
                      </div>
                  
                  </div>
               
            </div>
        </> 
  )
}

RetroTemplate.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}
