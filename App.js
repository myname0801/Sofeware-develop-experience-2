import React, { useState } from "react";
import Homemenu from "./Homemenu";
import "./App.css";
import Msearch from "./Search";
import Bag from "./Bag";
import History from "./History";

function App() {
  const [renderBag, setRenderBag] = useState(false);
  const [renderHistory, setRenderHistory] = useState(false);

  const toggleBag = () => {
    setRenderBag(!renderBag);
  };

  const toggleHistory = () => {
    setRenderHistory(!renderHistory);
  };

  return (
    <div className="App">
      <h1>J.Lee's Cafe</h1>
      <button onClick={toggleHistory}>주문기록</button> <nbsp/>
      <button onClick={toggleBag}>장바구니</button>
      {renderHistory && <History/>}
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