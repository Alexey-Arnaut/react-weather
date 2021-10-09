import React, { useEffect, useRef } from "react";

const Week = (props) => {
  const weekInner = useRef();

  useEffect(() => {
    const weekInnerCurrent = weekInner.current;

    if (weekInnerCurrent) {
      const scrollingItems = (event) => {
        weekInnerCurrent.scrollTo({
          left: weekInnerCurrent.scrollLeft + event.deltaY * 8,
          behavior: "smooth",
        });
      };
      weekInnerCurrent.addEventListener("wheel", scrollingItems);

      return () =>
        weekInnerCurrent.removeEventListener("wheel", scrollingItems);
    }
  });

  return (
    <div className="week container">
      <div className="week-inner inner" ref={weekInner}>
        {props.cityInfo.daily.map((day, index) => (
          <div className="week__item item" key={index}>
            <p className="week__item-date item__date">
              {new Date(day.dt * 1000).toLocaleString("ru", {
                weekday: "short",
                month: "numeric",
                day: "numeric",
              })}
            </p>
            <img
              className="week__item-img item__img"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="week__item-temps item__temps">
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
