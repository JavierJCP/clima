import "../styles/WeatherInfo.css"

export default function WeatherInfo({ weather }) {
  return (
    <div className="contenedor-info">
      {
        weather ? (
        <>
        <div className="main-info">
          <img src={weather?.current.condition.icon} alt="weather-icon" height="100"/>
          <p>{weather?.current.condition.text}</p>
          <h1>{weather?.current.temp_c}ºC</h1>
        </div>
        <div className="ciudad-info">
          <h3>{weather?.location.country} </h3>
          <h4>{weather?.location.name}</h4>
        </div>
        </>
        ) : 
        (
          <h1>Put a city name</h1>
        )
      }
    </div>
  );
}
