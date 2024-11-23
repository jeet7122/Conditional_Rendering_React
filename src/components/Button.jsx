import React from "react";

function Button(props) {
  return (
    <button type={props.type} value={props.value}>
      Login
    </button>
  );
}

export default Button;
