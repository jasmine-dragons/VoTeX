import React, { useState } from 'react'
import Latex from 'react-latex'
import './common.css'

const RightPanel = (props) => {
  const [showLatex, setShowLatex] = useState(false)
  const [showCompiled, setShowCompiled] = useState(true)
  const [content, setContent] = useState("What is $(3\\times 4) \\div (5-3)$") // have to escape \'s here

  return (
    <div className="right-panel">
      <div className="right-panel-toggle">
        <button
          className={showLatex ? "active latex" : "inactive latex"}
          onClick={() => {
            setShowLatex(true)
            setShowCompiled(false)
          }}
        >
        LaTeX Code</button>
        <button
          className={showCompiled ? "active compiled" : "inactive compiled"}
          onClick={() => {
            setShowCompiled(true)
            setShowLatex(false)
          }}
        >
        Compiled File</button>
      </div>

      <br />
      {
        showLatex ?
        <p> {content} </p> :
        <p> <Latex>{content}</Latex> </p>
      }
    </div>

  )
}

export default RightPanel
