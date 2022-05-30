import React, { FunctionComponent } from 'react';
import BUTTON_TYPES from '../Button/types';
import Button from '../Button';
import {
    COLORS,
    TEXTS,
} from '../../constants';
import { Container, Message } from './style';

interface Props {
    navigateToPage: () => void;
};

const Error: FunctionComponent<Props> = ({
    navigateToPage,
}) => (
    <Container>
        <Message>404 - Not Found!</Message>
        <Button
            type={BUTTON_TYPES.BUTTON}
            disabled={false}
            onClick={navigateToPage}
            text={TEXTS.BUTTON.HOME}
            color={COLORS.BUTTON.GREEN}
        />
    </Container>
);

export default Error;
