import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataProvider';

const CitySelectorModal = ({ closeModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { updateCity } = useContext(DataContext);

  const handleSearch = () => {
    updateCity(searchTerm);
    closeModal();
  };

  return (
    <div className="font-raleway absolute bg-[#1E213A] h-auto w-[459px] mt-[-2px] left-0 right-0 mx-auto my-auto  sm:h-screen sm:mx-0 sm:my-0 z-20 sm:mt-[-16px] sm:pt-3">
      <div className='w-full text-right mb-5'>
        <button
          className='p-2 text-gray-500 text-[25px] h-40* font-raleway'
          onClick={closeModal}
        ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
      </div>
      <div className='w-[400px] h-[60px] mx-auto flex flex-row justify-between items-center gap-2 '>
        <div className='w-[268px] border-[#E7E7EB] border-solid border-2 flex rounded-sm  h-[40px] items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          <input
            type='text'
            placeholder='location'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='h-full bg-[#1E213A] w-full border-transparent text-white rounded-sm'
          />
        </div>
        <button onClick={handleSearch} className='bg-[#3C47E9] text-[#E7E7EB] w-[90px] h-[40px] rounded-sm'>Search</button>
      </div>
      <div className='block w-full p-8 mt-12'>
        <button onClick={() => { updateCity('London'); closeModal(); }} className='block w-full text-left text-[#E7E7EB] text-[18px] py-4 mb-10'>London</button>
        <button onClick={() => { updateCity('Barcelona'); closeModal(); }} className='block w-full text-left text-[#E7E7EB] text-[18px] py-4 mb-10'>Barcelona</button>
        <button onClick={() => { updateCity('New York'); closeModal(); }} className='block w-full text-left text-[#E7E7EB] text-[18px] py-4'>New York</button>
      </div>
    </div>
  );
};

export default CitySelectorModal;

