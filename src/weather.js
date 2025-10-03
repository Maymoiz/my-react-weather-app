import React, {useState} from "react";
import axios from "axios";
import './weather.css';
import WeatherInfo from "./weatherinfo";

 export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [city, setCity] = useState(props.city);
    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);
    const [date, setDate] = useState(null);
    
   function handleResponse(response){
    console.log(response.data);
       setTemperature(Math.round(response.data.main.temp));
       setDescription(response.data.weather[0].description);
       setHumidity(response.data.main.humidity);
       setWind(response.data.wind.speed);
       setIcon(response.data.weather[0].icon);
       setDate(new Date(response.data.dt * 1000));
       setCity(response.data.name);
       setReady(true);
   }
   function search(){
    const apiKey ='a710bd8bd76400c9658ef649d9e81728';
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)

   }
 function handleSubmit(event){
     event.preventDefault();
     search();
    }
    function handleCityChange(event){
        setCity(event.target.value);
        
         }
   if(ready){
    return (
    <div className="weather">
    
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                </div>
                <div className="col-3">
                    <input type="submit"  className="btn btn-primary w-100" value="Search" />
                </div>
            </div>
        </form>
        <div>
            <h1>{city}</h1>
        </div>

      <WeatherInfo temperature={temperature} description={description} humidity={humidity} wind={wind} icon={icon} date={date} />
      </div>
  );  
   }else{
       search();
    return "Loading..."
}
}