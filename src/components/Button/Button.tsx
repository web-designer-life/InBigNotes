import React, { FunctionComponent } from 'react';
import BUTTON_TYPES from './types';
import StyledButton from './style';

interface Props {
    type: BUTTON_TYPES;
    disabled: boolean;
    onClick: () => void;
    text: string;
    color: string;
};

const Button: FunctionComponent<Props> = ({
    type,
    disabled,
    onClick,
    text,
    color,
}) => (
    <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        color={color}
    >
        {text}
    </StyledButton>
);

export default Button;
