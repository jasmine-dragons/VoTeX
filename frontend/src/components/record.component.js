import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './common.css'

const Dictaphone = () => {
  const [recording, setRecording] = useState(false)
  const [output, setOutput] = useState("")
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const handleSubmit = () => {
    
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
              handleSubmit()
            }}/>
          </button>
        }
        <button className="record" onClick={resetTranscript}>
          <img style={{height: "10vh"}} src="./icons/reset.png" alt="stop" />
        </button>
        <button className="new-line" onClick={() => setOutput(transcript + "\\\\")}>
          New Line
        </button>
      </div>
      <h3>Live Transcription: </h3>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone
