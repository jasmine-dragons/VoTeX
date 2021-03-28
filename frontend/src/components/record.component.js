import React, { useState } from 'react'
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './common.css'

const Dictaphone = (props) => {
  const [recording, setRecording] = useState(false)
  const { latex, setLatex } = props
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className="dictaphone">
      <div className="button-modal">
        {
          !recording ?
          <button className="record" onClick={SpeechRecognition.startListening}>
            <img style={{height: "10vh"}} src="./icons/record.png" alt="record" onClick={() => setRecording(!recording)}/>
          </button> :
          <button className="record" onClick={SpeechRecognition.stopListening}>
            <img style={{height: "10vh"}} src="./icons/stop.png" alt="record" onClick={() => {
              setRecording(!recording)
              setLatex("$\\int^{1}_{-1} x^2 dx$")
              // const data = {
              //   "text": output
              // }
              // axios.get('http://localhost:5000/', data)
              // .then((res) => {
              //   setLatex("$\\int^{1}_{-1} x^2 dx$")
              // })
              // .catch((error) => {
              //   alert("Error translating. Please try again.")
              // })
            }}/>
          </button>
        }
        <button className="record" onClick={resetTranscript}>
          <img style={{height: "10vh"}} src="./icons/reset.png" alt="stop" onClick={() => {
            setLatex("")
          }}/>
        </button>
        <button className="new-line" onClick={() => setLatex(latex + " $\\int^{1}_{-1} x^2 dx$")}>
          New Line
        </button>
      </div>
      <h3>Live Transcription: </h3>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone
