import './weather.scss';
import clearsky from '../../assets/background-images/clear.jpg';
import cloud from '../../assets/background-images/cloud.jpg';
import fog from '../../assets/background-images/fog.jpg';
import thunder from '../../assets/background-images/thunder.jpg';
import snow from '../../assets/background-images/snow.jpg';
import rain from '../../assets/background-images/rain.jpg';
//import { useEffect } from "react";

const HandleDaily = ({daily, current}) =>{
    const dailyInfo = daily[0];
    const currentInfo = current;
    const imgSrc = `http://openweathermap.org/img/wn/${currentInfo.weather[0].icon}@2x.png`
    const backgroundImage = GetBackgroundImage(currentInfo.weather[0].id);

    function ConvertDate(unix){
        const date = new Date(unix*1000);
        return date;
    }

    function Week(weekDay){
        if(weekDay !== dailyInfo){
            return <HandleWeek {...weekDay}/>
        }
    }

    function GetBackgroundImage(weatherId){
        if(weatherId < 300){
            return thunder;
        }
        if(weatherId < 600){
            return rain;
        }
        if(weatherId < 700){
            return snow;
        }
        if(weatherId < 800){
            return fog;
        }
        if(weatherId === 800){
            return clearsky;
        }
        if(weatherId > 800){
            return cloud;
        }
    }
    

    return(
        <div style={{backgroundImage: backgroundImage}}>
            <h1>{currentInfo.temp}ºC</h1>
            <img src={imgSrc}/><br/>
            <div className='weather'>{currentInfo.weather[0].main}</div>
            <p>{ConvertDate(currentInfo.dt).toLocaleDateString('pr-BR')}</p>
            <p>min: <span className='min-temp'>{dailyInfo.temp.min}ºC</span>&emsp; 
            max: <span className='max-temp'>{dailyInfo.temp.max}ºC</span></p>
            <div className='week'>
                {daily.map((day) => { return Week(day) })}
            </div>
        </div>
    )
}

const HandleWeek = ({ temp, weather, dt }) =>{
    function ConvertDate(unix){
        const date = new Date(unix*1000);
        return date;
    }
    return(
        <div className='week-day'>
            {ConvertDate(dt).toLocaleDateString('pr-BR')}
            <p><img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/></p>
            <p><div className='weather'>{weather[0].main}</div></p>
            <p><span className='min-temp'>{temp.min}ºC</span>/<span className='max-temp'>{temp.max}ºC</span></p>
        </div>
    )
}

export { HandleDaily };