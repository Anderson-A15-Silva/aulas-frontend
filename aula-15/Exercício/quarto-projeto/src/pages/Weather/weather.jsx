import axios from "axios";
import { useState } from "react";
import './weather.css';
import Form from "../../form/form";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "5473f0985d7251c91c787464552359b4";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    const response = await axios.get(url);
    setWeatherData(response.data);
    console.log(url);
    setCity("");
  } catch (error) {
    alert(error);
  }
  };

  return (
    <>
    <div>
        
    </div>
          <Form handleSubmit={handleSubmit} setCity={setCity} city={city}/>

      {weatherData !== null && (
        <div>
          <h6>Tempo agora em: </h6>
          <p>{weatherData.name}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            width="50"
          />
          <ul type="none">
          <li> <p className="top">Temperatura atual: {Math.floor(weatherData.main.temp)}º</p> </li>
          <li> <p  className="top">Clima: {weatherData.weather[0].description}</p> </li>
          <li> <p className="top">Sensação térmica: {Math.floor(weatherData.main.feels_like)}º</p> </li>
          <li> <p className="top">Temperatura mínima: {Math.floor(weatherData.main.temp_min)}º</p> </li>
          <li> <p className="top">Temperatura máxima: {Math.floor(weatherData.main.temp_max)}º</p> </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Weather;