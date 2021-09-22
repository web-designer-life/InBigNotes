import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
    &:hover {
        cursor: pointer;
    }
`;

const Icon = styled.img`
    width: 32px;
    height: 24px;
    fill: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 4px solid #0047FF;

    ${Icon} {
        visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
`;

export { 
    CheckboxContainer, 
    Icon, 
    HiddenCheckbox, 
    StyledCheckbox,
};
