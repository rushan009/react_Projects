import React from 'react'
import WeatherCard from './WeatherCard'
import WeatherCard2 from './WeatherCard2'

const WeatherMain = () => {
  return (
    <div className='h-screen flex justify-around'>
        <WeatherCard/>
        <WeatherCard2/>
    </div>
  )
}

export default WeatherMain