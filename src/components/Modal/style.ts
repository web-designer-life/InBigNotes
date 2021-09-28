import styled from 'styled-components';
import { COLORS } from '../../constants';

const ModalBackground = styled.div`
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

const ModalContainer = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 400px;
    padding: 25px;
    margin: 25px;
    background-color: ${COLORS.WHITE};
`;

const ModalTitle = styled.h2`
	font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    margin: 0 0 25px 0;
    color: ${COLORS.STEEL_GRAY};
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
    width: 100%;
    gap: 20px;
    @media (max-width: 989px) {
        flex-direction: column;
    }
`;

export {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer,
};
