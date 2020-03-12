import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function LikeButton(props) {

  let [count, setCount] = useState(0);

  const counter = () => setCount(++count)

  return (
    <>
      <button className='font-awesome-icon' onClick={counter} id={props.idx}><FontAwesomeIcon icon={faThumbsUp} color='white' size='2x'/></button>
      <p className='counter'>{count}</p>
    </>
  )
}
