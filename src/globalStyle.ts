import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100%;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h1, h2, h3 {
        font-family: 'Lora', 'Arial', sans-serif;
        padding: 0;
        margin: 0;
    }
    p {
        font-family: 'Lora', 'Arial', sans-serif;
        padding: 0;
        margin: 0;
    }
    button {
        cursor: pointer;    
    }
    input, button {
        font: inherit;
    }
    input[type='number'] {
        -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;
