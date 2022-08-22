import { useState } from 'react';
import { AppContext } from '../../appContext';
import Search from '../Search/search';
import SearchBar from '../SearchBar/searchBar';
import SearchError from '../SearchError/searchError';
import { Weather } from '../Weather/weather';
import './App.css';

function App() {

  const[weatherData, setWeatherData] = useState(null);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contextValue = {
    weatherData, setWeatherData,
    hasError, setHasError,
    errorMessage, setErrorMessage
  }

  return (
    <div className="App">
      <AppContext.Provider value ={contextValue}>
      <SearchError trigger={hasError} setTrigger={setHasError} message={errorMessage}/>
        {(weatherData === null) ?
          <Search/>
          :
          <>
            <SearchBar/>
            <Weather/>
          </>
        }
      </AppContext.Provider>
    </div>
  );
}

export default App;
