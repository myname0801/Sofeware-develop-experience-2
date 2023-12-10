import React, { useState } from "react";
import Homemenu from "./Homemenu";
import "./App.css";
import Msearch from "./Search";
import Bag from "./Bag";

function App() {
  const [renderBag, setRenderBag] = useState(true);

  const toggleBag = () => {
    setRenderBag(!renderBag);
  };

  return (
    <div className="App">
      <h1>J.Lee's Cafe</h1>
      <button onClick={toggleBag}>장바구니</button>
      {renderBag && <Bag />}
      <div>
        <Msearch />
      </div>
      <div>
        <Homemenu />
      </div>
    </div>
  );
}

export default App;