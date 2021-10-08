import React, { useState } from "react";

import "./weather-info.scss";

const WeatherInfo = () => {
  const [items, setItems] = useState([
    { imgUrl: "img/temp.svg", title: "Ощущается как:", info: "20°" },
    { imgUrl: "img/clouds.svg", title: "Облачность:", info: "80%" },
    { imgUrl: "img/wet.svg", title: "Влажность:", info: "95%" },
    { imgUrl: "img/wind.svg", title: "Ветер:", info: "10м/с" },
  ]);

  return (
    <div className="weather-info container">
      <div className="weather-info-inner">
        <img className="weather__img" src="img/clouds.webp"></img>
        {items.map((item) => (
          <div className="item">
            <div className="item-inner">
              <div className="item__icon">
                <img src={item.imgUrl} alt=""></img>
              </div>
              <p className="item__title">{item.title}</p>
            </div>
            <p className="item__info">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherInfo;
