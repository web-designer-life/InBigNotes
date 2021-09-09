import React from 'react';
import StyledButton from './style';

export enum ButtonTypes {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
};

interface Props {
    form?: string,
    type: ButtonTypes | undefined,
    disabled?: boolean,
    onClick?: () => void,
    text: string,
    color: string,
};

export default class Button extends React.Component<Props> {
    render() {
        const {
            type, 
            disabled, 
            onClick, 
            text,
            color,
        } = this.props;

        return (
            <StyledButton 
                type={type} 
                disabled={disabled} 
                onClick={onClick}
                color={color}
            >
                {text}
            </StyledButton>
        )
    }
};
