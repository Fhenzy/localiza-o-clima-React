import React, { useState } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';


export const MapContainer = (props) => {
    const [, setMap] = useState (null);
    const { google } = props;
         

    function onMapReady (map){
      setMap(map);
    }

    return (
        
        <Map google={google} 
        centerAroundCurrentLocation
        onReady={onMapReady}
        onRecenter={onMapReady}
         >    
         </Map>
    )
    };

export default GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);

/* import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {
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
    <div className="App">
      <h3>Clima nas suas Coordenadas: {weather['name']} ({weather['weather'][0]['description']})</h3>
      <ul>
        <li>Temperatura Atual : {weather['main']['temp']}º</li>
        <li>Temperatura Máxima : {weather['main']['temp_max']}º</li>
        <li>Temperatura miníma : {weather['main']['temp_min']}º</li>
        <li>Pressão : {weather['main']['pressure']} HPA</li>
        <li>Umidade : {weather['main']['humidity']}%</li>
      </ul>
    </div>
  );
}
}

export default App;
*/