import React, { useState } from 'react'
import axios from 'axios'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './common.css'

const Dictaphone = (props) => {
  const [ recording, setRecording ] = useState(false)
  const { latex, setLatex } = props
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div className="dictaphone">
      <div className="button-menu">
        {
          !recording ?
          <button className="record" onClick={SpeechRecognition.startListening}>
            <img style={{height: "5vh"}} src="./icons/record.png" alt="record" onClick={() => setRecording(!recording)}/>
          </button> :
          <button className="record" onClick={SpeechRecognition.stopListening}>
            <img style={{height: "5vh"}} src="./icons/stop.png" alt="record" onClick={() => {
              setRecording(!recording)
              // setLatex("$\\int^{1}_{-1} x^2 dx$")
              const data = {
                "text": transcript //output
              }
              axios.post('http://localhost:5000/', data)
              .then((res) => {
                setLatex(res.data.latex)
              })
              .catch((error) => {
                alert("Error translating. Please try again.")
              })
            }}/>
          </button>
        }
        <button className="record" onClick={resetTranscript}>
          <img style={{height: "5vh"}} src="./icons/reset.png" alt="stop" onClick={() => {
            setLatex("")
          }}/>
        </button>
        <button className="new-line" >
          New Line
        </button>
      </div>
      {
        recording ?
        <iframe src="https://giphy.com/embed/aw6CWyyLQ8WyRuktxR" width="480" height="160" frameBorder="0" className="giphy" allowFullScreen></iframe> :
        null
      }
      <h3>Live Transcription: </h3>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone
