import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=India&aqi=no`
      )
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main-screen">
      <h2>SR Weather App</h2>
      {weatherData && (
        <div className="result-screen">
          <h2>Location: {weatherData.location.name}</h2>
          <h2>Temperature: {weatherData.current.temp_c}°C</h2>
          <h2>Humidity: {weatherData.current.humidity}%</h2>
        </div>
      )}
    </div>
  );
}

export default App;
