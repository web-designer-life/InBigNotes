import styled from 'styled-components';
import { COLORS } from '../../constants';

const LoaderBackground = styled.div`
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
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;
`;

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${COLORS.WHITE};
    margin: auto;
`;

const LoaderText = styled.p`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: ${COLORS.WHITE};
`;

export { 
    LoaderBackground, 
    LoaderContainer, 
    LoaderText,
};
