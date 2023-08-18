import './App.css';
import Card  from './components/Card';
import singers from "./data.js";
import { useEffect } from 'react';
 
function App() {
  const newArr = singers;
  //empty array means that the useEffect function and all the logic inside will only run once, on first render
  useEffect(()=>{
    for(const singer of newArr){
      singer.date = "2023"
    }
  },[])

  return (
    <div className="App">
      {newArr.map((singer, index)=> (
        <Card 
        singer={singer}
        index={index}
        />
      ))}
      
      {/* <Card 
        singer={{name:'bob',song:'bob',album:'ob'}}
      /> */}
    </div>
  );
}

export default App;
