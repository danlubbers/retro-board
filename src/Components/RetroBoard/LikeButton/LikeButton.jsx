import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import { StateContext } from '../../../context/stateContext';

export default function LikeButton(props) {

  const [state, setState] = useContext(StateContext);
  let [countUp, setCountUp] = useState(0);
  let [countDown, setCountDown] = useState(0);

  const counterUp = () => {
    const item = {...state};
    console.log('ThumbsUp: ', item)
    let thumbsUp = item[props.templateName].map(e => {
      return state.thumbsUp = countUp + 1;
    })
    setState(thumbsUp)
  }
  const counterDown = () => setCountDown(--countDown)

  return (
    <>
      <button className='font-awesome-icon' onClick={counterUp} id={props.idx}><FontAwesomeIcon icon={faThumbsUp} color='white' size='2x'/></button>
      <p className='counter'>{countUp}</p>
      <button className='font-awesome-icon' onClick={counterDown} id={props.idx}><FontAwesomeIcon icon={faThumbsDown} color='white' size='2x'/></button>
      <p className='counter'>{countDown}</p>
    </>
  )
}

LikeButton.propTypes = {
  idx: PropTypes.number.isRequired
}
