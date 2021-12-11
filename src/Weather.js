import React,{useState} from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

import "./Weather.css";

export default function Weather(props) {
    const [weatherData,setWeatherData]=useState({ready:false});
    const [city,setCity]=useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready:true,
            coordinates: response.data.coord,
            temperature:response.data.main.temp,
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            humidity:response.data.main.humidity,
            wind:response.data.wind.speed,
            date:new Date(response.data.dt*1000),
        city:response.data.name
        });
   
        
    }

    function search(){
        const apiKey = "44755b27aa477a02b4ded4f2c0886965"; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
        axios.get(apiUrl).then(handleResponse); 

    }


    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event){
        setCity(event.target.value);

    }



    if (weatherData.ready){
        return (
     <div className="Weather">
       <form onSubmit={handleSubmit}>
       <div className="row">
              <div className="col-9">
       <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on"  onChange={handleCityChange}/>
           </div>
              <div className="col-3">
                   <input type="submit" value="search" className="btn btn-primary w100"/>
                       </div>
                       </div>
       </form>
       <Weatherinfo data={weatherData}/>
                  <WeatherForecast coordinates={weatherData.coordinates} />

  
</div>
    );

    }
    else{
        search();
       
        return "Loading...";

    }

 

   
  }

