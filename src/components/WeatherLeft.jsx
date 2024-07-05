import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataProvider';
import Modal from './Modal';
import bg1 from '../assets/images/cloud-background.svg';

const WeatherLeft = () => {
  const { weatherData, unit, updateCity, API_KEY, updateWeatherByCoordinates } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          updateWeatherByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
        }
      );
    } else {
      console.error("Geolocalización no es soportada por este navegador.");
    }
  };


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const { main, weather, name } = weatherData;

  return (
    <div className='w-[459px] h-[auto] font-raleway sm:max-w-[780px]'>
      <div className='flex flex-col items-center h-screen w-full bg-[#1E213A] relative custom-md:w-auto'>
        <div className='py-[40px] flex justify-between w-full p-6'>
          <button className='bg-[#6E707A] rounded px-4 py-2' onClick={openModal}>Search for Places</button>
          <button className='text-white bg-[#6E707A] rounded-full h-[40px] w-[40px] items-center justify-center flex' onClick={handleLocationClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z"/></svg>
          </button>
        </div>

        <div className='w-full h-[1px] bg-cover bg-no-repeat bg-center p-[150px] items-center justify-center' style={{ backgroundImage: `url(${bg1})` }}>
          <img src={`${weather[0].icon.slice(0, 2)}.png`} alt="IconWeather" className='object-contain w-40 h-40' />
        </div>

        <div className='bg-transparent relative font-raleway flex justify-center items-center h-[150px] w-full'>
          <h2 className='text-[9rem] font-[500] font-raleway'>{Math.floor(main.temp)}
            <span className="text-[#88869D] text-[3rem] font-sans font-[400]">º{unit === 'imperial' ? 'F' : 'C'}</span></h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[2.2rem] font-[600] text-[#88869D] pt-6'>{weather[0].main}</h2>
        </div>

        <footer className=' flex flex-col gap-7 justify-center items-center text-[#88869D] pt-20 sm:max-w-[780px]'>
          <span className='flex gap-3 md:w-auto md:h-auto md sm:max-w-[780px]'>Today<span>.</span>
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </span>
          <span className="flex gap-[0.5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-400Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            {name}
          </span>
        </footer>

        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default WeatherLeft;










