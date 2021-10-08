import React, { useState } from "react";

import axios from "axios";

import Today from "./components/Today/Today";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Week from "./components/Week/Week";
import Hours from "./components/Hours/Hours";

import "./app.scss";

function App() {
  const [value, setValue] = useState("");
  const [coords, setCoords] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const [active, setActive] = useState(false);

  const getCity = async () => {
    try {
      const getCoordsRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&lang=ru&appid=130e08eebdc4d5e263118a6f823cbd81`
      );
      const lat = getCoordsRes.data.coord.lat;
      const lon = getCoordsRes.data.coord.lon;

      const cityInfoRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=130e08eebdc4d5e263118a6f823cbd81`
      );

      setCoords(getCoordsRes.data);
      setCityInfo(cityInfoRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-img" src="img/logo.svg" alt="" />
          <p className="header__logo-title">React weather</p>
        </div>
        <div className="header__search">
          <input
            onChange={onChangeInput}
            value={value}
            className="header__search-field"
            type="text"
            placeholder="Поиск..."
          />
          <button onClick={getCity} className="header__search-button">
            Найти
          </button>
        </div>
      </header>
      {cityInfo.length !== 0 && (
        <main className="main">
          <div className="main__wrapper">
            <Today coords={coords} cityInfo={cityInfo} />
            <WeatherInfo cityInfo={cityInfo} />
          </div>
          <div className="main__inner">
            <button onClick={() => setActive(!active)} className="main__button">
              {active ? "По часам" : "На 8 дней"}
            </button>
            {active ? <Hours cityInfo={cityInfo} /> : <Week cityInfo={cityInfo} />}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

{
  /*  */
}
