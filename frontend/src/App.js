import './App.css';
import LeftPanel from './components/leftPanel.component'
import RightPanel from './components/rightPanel.component'

function App() {
  return (
    <div className="container flexbox">
      <LeftPanel className="flex-left"/>
      <RightPanel className="flex-right"/>
    </div>
  );
}

export default App;
