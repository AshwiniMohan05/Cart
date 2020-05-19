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
  const [finalJson, setFinalJson] = useState(abc);

  const [defaultBillingAddress, setDefaultStateBilling] = useState(
    abc.billingAddress
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
      setFinalJson({
        billingAddress: defaultBillingAddress,
        shippingAddress: defaultShippingAddress,
      })
  };

  const poo = () => {
    console.log(finalJson);
  };


  return (
    <div>
      <div className="form-wrapper1">
        <div>
        <p>Billing Address</p>
        <Input address={defaultBillingAddress} handleChange={handleChange} />
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
        <Input address={defaultShippingAddress} handleChange={handleChange} />
        <div className="date">
       <p>Expected Delivery</p> 
        <DatePicker
          className="date-picker"
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          placeholderText ="Date"
        />
        </div>
      </div>
      </div>
      <button onClick={poo} >hey </button>
      <ProductDetails />
    </div>
  );
};
