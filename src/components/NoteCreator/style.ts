import styled from 'styled-components';

const NoteCreatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
`;

const Title = styled.input`
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    height: 120px;
    padding: 30px 20px;
    color: #5A5A5A;
`;

const Text = styled.textarea`
    resize: none;
    color: #787878;
`;

export { NoteCreatorWrapper, Title, Text };