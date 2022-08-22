import { useState } from 'react';
import { WeatherContext } from '../../weatherContext';
import Search from '../Search/search';
import SearchBar from '../SearchBar/searchBar';
import { Weather } from '../Weather/weather';
import './App.css';

function App() {

  const[weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <WeatherContext.Provider value ={{weatherData, setWeatherData}}>
        {(weatherData === null) ?
          <Search/>
          :
          <>
            <SearchBar/>
            <Weather/>
          </>
        }
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
