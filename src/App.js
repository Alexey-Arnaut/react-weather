import Today from "./components/Today/Today";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Week from "./components/Week/Week";
import Hours from "./components/Hours/Hours";

import "./app.scss";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-img" src="img/logo.svg" alt="" />
          <p className="header__logo-title">React weather</p>
        </div>
        <div className="header__search">
          <input
            className="header__search-field"
            type="text"
            placeholder="Поиск..."
          />
          <button className="header__search-button">Найти</button>
        </div>
      </header>
      <main className="main">
        <div className="main__wrapper">
          <Today />
          <WeatherInfo />
        </div>
        <div className="main__inner">
          <button className="main__button">На 8 дней</button>
          <Week />
          <Hours />
        </div>
      </main>
    </div>
  );
}

export default App;
