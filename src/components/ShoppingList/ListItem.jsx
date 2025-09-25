import React from "react";
import axios from "axios";

const ListItem = ({ item, getShoppingList }) => {
  const { name, quantity, purchased } = item;
  const deleteListItem = () => {
    axios
      .delete(`/api/shopping/${item.id}`)
      .then(() => getShoppingList())
      .catch((error) => console.error(`Error deleting shopping item`, error));
  };

  const buyListItem = () => {
    axios
      .put(`/api/shopping/${item.id}`, { purchased: true })
      .then(() => getShoppingList())
      .catch((error) =>
        console.error("Error marking item as purchased", error)
      );
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>
        {purchased ? (
          <span className="text-success fw-bold">Purchased</span>
        ) : (
          <>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={buyListItem}
            >Buy</button>
            <button className="btn btn-danger btn-sm" onClick={deleteListItem}
            >Remove</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ListItem;
