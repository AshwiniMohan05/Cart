import React, { useState } from "react";
import { abc, ProductsData } from "../../data";
import { Button } from "../button";
import "./product-details.m.css";

export const ProductDetails = () => {

  const [state1, updateRow] = useState(abc.productsDetails);

  const handleAddRow = () => {
    updateRow([...state1, {}]);
  };

  const handleRemoveSpecificRow = (idx) => () => {
    const rows = [...state1];
    rows.splice(idx, 1);
    updateRow(rows);
  };

  return (
    <div className="product-details">
      <div className="headings">
        {ProductsData.map((title, index) => {
          return <div key={index}>{title.name}</div>;
        })}
      </div>
      {state1.map((item, idx) => {
        return (
          <div key={idx} className="items">
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
              onClick={handleRemoveSpecificRow(idx)}
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
