import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

const Visibility = () => {
  const { weatherData } = useContext(DataContext);

  if (!weatherData || !weatherData.visibility) {
    return <div>Loading...</div>;
  }


  const visibilityInMiles = (weatherData.visibility / 1609.34).toFixed(1).replace('.', ',');

  return (
    <div className=' text-center sm:w-[360px]'>
      <h3 className='font-medium text-[#E7E7EB]'>Visibility</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>
          {visibilityInMiles}{' '}
          <span className='text-[36px] font-medium'>miles</span>
        </h4>
      </div>
    </div>
  );
};

export default Visibility;