import React from "react";

export default function Input(props) {
  return (
    <input
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder}
      value={props.fullName}
      onChange={(e) => props.onChange(e)}
    />
  );
}
