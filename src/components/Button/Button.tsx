import React, { Component } from 'react';
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

export default class Button extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {};
    }

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
