import React, { useState, useEffect } from 'react'
import Latex from 'react-latex'
import './common.css'

const RightPanel = (props) => {
  const { latex } = props
  const [showLatex, setShowLatex] = useState(false)
  const [showCompiled, setShowCompiled] = useState(true)
  const [content, setContent] = useState(latex) // have to escape \'s here

  useEffect(() => {
    let temp = "$"
    for(let i = 0; i < latex.length; i++){
      if(latex[i] === "\\"){
        temp += "\\"
      }
      else{
        temp += latex[i]
      }
    }
    temp += "$"
    setContent(temp)
  }, [latex])

  return (
    <div className="right-panel">
      <div>
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
        <textarea
          type="text"
          value={content}
          className="latex-editor"
          onChange={(e) => setContent(e.target.value)}
        /> : content === "" ?
        <p> Start talking to generate LaTeX! </p> :
        <p> <Latex>{content}</Latex> </p>
      }

      <button className="download"><img style={{height: "5vh"}} src='/icons/download.png' alt='Download'/></button> 
    </div>
  )
}

export default RightPanel
