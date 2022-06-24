import { useState, useEffect } from "react";
import City from "./City";
import WeatherInfo from "./WeatherInfo";

import "../styles/Weather.css"

const Weather = () => {

  useEffect(()=>{
    loadInfo()
  },[])

  const [weather, setWeather] = useState(null);

  async function loadInfo(city= "cusco") {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`
    );
    const data = await res.json();
    setWeather({ ...data });
    
  }

  function handleChangeCity(city) {
    loadInfo(city);
  }

  return(
    <div className="contenedor-principal">
      <City onChangeCity={handleChangeCity} className="formulario"/>
      <WeatherInfo weather={weather}/>
      <div className="contenedor-mapa">
      <iframe
        title="google map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218017.4486315448!2d${weather?.location.lon}4!3d${weather?.location.lat}7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1656099343809!5m2!1ses-419!2spe`}
        width="600" 
        height="450" 
        style={{border:0}} 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </div>
  )
  
};

export default Weather;
