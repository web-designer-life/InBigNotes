import styled from 'styled-components';

const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 50px;
    max-height: 100vh;
`;

const NoteTitle = styled.input`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    height: 120px;
    padding: 30px 20px;
    margin: 0 0 50px 0;
    border: none;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    color: #5A5A5A;
`;

const NoteText = styled.textarea`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    padding: 20px;
    margin: 0 0 50px 0;
    resize: none;
    border: none;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    height: 680px;
    min-height: 200px;
    color: #787878;
`;

const NoteControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
`;

const NoteButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
`;

export { 
    NoteForm, 
    NoteTitle, 
    NoteText, 
    NoteControlsWrapper, 
    NoteButtonsWrapper, 
};
