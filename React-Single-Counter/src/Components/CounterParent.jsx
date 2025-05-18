import { useState } from "react";
import Counter from "./Counter";

function CounterParent() {
  const [counters, setCounters] = useState([]);

  function handleNewCounter() {
    const newId = counters.length;
    setCounters([...counters, newId]);
  }

  return (
    <div>
    
      <h1>Counter Application</h1>
      <button onClick={handleNewCounter}>Add Counter</button>

      <div>
        {counters.map((id) => (
          <Counter key={id} />
        ))}
      </div>

    </div>
  );
}

export default CounterParent;
