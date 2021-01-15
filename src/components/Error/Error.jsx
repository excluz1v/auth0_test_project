import React from "react";

export default function Error(props) {
  let { error } = props;
  if (error) {
    error = JSON.parse(error);
  }
  return <>{error ? <div className="error">{error.message}</div> : ""}</>;
}
