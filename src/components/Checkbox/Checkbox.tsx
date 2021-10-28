import React, { ChangeEvent, FunctionComponent } from 'react';
import {
    CheckboxContainer,
    Icon,
    HiddenCheckbox,
    StyledCheckbox,
} from './style';
import checkMark from '../../images/check-mark.svg';

interface Props {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FunctionComponent<Props> = ({
    checked,
    ...props
}) => (
    <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon src={checkMark} />
        </StyledCheckbox>
    </CheckboxContainer>
);

export default Checkbox;
