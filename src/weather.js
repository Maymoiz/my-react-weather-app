import React from "react";
import './weather.css';

export default function Weather() {
  return (
    <div className="weather">
    
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        
      <h1>Pretoria</h1>
      <ul>
        <li>Thursday 13:09</li>
        <li>Condition: Sunny</li>
      </ul>
      <br/><br/>
      <div className="row mt-3">
        <div className="clearfix weather-temperature">
        <div className="col-6">
            <img src="https://th.bing.com/th/id/OBWA.v6-106-png-d000?w=72&h=72&c=6&o=6&dpr=1.3&pid=Weather" alt="Sunny"/>
            <span className="temperature">25 </span> <span className="unit">°C</span>
            </div>
            </div>
        <div className="col-6">
            <ul>
                <li>Humidity: 39%</li>
                <li>Wind: 5 km/h</li>
                <li>Precipitation: 11%</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
