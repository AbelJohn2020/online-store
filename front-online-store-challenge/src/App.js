import React from "react";
import { getProductsData } from "./components/utils/utils";

function App() {
  console.log(getProductsData());
  return (
    <div className="App">
      <h1>Online store Challenge</h1>
    </div>
  );
}

export default App;
