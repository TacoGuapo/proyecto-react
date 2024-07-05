import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import ForecastsItem from './ForecastsItem';

function Forecast() {
  const { forecastData, unit } = useContext(DataContext);

  if (!forecastData || !forecastData.list || forecastData.list.length === 0) {
    return <div>Loading...</div>; 
  }

  const list = forecastData.list;

 
  const today = new Date(); 
  today.setHours(0, 0, 0, 0); 

 
  const filteredForecasts = [];
  const addedDays = [];

  list.forEach(item => {
    const forecastDate = new Date(item.dt_txt);
    forecastDate.setHours(0, 0, 0, 0);
    const timeDiff = forecastDate.getTime() - today.getTime(); 
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    if (daysDiff >= 0 && daysDiff < 5 && !addedDays.includes(forecastDate.getDate())) {
      filteredForecasts.push(item);
      addedDays.push(forecastDate.getDate());
    }
  });

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return `${dayName} ${day} ${month}`;
  };

  const forecasts = filteredForecasts.map((item, index) => {
    const nameDay = getFormattedDate(item.dt_txt);
    const dayImg = `${item.weather[0].icon.slice(0, 2)}.png`;
    const dayDes = item.weather[0].description;
    const maxTemp = Math.floor(item.main.temp_max);
    const minTemp = Math.floor(item.main.temp_min);

    return (
      <ForecastsItem
        key={index}
        currentDay={nameDay}
        dayImg={dayImg}
        imgDesc={dayDes}
        maxTemp={maxTemp}
        minTemp={minTemp}
      />
    );
  });

  return (
    <div className='left-[120px] right-[177px] mx-auto py-6 w-full flex justify-center items-center overflow-x-auto space-x-4'>
      {forecasts}
    </div>
  );
}

export default Forecast;











