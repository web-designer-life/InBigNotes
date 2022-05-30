import styled from 'styled-components';
import { COLORS } from '../constants';

const RouterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
    gap: 20px;
    @media (max-width: 500px) {
        margin: 20px;
    }
    @media (max-width: 450px) {
	    flex-direction: column;
    }
`;

const Logo = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    display: flex;
    align-items: center;
    color: ${COLORS.BLACK};
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media (max-width: 650px) {
	    flex-direction: column;
    }
    @media (max-width: 450px) {
	    flex-direction: column;
        width: 100%;
    }
`;

export { RouterWrapper, Logo, Wrapper };
