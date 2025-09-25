import React from "react";
import ListItem from "./ListItem";
import './ShoppingList.css';

const ShoppingList = ({ shoppingList }) => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary fw-bold">Shopping List</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Buy</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
