import React from "react";
import Functional from "./Functional/Functional";
import UsersInformation from "./UsersInformation/UsersInformation";
import styles from "./cabinet.module.css";

export default function Cabinet() {
  return (
    <div className={styles.wrapper}>
      <UsersInformation />
      <Functional />
    </div>
  );
}
