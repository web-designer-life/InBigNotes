import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	min-width: 270px;
    height: 80px;
    border-radius: 20px;
    color: #FFFFFF;
    padding: 0 75px 0 75px;
    transition-duration: .1s;
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    &:hover {
        background-color: #FFFFFF;
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
    ${(props) => (props.color === 'green' && css`
        border: 5px solid #00AB00;
        background-color: #00AB00;
        &:hover {
            color: #00AB00;
        }
    `)}
    ${(props) => (props.color === 'red' && css`
        border: 5px solid #FF0000;
        background-color: #FF0000;
        &:hover {
            background-color: #FFFFFF;
            color: #FF0000;
        }
    `)}
`;

export default StyledButton;
