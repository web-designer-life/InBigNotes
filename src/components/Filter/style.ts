import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.h2`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 46px;
    margin: 0 30px 0 0;
    color: #5A5A5A;
`;

const FilterList = styled.select`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 46px;
    color: #5A5A5A;
    background-color: #FFFFFF;
    border: 5px solid #5A5A5A;
    border-radius: 20px;
    padding: 0 30px 0 30px;
    height: 80px;
    cursor: pointer;
`;

const FilterListItem = styled.option`

`;

export {
    FilterContainer,
    FilterTitle,
    FilterList,
    FilterListItem,
};
