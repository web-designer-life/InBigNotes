import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 30px 30px 20px 30px;
    @media (max-width: 500px) {
        padding: 20px 20px 0 20px;
    }
`;

export default List;
