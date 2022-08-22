import React from 'react';
import './search.scss'

import { useContext } from 'react';
import { useState } from 'react';
import { RequestLongLat } from '../../Services/api';
import { WeatherContext } from '../../weatherContext';

const Search = () => {

    const [inputCity, setInputCity] = useState('');
    const { setWeatherData } = useContext(WeatherContext);


    async function getInfo() {
        if(inputCity.length <= 0){
            return;
        }
        
        const response = await RequestLongLat(inputCity);

        setWeatherData(response);
    }

    return (
        <div className="search-wrapper">
            <div className="cover-image">
                <img src="images/cover.png" alt="sun with cloud as cover" />
            </div>
            <div className="search">
                <input placeholder='Search desired city' onChange={ (e) => setInputCity(e.target.value)}></input>
                <button onClick={getInfo} className='search-button'>Search</button>
            </div>
        </div>
    )
}

export default Search;