let long;
let lat;

const RequestLongLat = async(inputCity) => {
    let url = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&query=${inputCity}&units=metric&output=json`;
    console.log(url);
    const response = await fetch(url);
    
    console.log(response);

    const json = await response.json();
    const data = await json.data[0]

    console.log(data);
    long = data.longitude;
    lat = data.latitude;
    
    return await  RequestWeather();
}

const RequestWeather = async() => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();

    return json;
}

export { RequestLongLat, RequestWeather }