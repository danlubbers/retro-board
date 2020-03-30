import React,  { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';
import LikeButton from '../LikeButton/LikeButton';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState(props.item.text);
  const [showText, setShowText] = useState(false);

  const updateText = idx => {
    const stateCopy = {...state};
    stateCopy[props.templateName].forEach((stateItem, currentIdx) => {
      const item = {...stateItem};
      currentIdx === idx ? stateItem.text = text : stateItem = item;
    })
    setState(stateCopy)
    setShowText(true)
  }

  const deleteItem = idx => {
    const stateCopy = {...state};
    const deleteItem = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx !== idx);
    stateCopy[props.templateName] = deleteItem;
    setState(stateCopy)
  }
  // console.log(state)


  const moveItemRight = idx => {
    const stateCopy = {...state};
    const filterTask = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx === idx);
  
    console.log({filterTask})
      
    if(filterTask[0].boardName === 'wentWell') {
      stateCopy['wentWell'].splice(idx, 1)
      filterTask[0]['boardName'] = 'toImprove';
      stateCopy['toImprove'].push(filterTask[0])
      
      // filterTask[0]['text'] === '' ? setShowText(false) : setShowText(true)
      // console.log(filterTask[0]['text'])
      // console.log(showText)
    }

    else if(filterTask[0].boardName === 'toImprove') {      
      stateCopy['toImprove'].splice(idx, 1)
      filterTask[0]['boardName'] = 'actionItems';
      stateCopy['actionItems'].push(filterTask[0])
    }

    else if(filterTask[0].boardName === 'actionItems') {
      stateCopy['actionItems'].splice(idx, 1)
      filterTask[0]['boardName'] = 'wentWell';
      stateCopy['wentWell'].push(filterTask[0])
    }

    setState(stateCopy)
    console.log({state})
  }

  const moveItemLeft = idx => {
    const stateCopy = {...state};
    const filterTask = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx === idx);
  
    console.log({filterTask})
      
    if(filterTask[0].boardName === 'wentWell') {
      stateCopy['wentWell'].splice(idx, 1)
      filterTask[0]['boardName'] = 'actionItems';
      stateCopy['actionItems'].push(filterTask[0])
    }

    else if(filterTask[0].boardName === 'toImprove') {      
      stateCopy['toImprove'].splice(idx, 1)
      filterTask[0]['boardName'] = 'wentWell';
      stateCopy['wentWell'].push(filterTask[0])
    }

    else if(filterTask[0].boardName === 'actionItems') {
      stateCopy['actionItems'].splice(idx, 1)
      filterTask[0]['boardName'] = 'toImprove';
      stateCopy['toImprove'].push(filterTask[0])
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
                          onBlur={_=> updateText(props.idx)}
                        />                     
                        </div>
                      : <h4>{props.item.text}</h4>
                    }

                     <div className='font-awesome-container'>
                      <LikeButton idx={props.idx} templateName={props.templateName} item={props.item}/>
                    </div>

                      <div className='delete-arrow-container'>
                        <button className='item-btn' onClick={_=> moveItemLeft(props.idx)}>&lt;</button>
                        <button className='item-btn' 
                        onClick={_=> deleteItem(props.idx)}
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
