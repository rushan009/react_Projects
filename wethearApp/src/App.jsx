import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import WeatherMain from './components/WeatherMain'

const App = () => {

  const [weather, setWeather]=useState(null)
  const [loading, setLoading]=useState(true)
  useEffect(() => {

  const getWeather = async () => {
    try {
      const response = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=ceae5e8256414c20aad152837250112&q=Kathmandu"
      );

      const data = await response.json();

      setWeather(data);       // save data
      setLoading(false);      
      // console.log(data);
      

    } catch (error) {
      console.log(error);
    }

  };

  getWeather(); // VERY IMPORTANT

}, []);

  return (
    <div className="min-h-screen w-full bg-[#1f0033]" >
      <Header/>
      <WeatherMain weatherData={weather}/>
    </div>
  )
}

export default App