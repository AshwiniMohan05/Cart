import React from "react";

export const Button = (props) => {
    return(
        <React.Fragment>
            <button type="button" className={props.className} onClick={props.onClick}>{props.name}</button>
        </React.Fragment>
    )
}