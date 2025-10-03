import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="weatherinfo" >
            <h1>{props.city}</h1>
                  <ul>
                    <li><FormattedDate date={props.date} /></li>
                    <li className="text-capitalize"> {props.description}</li>
                  </ul>
                  <br/><br/>
                  <div className="row mt-3">
                    
                    <div className="col-6">
                        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description}/>
                        <span className="temperature">{props.temperature}</span> <span className="unit">°C</span>
                        </div> 
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.humidity}%</li>
                            <li>Wind: {props.wind} km/h</li>
                        </ul>
                    </div>
                  </div>
    </div>
    );
}