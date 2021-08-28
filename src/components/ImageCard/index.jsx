import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
display: flex;
justify-content: center;
padding: 8px;
width: 100px;
height: 100px;
border-radius: 13px;
background-image: url(${(props) => props.photo});
background-size: cover;
border: 9px solid white; //adicionei para separar os itens
`
const Title = styled.span`
font-family: ${(props) => props.theme.fonts.regular};
color: white;
font-size: 16px;
`;

const ImageCard = ({photo, title}) => 
<Card photo={photo}>
    <Title>{title}</Title>
</Card>

export default ImageCard;