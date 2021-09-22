import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 50px;
    gap: 20px;
    @media (max-width: 989px) {
        flex-direction: column;
        align-items: center;
        padding: 0 20px;
    }
    @media (max-width: 640px) {
        align-items: flex-end;
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
    font-size: 36px;
    line-height: 46px;
    margin: 0 30px 0 0;
    color: #5A5A5A;
`;

export { 
    Wrapper, 
    SelectAllWrapper, 
    Title,
};
