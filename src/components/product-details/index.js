import React, { useState } from "react";
import { abc, ProductsData } from "../../data";
import { Button } from "../button";
import "./product-details.m.css";

export class ProductDetails extends React.Component {
  state = {
    rows: abc.productsDetails,
  };
  handleAddRow = () => {
    const item = {};
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    const { rows } = this.state;
    return (
      <div className="product-details">
        <div className="headings">
          {ProductsData.map((title, index) => {
            return <div key={index}>{title.name}</div>;
          })}
        </div>
        {rows.map((item, idx) => {
          console.log("item", item.productId);
          return (
            <div key={idx} className="items">
              <input type="text" defaultValue={item.productId} />
              <input type="text" defaultValue={item.productName}  className="product-name"/>
              <input type="text" value={item.qty} className="quantity" />
              <input type="text" value={item.unitPrice} className="unit-price"/>
              <input type="number" defaultValue={item.unitPrice * item.qty} className="total" />
              <textarea></textarea>
              <Button
                className="deleteButton"
                id="delete"
                onClick={this.handleRemoveSpecificRow(idx)}
                name="DELETE"
              />
            </div>
          );
        })}
        <Button className="addButton" onClick={this.handleAddRow} name="ADD PRODUCT" />
        <br></br>
      </div>
    );
  }
}
