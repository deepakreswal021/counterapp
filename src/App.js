import { useState } from 'react';
import './App.css';

function App() {
  const [val,setval] = useState(0);
  const increment = ()=>{
    setval(val+1);
  }
  const decrement = ()=>{
    setval(val-1);
  }
  const reset = ()=>{
    setval(0);
  }
  return (
    <div className="App">
      <h1>CounterApp</h1>
      <button onClick={increment}>+</button>
      <p>{val}</p>
      <button onClick={decrement}>-</button><br/>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
