import React from "react";
import LoginButton from "../../LoginButton";
import RightPart from "../RightPart/RightPart";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <RightPart>
        <h3>Или войдите в ваш аккаунт</h3>
        <form className={styles.form}>
          {/* <input type="text" placeholder="email" />
          <input type="password" placeholder="Пароль" /> */}
          <LoginButton />
        </form>
      </RightPart>
    </>
  );
}
