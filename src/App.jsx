import React, { useState, useTransition } from "react";
import { SlowData } from "./SlowData";
import "./App.css";

function App() {
  const [tab, setTab] = useState("main");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => setTab(nextTab));
  };

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setTab("main")}>Main</button>
        <button onClick={() => selectTab("products")}>Products</button>
        <button onClick={() => setTab("contacts")}>Contacts</button>
      </div>
      <div className="tabs">
        {tab === "main" && <div className="tab">Main Tab</div>}
        {tab === "products" && <SlowData />}
        {tab === "contacts" && <div className="tab">Contacts Tab</div>}
        {isPending && <div className="loader">Loading...</div>}
      </div>
    </div>
  );
}

export default App;
