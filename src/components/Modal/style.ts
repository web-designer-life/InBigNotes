import styled from 'styled-components';

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
    border-radius: 50px;
    width: 800px;
    padding: 50px;
    background-color: #FFFFFF;
`;

const ModalTitle = styled.h2`
	font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    margin: 0 0 50px 0;
    color: #5A5A5A;
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
    width: 100%;
`;

export {
    ModalBackground,
    ModalContainer,
    ModalTitle,
    ButtonsContainer,
};
