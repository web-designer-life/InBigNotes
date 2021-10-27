import React, { FunctionComponent } from 'react';
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

const Error: FunctionComponent<Props> = ({
    navigateToPage,
}) => {
    const content = (
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

    return content;
};

export default Error;
