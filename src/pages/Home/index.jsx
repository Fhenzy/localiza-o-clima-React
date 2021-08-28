import React, { useState } from 'react';
import Slider from "react-slick";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel} from './styles'
import logo from '../../assets/logo.svg'
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Restaurante from '../../assets/restaurante-fake.png';
import Rs from '../../assets/rs.png';
import Dois from '../../assets/2.jpg';
import Tres from '../../assets/3.jpg';
import Quatro from '../../assets/4.jpg';
import Cinco from '../../assets/5.jpg';
import Seis from '../../assets/6.jpg';
import { Card, RestaurantCard, Modal } from '../../components';

 const Home = () => {
   const [inputValue, setInputValue] = useState('')
   const [modalOpened, setModalOpened] = useState(false);


   const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      
     };

   return (
    <Wrapper>

      <Container>
       <Search>
         <Logo src={logo} alt="logo do restaurante"></Logo>
         <TextField
            label='Pesquisar Restaurantes'
            outlined 
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
           <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
         </TextField>
            <CarouselTitle>Na sua área</CarouselTitle>
            <Carousel {...settings} >
                  <Card photo={Restaurante} title='1' />
                  <Card photo={Rs} title='2' />
                  <Card photo={Dois} title='3' />
                  <Card photo={Tres} title='4' />
                  <Card photo={Quatro} title='5' />
                  <Card photo={Cinco} title='6' />
                  <Card photo={Seis} title='7' />
            </Carousel>
            <button onClick={() => setModalOpened(true)}>Abrir Modal!</button>
         </Search>
         <RestaurantCard />
       </Container>
       <Map/>
       <Modal open= {modalOpened} onClose={() => setModalOpened(!modalOpened)} />
     </Wrapper>
    )
  }

 export default Home;