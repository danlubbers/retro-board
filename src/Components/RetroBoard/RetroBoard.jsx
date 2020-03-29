import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RetroTemplate from './RetroTemplate/RetroTemplate';
import { StateContext } from '../../context/stateContext';

export default function RetroBoard(props) {

const [state, setState] = useContext(StateContext);

const newItem = () => {  
    const stateCopy = {...state};
    stateCopy[props.templateName] = [...stateCopy[props.templateName], 
    {
      text: '', 
      thumbsUp: 0,
      thumbsDown: 0,
      boardName: props.templateName
    }]
    setState(stateCopy);
  }
  // console.log(state)

  return (    
      <>
        <div className='template-card'>
          <h1 className='template-name'>{props.title}</h1>
          <div className='template-container'>

            <button className='add-item' onClick={newItem}>&#43;</button>

          {state[props.templateName].map((item, idx) => {

            return ( 
              <div className='item-container' key={idx}>

                <RetroTemplate
                  color={props.color}
                  title={props.title}
                  templateName={props.templateName}
                  idx={idx}
                  item={item}
                /> 
                
              </div>  
            )
          })}
          </div>
        </div>         
      </>  
  )
}

RetroBoard.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired
}


