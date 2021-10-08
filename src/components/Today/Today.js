import React from "react";

import "./today.scss";

const Today = () => {
  return (
    <div className="today container">
      <div className="today-inner">
        <div className="today__info">
          <p className="today__info-temp">15&deg;</p>
          <p className="today__info-text">Сейчас</p>
        </div>
        <img className="today__icon" src="img/logo.svg" alt=""></img>
      </div>
      <p className="today__city">Город: Москва</p>
    </div>
  );
};

export default Today;
