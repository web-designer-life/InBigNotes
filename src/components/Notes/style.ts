import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 50px 30px 50px;
`;

const Note = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
    width: 100%;
`;

const NoteInfo = styled.li`
    list-style-type: none;
    height: 170px;
    width: 1690px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    &:hover {
        cursor: pointer;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: #787878;
`;

export { List, Note, NoteInfo, Header, Title, Text };
