import './App.css';
import {useState} from 'react';
import Home from "./Pages/Home/Home"
function App() {
  const [sidebar,toggleSidebar] = useState(true);

  const handleToggleSidebar=()=>toggleSidebar(value=>!value)

  return (
    <div className="App">
      <Home handleToggleSidebar={handleToggleSidebar} sidebar={sidebar}/>
    </div>
  );
}

export default App;
