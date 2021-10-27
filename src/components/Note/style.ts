import styled from 'styled-components';
import { COLORS } from '../../constants';

const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
    @media (min-height: 400px) {   
        max-height: 100vh;
    }
`;

const NoteTitle = styled.input`
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    padding: 15px;
    margin: 0 0 20px 0;
    border: none;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    color: ${COLORS.STEEL_GRAY};
    @media (max-width: 450px) {
        font-size: 24px;
        line-height: 31px;
    }
`;

const NoteText = styled.textarea`
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    padding: 15px;
    margin: 0 0 20px 0;
    resize: none;
    border: none;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    height: 680px;
    min-height: 100px;
    color: ${COLORS.STEEL_GRAY};
    @media (max-width: 450px) {
        font-size: 18px;
        line-height: 24px;
    }
    @media (max-height: 400px) {
        height: 100px;
    }
`;

const NoteControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 590px) {
        flex-direction: row;
        align-items: center;
    }
`;

const NoteButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 590px) {
        flex-direction: column;
    }
    @media (max-width: 450px) {
        width: 100%;
    }
`;

export {
    NoteForm,
    NoteTitle,
    NoteText,
    NoteControlsWrapper,
    NoteButtonsWrapper,
};
