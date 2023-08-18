import './App.css';
import Card  from './components/Card';
import singers from "./data.js";
import { useState } from 'react';

function App() {
  const [copiedContent, setCopiedContent] = useState([]);

  const handleCopy = () => {
    setCopiedContent(prevContent => [...prevContent, <Card />]);
  }

  return (
    <div className="App">
      <Card singers={singers} />
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
}

export default App;
