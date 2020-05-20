import React, { useState } from "react";
import { cartDetails, ProductsData } from "../../data";
import { Button } from "../button";
import "./product-details.css";

export const ProductDetails = () => {

  const [row, updateRow] = useState(cartDetails.productsDetails);
  const handleAddRow = () => {
    updateRow([...row, {}]);
  };

  const handleDeleteRow = (index) => () => {
    const rows = [...row];
    rows.splice(index, 1);
    updateRow(rows);
  };

  return (
    <div className="product-details">
      <div className="headings">
        {ProductsData.map((title, index) => {
          return <div key={index}>{title.name}</div>;
        })}
      </div>
      {row.map((item, key) => {
        return (
          <div key={key} className="items">
            <input type="text" defaultValue={item.productId} />
            <input
              type="text"
              defaultValue={item.productName}
              className="product-name"
            />
            <input type="text" value={item.qty} className="quantity" />
            <input type="text" value={item.unitPrice} className="unit-price" />
            <input
              type="number"
              defaultValue={item.unitPrice * item.qty}
              className="total"
            />
            <textarea></textarea>
            <Button
              className="deleteButton"
              id="delete"
              onClick={handleDeleteRow(key)}
              name="DELETE"
            />
          </div>
        );
      })}
      <Button className="addButton" onClick={handleAddRow} name="ADD PRODUCT" />
      <br></br>
    </div>
  );
};
