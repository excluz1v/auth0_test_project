import React from "react";
import styles from "./leftPart.module.css";

export default function LeftPart(props) {
  return (
    <div className={styles.leftPart}>
      <header></header>
      {props.children}
    </div>
  );
}
