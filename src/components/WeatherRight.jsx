// WeatherRight.js
import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';
import Forecast from './Forecast';
import WindStatus from './HighLights/WindStatus';
import Humidity from './HighLights/Humidity';
import Visibility from './HighLights/Visibility';
import AirPressure from './HighLights/AirPressure';

function WeatherRight() {
  const { unit, setUnit } = useContext(DataContext);

  const changeToCelsius = () => {
    if (unit !== 'metric') {
      setUnit('metric');
    }
  };

  const changeToFahrenheit = () => {
    if (unit !== 'imperial') {
      setUnit('imperial');
    }
  };

  return (
    <div className='w-[100%] flex flex-col p-8 pb-0 h-auto max-w-[820px] mx-auto bg-[#100E1D] font-raleway'>
      <div className='h-auto flex gap-7 justify-end custom-md:justify-center'>
        <button
          className={`text-[#100E1D] bg-[#E7E7EB] font-[700] font-sans text-[18px] h-[40px] w-[40px] flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#E7E7EB] hover:text-[#070707] active:bg-[#b5b5bb] transition duration-300 ${unit === 'metric' ? 'bg-[#6E707A] text-white' : ''}`}
          onClick={changeToCelsius}
        >
          ºC
        </button>
        <button
          className={`text-[#100E1D] bg-[#E7E7EB] font-[700] font-sans text-[18px] h-[40px] w-[40px] flex justify-center items-center cursor-pointer rounded-full pr-1 hover:bg-[#E7E7EB] hover:text-[#070707] active:bg-[#b5b5bb] transition duration-300 ${unit === 'imperial' ? 'bg-[#6E707A] text-white' : ''}`}
          onClick={changeToFahrenheit}
        >
          ºF
        </button>
      </div>
      <div className=' justify-center gap-7 sm:max-w-[780px] sm:flex-col-2  flex-col flex pt-8 pb-5'>
        <div className='gap-9 items-center'>
          <Forecast />
        </div>
      </div>
      <div className='flex flex-col gap-5 pt-4 pb-5'>
        <h2 className="font-[700] text-[24px]">Today's Hightlights</h2>
        <div className='flex flex-wrap gap-7 justify-center'>
          <div className='bg-[rgb(30,33,58)] flex flex-col items-center justify-between w-[328px] h-[204px] py-5 pb-8 custom-sm:w-[100%]'>
            <WindStatus />
          </div>
          <div className='bg-[rgb(30,33,58)] flex flex-col items-center justify-between w-[328px] h-[204px] py-5 pb-8 custom-sm:w-[100%]'>
            <Humidity />
          </div>
          <div className='bg-[rgb(30,33,58)] flex flex-col items-center justify-between w-[328px] h-[159px] py-5 pb-8 custom-sm:w-[100%]'>
            <Visibility />
          </div>
          <div className='bg-[rgb(30,33,58)] flex flex-col items-center justify-between w-[328px] h-[159px] py-5 pb-8 custom-sm:w-[100%]'>
            <AirPressure />
          </div>
        </div>
        <footer className='w-full flex justify-center items-center text-[#88869D] font-[500] box-border'>
          <span>
            Created by <span className='font-extrabold underline'>Francis Sotero</span>
          </span>
          <span> - Funval</span>
        </footer>
      </div>
    </div>
  );
}

export default WeatherRight;

