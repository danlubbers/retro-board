import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function LikeButton(props) {

  let [countUp, setCountUp] = useState(0);
  let [countDown, setCountDown] = useState(0);

  const counterUp = () => setCountUp(++countUp)
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
