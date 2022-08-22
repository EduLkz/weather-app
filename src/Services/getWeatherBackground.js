import clearsky from '../assets/background-images/clear.jpg';
import cloud from '../assets/background-images/cloud.jpg';
import fog from '../assets/background-images/fog.jpg';
import thunder from '../assets/background-images/thunder.jpg';
import snow from '../assets/background-images/snow.jpg';
import rain from '../assets/background-images/rain.jpg';

export function GetWeatherBackground(weatherId){
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