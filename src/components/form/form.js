import React, { useState } from "react";
import { cartDetails } from "../../data";
import { Input } from "../input";
import { ProductDetails } from "../product-details";
import DatePicker from "react-datepicker";
import { Button } from "../button";
import "react-datepicker/dist/react-datepicker.css";
import "./form.m.css";



export const FormDetails = () => {
  const [defaultShippingAddress, setDefaultStateShipping] = useState(
    cartDetails.shippingAddress
  );
  const [startDate, setStartDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState("");
  const [finalJson, setFinalJson] = useState(cartDetails);
  const [productsTitle, setProductsTitle] = useState(cartDetails.productsTitle);

  const [defaultBillingAddress, setDefaultStateBilling] = useState(
    cartDetails.billingAddress
  );

  const handleChange = (foo, value, type) => {
    type === "billingAddress" &&
      setDefaultStateBilling((prevState) => {
        let defaultBillingAddress = Object.assign({}, prevState);
        defaultBillingAddress[foo] = value;
        return defaultBillingAddress;
      });
    type === "shippingAddress" &&
      setDefaultStateShipping((prevState) => {
        let defaultBillingAddress = Object.assign({}, prevState);
        defaultBillingAddress[foo] = value;
        return defaultBillingAddress;
      });
    setProductsTitle((prevState) => {
      let productDetails = Object.assign({}, prevState);
      productDetails[foo] = value;
      return productDetails;
    });
    setFinalJson({
      billingAddress: defaultBillingAddress,
      shippingAddress: defaultShippingAddress,
      productsTitle: productsTitle,
    });
  };

  const saveJson = () => {
    console.log(finalJson);
  };

  return (
    <div>
      <div className="form-wrapper">
        <div>
          <p>Billing Address</p>
          <Input
            fieldName={defaultBillingAddress}
            handleChange={handleChange}
          />
          <div className="date">
            <p>Order date</p>
            <DatePicker
              className="date-picker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div>
          <p>Shipping Address</p>
          <Input
            fieldName={defaultShippingAddress}
            handleChange={handleChange}
          />
          <div className="date">
            <p>Expected Delivery</p>
            <DatePicker
              className="date-picker"
              selected={expiryDate}
              onChange={(date) => setExpiryDate(date)}
              placeholderText="Date"
            />
          </div>
        </div>
      </div>

      <ProductDetails />
      <Button onClick={saveJson} name="SAVE" className="save" />
    </div>
  );
};
