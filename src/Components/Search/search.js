import React from 'react';
import './search.scss';

import { useContext, useState } from 'react';
import { AppContext } from '../../appContext';
import { RequestLongLat } from '../../Services/api';

const Search = () => {


    const [inputCity, setInputCity] = useState('');
    const { setWeatherData, setHasError, setErrorMessage } = useContext(AppContext);

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