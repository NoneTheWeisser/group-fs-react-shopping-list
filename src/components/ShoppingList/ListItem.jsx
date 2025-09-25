import React from "react";
import axios from "axios";

const ListItem = ({ item, getShoppingList }) => {
  const { name, quantity } = item;
    const deleteListItem = () => {
    axios
      .delete(`/api/shopping/${item.id}`)
      .then(() => getShoppingList())
      .catch((err) => console.error(`Error deleting shopping item`, err));
    };

  return (
    <tr>
      <td>{name}</td>
    
      <td>{quantity}</td>
      <td>
        <button className="btn btn-success btn-sm">Buy</button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteListItem}>Remove</button>
      </td>
    </tr>
  );
};

export default ListItem;

