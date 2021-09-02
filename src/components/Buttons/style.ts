import styled from 'styled-components';

const GreenButton = styled.button`
    min-width: 270px;
    height: 80px;
    border: 5px solid #00AB00;
    border-radius: 20px;
    background-color: #00AB00;
    color: #FFFFFF;
    padding: 0 75px 0 75px;
    transition-duration: .1s;
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    &:hover {
        background-color: #FFFFFF;
        color: #00AB00;
    }
    &:disabled {
        opacity: .5;
        border: 5px solid #808080;
        background-color: #808080;
        &:hover { 
            background-color: #808080;
            color: #FFFFFF;
            cursor: default;
        }
    }
`;

const RedButton = styled.button`
    min-width: 270px;
    height: 80px;
    border: 5px solid #FF0000;
    border-radius: 20px;
    background-color: #FF0000;
    color: #FFFFFF;
    padding: 0 75px 0 75px;
    transition-duration: .1s;
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
    }
    &:disabled {
        opacity: .5;
        border: 5px solid #808080;
        background-color: #808080;
        &:hover { 
            background-color: #808080;
            color: #FFFFFF;
            cursor: default;
        }
    }
`;

export { GreenButton, RedButton };
