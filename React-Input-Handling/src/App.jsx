import { useState } from "react"

function App() {

  const [content, setContent] = useState("");
  
  function handleChange(e) {
    const value = e.target.value;
    setContent(value);
    console.log(value);
  }

  function handleClick() {
    alert(content);
    setContent("");
  }

  return <>
    <h1>Shopping List</h1>
    <div>
      <input type="text" value={content} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  </>
}

export default App
