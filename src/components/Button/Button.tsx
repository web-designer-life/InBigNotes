import React, { FunctionComponent } from 'react';
import { BUTTON_TYPES } from '../../constants';
import StyledButton from './style';

interface Props {
    form?: string,
    type: BUTTON_TYPES,
    disabled?: boolean,
    onClick?: () => void,
    text: string,
    color: string,
};

const Button: FunctionComponent<Props> = ({
    type,
    disabled,
    onClick,
    text,
    color,
}) => {
    const content = (
        <StyledButton
            type={type}
            disabled={disabled}
            onClick={onClick}
            color={color}
        >
            {text}
        </StyledButton>
    )

    return content;
};

export default Button;
