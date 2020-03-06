import React, { useState } from 'react'
import WentWell from './WentWell/WentWell';
import ToImprove from './ToImprove/ToImprove';
import ActionItems from './ActionItems/ActionItems';

export default function RetroBoard() {

  const [wentWell, setWentWell] = useState([
    'Went Well 1', 
    'Went Well 2'
  ])
  const [toImprove, setToImprove] = useState([
    'To Improve 1',
    'To Improve 2'
  ])
  const [actionItems, setActionItems] = useState([
    'Action Items 1',
    'Action Items 2'
  ])

  const [templateName, setTemplateName] = useState('') ;

  return (
    <div className='retroboard-container'>
      <h1 className='retroboard-title'>RETROBOARD</h1>
      <div className='retrotemplate-container'>
        <WentWell 
          item={wentWell}
          setItem={setWentWell}
          templateName={templateName || 'Went Well'}
        />
        <ToImprove 
          item={toImprove}
          setItem={setToImprove}
          templateName={templateName || 'To Improve'}
        />
        <ActionItems 
          item={actionItems}
          setItem={setActionItems}
          templateName={templateName || 'Action Items'}
        />
  
      </div>
    </div>
  )
}


