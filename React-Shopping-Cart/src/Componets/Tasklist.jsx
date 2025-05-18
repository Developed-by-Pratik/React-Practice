import { useState } from "react";
import { useEffect } from "react";

function Tasklist({ inputValue }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (inputValue) {
      setTasks((prevTasks) => [...prevTasks, inputValue]);
    }
  }, [inputValue]);

  const handleRemove = (taskToRemove) => {
    console.log(`${taskToRemove} : removed !!`);
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="cart">
      <h2>Your Cart :</h2>
      {tasks.length === 0 ? (
        <li>No items yet</li>
      ) : (
        tasks.map((task, key) => (
          <li key={key}>
            <span>{task}</span>
            <button onClick={() => handleRemove(task)}>Remove</button>
          </li>
        ))
      )}
    </div>
  );
}

export default Tasklist;
