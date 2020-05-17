import React from "react";

export const Button = (props) => {
    return(
        <React.Fragment>
            <button type="button" >{props.name}</button>
        </React.Fragment>
    )
}