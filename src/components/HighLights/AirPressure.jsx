import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

const AirPressure = () => {
  const { weatherData } = useContext(DataContext);

  if (!weatherData || !weatherData.main || !weatherData.main.pressure) {
    return <div>Loading...</div>;   
  }

  const pressure = weatherData.main.pressure;

  return (
    <div className='text-center sm:w-[360px]'>
      <h3 className='font-medium text-[#E7E7EB]'>Air Pressure</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>
          {pressure} <span className='text-[36px] font-medium'>hPa</span>
        </h4>
      </div>
    </div>
  );
};

export default AirPressure;
