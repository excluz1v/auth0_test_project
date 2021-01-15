import React from "react";
import prevArrow from "../../../iconfinder_arrow-back_326518.svg";
import nextArrow from "../../../iconfinder_arrow-forward_326527.svg";

export default function Arrow(props) {
  let img;
  if (props.img === "prevArrow") img = prevArrow;
  else img = nextArrow;
  return (
    <div onClick={() => props.onClick()}>
      <img src={img} />
    </div>
  );
}
