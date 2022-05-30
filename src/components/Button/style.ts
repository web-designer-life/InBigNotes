import styled, { css } from 'styled-components';
import { COLORS } from '../../constants';

const StyledButton = styled.button`
    min-width: 170px;
    border-radius: 15px;
    color: ${COLORS.WHITE};
    padding: 10px 25px;
    transition-duration: .1s;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    &:hover {
        background-color: ${COLORS.WHITE};
    }
    &:disabled {
        opacity: .5;
        border: 4px solid ${COLORS.GRAY};
        background-color: ${COLORS.GRAY};
        &:hover { 
            background-color: ${COLORS.GRAY};
            color: ${COLORS.WHITE};
            cursor: default;
        }
    }
    ${(props) => (props.color === 'green' && css`
        border: 4px solid ${COLORS.GREEN};
        background-color: ${COLORS.GREEN};
        &:hover {
            color: ${COLORS.GREEN};
        }
    `)}
    ${(props) => (props.color === 'red' && css`
        border: 4px solid ${COLORS.RED};
        background-color: ${COLORS.RED};
        &:hover {
            background-color: ${COLORS.WHITE};
            color: ${COLORS.RED};
        }
    `)}
    @media (max-width: 450px) {
        min-width: auto;
        width: 100%;
    }
`;

export default StyledButton;
