import React from "react";

import "./week.scss";

const Week = (props) => {
  return (
    <div className="week container">
      <div className="week-inner">
        {props.cityInfo.daily.map((day, index) => (
          <div className="week__item" key={index}>
            <p className="week__item-date">
              {new Date(day.dt * 1000).toLocaleString("ru", {
                weekday: "short",
                month: "numeric",
                day: "numeric",
              })}
            </p>
            <img
              className="week__item-img"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="week__item-temps">
              <p className="week__item-temp">{Math.round(day.temp.min)}°</p>
              <span>—</span>
              <p className="week__item-temp">{Math.round(day.temp.max)}°</p>
            </div>
            <p className="week__item-desc">{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
