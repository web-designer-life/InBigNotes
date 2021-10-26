import React, { Component } from 'react';
import {
    BUTTON_TYPES,
    COLORS,
    TEXTS,
} from '../../constants';
import Button from '../Button';
import { Container, Message } from './style';

interface Props {
    navigateToPage: () => void,
};

export default class Error extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        const { navigateToPage } = this.props;
        return (
            <Container>
                <Message>404 - Not Found!</Message>
                <Button
                    type={BUTTON_TYPES.BUTTON}
                    onClick={navigateToPage}
                    text={TEXTS.BUTTON.HOME}
                    color={COLORS.BUTTON.GREEN}
                />
            </Container>
        );
    }
};
