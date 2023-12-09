import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddInventory from "./components/AddInventory";
import AllInventory from "./components/Inventory/AllInventory";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/add" element={<AddInventory />} exact/>
          <Route path="/" element={<AllInventory />} exact/>

        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
