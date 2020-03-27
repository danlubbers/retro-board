import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import { StateContext } from '../../../context/stateContext';

export default function LikeButton(props) {

  const [state, setState] = useContext(StateContext);

  const counterUp = () => {
    const stateCopy = {...state};
    stateCopy[props.templateName].map(item => {
     return item.id === props.idx && ++item.thumbsUp
    });
    setState(stateCopy)
  }

  const counterDown = () => {
    const stateCopy = {...state};
    stateCopy[props.templateName].map(item => {
     return item.id === props.idx && ++item.thumbsDown
    });
    setState(stateCopy)
  }
  
  return (
    <>
      <button className='font-awesome-icon' onClick={counterUp} id={props.idx}><FontAwesomeIcon icon={faThumbsUp} color='white' size='2x'/></button>
      <p className='counter'>{props.item.thumbsUp}</p>
      <button className='font-awesome-icon' onClick={counterDown} id={props.idx}><FontAwesomeIcon icon={faThumbsDown} color='white' size='2x'/></button>
      <p className='counter'>{props.item.thumbsDown}</p>
    </>
  )
}

LikeButton.propTypes = {
  idx: PropTypes.number.isRequired,
  templateName: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}
