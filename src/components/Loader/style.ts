import styled from 'styled-components';

const Background = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: .7;
    z-index: 100;
`;

const LoaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    color: #FFFFFF;
    margin: auto;
`;

const LoaderText = styled.p`
    color: #FFFFFF;
`;

export { Background, LoaderContent, LoaderText };