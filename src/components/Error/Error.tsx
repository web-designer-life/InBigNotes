import React, { Component } from 'react';
import { 
    BUTTON_TYPES, 
    COLORS, ROUTES, 
    TEXTS, 
} from '../../constants';
import Button from '../Button/Button';
import { Container, Message } from './style';

interface Props {
    navigateToPage(path: string): Function,
};

export default class Error extends Component<Props> {
    static defaultProps: { 
        navigateToPage: () => void; 
    };

    constructor(props: Props) {
        super(props);

        this.handleNavigateToHome = this.handleNavigateToHome.bind(this);
    };

    handleNavigateToHome() {
		this.props.navigateToPage(ROUTES.HOME);
	};

	render() {
        return (
            <Container>
                <Message>404 - Not Found!</Message>
                <Button
                    type={BUTTON_TYPES.BUTTON}
                    onClick={this.handleNavigateToHome}
                    text={TEXTS.BUTTON.HOME}
                    color={COLORS.BUTTON.GREEN}
                />
            </Container>
        );
    };
};

Error.defaultProps = {
    navigateToPage: () => {},
};
