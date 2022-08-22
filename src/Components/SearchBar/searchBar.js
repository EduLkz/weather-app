import React from 'react';
import './searchBar.scss';

import { useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import { RequestLongLat } from '../../Services/api';

const SearchBar = () => {

    const [inputCity, setInputCity] = useState('');
    const { weatherData, setWeatherData, setHasError, setErrorMessage } = useContext(AppContext);

    async function getInfo() {
        if(inputCity.length <= 0){
            setHasError(true);
            setErrorMessage('Input cannot be empty');
            return;
        }

        const response = await RequestLongLat(inputCity);

        if(response !== null){
            setWeatherData(response);
        }else{
            setErrorMessage('Couldn\'t get the information because an internal error');
        }
    }

    return(
        <div className="search-bar">
            <div className="current">
                <p>
                    { weatherData.timezone.replace('_', ' ') }
                </p>
            </div>
            <div className="search">
                <input placeholder='Type city' onChange={ (e) => setInputCity(e.target.value)}></input>
                <button onClick={getInfo} className='search-button'>Search</button>

            </div>
            
            
        </div>
    )
}

export default SearchBar;