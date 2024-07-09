// src/App.js
import React from "react";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        User Table
      </h1>
      <Table />
    </div>
  );
};

export default App;
