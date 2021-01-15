import React, { useEffect, useState } from "react";
import RightPart from "../RightPart/RightPart";
import styles from "./registrarion.module.css";
import Error from "../Error/Error";
import {
  changeCategory,
  createUserRequest,
  getIcons,
  getIconswithOffset,
} from "../../requests";
import Input from "./Input/Input";
import Arrow from "./Arrow/Arrow";

export default function Registration(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [validationError, setError] = useState(null);
  let [title, setTitle] = useState("");
  let [type, setType] = useState("");
  let [fullName, setFullName] = useState("");
  let [urls, setUrls] = useState([]);
  let [category, setcategory] = useState(["office"]);
  let [avatar, setAvatar] = useState("");
  let [offset, setOffset] = useState(10);
  let [success, setSuccess] = useState(false);

  //первичная загрузка иконок
  useEffect(() => {
    getIcons("office")
      .then((res) => res.json())
      .then(
        (result) => {
          setUrls(
            result["icons"].map((icon) => {
              return icon.raster_sizes[2].formats[0].preview_url;
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  let clickNextButton = () => {
    getIconswithOffset(category, offset + 10, setOffset, setUrls);
    setAvatar("");
  };
  let clickPrevButton = () => {
    getIconswithOffset(category, offset - 10, setOffset, setUrls);
    setAvatar("");
  };
  let changeEmail = (e) => {
    setError("");
    setEmail(e.target.value);
  };
  let changePassword = (e) => {
    setError("");
    setPassword(e.target.value);
  };
  let changeTitle = (e) => {
    setTitle(e.target.value);
  };
  let changeType = (e) => {
    setType(e.target.value);
  };
  let changeFullName = (e) => {
    setFullName(e.target.value);
  };
  let createUser = (event) => {
    event.preventDefault();
    createUserRequest(
      email,
      password,
      title,
      type,
      fullName,
      avatar,
      setError,
      setSuccess
    );
  };

  //выбор категории
  let pickCategory = (event) => {
    if (avatar)
      document.querySelector(`[src='${avatar}']`).style.border = "none";
    setAvatar("");
    changeCategory(event.target.innerHTML, setUrls);
    setcategory(event.target.innerHTML);
  };
  //выбор аватарки
  let pickAvatar = (event) => {
    if (avatar === "") event.target.style.border = " 1px solid blue";
    else {
      document.querySelector(`[src='${avatar}']`).style.border = "none";
      event.target.style.border = " 1px solid blue";
    }
    setAvatar(event.target.getAttribute("src"));
  };
  return (
    <>
      <RightPart>
        <form className={styles.form} onSubmit={(e) => createUser(e)}>
          <h3>Информация об аккаунте</h3>
          <Input
            placeholder="email*"
            value={email}
            onChange={(e) => changeEmail(e)}
          />
          <Input
            type="password"
            placeholder="Пароль*"
            value={password}
            onChange={(e) => changePassword(e)}
          />
          <Error error={validationError} />
          <h3>Персональная информация</h3>
          <Input
            placeholder="Название фирмы"
            value={title}
            onChange={(e) => changeTitle(e)}
          />
          <Input
            placeholder="Род деятельности"
            value={type}
            onChange={(e) => changeType(e)}
          />
          <Input
            placeholder="ФИО представителя"
            value={fullName}
            onChange={(e) => changeFullName(e)}
          />
          <div className={styles.dropdown}>
            <div>Иконка</div>
            <div className={styles.dropinner}>Категория</div>
            <div className={styles.category}>{category}</div>
            <div className={styles.dropdown_content}>
              <span onClick={(event) => pickCategory(event)}>office</span>
              <span onClick={(event) => pickCategory(event)}>avatar</span>
              <span onClick={(event) => pickCategory(event)}>animal</span>
            </div>
          </div>
          <div className={styles.icons}>
            {urls.map((el, index) => (
              <div key={index}>
                <img
                  src={el}
                  alt="icon"
                  onClick={(event) => pickAvatar(event)}
                />
              </div>
            ))}
            {offset > 10 ? (
              <Arrow onClick={clickPrevButton} img="prevArrow" />
            ) : (
              <div> </div>
            )}
            {<Arrow onClick={clickNextButton} img="nextArrow" />}
          </div>
          <button>Подтвердить</button>
        </form>
        {success ? <div className={styles.success}>Аккаунт создан</div> : null}
      </RightPart>
    </>
  );
}
