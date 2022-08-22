let long;
let lat;


function AdjustValue(value, isLong){
    const parts = value.split(/[^\d\w]+/);
    const adjustedValue = Convert(parts[0], parts[1], parts[2], parts[4]);

    if(isLong){
        long = adjustedValue;
    }else{
        lat = adjustedValue;
    }
}

function Convert(degress, minutes, seconds, direction){
    let value = Number(degress) + Number(minutes/60) + Number(seconds/(60*60));

    if(direction === 'S' || direction === 'W'){
        value = value * -1;
    }

    return value
}

const RequestLongLat = async(inputCity) => {
    const city = encodeURI(inputCity);
    
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_LOCATION_API_KEY}`;
    
    const response = await fetch(url);
    const status = response.status;

    if(status !== 200){
        return null;
    }

    const json = await response.json();
    const result = await json.results[0].annotations.DMS

    AdjustValue(result.lng, true);
    AdjustValue(result.lat, false);
    
    const weatherRequest = await RequestWeather();

    if(weatherRequest === null){
        return null
    }

    return weatherRequest;
}

const RequestWeather = async() => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    
    const response = await fetch(url);
    const status = response.status;

    if(status !== 200){
        return null;
    }
    
    const json = await response.json();

    return json;
}

export { RequestLongLat, RequestWeather }