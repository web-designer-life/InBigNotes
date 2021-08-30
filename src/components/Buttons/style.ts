import styled from 'styled-components';

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
        &:hover { 
            background-color: #FF0000;
            color: #FFFFFF;
            cursor: default;
        }
    }
`;

export { RedButton };
