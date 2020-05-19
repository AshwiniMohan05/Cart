import React from "react";
import "./input.m.css";

const AddressRegex = RegExp(/[A-Za-z0-9'.\-\s,]/);
const ZipcodeRegex = RegExp(/^\d{1,5}$/);

export const Input = (props) => {
  const handleFieldChange = (e, key) => {
    const { name, value } = e.target;
    console.log("value", value);
    switch (name) {
      case "lastName":
        value.length < 4
          ? (document.getElementById(name).innerHTML =
              "Should have atleast 4 letters ")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "addressLine1":
      case "addressLine2":
        AddressRegex.test(value)
          ? (document.getElementById(name).innerHTML =
              "Special Characters not allowed")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "city":
      case "country":
      case "state":
        value === ""
          ? (document.getElementById(name).innerHTML = "Mandatory field")
          : (document.getElementById(name).innerHTML = "");
        break;
      case "zipcode":
        ZipcodeRegex.test(value)
          ? (document.getElementById(name).innerHTML =
              "Please revise your five-digit Zip Code.")
          : (document.getElementById(name).innerHTML = "");
        break;
      default:
        break;
    }
    props.handleChange(key, e.target.value, props.fieldName.type);
  };

  return (
    <form>
      {Object.keys(props.fieldName)
        .slice(0, 8)
        .map((key) => {
          return (
            <>
              <input
                type="text"
                defaultValue={props.fieldName[key]}
                placeholder={key}
                onChange={(e) => handleFieldChange(e, key)}
                className="field"
                name={key}
              />
              <div id={key}>{}</div>
            </>
          );
        })}
    </form>
  );
};
