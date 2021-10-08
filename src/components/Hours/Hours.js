import React from "react";

import "./hours.scss";

const Hours = () => {
  return (
    <div className="hours container">
      <div className="hours-inner">
        <div className="hours__item">
          <p className="hours__item-date">Чт, 02:00</p>
          <img className="hours__item-img" src="img/clouds.svg" alt="" />
          <div className="hours__item-temp">5°</div>
          <div className="hours__item-desc">Облачно</div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
