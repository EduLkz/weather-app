import { useContext } from 'react';
import { ConvertUnixDate } from '../../Services/convertUnixDate';
import { GetWeatherBackground } from '../../Services/getWeatherBackground';
import { WeatherContext } from '../../weatherContext';
import './weather.scss';

const Weather = () =>{
    const { weatherData } = useContext(WeatherContext);
    const {daily, current} = weatherData;

    const dailyInfo = daily[0];
    const currentInfo = current;
    
    const imgSrc = `http://openweathermap.org/img/wn/${currentInfo.weather[0].icon}@2x.png`
    const weatherImage = GetWeatherBackground(currentInfo.weather[0].id);

    function Week(weekDay){
        if(weekDay !== dailyInfo){
            return <HandleWeek {...weekDay} key={weekDay.dt}/>
        }
    }

    const tempColor = (temp) =>{
        let color = '#347ed3';
        if(temp < 13){
            color = '#50f790';
        }else if(temp > 17){
            color = '#e63030';
        }

        return color
    }

    return(
        <div className={`weather-wrapper`} style={{background: `url(${(weatherImage)})`}}>
            <div className="current-weather">
                <h1 className="current-weather-temp" style={{color: tempColor(currentInfo.temp)}}>
                    {currentInfo.temp}ºC
                    </h1>
                <img src={imgSrc} alt="weather icon" className="current-weather-icon" />
                <p className="current-date">{ConvertUnixDate(currentInfo.dt).toLocaleDateString('pr-BR')}</p>
                <p className="min-max">
                    min: <span className='min-temp'>{dailyInfo.temp.min}ºC</span>&emsp; 
                    max: <span className='max-temp'>{dailyInfo.temp.max}ºC</span>
                </p>
            </div>
            <div className='week'>
                {
                    daily.map((day) => { 
                        return Week(day) 
                    })
                }   
            </div>
        </div>
    )
}

const HandleWeek = ({ temp, weather, dt }) =>{
    return(
        <div className='week-day'>
            <p>{ConvertUnixDate(dt).toLocaleDateString('pr-BR')}</p>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='week day weather icon'/>
            <div className='weather'>
                <p>{weather[0].main}</p>
            </div>
            <p>
                <span className='min-temp'>{temp.min}ºC</span>/<span className='max-temp'>{temp.max}ºC</span>
            </p>
        </div>
    )
}

export { Weather };
