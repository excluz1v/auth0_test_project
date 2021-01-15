import React from "react";
import LeftPart from "../LeftPart/LeftPart";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <LeftPart>
        <section>
          <h1>Добро Пожаловать</h1>
          <h3>Зарегистрируйтесь для доступа в кабинет</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            tempora! Dolorem architecto maiores inventore dolore quibusdam.
            Neque ipsa quam tempora, facere veritatis sint molestias possimus,
            facilis corrupti error laudantium voluptas. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia nulla eos voluptas quasi
            dicta dolore ratione facilis a. Eos ad rem sequi eaque dolore sed
            autem, amet eius quos ab.
          </div>
          <Link to="/registration">
            <button>Зарегистрироваться</button>
          </Link>
        </section>
      </LeftPart>
    </>
  );
}
