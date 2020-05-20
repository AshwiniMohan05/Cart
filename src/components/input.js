import React from "react";
import "./input.m.css";

const AddressRegex = RegExp(/[A-Za-z0-9'.\-\s,]/);
const ZipcodeRegex = RegExp(/^\d{1,5}$/);

export const Input = (props) => {
  const handleFieldChange = (e, key) => {
    const { name, value } = e.target;
    const updateDom = document.getElementById(name);
    switch (name) {
      case "lastName":
        value.length < 4
          ? updateDom.innerHTML =
              "Should have atleast 4 letters "
          : updateDom.innerHTML = "";
        break;
      case "addressLine2":
        AddressRegex.test(value)
          ? (updateDom.innerHTML =
              "Special Characters not allowed")
          : (updateDom.innerHTML = "");
        break;
      case "state":
        value === ""
          ? (updateDom.innerHTML = "Mandatory field")
          : (updateDom.innerHTML = "");
        break;
      case "zipcode":
        ZipcodeRegex.test(value)
          ? (updateDom.innerHTML =
              "Please revise your five-digit Zip Code.")
          : (updateDom.innerHTML = "");
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
