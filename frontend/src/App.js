import { useState } from 'react'
import './App.css';
import LeftPanel from './components/leftPanel.component'
import RightPanel from './components/rightPanel.component'
import Navigation from './components/navbar.component'

function App() {
  const [latex, setLatex] = useState("Example: What is $(3\\times 4) \\div (5-3)$?")
  return (
    <div>
      <Navigation />
      <div className="container flexbox">
        <LeftPanel setLatex={setLatex} className="flex-left"/>
        <RightPanel latex={latex} className="flex-right"/>
      </div>
    </div>
  );
}

export default App;
