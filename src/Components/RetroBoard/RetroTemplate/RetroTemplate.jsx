import React,  { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';
import LikeButton from '../LikeButton/LikeButton';

export default function RetroTemplate(props) {

  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState(props.item.text);
  const [showText, setShowText] = useState(props.item.text ? true : false);

  const updateText = idx => {
    const stateCopy = {...state};
    stateCopy[props.templateName].forEach((stateItem, currentIdx) => currentIdx === idx && (stateItem.text = text));

    setState(stateCopy)

    // This verifies if text has been input to change the display from the input field to the users text
    stateCopy[props.templateName].forEach(stateItem => {
      if(stateItem.text === '') {
        setShowText(false)
      } else {
        setShowText(true)
        // This prevents the user from entering multiple items without first filling out the input field
        props.setAddNew(true)
      }
    });

    console.log({stateCopy})
  }

  const deleteItem = idx => {
    const stateCopy = {...state};
    const deleteItem = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx !== idx);
    stateCopy[props.templateName] = deleteItem;
    setState(stateCopy)
    props.setAddNew(true)
  }
  // console.log(state)


  const moveItemRight = idx => {
    const stateCopy = {...state};
    const filterTask = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx === idx);
  
    if(filterTask[0].boardName === 'wentWell' && filterTask[0].text !== '') {
      stateCopy['wentWell'].splice(idx, 1)
      filterTask[0]['boardName'] = 'toImprove';
      stateCopy['toImprove'].push(filterTask[0])
      props.setAddNew(true)
    }

    else if(filterTask[0].boardName === 'toImprove' && filterTask[0].text !== '') {      
      stateCopy['toImprove'].splice(idx, 1)
      filterTask[0]['boardName'] = 'actionItems';
      stateCopy['actionItems'].push(filterTask[0])
      props.setAddNew(true)
    }

    else if(filterTask[0].boardName === 'actionItems' && filterTask[0].text !== '') {
      stateCopy['actionItems'].splice(idx, 1)
      filterTask[0]['boardName'] = 'wentWell';
      stateCopy['wentWell'].push(filterTask[0])
      props.setAddNew(true)
    }

    setState(stateCopy)
    console.log({state})
  }

  const moveItemLeft = idx => {
    const stateCopy = {...state};
    const filterTask = stateCopy[props.templateName].filter((stateItem, currentIdx) => currentIdx === idx);
  
    if(filterTask[0].boardName === 'wentWell' && filterTask[0].text !== '') {
      stateCopy['wentWell'].splice(idx, 1)
      filterTask[0]['boardName'] = 'actionItems';
      stateCopy['actionItems'].push(filterTask[0])
      props.setAddNew(true)
    }

    else if(filterTask[0].boardName === 'toImprove' && filterTask[0].text !== '') {      
      stateCopy['toImprove'].splice(idx, 1)
      filterTask[0]['boardName'] = 'wentWell';
      stateCopy['wentWell'].push(filterTask[0])
      props.setAddNew(true)
    }

    else if(filterTask[0].boardName === 'actionItems' && filterTask[0].text !== '') {
      stateCopy['actionItems'].splice(idx, 1)
      filterTask[0]['boardName'] = 'toImprove';
      stateCopy['toImprove'].push(filterTask[0])
      props.setAddNew(true)
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
                      : 
                        // This onClick allows the user to edit the text
                        <h4 onClick={_=> setShowText(false)}>{props.item.text}</h4>                       
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
  item: PropTypes.object.isRequired,
  setAddNew: PropTypes.func.isRequired,
}
