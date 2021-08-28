import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const Container = styled.aside`
background-color: ${(props)=>props.theme.colors.background};
height: 100vh;
width: 360px;
overflow-y: auto;
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #ffffff;
padding: 16px;
`;

export const Logo = styled.img`
margin-bottom: 15px;
`;


export const Title = styled.h1`
font-family: ${props => props.theme.fonts.regular};
color: ${props => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin-bottom: 10px;
margin-right: 5px;
`;

