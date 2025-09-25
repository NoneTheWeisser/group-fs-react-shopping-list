import React from "react";
import ListItem from "./ListItem";

const ShoppingList = ({ shoppingList }) => {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary fw-bold"> Shopping List</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {shoppingList.map((item) => (
          <div className="col" key={item.id}>
            <ListItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
