import React, { useEffect, useState, createContext } from 'react';
export const DataContext = createContext();


const defaultCity = "Santiago";

const DataProvider = ({ children }) => {
  const API_KEY = "d9b7402eba8f05e98589e1eaf1ee2b0f"; 
  const [weatherData, setWeatherData] = useState({});
  const [unit, setUnit] = useState('metric');
  const [forecastData, setForecastData] = useState({});
  const [city, setCity] = useState(defaultCity);

  const updateCity = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    const fetchData = async (city, unit) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
      }
    };

    fetchData(city, unit);
  }, [city, unit]);

  useEffect(() => {
    const fetchForeCast = async (city, unit) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`);
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue correcta');
        }
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error al obtener los datos del pronóstico:', error);
      }
    };

    fetchForeCast(city, unit);
  }, [city, unit]);

  const updateWeatherByCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`);
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error al obtener los datos del clima por coordenadas:', error);
    }
  };

  // Función para actualizar los datos del pronóstico por coordenadas
  const updateForecastByCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`);
      if (!response.ok) {
        throw new Error('La respuesta de la red no fue correcta');
      }
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error('Error al obtener los datos del pronóstico por coordenadas:', error);
    }
  };


  return (
    <DataContext.Provider value={{
      updateForecastByCoordinates,
      updateWeatherByCoordinates,
      weatherData,
      forecastData,
      unit,
      setUnit,
      updateCity,
      API_KEY
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;









