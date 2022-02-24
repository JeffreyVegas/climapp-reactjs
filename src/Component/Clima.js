import React from "react";
import { useState } from "react";
import "./Clima.css";

function Clima({ data }) {
  const { name: city, sys: country, main: clima, wind } = data;

  const becomeKeltoCel = (k) => {
    return k - 273.15;
  };

  return (
    <>
      <div className="clima__title">
        {country.country}, {city}
      </div>
      <div className="clima__temp">
        <span>temp:</span>
        <span>{parseInt(becomeKeltoCel(clima.temp))}°</span>
      </div>
      <div className="clima__other-info">
        <p>
          temp max: <span>{parseInt(becomeKeltoCel(clima.temp_max))}°</span>
        </p>
      </div>
      <div className="clima__other-info">
        <p>
          temp min: <span>{parseInt(becomeKeltoCel(clima.temp_min))}°</span>
        </p>
      </div>
      <div className="clima__other-info">
        <p>
          humedad: <span>{clima.humidity}%</span>
        </p>
      </div>
      <div className="clima__other-info">
        <p>
          viento: <span>{wind.speed} km/h</span>
        </p>
      </div>
    </>
  );
}

export default Clima;
