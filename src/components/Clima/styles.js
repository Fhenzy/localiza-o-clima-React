import styled from 'styled-components';

export const Painel  = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
margin-top: 5px;
padding: 16px;
background-color: white;
border-left: 5px solid transparent;
 :hover {
     background-color: ${(props) => props.theme.colors.background};
     border-left-color: ${(props) => props.theme.colors.primary};
 }
`;

export const Centro = styled.div`
display: flex;
flex-direction: column;
`;

export const Title = styled.span`
font-family: ${props => props.theme.fonts.regular};
color: ${props => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin-bottom: 10px;
margin-right: 5px;
`;

export const Address = styled.span`
font-family: ${props => props.theme.fonts.regular};
color: ${props => props.theme.colors.text};
font-size: 16px;
line-height: 19px;
margin-bottom: 10px;
margin-top: 10px;
`;

export const Photo = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
border-radius: 6px;
`;

export const Text = styled.div`
text-align: center;
align-items: center;
justify-content: center;
padding: 9px;
background-color: blueviolet;
color: white;
font-size: 25px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
`;