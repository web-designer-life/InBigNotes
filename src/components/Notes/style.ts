import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 50px 50px 30px 50px;
    @media (max-width: 989px) {
        flex-direction: column;
        align-items: center;
        padding: 20px 20px 0 20px;
    }
`;

const Note = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
    width: 100%;
`;

const NoteInfo = styled.div`
    list-style-type: none;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 30px;
    margin: 0 30px 0 0;
    height: 170px;
    min-width: calc(100% - 110px);
    &:hover {
        cursor: pointer;
    }
`;

const Title = styled.h3`
    height: 61px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;
    margin: 0;
    width: auto;
    color: #5A5A5A;
    @media (max-width: 989px) {
        font-size: 36px;
        line-height: 48px;
    }
`;

const Text = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 27px;
    margin: 20px 0 0 0;
    width: auto;
    color: #787878;
`;

export { 
    List, 
    Note, 
    NoteInfo, 
    Title, 
    Text,
};
