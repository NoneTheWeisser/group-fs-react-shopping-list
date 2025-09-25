import React from "react";
import ListItem from "./ListItem";
import "./ShoppingList.css";
import axios from "axios";



const ShoppingList = ({ shoppingList, getShoppingList, clearShoppingList }) => {
    const resetPurchases = () => {
    axios
      .put("/api/shopping/reset") 
      .then(() => getShoppingList()) 
      .catch((err) => console.error("Error resetting purchases", err));
  };
  return (
    <div className="container py-4">
      <div className="card p-4 shadow-sm">
      <h2 className="text-center mb-4 text-primary fw-bold">Shopping List</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              getShoppingList={getShoppingList}
            />
          ))}
        </tbody>
      </table>
      <div className="text-center mb-4">
        <button id="table-btn" className="btn btn-danger clear-btn mb-3" onClick={clearShoppingList}>
          CLEAR ALL
        </button>
      <button id="table-btn" className="btn btn-warning mb-3" onClick={resetPurchases}>Reset</button>
      </div>
      </div>
    </div>
  );
};

export default ShoppingList;
