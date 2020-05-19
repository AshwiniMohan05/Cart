import React from "react";
import "./input.m.css";

export const Input = (props) => {
  console.log(props, "props");
  const poo = (e, key) => {
    props.handleChange(key, e.target.value, props.address.type);
  };

  return (
    <React.Fragment>
      <form className="form-wrapper2">
          {Object.keys(props.address).slice(0,8).map((key) => {
            return (
              <>
                <input
                  type="text"
                  defaultValue={props.address[key]}
                  placeholder={key}
                  onChange={(e) => poo(e, key)}
                  className="field"
                />
              </>
            );
          })}
      </form>
    </React.Fragment>
  );
};
