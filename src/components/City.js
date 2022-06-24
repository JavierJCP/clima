import { useState } from "react"
import "../styles/City.css"

export default function City ({onChangeCity}) {

  const [city, setCity] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    onChangeCity(city)
    setCity("")
  }

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <input className="input-city" placeholder="Into a city name:" type="text" onChange={(e) => setCity(e.target.value)} value={city}/>
        <button className="btn-city">Get Weather</button>
      </form>
    </div>
  )
}