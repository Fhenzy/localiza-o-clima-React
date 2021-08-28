import React from 'react';
import { Container, Search, Logo, Wrapper, Title} from './styles'
import logo from '../../assets/previsao.png'
import { Clima, Clima2, Clima3, Clima4, Clima5, Clima6, Clima7, Map } from '../../components';


 const Home = () => {

  return (
    <Wrapper>

      <Container>
      <Search>
         <Logo src={logo} alt="logo do clima"></Logo>
        <Title><Clima7/></Title>
         </Search>
         <Clima/>
         <Clima2/>
         <Clima3/>
         <Clima4/>
         <Clima5/>
         <Clima6/>
         
       </Container>
       
       <Map/>
     </Wrapper>
    )
  }

 export default Home;