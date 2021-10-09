import React from "react";

import "./weather-info.scss";

const WeatherInfo = (props) => {
  let items = [
    {
      imgUrl: "img/temp.svg",
      title: "Ощущается как:",
      info: `${Math.round(props.cityInfo.hourly[0].feels_like)}°`,
    },
    {
      imgUrl: "img/clouds.svg",
      title: "Облачность:",
      info: `${props.cityInfo.hourly[0].clouds}%`,
    },
    {
      imgUrl: "img/wet.svg",
      title: "Влажность:",
      info: `${props.cityInfo.hourly[0].humidity}%`,
    },
    {
      imgUrl: "img/wind.svg",
      title: "Ветер:",
      info: `${Math.round(props.cityInfo.hourly[0].wind_speed)}м/с`,
    },
  ];

  return (
    <div className="weather-info container">
      <div className="weather-info-inner">
        <img className="weather__img" src="img/clouds.webp"></img>
        {items.map((item, index) => (
          <div className="weather__item" key={index}>
            <div className="weather__item-inner">
              <div className="weather__item-icon">
                <img src={item.imgUrl} alt=""></img>
              </div>
              <p className="weather__item-title">{item.title}</p>
            </div>
            <p className="weather__item-info">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;