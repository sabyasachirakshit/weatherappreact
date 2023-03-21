import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [location, setLocation] = useState("India");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`
      )
      .then((response) => {
        setWeatherData(response.data);
        setWeatherCondition(response.data.current.condition.text);
        setWeatherIcon(response.data.current.condition.icon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div
      className={`main-screen ${
        weatherCondition && weatherCondition.toLowerCase()
      }`}
    >
      <h2>SR Weather App</h2>
      <div>
        <label htmlFor="location-select">
          <h2>Change location:</h2>
        </label>
        <select id="location-select" onChange={handleLocationChange}>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="USA">United States of America</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Nepal">Nepal</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Australia">Australia</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Dubai">Dubai</option>
          <option value="New York">New York</option>
          <option value="Canada">Canada</option>
          <option value="California">California</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="Argentina">Argentina</option>
          <option value="Chile">Chile</option>
          <option value="Egypt">Egypt</option>
          <option value="South Africa">South Africa</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Morocco">Morocco</option>
          <option value="Algeria">Algeria</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Libya">Libya</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Greece">Greece</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Belgium">Belgium</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Austria">Austria</option>
          <option value="Portugal">Portugal</option>
          <option value="Sweden">Sweden</option>
          <option value="Norway">Norway</option>
          <option value="Finland">Finland</option>
          <option value="Denmark">Denmark</option>
          <option value="Poland">Poland</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Hungary">Hungary</option>
          <option value="Romania">Romania</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Serbia">Serbia</option>
          <option value="Croatia">Croatia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Turkey">Turkey</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
        </select>
      </div>
      {weatherData && (
        <div className="result-screen">
          <h2>Location: {weatherData.location.name}</h2>
          <img src={`https://${weatherIcon}`} alt="Weather icon"></img>
          <h2>Temperature: {weatherData.current.temp_c}°C</h2>
          <h2>Humidity: {weatherData.current.humidity}%</h2>
        </div>
      )}
    </div>
  );
}

export default App;
