import './App.css';
import { useState } from 'react';
import { HandleDaily } from '../Weather/weather';
import weather from '../../weather.json'


function App() {

  const [inputCity, setInputCity] = useState('Barueri');
  //const [long, setLong] = useState();
  //const [lat, setLat] = useState();
  const [hasDaily, setHasDaily] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState();

  // const WEATHER_API_KEY = '3806d0fd899a5f0c359f8beb2a2da40a';
  // const POSITIONSTACK_API_KEY = '0d173db0ce7b0ce2d3381658ff97508e';

  const RequestLongLat = async() => {
    // let url = `http://api.positionstack.com/v1/forward?access_key=${POSITIONSTACK_API_KEY}&query=${inputCity}&units=metric& output = json`;
    // const response = await fetch(url).then((r) => {return r.json()});
    // const data = response.data[0];
    // setLong(data.longitude);
    // setLat(data.latitude);

    RequestWeather();
  }

  const RequestWeather = async() => {
    // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=${WEATHER_API_KEY}`;
    // console.log(url);
    // const response = await fetch(url).then((r) => {return r.json()});
    const response = weather;
    console.log(response);
    if(response){
      setWeatherInfo(response);
      setHasDaily(true);
    }
    

  }

  return (
    <div className="App">
      {hasDaily ? (
        <>
          <p>{inputCity}</p>
          <HandleDaily {...weatherInfo}></HandleDaily>
          
        </>
      ) : (
        <>
          <input placeholder='Digite cidade' onChange={ (e) => setInputCity(e.target.value)}></input>
          <button onClick={RequestLongLat}>SEARCH</button>

          <p>{inputCity}</p>
        </>
      )}
    </div>
  );
}

export default App;
