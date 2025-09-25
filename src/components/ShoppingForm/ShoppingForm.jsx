import axios from "axios";
import { useState } from "react";
import "./ShoppingForm.css";

export default function ShoppingForm({ getShoppingList }) {
  const [newShoppingItem, setNewShoppingItem] = useState("");
  const [newQuantityItem, setNewQuantityItem] = useState("");

  const addShoppingItem = () => {
    axios
      .post("/api/shopping", {
        name: newShoppingItem,
        quantity: newQuantityItem,
      })
      .then((response) => {
        // clear inputs
        setNewShoppingItem("");
        setNewQuantityItem("");

        getShoppingList();
      })
      .catch((err) => {
        alert("Error adding shopping item");
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newShoppingItem && newQuantityItem) {
      addShoppingItem();
    } else {
      alert("Missing a shopping item field!");
    }
  };
  return (
    <div className="container py-4">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4 text-primary">Add an Item:</h2>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="Item"
            className="form-control"
            value={newShoppingItem}
            onChange={(e) => setNewShoppingItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="form-control"
            value={newQuantityItem}
            onChange={(e) => setNewQuantityItem(e.target.value)}
          />
          <button type="submit" className="btn btn-success">Save</button>
        </form>
      </div>
    </div>
  );
}
