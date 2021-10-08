import React from "react";

import './week.scss'

const Week = () => {
  return (
    <div className="week container">
      <div className="week-inner">
        <div className="week__item">
          <p className="week__item-date">четверг</p>
          <img className="week__item-img" src="img/clouds.svg" alt="" />
          <div className="week__item-temps">
            <p className="week__item-temp">10°</p>
            <span>—</span>
            <p className="week__item-temp">20°</p>
          </div>
          <p className="week__item-desc">Облачно</p>
        </div>
      </div>
    </div>
  );
};

export default Week;
