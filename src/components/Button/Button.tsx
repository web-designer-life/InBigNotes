import React from 'react';
import { BUTTON_TYPES } from '../../constants';
import StyledButton from './style';

interface Props {
    form?: string,
    type: BUTTON_TYPES | undefined,
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
