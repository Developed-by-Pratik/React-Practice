import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  function handleIncrement() {
    if (value === 10) return;
    setValue(value + 1);
  }

  function handleDecrement() {
    if (value === 0) return;
    setValue(value - 1);
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h2>Counter</h2>
      <div>{value}</div>
      <button onClick={handleIncrement}>+ Increment</button>
      <button onClick={handleDecrement}>- Decrement</button>
    </div>
  );
}

export default Counter;
