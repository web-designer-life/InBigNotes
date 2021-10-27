import styled from 'styled-components';
import { COLORS } from '../../constants';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 30px;
    gap: 20px;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-end;
        padding: 0 20px;
    }
`;

const SelectAllWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin: 0 15px 0 0;
    color: ${COLORS.STEEL_GRAY};
`;

export {
    Wrapper,
    SelectAllWrapper,
    Title,
};
