import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

const Humidity = () => {
  const { weatherData } = useContext(DataContext);

  if (!weatherData || !weatherData.main) {
    return <div>Loading...</div>; // Manejo de carga o error si los datos no están disponibles
  }

  const { main } = weatherData;

  return (
    <div className='w-[250px] h-[180px] text-center font-raleway'>
      <h3 className='font-bold text-[#E7E7EB]'>Humidity</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>
          {main.humidity}
          <span className='text-[36px] font-raleway'>%</span>
        </h4>
      </div>

      <div className='flex justify-between mb-1'>
        <span className='text-[#A09FB1] text-[12px]'>0</span>
        <span className='text-[#A09FB1] text-[12px]'>50</span>
        <span className='text-[#A09FB1] text-[12px]'>100</span>
      </div>

      <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div className='bg-[#FFEC65] h-2.5 rounded-full' style={{ width: `${main.humidity}%` }}></div>
      </div>
    </div>
  );
};

export default Humidity;