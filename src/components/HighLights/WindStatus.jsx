import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

// Tabla de direcciones del viento
const directionTable = [
  { abbrev: 'N', degrees: 0 },
  { abbrev: 'NNE', degrees: 22.5 },
  { abbrev: 'NE', degrees: 45 },
  { abbrev: 'ENE', degrees: 67.5 },
  { abbrev: 'E', degrees: 90 },
  { abbrev: 'ESE', degrees: 112.5 },
  { abbrev: 'SE', degrees: 135 },
  { abbrev: 'SSE', degrees: 157.5 },
  { abbrev: 'S', degrees: 180 },
  { abbrev: 'SSW', degrees: 202.5 },
  { abbrev: 'SW', degrees: 225 },
  { abbrev: 'WSW', degrees: 247.5 },
  { abbrev: 'W', degrees: 270 },
  { abbrev: 'WNW', degrees: 292.5 },
  { abbrev: 'NW', degrees: 315 },
  { abbrev: 'NNW', degrees: 337.5 },
];

// Función para obtener la abreviatura de la dirección del viento
const getDirectionAbbreviation = (degrees) => {
  degrees = degrees % 360;
  if (degrees < 0) degrees += 360;

  let abbreviation = 'N';

  directionTable.forEach((current, i) => {
    const next = directionTable[(i + 1) % directionTable.length];
    if (degrees >= current.degrees && degrees < next.degrees) {
      abbreviation = current.abbrev;
    }
  });

  return abbreviation;
};

const WindStatus = () => {
  const { weatherData, unit } = useContext(DataContext);

  // Verificar si hay datos de clima y de viento disponibles
  if (!weatherData || !weatherData.wind) {
    return <div>Loading...</div>; // Puedes mostrar un spinner u otro indicador de carga
  }

  const { wind } = weatherData;
  const windSpeed = Math.round(wind.speed); // Redondear la velocidad del viento

  const directionAbbrev = getDirectionAbbreviation(wind.deg);

  return (
    <div className='text-center'>
      <h3 className='font-medium text-[#E7E7EB]'>Wind Status</h3>
      <div>
        <h4 className='text-[64px] text-[#E7E7EB] font-bold'>
          {windSpeed}
          <span className='text-[36px] font-medium'>
            {unit === 'imperial' ? ' mph' : ' m/s'}
          </span>
        </h4>
      </div>
      <div className='flex justify-center'>
        <div className='h-[34px] w-[34px] bg-[#585676] rounded-full mx-3 flex items-center justify-center'>
        <svg style={{ transform: `rotate(${wind.deg}deg)` }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </div>
        <span className='text-[15px] font-medium text-[#E7E7EB] pt-1'>
          {directionAbbrev}
        </span>
      </div>
    </div>
  );
};

export default WindStatus;

