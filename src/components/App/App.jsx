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


      <main>
          <ShoppingList shoppingList={shoppingList} />
        <p>Under Construction...</p>
      </main>

      <h2>Add an Item</h2>
      <form>
        <label>Item: </label>
        <input></input>
        <label>Quantity: </label>
        <input></input>
        <button>Save</button>
      </form>
      {/* Shopping Form */}
     
      {/* Shopping List */}
        <h2>Shopping List</h2>
        <div>
            <button>Reset</button>
            <button>Clear</button>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {shoppingList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td><button>Buy</button></td>
                <td><button>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  );
}

export default App;
