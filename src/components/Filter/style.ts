import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 500px) {
	    flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

const FilterTitle = styled.h2`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin: 0 15px 0 0;
    color: #5A5A5A;
    @media (max-width: 500px) {
        margin: 0 0 10px 0;
    }
`;

const FilterList = styled.select`
    font-family: 'Lora', 'Arial', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #5A5A5A;
    background-color: #FFFFFF;
    border: 4px solid #5A5A5A;
    border-radius: 15px;
    padding: 10px 5px 10px 5px;
    cursor: pointer;
    @media (max-width: 500px) {
        flex-direction: column;
        width: 100%;
    }
`;

const FilterListItem = styled.option``;

export {
    FilterContainer,
    FilterTitle,
    FilterList,
    FilterListItem,
};
