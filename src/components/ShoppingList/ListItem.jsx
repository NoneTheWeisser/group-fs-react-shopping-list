import React from "react";

const ListItem = ({ item }) => {
  return (
    <div className="card shadow-sm border-0 mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="fw-semibold text-primary mb-0">{item.name}</h5>
        <span className="badge bg-secondary px-3 py-2 fs-6">Qty: {item.quantity}</span>
      </div>
    </div>
  );
};

export default ListItem;
