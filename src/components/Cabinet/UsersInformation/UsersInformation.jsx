import React, { useEffect, useState } from "react";
import styles from "./UsersInformation.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser } from "../../../requests";
import defaultAvatar from "../../../iconfinder_ninja-simple_479476.svg";
import { updateUser } from "../../../requests";

export default function UsersInformation() {
  const { user, logout } = useAuth0();
  const [userInfo, setUserInfo] = useState({
    title: "",
    type: "",
    fullName: "",
    avatar: defaultAvatar,
  });
  const [succes, setSucces] = useState("");
  const [errors, setErrors] = useState("");
  useEffect(() => {
    getUser(user.sub, setUserInfo);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.inner}>
      <div className={styles.avatar}>
        <img
          src={userInfo.avatar ? userInfo.avatar : defaultAvatar}
          alt="avatar"
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.wrapper__metadata}>
          <div>Название организации</div>
          <div>
            <input
              type="text"
              value={userInfo.title ? userInfo.title : "не указан"}
              onChange={handleChange}
              name="title"
            ></input>
          </div>
          <div>Тип организации</div>
          <div>
            <input
              type="text"
              value={userInfo.type ? userInfo.type : "не указан"}
              onChange={handleChange}
              name="type"
            ></input>
          </div>
          <div>ФИО пользователя</div>
          <div>
            <input
              type="text"
              value={userInfo.fullName ? userInfo.fullName : "не указан"}
              onChange={handleChange}
              name="fullName"
            ></input>
          </div>
        </div>
      </div>
      {succes ? (
        <div className="animate__animated animate__flash">{succes}</div>
      ) : null}
      {errors ? <div>{errors}</div> : null}
      <button
        className={styles.save}
        onClick={() => {
          updateUser(user.sub, userInfo, setSucces, setErrors);
        }}
      >
        сохранить
      </button>
      <button onClick={() => logout()}>выйти</button>
    </div>
  );
}
