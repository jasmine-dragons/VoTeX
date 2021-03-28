import { useState } from 'react'
import './App.css';
import LeftPanel from './components/leftPanel.component'
import RightPanel from './components/rightPanel.component'

function App() {
  const [latex, setLatex] = useState("Example: What is $(3\\times 4) \\div (5-3)$?")
  return (
    <div className="container flexbox">
      <LeftPanel setLatex={setLatex} className="flex-left"/>
      <RightPanel latex={latex} className="flex-right"/>
    </div>
  );
}

export default App;
