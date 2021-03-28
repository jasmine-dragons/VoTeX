import React from 'react'
import Dictaphone from './record.component.js'

const LeftPanel = (props) => {
  return (
    <div className="left-panel">
      <h1>Get Started</h1>
      <p>Say something like "Integral of x squared dx from negative one to one."</p>
      <Dictaphone setLatex={props.setLatex}/>
    </div>
  )
};

export default LeftPanel;
