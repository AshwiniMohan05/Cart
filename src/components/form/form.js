import React, { useState } from "react";
import { abc } from "../../data";
import { Input } from "../input";
import { ProductDetails } from "../product-details";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./form.m.css";


export const FormDetails = () => {
  const [defaultShippingAddress, setDefaultStateShipping] = useState(
    abc.shippingAddress
  );
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState("");

  console.log("abc", abc);
  const [defaultBillingAddress, setDefaultStateBilling] = useState(
    abc.billingAddress
  );

  const handleChange = (foo, value, type) => {
    type === "billingAddress" &&
      setDefaultStateBilling((prevState) => {
        console.log("prev state", prevState);
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
  };

  return (
    <div>
      <div className="form-wrapper1">
        billingAddress
        <Input address={defaultBillingAddress} handleChange={handleChange} />
        <div>
        Order date
        <DatePicker
          className="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
       
        />
        </div>
        shippingAddress
        <Input address={defaultShippingAddress} handleChange={handleChange} />
        expected delivery
        <DatePicker
          className="date-picker"
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          placeholderText ="Date"
        />
      </div>
      <ProductDetails />
    </div>
  );
};
