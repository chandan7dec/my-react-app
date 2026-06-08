import React, { useState, useEffect } from 'react';
import './WeatherInfo.css';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // const response = await fetch('http://localhost:5271/api/weatherforecast');
        const response = await fetch('http://192.168.29.60/api/weatherforecast');
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-info">
      <h2>Weather Forecast</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (C)</th>
            <th>Temperature (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.temperatureC}</td>
              <td>{item.temperatureF}</td>
              <td>{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfo;