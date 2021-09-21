import styled from 'styled-components';

const RouterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 50px;
    gap: 30px;
`;

const Logo = styled.h1`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    display: flex;
    align-items: center;
    color: #000000;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`;

export { RouterWrapper, Logo, Wrapper };
