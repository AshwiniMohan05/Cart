import React from "react";
import "./input.m.css";

export const Input = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
      <form className="form-wrapper">
          <div>
        {Object.keys(props.address).map((key) => {
          return (
            <>
              <input type="text" defaultValue={props.address[key]} placeholder={key} onChange={() => props.handleChange(key, props.address[key],props.address.type)} />
            </>
          );
        })}
        </div>
      </form>
    </React.Fragment>
  );
};
