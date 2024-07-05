import React, { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'

export default function ForecastsItem({ currentDay, dayImg, imgDesc, maxTemp, minTemp }) {
  const { unit } = useContext(DataContext)

  return (
    <div className='bg-[#1E213A] w-[130px] h-[180px] p-4 text-center'>
      <p className='text-[#E7E7EB] text-[16px] font-medium'>{currentDay}</p>
      <div className='py-4'>
        <img src={dayImg} alt={imgDesc}
          className='left-0 right-0 mx-auto relative h-[63px]' />
      </div>
      <div className='flex justify-between'>
        <p className='text-[#E7E7EB] text-[16px]'>{maxTemp}<span>°{unit === 'imperial' ? 'F' : 'C'}</span></p>
        <p className='text-[#A09FB1] text-[16px]'>{minTemp}<span>°{unit === 'imperial' ? 'F' : 'C'}</span></p>
      </div>
    </div>
  )
}