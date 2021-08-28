import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Painel, Centro, Title, Address, Photo} from './styles'
import Atual from '../../assets/medidor.jpg';

const Clima3 = () => {

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
    <Painel>
      <Centro>    
      <Title>Temperatura miníma : </Title>
        <Address>{weather['main']['temp_min']}º</Address>
       </Centro>
       <Photo src={Atual} alt='logo do medidor'></Photo>
    </Painel>
  );
}
}

export default Clima3; 





