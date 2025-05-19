import React from "react";

function ListData({ data }) {
  const dataArr = Object.entries(data);

  return (
    <div>
      <h2>Submitted Data:</h2>
      <ul>
        {dataArr.map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
          </ul>
        <button onClick={() => window.location.reload()}>Go Back</button>
    </div>
  );
}

export default ListData;
