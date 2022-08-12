import "./App.css";
import React from "react";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bolbasuer</td>
            <td>Poison,grass</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
