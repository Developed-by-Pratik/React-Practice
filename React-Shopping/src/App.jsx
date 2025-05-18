import { useState } from "react";

function App() {
  const [count, setCount] = useState("");
  const [task, setTasks] = useState([]);
  
  const handleListInput = (e) => {
    setCount(e.target.value);
  };
  
  const handleAddItem = () => {
    const newItem = count;
    const newArr = [...task];
    newArr.push(newItem);
    setTasks(newArr);
    setCount("");
  };

  const handleDeleteItem = (index) => {
    const filterArr = task.filter((_,i) => i !== index);
    setTasks(filterArr);
  }

  return (
    <>
      <h1>Shopping List</h1>

      <div className="list">
        <div className="listInput">
          <input type="text" onChange={handleListInput} value={count}/>
          <button onClick={handleAddItem}>Add To List</button>
        </div>
      </div>

      <div className="ListItems">
        
        <h2>Shopping Cart :</h2>
        
        <ul>
          
          {task.map( (item,index) => (
              <li key={index}>
                <span>{item}</span>
                <button onClick={()=>handleDeleteItem(index)}>Delete</button>
              </li>
          ))}

        </ul>

      </div>

    </>
  );
}

export default App;
