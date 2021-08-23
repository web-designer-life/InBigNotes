import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    width: 54px;
    height: 40px;
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
    width: 80px;
    height: 80px;
    background: #FFFFFF;
    border-radius: 20px;
    border: 5px solid #0047FF;
    transition: all 150ms;

    ${Icon} {
        visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
`;

export { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox };