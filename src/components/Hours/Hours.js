import React, { useEffect, useRef } from "react";

const Hours = (props) => {
  const hoursInner = useRef();

  useEffect(() => {
    const hoursInnerCurrent = hoursInner.current;

    if (hoursInnerCurrent) {
      const scrollingItems = (event) => {
        hoursInnerCurrent.scrollTo({
          left: hoursInnerCurrent.scrollLeft + event.deltaY * 8,
          behavior: "smooth",
        });
      };
      hoursInnerCurrent.addEventListener("wheel", scrollingItems);

      return () =>
        hoursInnerCurrent.removeEventListener("wheel", scrollingItems);
    }
  });

  return (
    <div className="hours container">
      <div className="hours-inner inner" ref={hoursInner}>
        {props.cityInfo.hourly.map((hour, index) => (
          <div className="hours__item item" key={index}>
            <p className="hours__item-date item__date">
              {new Date(hour.dt * 1000).toLocaleString("ru", {
                weekday: "short",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
            <img
              className="hours__item-img item__img"
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="hours__item-temp item__temp">{Math.round(hour.temp)}°</div>
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
