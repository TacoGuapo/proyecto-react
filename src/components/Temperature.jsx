import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

const Temperature = ({ unit }) => {
  const { weatherData } = useContext(DataContext);

  if (!weatherData || !weatherData.main || !weatherData.main.temp) {
    return <div>Loading...</div>; // Manejo de carga o error si los datos no están disponibles
  }

  const { temp } = weatherData.main;

  const convertToCelsius = (temp) => {
    return Math.round(temp - 273.15); // Convertir de Kelvin a Celsius
  };

  const convertToFahrenheit = (temp) => {
    return Math.round((temp - 273.15) * 9/5 + 32); // Convertir de Kelvin a Fahrenheit
  };

  const temperature = unit === 'metric' ? convertToCelsius(temp) : convertToFahrenheit(temp);

  return (
    <div className='text-[#E7E7EB] text-[64px] font-bold'>
      {temperature} <span className='text-[36px] font-medium'>{unit === 'metric' ? '°C' : '°F'}</span>
    </div>
  );
};

export default Temperature;