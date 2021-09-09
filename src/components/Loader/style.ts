import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: .7;
    z-index: 999;
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

export { 
    Background, 
    LoaderContent, 
    LoaderText,
};
