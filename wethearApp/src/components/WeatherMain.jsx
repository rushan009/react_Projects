import React from 'react'
import WeatherCard from './WeatherCard'
import WeatherCard2 from './WeatherCard2'

const WeatherMain = ({weatherData}) => {
    console.log(weatherData);
    console.log(weatherData?.current?.temp_c);
    
  return (
    <div className='h-screen flex justify-around'>
        <WeatherCard/>
        <WeatherCard2 humidity={weatherData?.current?.humidity}/>
    </div>
  )
}

export default WeatherMain