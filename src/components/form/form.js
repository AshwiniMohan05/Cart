import React, { useState, useRef } from "react";
import { abc } from "../../data";
import get from "lodash/get";
import { Input } from "../input";
import { Button } from "../button";
import "./form.m.css";

export const FormDetails = () => {
//   let defaultState = abc;

  const [ defaultShippingAddress, setDefaultStateShipping ] = useState(abc.shippingAddress)
  const [ defaultBillingAddress, setDefaultStateBilling ] = useState(abc.billingAddress)

  const handleChange = (foo, value, type) => {
    setDefaultStateBilling(prevState => {
        let defaultBillingAddress = Object.assign({}, prevState.defaultBillingAddress);  // creating copy of state variable jasper
        defaultBillingAddress[foo] = value;  
        console.log("default state",  defaultBillingAddress);
        console.log("prev-------", prevState)                   // update the name property, assign a new value                 
        return { defaultBillingAddress };                                 // return new object jasper object
      })  
//   type === "shippingAddress" && setDefaultStateShipping({ ...defaultShippingAddress, [foo] : value } );
//   type === "billingAddress" && setDefaultStateBilling({ ...defaultBillingAddress, [foo] : value } )

  };

  
  return (
    <div>
      <div className="form-wrapper">
        <Input
          address={defaultBillingAddress}
          handleChange={handleChange}
        >
          Billing Details{" "}
        </Input>
        <Input address={defaultShippingAddress}>Shipping Details </Input>
      </div>
      {/* <div className="cart">
        {console.log("product title", defaultState.productsTitle)}
        {defaultState.productsTitle.map((item, index) => {
          const abc = get(item, ["productsData", "0", "data"]);
          return (
            <div key={index}>
              {item.name}

              <div>
                <input type="text" value={abc} />
              </div>
            </div>
          );
        })}
        <Button name="ADD PRODUCT" />
      </div> */}
    </div>
  );
};
