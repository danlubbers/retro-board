import React,  { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { StateContext } from '../../../context/stateContext';
// import LikeButton from '../LikeButton/LikeButton';

export default function RetroTemplate(props) {
// console.log(props)
  const [state, setState] = useContext(StateContext);
  const [text, setText] = useState(props.item.text);
  const [showText, setShowText] = useState(false);
  // let [arrIndex, setArrIndex] = useState(0);
  // console.log({props})

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
    const deleteItem = stateCopy[props.templateName].filter((stateItem, i) => {
      // const item = {...stateItem};
      // console.log('Idx ', idx)
      // console.log('delete me', i)
      // console.log(stateCopy[props.templateName])
      return stateItem.id !== props.item.id;
    })
    stateCopy[props.templateName] = deleteItem;
    // console.log(stateCopy)
    setState(stateCopy)
  }
  console.log(state)


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
                      : <h4>{text}</h4>
                    }

                     {/* <div className='font-awesome-container'>
                      <LikeButton idx={idx} templateName={props.templateName}/>
                    </div> */}

                      <div className='delete-arrow-container'>
                        <button className='item-btn'>&lt;</button>
                        <button className='item-btn' 
                        onClick={deleteItem}
                        >&times;</button>
                        <button className='item-btn'>&gt;</button>
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
