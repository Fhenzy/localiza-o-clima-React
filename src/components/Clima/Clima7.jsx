import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Text} from './styles'


const Clima = () => {

  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState (false)
 
  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
         lat: lat,
         lon: long,
         appid: process.env.REACT_APP_API_DE_CLIMA,
         lang: 'pt',
         units: 'metric'
      }
    });
    setWeather(res.data);
    console.log(res.data)
  }

   useEffect(() => {
     navigator.geolocation.getCurrentPosition((position) => {
    getWeather(position.coords.latitude, position.coords.longitude);
    setLocation (true)
  })
   }, [])

   if (location === false) {
     return (
       <div className="App">
       Você precisa habilitar a localização no browser!
       </div>
     )
   } else if (weather === false){
     return (
       <>
       Carregando o clima ...
       </>
     )
   }

  else {
    return (
    <Text> 
      {weather['name']} 
    </Text>
  );
}
}

export default Clima; 