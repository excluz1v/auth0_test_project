import React from "react";
import { Link } from "react-router-dom";
import LeftPart from "../LeftPart/LeftPart";
import styles from "./AlreadyExist.module.css";

export default function AlreadyExist() {
  return (
    <>
      <LeftPart>
        <section className={styles.exist}>
          <h1>Регистрация</h1>
          <h3>Получи доступ ко множеству приемуществ</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            tempora! Dolorem architecto maiores inventore dolore quibusdam.
            Neque ipsa quam tempora, facere veritatis sint molestias possimus,
            facilis corrupti error laudantium voluptas. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia nulla eos voluptas quasi
            dicta dolore ratione facilis a. Eos ad rem sequi eaque dolore sed
            autem, amet eius quos ab.
          </div>
          <Link to="/">
            <button>Уже есть аккаунт?</button>
          </Link>
        </section>
      </LeftPart>
    </>
  );
}
