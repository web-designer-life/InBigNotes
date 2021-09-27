import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px 30px;
    @media (max-width: 500px) {
        padding: 20px 20px 0 20px;
    }
`;

const Note = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 15px 0;
    width: 100%;
`;

const NoteInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style-type: none;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 15px 20px;
    margin: 0 15px 0 0;
    min-width: calc(100% - 70px);
    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.h3`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 5px 0;
    width: auto;
    color: #5A5A5A;
`;

const Text = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    margin: 0 0 10px 0;
    width: auto;
    color: #787878;
`;

const Appearance = styled.div`
    background-color: black;
    height: 1px;
    width: 100%;
    margin: 0 0 10px 0;
`;

const DateInfo = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    width: auto;
    color: #5A5A5A;
`;

export { 
    List, 
    Note, 
    NoteInfo, 
    Title, 
    Text,
    DateInfo,
    Appearance,
};
