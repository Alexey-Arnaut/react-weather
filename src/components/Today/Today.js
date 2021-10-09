import React from "react";

import "./today.scss";

const Today = (props) => {
  return (
    <div className="today container">
      <div className="today-inner">
        <div className="today__info">
          <p className="today__info-text">Сейчас</p>
          <p className="today__info-temp">
            {Math.floor(props.cityInfo.hourly[0].temp)}&deg;
          </p>
          <div className="today__info-desc">
            {props.cityInfo.hourly[0].weather[0].description}
          </div>
        </div>
        <img
          className="today__icon"
          src={`https://openweathermap.org/img/wn/${props.cityInfo.hourly[0].weather[0].icon}@2x.png`}
          alt=""
        ></img>
      </div>
      <p className="today__city">Город: {props.coords.name}</p>
    </div>
  );
};

export default Today;
