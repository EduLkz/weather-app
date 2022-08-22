import React from 'react';
import './searchBar.scss'

import { useContext } from 'react';
import { useState } from 'react';
import { RequestLongLat } from '../../Services/api';
import { WeatherContext } from '../../weatherContext';

const SearchBar = () => {

    const [inputCity, setInputCity] = useState('');
    const { weatherData, setWeatherData } = useContext(WeatherContext);

    async function getInfo() {
        if(inputCity.length <= 0){
            return;
        }

        const response = await RequestLongLat(inputCity);

        setWeatherData(response);
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