import React from "react";

import "./hours.scss";

const Hours = (props) => {
  console.log(props);
  return (
    <div className="hours container">
      <div className="hours-inner">
        {props.cityInfo.hourly.map((hour, index) => (
          <div className="hours__item" key={index}>
            <p className="hours__item-date">
              {new Date(hour.dt * 1000).toLocaleString("ru", {
                weekday: "short",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
            <img
              className="hours__item-img"
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="hours__item-temp">{Math.round(hour.temp)}°</div>
            <div className="hours__item-desc">
              {hour.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hours;
