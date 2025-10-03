import React, {useState} from "react";
import axios from "axios";
import './weather.css';
import FormattedDate from "./FormattedDate";

 export default function Weather(props) {
    const [ready, setReady] = useState(false);
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
       setReady(true);
   }

   if(ready){
    return (
    <div className="weather">
    
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        
      <h1>Pretoria</h1>
      <ul>
        <li><FormattedDate date={date} /></li>
        <li className="text-capitalize"> {description}</li>
      </ul>
      <br/><br/>
      <div className="row mt-3">
        
        <div className="col-6">
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
            <span className="temperature">{temperature}</span> <span className="unit">°C</span>
            </div> 
        <div className="col-6">
            <ul>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
            </ul>
        </div>
      </div>
      </div>
  );  
   }else{
       const apiKey ='a710bd8bd76400c9658ef649d9e81728';
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."
}
}