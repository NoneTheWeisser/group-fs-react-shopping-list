import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

import "./App.css";

function App() {
  // useState
  const [shoppingList, setShoppingList] = useState([]);

  // useEffect
  useEffect(() => {
    getShoppingList();
  }, []);

  // getShoppingList

  const getShoppingList = () => {
    axios
      .get("/api/shopping")
      .then((response) => {
        setShoppingList(response.data);
      })
      .catch((err) => {
        alert("Error getting shopping list");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />

    
        {shoppingList && <ShoppingList shoppingList={shoppingList} />}
        <p>Under Construction...</p>
    
      {/* Shopping Form */}

      <h2>Add an Item</h2>
      <form>
        <label>Item: </label>
        <input></input>
        <label>Quantity: </label>
        <input></input>
        <button>Save</button>
      </form>

      {/* Shopping List */}
    </div>
  );
}

export default App;
