import './App.css';
import { useState } from "react";
import Card from './components/Card';

function App() {
  const [copiedContent, setCopiedContent] = useState([]);

  const handleCopy = () => {
    setCopiedContent(prevContent => [...prevContent, <Card />]);
  };

  return (
    <div className="App">
      <section className="copied-content">
        {copiedContent.map((jsx, index) => (
          <div key={index}>{jsx}</div>
        ))}
      </section>
      <section className="copy">
        <button onClick={handleCopy}>Copy</button>
      </section>
    </div>
  );
}

export default App;
