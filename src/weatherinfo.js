import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";

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
                         <WeatherIcon code={props.icon} size={64} height={64} />
                        <WeatherTemperature celsius={props.temperature} />               
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