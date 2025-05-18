import { useState } from 'react';
import './App.css';

function App() {

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);

  function handlePlus(count , setCount) {
    if (count == 5) {
      return;
    }
    setCount(count+1)
  }

  function handleMinus(count , setCount) {
    if (count == 0) {
      return;
    }
    setCount(count-1)
  }

  return (
    <div>

      <h1>Count 1 : {count1}</h1>
      <button onClick={()=> handleMinus(count1,setCount1)}>- Minus</button>
      <button onClick={() => handlePlus(count1,setCount1)}>+ Plus</button>
    
      <h1>Count 2 : {count2}</h1>
      <button onClick={()=> handleMinus(count2,setCount2)}>- Minus</button>
      <button onClick={() => handlePlus(count2,setCount2)}>+ Plus</button>
    
      <h1>Count 3 : {count3}</h1>
      <button onClick={()=> handleMinus(count3,setCount3)}>- Minus</button>
      <button onClick={() => handlePlus(count3,setCount3)}>+ Plus</button>
    
    </div>
  )

}

export default App;
