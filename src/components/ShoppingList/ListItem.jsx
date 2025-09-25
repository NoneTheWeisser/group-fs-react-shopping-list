import React from "react";

const ListItem = ({ item }) => {
  const { name, quantity } = item;

  return (
    <tr>
      <td>{name}</td>
    
      <td>{quantity}</td>
      <td>
        <button className="btn btn-success btn-sm">Buy</button>
      </td>
      <td>
        <button className="btn btn-danger btn-sm">Remove</button>
      </td>
    </tr>
  );
};

export default ListItem;

