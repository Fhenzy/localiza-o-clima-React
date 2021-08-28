import React from 'react';
import ReactStars from "react-rating-stars-component";
import Restaurante from '../../assets/restaurante-fake.png'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto} from './styles';

 const RestaurantCard = () =>
  <Restaurant>
     <RestaurantInfo>
         <Title>Nome usado do restaurante</Title>
         <ReactStars count={5} isHalf  edit={false} value={4} activeColor="#e7711c"/>
         <Address>Rio de Janeiro, 120</Address>
     </RestaurantInfo>
     <RestaurantPhoto src={Restaurante} alt="foto do restaurante"/>
  </Restaurant>;
 
  export default RestaurantCard;