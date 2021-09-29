import styled from 'styled-components';
import { COLORS } from '../../constants';

const EmptyListNotesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const EmptyListNotesText = styled.h2`
    font-size: 40px;
    font-weight: 400;
    color: ${COLORS.STEEL_GRAY};
`;

export { EmptyListNotesWrapper, EmptyListNotesText };
