import React, { useState } from 'react'
import FetchData from '../api/FetchData';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11 - country Flag with isoCode
function countryToFlag(isoCode: any) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char: any) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

export default function Forecast() {
  const [query, setQuery] = useState<string>("")
  const [weather, setWeather] = useState<any>("")

  const search = async (e: any) => {
    if (e.key === "Enter") {
      const res: any = await FetchData(query.toLowerCase());
      console.log(res.data);
      setWeather(res.data);
      setQuery('')
    }
  }

  return (
    <div className="main-container">
      <div>
        <label className="text-center" >Search
        <input id="search" name="search" type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        </label>
      </div>
      {
        weather.main && (
          <div className="city">
            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country} {countryToFlag(weather.sys.country)}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}<sup>°C</sup>
            </div>
            <div className="info">
              <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
              <p style={{ color: "black" }}>{weather.weather[0].description}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}
