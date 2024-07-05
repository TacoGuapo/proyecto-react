import { useContext, useEffect } from 'react'
import WeatherLeft from './components/WeatherLeft'
import WeatherRight from './components/WeatherRight'


function App() {
 


  return (
    
    <div className='min-h-screen flex flex-col md:flex-row bg-[#100E1D] text-white h-full w-full'>
        <WeatherLeft/>
        <WeatherRight/>
     
    </div>
 
  )
}


export default App
